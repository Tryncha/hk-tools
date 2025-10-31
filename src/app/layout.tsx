import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { LoadoutProvider } from '../context/LoadoutContext';
import Image from 'next/image';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

const metaTitle = 'Hollow Bench - Build and charm calculator for Hollow Knight';
const metaDescription =
  'Plan your Hollow Knight builds, calculate charm synergies and damage, and share your setup instantly with other players.';
const metaAuthor = { name: 'Tryncha', url: 'https://github.com/Tryncha' };
const metaRepositoryURL = 'https://github.com/Tryncha/hollow-bench';

const VERSION = '0.0.1';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  category: 'gaming',
  keywords: [
    'hollow bench',
    'hollow knight',
    'hollow knight builds',
    'hollow knight build editor',
    'hollow knight calculator',
    'hollow knight charm calculator',
    'hollow knight damage calculator',
    'hollow knight charms',
    'hollow knight tools',
    'hollow knight planner',
    'hollow knight enemies'
  ],
  authors: metaAuthor,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metaRepositoryURL,
    title: metaTitle,
    description: metaDescription,
    siteName: 'Hollow Bench'
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Hollow Bench - Hollow Knight Charm and Damage Calculator'
    //   }
    // ]
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
          <header className="fixed top-0 left-0 z-20 flex h-18 w-full items-center justify-between gap-8 border-b border-gray-700 bg-gray-900/70 pr-4 pl-8 backdrop-blur-sm">
            <Image
              src="/banner.png"
              alt="Banner"
              width={602}
              height={64}
              className="absolute top-0 left-24 opacity-10"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">
                HollowBench
                {/* <span className="text-blue-400">.app .build</span> */}
              </h1>
              <span className="text-xs text-gray-300">
                Build calculator for Hollow Knight. Look for charm synergies and damage in real time.
              </span>
            </div>
            <div className="flex flex-col items-end justify-center text-xs text-gray-500 italic">
              <span>
                Find source code{' '}
                <a
                  href={metaRepositoryURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  here
                </a>
                . v{VERSION}.
              </span>
              <span>
                &copy;{' '}
                <a
                  href={metaAuthor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  {metaAuthor.name}
                </a>
                , {new Date().getFullYear()}.
              </span>
            </div>
          </header>
          {children}
          {/* <footer className="absolute z-20 flex w-full justify-between border-t border-gray-700 bg-gray-900 px-2">
            <span className="text-xs text-nowrap text-gray-500 italic">
              &copy; {metaAuthor.name}, {new Date().getFullYear()}
            </span>
            <span className="text-xs text-gray-500 italic">
              Find source code{' '}
              <a
                href={metaRepositoryURL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                here
              </a>
              <span>, ver {VERSION}</span>
            </span>
          </footer> */}
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
