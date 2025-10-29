import { Inter } from 'next/font/google';
import { LoadoutProvider } from '../context/LoadoutContext';
import Image from 'next/image';
import './globals.css';
import { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hollow Bench - Build calculation and customization for Hollow Knight',
  description: 'Create your own builds and see calculations in real time for Hollow Knight',
  authors: { name: 'Tryncha' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/Tryncha/hk-tools',
    title: 'Hollow Bench - Build calculation and customization for Hollow Knight',
    description: 'Create your own builds and see calculations in real time for Hollow Knight'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const CURRENT_VERSION = '0.0.1';

  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
          <header className="fixed top-0 left-0 z-60 flex h-16 w-full items-center gap-8 border-b border-gray-700 bg-gray-900/70 backdrop-blur-md">
            <Image
              src="/logo/logo-wider2.png"
              alt="Logo"
              width={602}
              height={64}
              className="absolute opacity-10"
            />
            <h1 className="ml-8 text-3xl font-bold">
              HollowBench<span className="text-blue-400">.build</span>
            </h1>
          </header>
          {children}
          <footer className="z-80 flex justify-between border-t border-gray-700 bg-gray-900 px-2">
            <span className="text-xs text-nowrap text-gray-500 italic">
              &copy; Design and code by Tryncha, {new Date().getFullYear()}
            </span>
            <span className="text-xs text-gray-500 italic">ver {CURRENT_VERSION}</span>
          </footer>
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
