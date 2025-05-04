'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function InterviewHubClient({ initialSkills }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [skills] = useState(initialSkills);

  const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='min-h-screen bg-[#f7f7f7] py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4'>Interview Hub</h1>
          <p className='text-lg text-[#666666] max-w-2xl mx-auto'>
            Prepare for your next technical interview with our comprehensive collection of interview questions and
            answers.
          </p>

          <div className='mt-8 max-w-md mx-auto'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search skills...'
                className='w-full p-3 pl-10 rounded-md border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#008489] focus:border-transparent'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div className='absolute left-3 top-3.5 text-[#666666]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
          variants={container}
          initial='hidden'
          animate='show'
        >
          {filteredSkills.map(skill => (
            <Link key={skill.slug} href={`/interview-hub/${skill.slug}`}>
              <motion.div
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
                className='bg-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all border border-[#e5e5e5] hover:border-[#008489]'
              >
                <div className='mb-3'>{skill.icon}</div>
                <h3 className='text-center font-medium text-[#1a1a1a]'>{skill.name}</h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-[#666666] text-lg'>No skills found matching &quot;{searchTerm}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
