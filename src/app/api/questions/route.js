import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const { action, questionId, skill } = await request.json();

    // Read the current questions file
    const filePath = path.join(process.cwd(), 'src', 'db', 'questions', `${skill}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const questions = JSON.parse(fileContent);

    // Find the question and update it
    const updatedQuestions = questions.map(q => {
      if (q.id === questionId) {
        if (action === 'bookmark') {
          return { ...q, bookmarked: !q.bookmarked };
        } else if (action === 'like') {
          return { ...q, likes: q.likes + 1 };
        }
      }
      return q;
    });

    // Write the updated questions back to the file
    await fs.writeFile(filePath, JSON.stringify(updatedQuestions, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating question:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
