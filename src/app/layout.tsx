import { Inter } from 'next/font/google';
import { LoadoutProvider } from '../context/LoadoutContext';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
            <button>Synergies</button>
          </header>
          {children}
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
