'use client';

import Header from '@/components/header/Header';
import Movies from '@/components/moviesPage/Movies';
import usePageQueryParam from '@/lib/usePageQueryParam';

export default function Home() {
  const { headerProps, moviesProps } = usePageQueryParam();

  return (
    <>
      <Header {...headerProps} />
      <Movies {...moviesProps} />
    </>
  );
}
