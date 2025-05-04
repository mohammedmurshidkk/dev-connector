'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import AnswerCard from '@/components/AnswerCard';

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

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

const highlightSearchText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

export default function SkillQuestions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  // const [expanded, setExpanded] = useState({});
  const [questions, setQuestions] = useState([]);
  // const refs = useRef({});
  const { skill } = useParams();

  useEffect(() => {
    async function loadQuestions() {
      try {
        const questionsData = await import(`@/db/questions/${skill}.json`);
        setQuestions(questionsData.default); // since it's a JSON module
      } catch (error) {
        console.error(`No questions found for: ${skill}`);
        setQuestions(defaultQuestions); // fallback
      }
    }

    loadQuestions();
  }, [skill]);

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className='min-h-screen bg-[#f7f7f7] pt-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between mb-8'>
          <Link href='/interview-hub' className='flex items-center text-[#008489] hover:text-[#005b5d]'>
            <FaArrowLeft className='mr-2' />
            Back to Skills
          </Link>
          <h1 className='text-3xl md:text-4xl font-bold text-[#1a1a1a]'>
            {skill?.charAt(0).toUpperCase() + skill?.slice(1)} Questions
          </h1>
        </div>

        <div className='mb-8 flex gap-4'>
          <input
            type='text'
            placeholder='Search questions...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full max-w-md p-3 pl-10 rounded-md border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#008489]'
          />
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
            className='px-4 py-3 rounded-md border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#008489]'
          >
            <option value='all'>All difficulties</option>
            <option value='beginner'>Beginner</option>
            <option value='intermediate'>Intermediate</option>
            <option value='advanced'>Advanced</option>
          </select>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className='text-center py-12 text-gray-500'>No questions available</div>
        ) : (
          <div className='grid grid-cols-1 gap-6'>
            {filteredQuestions.map(question => (
              <motion.div
                key={question.id}
                className='bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className='flex items-center gap-2 mb-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[question.difficulty]}`}
                  >
                    {question.difficulty}
                  </span>
                  <span className='text-gray-500 text-sm'>• {question.likes} likes</span>
                </div>

                <div className='flex items-center justify-end space-x-4 mb-4'>
                  <button
                    onClick={() =>
                      setQuestions(prev =>
                        prev.map(q => (q.id === question.id ? { ...q, bookmarked: !q.bookmarked } : q))
                      )
                    }
                    className='p-2 rounded-full text-gray-400 hover:text-[#008489] hover:bg-gray-100 transition-colors'
                  >
                    {question.bookmarked ? <FaBookmark className='text-[#008489]' /> : <FaRegBookmark />}
                  </button>
                  <button
                    onClick={() =>
                      setQuestions(prev => prev.map(q => (q.id === question.id ? { ...q, likes: q.likes + 1 } : q)))
                    }
                    className='p-2 rounded-full text-gray-400 hover:text-[#008489] hover:bg-gray-100 transition-colors'
                  >
                    {question.likes > 0 ? <FaThumbsUp className='text-[#008489]' /> : <FaRegThumbsUp />}
                  </button>
                </div>

                <div className='space-y-4'>
                  <h3
                    className='text-xl font-semibold text-[#1a1a1a] mb-3'
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchText(question.question, searchTerm)
                    }}
                  />

                  <div
                    className='text-gray-700 overflow-hidden transition-all duration-300'
                    // ref={ref => (refs.current[question.id] = ref)}
                  >
                    <AnswerCard question={question.question} answer={question.answer} searchTerm={searchTerm} />
                    {/* <p
                      className='whitespace-pre-wrap leading-relaxed'
                      dangerouslySetInnerHTML={{
                        __html: highlightSearchText(question.answer, searchTerm)
                      }}
                    /> */}
                    {/* <ReactMarkdown
                      rehypePlugins={[rehypeHighlight]}
                      components={{
                        p: ({ node, ...props }) => <p className='mb-3' {...props} />,
                        code: ({ node, inline, className, children, ...props }) => {
                          return !inline ? (
                            <pre className='bg-gray-100 p-3 rounded-md overflow-x-auto'>
                              <code className={className} {...props}>
                                {children}
                              </code>
                            </pre>
                          ) : (
                            <code className='bg-gray-200 px-1 rounded' {...props}>
                              {children}
                            </code>
                          );
                        }
                      }}
                    >
                      {highlightSearchText(question.answer, searchTerm)}
                    </ReactMarkdown> */}
                  </div>

                  {/* {question.answer.length > 300 && !expanded[question.id] && (
                    <button
                      className='text-[#008489] hover:text-[#005b5d] text-sm mt-2'
                      onClick={() => {
                        const ref = refs.current[question.id];
                        if (ref) {
                          ref.style.maxHeight = ref.scrollHeight + 'px';
                          setExpanded(prev => ({ ...prev, [question.id]: true }));
                        }
                      }}
                    >
                      Show more
                    </button>
                  )} */}
                  {/* {expanded[question.id] && (
                    <button
                      className='text-[#008489] hover:text-[#005b5d] text-sm mt-2'
                      onClick={() => {
                        const ref = refs.current[question.id];
                        if (ref) {
                          ref.style.maxHeight = '300px';
                          setExpanded(prev => ({ ...prev, [question.id]: false }));
                        }
                      }}
                    >
                      Show less
                    </button>
                  )} */}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
