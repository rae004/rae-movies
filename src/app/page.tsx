'use client';

import { useSearchParams } from 'next/navigation';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Header from '@/components/header/Header';
import Movies from '@/components/moviesPage/Movies';

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

  const headerProps = {
    setPage,
    page: page || '1',
    searchString: searchString || '',
  };

  return (
    <>
      <Header {...headerProps} />
      <Movies page={page || '1'} searchString={headerProps.searchString} />
    </>
  );
}
