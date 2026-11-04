import 'dotenv/config';
import { normalizeVector } from '@/utils/normalizeVector.js';

const { DataAPIClient } = require('@datastax/astra-db-ts');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const client = new DataAPIClient(process?.env?.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process?.env?.ASTRA_DB_API_ENDPOINT, {
  namespace: process?.env?.ASTRA_DB_NAMESPACE
});

const MAX_ATTEMPTS = 3;
const ATTEMPT_TIMEOUT_MS = 20000;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 503 / 429 or a timed-out request means Gemini is overloaded
const isBusyError = err =>
  err?.status === 503 || err?.status === 429 || /abort|timeout/i.test(`${err?.name} ${err?.message}`);

// Turns a Gemini/server error into a short message for the chat UI
const toErrorMessage = err => {
  if (isBusyError(err)) {
    return 'Gemini is under high load right now. Please try again in a moment.';
  }
  if (err?.status === 404) return 'Gemini model is not available. Please try again later.';
  return 'Something went wrong while generating the answer. Please try again.';
};

export async function POST(req) {
  const { messages } = await req?.json();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Progress and error events are sent as [[status:...]] / [[error:...]] markers before the answer
      const send = text => controller.enqueue(encoder.encode(text));
      const status = text => send(`[[status:${text}]]`);

      try {
        const model = generativeAI.getGenerativeModel({ model: 'gemini-embedding-001' });
        const steamModel = generativeAI.getGenerativeModel(
          { model: 'gemini-3.8-flash' },
          { timeout: ATTEMPT_TIMEOUT_MS }
        );

        status('Understanding your question…');
        const latestMessage = messages[messages?.length - 1]?.content;
        const result = await model.embedContent(latestMessage);
        const normalizedEmbedding = normalizeVector(result.embedding.values);

        status('Searching my portfolio…');
        const collection = await db.collection(process?.env?.DB_NAME);
        const cursor = collection.find(null, {
          sort: { $vector: normalizedEmbedding },
          limit: 5
        });
        const document = await cursor?.toArray();

        const docContext = `
          START CONTEXT
          ${document?.map(doc => doc?.description).join('\n')}
          END CONTEXT
        `;

        const ragPrompt = [
          {
            role: 'user',
            parts: [
              {
                text: `You are an AI assistant answering questions as Mohammed Murshid in his Portfolio App.
                       Format responses using markdown where applicable.
                       ${docContext}
                       If the answer is not provided in the context, the AI assistant will say,
                       "I apologize, I do not have the answer to your question."
                    `
              }
            ]
          }
        ];

        const updatedMessage = messages?.map(message => ({
          role: 'user',
          parts: [{ text: message?.content }]
        }));

        let answer = '';
        for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
          try {
            status(attempt === 1 ? 'Writing the answer…' : `Gemini is busy, retrying (${attempt}/${MAX_ATTEMPTS})…`);
            const steamResponse = await steamModel.generateContentStream({
              contents: [...ragPrompt, ...updatedMessage]
            });
            const response = await steamResponse.response;
            answer = response.text();
            break;
          } catch (err) {
            if (!isBusyError(err) || attempt === MAX_ATTEMPTS) throw err;
            await sleep(attempt * 1000);
          }
        }

        send(answer);
      } catch (err) {
        console.error(err);
        send(`[[error:${toErrorMessage(err)}]]`);
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
