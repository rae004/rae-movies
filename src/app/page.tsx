'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Movies from '@/components/Movies';
import { useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(
    parseInt(searchParams.get('page') || '1', 10),
  );
  return (
    <>
      <Header setPage={setPage} page={page} />
      <Movies page={page} />
    </>
  );
}
