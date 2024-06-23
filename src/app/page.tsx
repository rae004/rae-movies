'use client';

import { useSearchParams } from 'next/navigation';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Header from '@/components/header/Header';
import Movies from '@/components/moviesPage/Movies';
import { useMoviesQueryNew } from '@/lib/queries';

export default function Home() {
  const searchParams = useSearchParams();
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(StringParam, searchParams.get('page')),
  );
  const [searchString, _] = useQueryParam(
    'searchString',
    withDefault(StringParam, searchParams.get('searchString')),
  );
  const [isNsfw, setIsNsfw] = useQueryParam(
    'isNsfw',
    withDefault(StringParam, 'false'),
  );
  const [includeVideo, setIncludeVideo] = useQueryParam(
    'includeVideo',
    withDefault(StringParam, 'false'),
  );

  const { data, isLoading, isError } = useMoviesQueryNew({
    searchString: searchString || '',
    pageNumber: page || '1',
    isNsfw,
    includeVideo,
  });

  const moviesProps = {
    data,
    isLoading,
    isError,
  };
  console.log('total pages: ', data?.total_pages);

  const headerProps = {
    setPage,
    page: page || '1',
    searchString: searchString || '',
    totalPages: data?.total_pages || 500,
    isNsfw,
    setIsNsfw,
    includeVideo,
    setIncludeVideo,
  };

  return (
    <>
      <Header {...headerProps} />
      <Movies {...moviesProps} />
    </>
  );
}
