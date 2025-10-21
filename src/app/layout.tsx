import { Forum } from 'next/font/google';
import './globals.css';

const forum = Forum({ subsets: ['latin'], weight: '400' });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${forum.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
