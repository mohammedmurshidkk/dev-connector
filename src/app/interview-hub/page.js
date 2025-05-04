// Remove 'use client' directive
import { FaReact, FaJs, FaJava, FaNodeJs, FaPython, FaAngular, FaVuejs, FaDatabase, FaAws, FaDocker, FaGit, FaCode } from 'react-icons/fa';
import { SiTypescript, SiRuby, SiSwift, SiKotlin, SiGo, SiSharp } from 'react-icons/si';
import InterviewHubClient from '@/components/InterviewHubClient';

// Move skills array to server component
const skills = [
  { name: 'React', icon: <FaReact className='w-12 h-12' />, slug: 'react', color: 'bg-blue-100 text-blue-600' },
  { name: 'JavaScript', icon: <FaJs className='w-12 h-12' />, slug: 'javascript', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'TypeScript', icon: <SiTypescript className='w-12 h-12' />, slug: 'typescript', color: 'bg-blue-100 text-blue-800' },
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
  { name: 'System Design', icon: <FaCode className='w-12 h-12' />, slug: 'system-design', color: 'bg-indigo-100 text-indigo-700' }
];

// Server component for SEO
export default function InterviewHub() {
  return (
    <InterviewHubClient initialSkills={skills} />
  );
}
