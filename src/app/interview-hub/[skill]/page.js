// Remove 'use client' directive
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import SkillQuestionsClient from '@/components/SkillQuestionsClient';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

// Default questions as fallback
const defaultQuestions = [
  {
    id: 'default1',
    question: 'What are the fundamental concepts of this technology?',
    answer: 'Every technology has its core concepts...',
    difficulty: 'beginner',
    likes: 15,
    bookmarked: false
  },
  {
    id: 'default2',
    question: 'What are best practices?',
    answer: 'Best practices include code organization...',
    difficulty: 'intermediate',
    likes: 12,
    bookmarked: false
  }
];

// Server component for SEO
export default async function SkillQuestionsPage({ params }) {
  const { skill } = params;

  // Load questions server-side
  let questions;
  try {
    questions = await import(`@/db/questions/${skill}.json`).then(module => module.default);
  } catch (error) {
    console.error(`No questions found for: ${skill}`);
    // You could return notFound() here instead of using default questions
    // if you want a 404 page for non-existent skills
    // return notFound();
    questions = defaultQuestions;
  }

  // Generate static metadata for SEO
  const formattedSkill = skill.charAt(0).toUpperCase() + skill.slice(1);

  return (
    <div className='min-h-screen bg-[#f7f7f7] pt-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between mb-6'>
          <Link href='/interview-hub' className='flex items-center text-[#008489] hover:text-[#005b5d]'>
            <FaArrowLeft className='mr-2' />
            Back to Skills
          </Link>
          <h1 className='text-3xl md:text-4xl font-bold text-[#1a1a1a]'>{formattedSkill} Questions</h1>
        </div>

        <Suspense fallback={<div className='p-8 text-center'>Loading questions...</div>}>
          <SkillQuestionsClient initialQuestions={questions} skill={skill} />
        </Suspense>
      </div>
    </div>
  );
}

// Generate static paths for all skills
export async function generateStaticParams() {
  // This will pre-render all skill pages at build time
  return [
    { skill: 'react' },
    { skill: 'javascript' },
    { skill: 'typescript' },
    { skill: 'angular' },
    { skill: 'vue' },
    { skill: 'nodejs' },
    { skill: 'python' },
    { skill: 'java' },
    { skill: 'csharp' },
    { skill: 'ruby' },
    { skill: 'swift' },
    { skill: 'kotlin' },
    { skill: 'go' },
    { skill: 'sql' },
    { skill: 'aws' },
    { skill: 'docker' },
    { skill: 'git' },
    { skill: 'system-design' }
  ];
}
