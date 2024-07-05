'use client';

import Header from '@/components/header/Header';
import Movie from '@/components/moviePage/Movie';
import useMovieQuery from '@/lib/queries/movieQuery';

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useMovieQuery({ movieId: params.slug });
  const moviesProps = {
    data,
    isLoading,
    isError,
    slug: params.slug,
  };

  return (
    <>
      <Header />
      <Movie {...moviesProps} />
    </>
  );
}
