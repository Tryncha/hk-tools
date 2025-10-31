import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { LoadoutProvider } from '../context/LoadoutContext';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metaTitle = 'Hollow Bench - Build calculation and customization for Hollow Knight';
const metaDescription = 'Create your own builds and see calculations in real time for Hollow Knight';
const metaAuthor = { name: 'Tryncha' };
const metaGitHubURL = 'https://github.com/Tryncha/hollow-bench';

const VERSION = '0.0.1';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  authors: metaAuthor,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metaGitHubURL,
    title: metaTitle,
    description: metaDescription
  }
};

export const viewport: Viewport = {
  width: 1920,
  initialScale: 1
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
          <header className="fixed top-0 left-0 z-20 flex h-16 w-full items-center justify-between gap-8 border-b border-gray-700 bg-gray-900/70 px-8 backdrop-blur-sm">
            <Image
              src="/banner.png"
              alt="Logo"
              width={602}
              height={64}
              className="absolute top-0 left-24 opacity-10"
            />
            <h1 className="text-3xl font-bold">
              HollowBench
              {/* <span className="text-blue-400">.build</span> */}
            </h1>
          </header>
          {children}
          <footer className="absolute z-20 flex w-full justify-between border-t border-gray-700 bg-gray-900 px-2">
            <span className="text-xs text-nowrap text-gray-500 italic">
              &copy; {metaAuthor.name}, {new Date().getFullYear()}
            </span>
            <span className="text-xs text-gray-500 italic">
              Find source code{' '}
              <a
                href={metaGitHubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                here
              </a>
              <span>, ver {VERSION}</span>
            </span>
          </footer>
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
