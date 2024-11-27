import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/variables.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mohammed Murshid KK - AI-Driven Portfolio',
  description: `Welcome to the AI-driven portfolio of Mohammed Murshid KK, featuring expertise in Next.js, React, and advanced AI technologies like OpenAI and Gemini AI. Explore our projects showcased with dynamic themes using Tailwind CSS and Next.js' Next-Themes, tailored for both light and dark modes, powered by DataStax Astra for robust data management.'
    This description now includes mentions of Tailwind CSS, Next-Themes for dynamic theming, DataStax Astra for data management, and emphasizes the use of light and dark themes to enhance user experience`,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/person-support-dark.png',
        href: '/images/person-support-dark.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/person-support-light.png',
        href: '/images/person-support-light.png'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8910149152066720'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
