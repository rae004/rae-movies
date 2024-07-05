import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import NextQueryParamsProvider from '@/providers/NextQueryParams';
import ThemeProvider from '@/providers/ThemeProvider';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Query App Movies',
  description: 'Application using React Query to get Movies from TMDB',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <NextQueryParamsProvider>
        <ReactQueryProvider>
          <Suspense>
            <body className={`${inter.className} max-w-screen-xl w-full`}>
              <main>{children}</main>
            </body>
          </Suspense>
        </ReactQueryProvider>
      </NextQueryParamsProvider>
    </ThemeProvider>
  );
}
