'use client';

import Header from '@/components/header/Header';
import Movie from '@/components/moviePage/Movie';
import usePageQueryParam from '@/lib/usePageQueryParam';

export default function Page({ params }: { params: { slug: string } }) {
  const { headerProps, moviesProps } = usePageQueryParam(params.slug);

  return (
    <>
      <Header {...headerProps} />
      <Movie {...{ ...moviesProps, slug: params.slug }} />
    </>
  );
}
