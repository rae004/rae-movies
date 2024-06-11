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
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
