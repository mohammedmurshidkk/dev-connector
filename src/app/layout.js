import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/variables.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mohammed Murshid KK',
  description: 'AI Driven portfolio',
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
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
