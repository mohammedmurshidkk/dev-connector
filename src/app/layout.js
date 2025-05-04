import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/variables.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dev Connector - Connect, Learn, Grow',
  description: `Dev Connector is a community platform for developers to connect, learn, and grow together. Featuring interview preparation resources, portfolio showcasing, and more, powered by advanced AI technologies.`,
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
        <meta name='google-site-verification' content='google-site-verification: googleb38bae8cad4a7346.html' />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8910149152066720'
          crossOrigin='anonymous'
        ></script>
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
