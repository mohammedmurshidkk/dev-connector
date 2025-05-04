export default async function sitemap() {
  // Base URL
  const baseUrl = 'https://devconnector.vercel.app';
  
  // Static routes
  const routes = [
    { url: baseUrl, priority: 1.0, changefreq: 'weekly' },
    { url: `${baseUrl}/portfolio`, priority: 0.9, changefreq: 'weekly' },
    { url: `${baseUrl}/interview-hub`, priority: 0.9, changefreq: 'weekly' }
  ].map(route => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    priority: route.priority,
    changefreq: route.changefreq
  }));
  
  // Dynamic routes for skills
  const skills = [
    'react', 'javascript', 'typescript', 'angular', 'vue', 
    'nodejs', 'python', 'java', 'csharp', 'ruby', 'swift', 
    'kotlin', 'go', 'sql', 'aws', 'docker', 'git', 'system-design'
  ];
  
  const skillRoutes = skills.map(skill => ({
    url: `${baseUrl}/interview-hub/${skill}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
    changefreq: 'weekly',
  }));
  
  return [...routes, ...skillRoutes];
}