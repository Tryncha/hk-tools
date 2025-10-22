import { Forum } from 'next/font/google';
import { LoadoutProvider } from './context/LoadoutContext';
import './globals.css';

const forum = Forum({ subsets: ['latin'], weight: '400' });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${forum.className} bg-black text-white antialiased`}>{children}</body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
