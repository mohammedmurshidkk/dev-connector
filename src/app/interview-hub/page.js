'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaReact,
  FaJs,
  FaJava,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaVuejs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGit,
  FaCode
} from 'react-icons/fa';
import { SiTypescript, SiRuby, SiSwift, SiKotlin, SiGo, SiSharp } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className='w-12 h-12' />, slug: 'react', color: 'bg-blue-100 text-blue-600' },
  {
    name: 'JavaScript',
    icon: <FaJs className='w-12 h-12' />,
    slug: 'javascript',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='w-12 h-12' />,
    slug: 'typescript',
    color: 'bg-blue-100 text-blue-800'
  },
  { name: 'Angular', icon: <FaAngular className='w-12 h-12' />, slug: 'angular', color: 'bg-red-100 text-red-600' },
  { name: 'Vue.js', icon: <FaVuejs className='w-12 h-12' />, slug: 'vue', color: 'bg-green-100 text-green-600' },
  { name: 'Node.js', icon: <FaNodeJs className='w-12 h-12' />, slug: 'nodejs', color: 'bg-green-100 text-green-700' },
  { name: 'Python', icon: <FaPython className='w-12 h-12' />, slug: 'python', color: 'bg-blue-100 text-blue-700' },
  { name: 'Java', icon: <FaJava className='w-12 h-12' />, slug: 'java', color: 'bg-red-100 text-red-700' },
  { name: 'C#', icon: <SiSharp className='w-12 h-12' />, slug: 'csharp', color: 'bg-purple-100 text-purple-700' },
  { name: 'Ruby', icon: <SiRuby className='w-12 h-12' />, slug: 'ruby', color: 'bg-red-100 text-red-500' },
  { name: 'Swift', icon: <SiSwift className='w-12 h-12' />, slug: 'swift', color: 'bg-orange-100 text-orange-600' },
  { name: 'Kotlin', icon: <SiKotlin className='w-12 h-12' />, slug: 'kotlin', color: 'bg-purple-100 text-purple-600' },
  { name: 'Go', icon: <SiGo className='w-12 h-12' />, slug: 'go', color: 'bg-blue-100 text-blue-500' },
  { name: 'SQL', icon: <FaDatabase className='w-12 h-12' />, slug: 'sql', color: 'bg-gray-100 text-gray-700' },
  { name: 'AWS', icon: <FaAws className='w-12 h-12' />, slug: 'aws', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Docker', icon: <FaDocker className='w-12 h-12' />, slug: 'docker', color: 'bg-blue-100 text-blue-600' },
  { name: 'Git', icon: <FaGit className='w-12 h-12' />, slug: 'git', color: 'bg-orange-100 text-orange-700' },
  {
    name: 'System Design',
    icon: <FaCode className='w-12 h-12' />,
    slug: 'system-design',
    color: 'bg-indigo-100 text-indigo-700'
  }
];

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

export default function InterviewHub() {
  const [searchTerm, setSearchTerm] = useState('');

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
