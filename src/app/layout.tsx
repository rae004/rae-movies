import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Query App Movies',
  description: 'Application using React Query to get Movies from TMDB',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={'flex flex-col items-center overflow-x-hidden'}>
      <ReactQueryProvider>
        <body className={`${inter.className} max-w-screen-2xl`}>
          <Header />
          <main>{children}</main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
