import 'dotenv/config';
import { StreamingTextResponse } from 'ai';
import { normalizeVector } from '@/utils/normalizeVector.js';

const { DataAPIClient } = require('@datastax/astra-db-ts');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const client = new DataAPIClient(process?.env?.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process?.env?.ASTRA_DB_API_ENDPOINT, {
  namespace: process?.env?.ASTRA_DB_NAMESPACE
});

export async function POST(req) {
  const { messages } = await req?.json();

  try {
    const model = generativeAI.getGenerativeModel({ model: 'embedding-001' });
    const steamModel = generativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let docContext = '';
    const latestMessage = messages[messages?.length - 1]?.content;
    const result = await model.embedContent(latestMessage);
    const embedding = result.embedding.values;
    const normalizedEmbedding = normalizeVector(embedding);
    const collection = await db.collection(process?.env?.DB_NAME);

    const cursor = collection.find(null, {
      sort: { $vector: normalizedEmbedding },
      limit: 5
    });

    const document = await cursor?.toArray();

    docContext = `
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

    const updatedMessage = messages?.map(message => {
      return {
        role: 'user',
        parts: [{ text: message?.content }]
      };
    });

    const steamResponse = await steamModel.generateContentStream({
      contents: [...ragPrompt, ...updatedMessage]
    });

    const content = await steamResponse.response;
    const steam = await steamResponse.stream;
    const candidateArray = Object.values(content.candidates);

    steam.next(content);

    return new StreamingTextResponse(JSON.stringify(candidateArray[0].content));
  } catch (e) {
    throw e;
  }
}
