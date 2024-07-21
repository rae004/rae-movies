import './globals.css';
import GoogleAnalytics from '@/providers/GoogleAnalytics';
import NextQueryParamsProvider from '@/providers/NextQueryParams';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type ReactNode, Suspense } from 'react';

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
          <GoogleAnalytics />
          <Suspense>
            <body
              className={`${inter.className} max-w-96 md:max-w-screen-xl w-full`}>
              <main>{children}</main>
            </body>
          </Suspense>
        </ReactQueryProvider>
      </NextQueryParamsProvider>
    </ThemeProvider>
  );
}
