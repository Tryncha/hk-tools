import { Inter } from 'next/font/google';
import { LoadoutProvider } from './context/LoadoutContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
          <header className="fixed top-0 left-0 z-60 h-16 w-full border-b bg-gray-950">
            <button>Synergies</button>
          </header>
          {children}
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
