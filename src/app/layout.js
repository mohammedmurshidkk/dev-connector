import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/variables.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dev Connector - Connect, Learn, Grow | Mohammed Murshid KK',
  description: `Dev Connector is a community platform for developers to connect, learn, and grow together. Featuring interview preparation resources, portfolio showcasing, and more, powered by advanced AI technologies by Mohammed Murshid KK.`,
  keywords: [
    // Project keywords
    'developer community', 'interview preparation', 'coding interview questions',
    'portfolio showcase', 'developer resources', 'tech interview hub',
    'React interview questions', 'JavaScript interview questions', 'programming skills',
    'developer networking', 'AI portfolio', 'tech career preparation',
    // Personal branding keywords
    'Mohammed Murshid KK', 'Murshid KK', 'mohammedmurshidkk', 'muhammedmurshidkk', 
    'murshid', 'mohammed', 'muhammed', 'kk', 'React Developer', 'Frontend Engineer', 
    'Next.js', 'AI Portfolio', 'Chatbot Portfolio', 'Digital Marketing', 'SEO Specialist', 
    'Branding', 'UI/UX Designer', 'Web Development', 'Personal Branding', 'Website Optimization', 
    'Growth Marketing', 'Blogging', 'AI-powered Web Apps'
  ],
  authors: [{ name: 'Mohammed Murshid KK' }],
  creator: 'Mohammed Murshid KK',
  publisher: 'Dev Connector',
  metadataBase: new URL('https://devconnector.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dev Connector - Connect, Learn, Grow | Mohammed Murshid KK',
    description: 'Community platform for developers to connect, learn, and grow together with interview preparation resources and portfolio showcasing by Mohammed Murshid KK.',
    url: 'https://devconnector.vercel.app',
    siteName: 'Dev Connector',
    images: [
      {
        url: '/images/person-support-dark.png',
        width: 800,
        height: 600,
        alt: 'Dev Connector Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Connector - Connect, Learn, Grow | Mohammed Murshid KK',
    description: 'Community platform for developers to connect, learn, and grow together with interview preparation resources and portfolio showcasing by Mohammed Murshid KK.',
    images: ['/images/person-support-dark.png'],
    creator: '@_murshidkk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/person-support-dark.png',
        href: '/images/person-support-dark.png'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='google-site-verification' content='googleb38bae8cad4a7346.html' />
        <meta name='google-site-verification' content='pncm5vVhpZLI7GSotWkEbpm0JS930izgwR-Ay6aVghE' />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8910149152066720'
          crossOrigin='anonymous'
        ></script>
        
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dev Connector",
              "url": "https://devconnector.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://devconnector.vercel.app/interview-hub?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Community platform for developers to connect, learn, and grow together with interview preparation resources and portfolio showcasing.",
              "author": {
                "@type": "Person",
                "name": "Mohammed Murshid KK",
                "jobTitle": "React Developer, AI Engineer, SEO Specialist",
                "url": "https://murshidkk.info",
                "sameAs": [
                  "https://www.linkedin.com/in/murshidkk/",
                  "https://github.com/mohammedmurshidkk",
                  "https://twitter.com/_murshidkk"
                ],
                "knowsAbout": ["React.js", "Next.js", "AI Portfolio", "Interview Questions", "Web Development"]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        <div className='min-h-screen flex flex-col'>
          <Navigation />
          <main className='flex-grow flex flex-col'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
