export async function generateMetadata({ params }) {
  const { skill } = params;
  const formattedSkill = skill.charAt(0).toUpperCase() + skill.slice(1);
  
  return {
    title: `${formattedSkill} Interview Questions & Answers | Dev Connector | Mohammed Murshid KK`,
    description: `Comprehensive collection of ${formattedSkill} interview questions and answers for beginners, intermediate, and advanced developers. Prepare for your next tech interview with resources by Mohammed Murshid KK.`,
    keywords: [
      `${formattedSkill} interview questions`, 
      `${formattedSkill} interview preparation`, 
      `${formattedSkill} coding questions`, 
      `${formattedSkill} developer interview`,
      'Mohammed Murshid KK', 
      'mohammedmurshidkk',
      'tech interview preparation',
      'coding interview questions'
    ],
    alternates: {
      canonical: `/interview-hub/${skill}`,
    },
    openGraph: {
      title: `${formattedSkill} Interview Questions & Answers | Dev Connector`,
      description: `Comprehensive collection of ${formattedSkill} interview questions and answers for beginners, intermediate, and advanced developers. Prepare for your next tech interview.`,
    }
  };
}

export default function SkillLayout({ children }) {
  return children;
}