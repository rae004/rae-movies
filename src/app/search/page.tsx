'use client';

import { useSearchParams } from 'next/navigation';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import Header from '@/components/header/Header';
import Search from '@/components/searchPage/Search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(StringParam, searchParams.get('page') || ''),
  );
  const [searchString, _] = useQueryParam(
    'searchString',
    withDefault(StringParam, searchParams.get('searchString') || ''),
  );

  const headerProps = {
    setPage,
    page: page || '1',
    searchString: searchString || '',
  };

  return (
    <>
      <Header {...headerProps} />
      <Search page={page || '1'} searchTerm={searchString} />
    </>
  );
}
