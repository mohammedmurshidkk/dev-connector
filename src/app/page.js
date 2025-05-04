'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';

const featureItems = [
  {
    icon: <FaCode className='w-6 h-6 text-[#008489]' />,
    title: 'Portfolio Showcase',
    description: 'Interactive AI-powered portfolio showcase to highlight your skills and projects.',
    link: '/portfolio'
  },
  {
    icon: <FaUserTie className='w-6 h-6 text-[#008489]' />,
    title: 'Interview Hub',
    description: 'Comprehensive collection of interview questions and answers for various technologies.',
    link: '/interview-hub'
  },
  {
    icon: <FaLaptopCode className='w-6 h-6 text-[#008489]' />,
    title: 'Community Connect',
    description: 'Connect with other developers, ask questions, and share knowledge.',
    link: '#',
    comingSoon: true
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <div className='min-h-screen bg-[#f7f7f7]'>
      {/* Hero Section */}
      <section className='px-4 py-16 md:py-24 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <motion.div
            className='md:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4'>
              Connect. Learn. <span className='text-[#008489]'>Grow.</span>
            </h1>
            <p className='text-lg text-[#666666] mb-8'>
              Dev Connector is a platform for developers to connect, learn, and grow together. Prepare for interviews,
              showcase your portfolio, and join a community of like-minded developers.
            </p>
            <div className='flex flex-wrap gap-4'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href='/portfolio'
                  className='px-6 py-3 bg-[#008489] text-white rounded-md font-medium hover:bg-[#006d77] transition-colors'
                >
                  Explore Portfolio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href='/interview-hub'
                  className='px-6 py-3 bg-white text-[#008489] border border-[#008489] rounded-md font-medium hover:bg-[#f0f8fa] transition-colors'
                >
                  Interview Hub
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className='md:w-1/2'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-[#008489]/10 rounded-lg blur opacity-30'></div>
              <div className='relative bg-white p-6 rounded-lg shadow-md'>
                <div className='h-64 bg-[#f7f7f7] rounded-md flex items-center justify-center'>
                  <div className='flex flex-col items-center'>
                    <FaLaptop className='w-16 h-16 text-[#008489] mb-4' />
                    <h2 className='text-xl font-semibold text-[#1a1a1a]'>Your Development Journey</h2>
                    <p className='text-gray-600 text-center'>Start learning and growing with Dev Connector</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='px-4 py-16 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4'>Features</h2>
            <p className='text-lg text-[#666666] max-w-2xl mx-auto'>
              Discover the tools and resources available to help you succeed in your developer journey.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            variants={container}
            initial='hidden'
            animate='show'
          >
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#e5e5e5]'
              >
                <div className='mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold mb-2 text-[#1a1a1a]'>{feature.title}</h3>
                <p className='text-[#666666] mb-4'>{feature.description}</p>
                {feature.comingSoon ? (
                  <span className='inline-block px-3 py-1 bg-[#f0f8fa] text-[#008489] rounded-full text-sm'>
                    Coming Soon
                  </span>
                ) : (
                  <Link href={feature.link} className='text-[#008489] hover:text-[#006d77] font-medium'>
                    Explore →
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='px-4 py-16 bg-[#f7f7f7]'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4'>
            Ready to level up your developer journey?
          </h2>
          <p className='text-lg text-[#666666] mb-8'>
            Join Dev Connector today and access free resources to help you prepare for interviews and connect with other
            developers.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
            <Link
              href='/interview-hub'
              className='px-8 py-4 bg-[#008489] text-white rounded-md font-medium hover:bg-[#006d77] transition-colors'
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
