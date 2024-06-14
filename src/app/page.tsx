'use client';

import { useSearchParams } from 'next/navigation';
import { NumberParam, useQueryParam, withDefault } from 'use-query-params';
import Header from '@/components/Header';
import Movies from '@/components/Movies';

export default function Home() {
  const searchParams = useSearchParams();
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(NumberParam, parseInt(searchParams.get('page') || '1', 10)),
  );

  return (
    <>
      <Header setPage={setPage} page={page} />
      <Movies page={page} />
    </>
  );
}
