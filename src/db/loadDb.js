import 'dotenv/config';
import { DataAPIClient } from '@datastax/astra-db-ts';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { normalizeVector } from '../utils/normalizeVector.js';

const { default: sampleData } = await import('../db/sample-data.json', {
  assert: { type: 'json' }
});

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const client = new DataAPIClient(process?.env?.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process?.env?.ASTRA_DB_API_ENDPOINT);
const dbName = process?.env?.DB_NAME;
const targetDimension = 1536;

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200
});

const createCollection = async () => {
  try {
    await db.createCollection(dbName, { vector: { dimension: targetDimension } });
  } catch (e) {
    console.error('Error', e);
  }
};

const loadData = async () => {
  const collection = await db.collection(dbName);
  const model = generativeAI.getGenerativeModel({ model: 'embedding-001' });

  for await (const { id, info, description } of sampleData) {
    const chunks = await splitter.splitText(info);

    for await (const chunk of chunks) {
      const result = await model.embedContent(chunk);
      const embedding = result.embedding.values;

      const normalizedEmbedding = normalizeVector(embedding, targetDimension);

      await collection.insertOne({
        _id: id,
        $vector: normalizedEmbedding,
        info,
        description
      });
    }
  }
};

createCollection()
  .then(() => loadData())
  .catch(err => console.error(err));
