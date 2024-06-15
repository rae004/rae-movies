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

  return (
    <>
      <Header setPage={setPage} page={page || '1'} />
      <Movies page={page || '1'} />
    </>
  );
}
