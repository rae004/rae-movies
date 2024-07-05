import Link from 'next/link';
import { Suspense, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '@/components/header/Pagination';
import ThemePicker from '@/components/header/ThemePicker';
import Filters from '@/components/header/filters';
import { HeaderProps } from '@/lib/types';
import SearchField from '@/components/header/SearchField';

export default function Header({
  setPage,
  page,
  searchString,
  totalPages,
  isNsfw,
  setIsNsfw,
  includeVideo,
  setIncludeVideo,
  resetSortOrderFilter,
  sort,
  setSort,
  countryAndCertification,
  setCountryAndCertification,
}: HeaderProps) {
  const noFilterPaths = ['/movie/', '/talent/'];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultSearchString =
    searchString || searchParams.get('searchString') || '';
  const [searchStr, setSearchStr] = useState<string>(defaultSearchString);
  const noFilterAndPagination = noFilterPaths.some(
    (path) => pathname.indexOf(path) === 0,
  );

  return (
    <header className="navbar flex flex-col sticky top-0 bg-base-100 z-50 px-0 w-full">
      <div className={'flex justify-between w-full'}>
        <Link
          className="btn btn-ghost text-xl "
          href={'/?page=1'}
          onClick={() => setSearchStr('')}
        >
          RAE Movies
        </Link>
        <SearchField
          searchString={searchStr}
          setSearchString={setSearchStr}
          nextRouter={router}
          searchParams={searchParams}
        />
        {!noFilterAndPagination && page && setPage && totalPages && (
          <Suspense>
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          </Suspense>
        )}
        <ThemePicker />
      </div>
      {!noFilterAndPagination && !searchParams.has('query') && (
        <Filters
          isNsfw={isNsfw}
          setIsNsfw={setIsNsfw}
          includeVideo={includeVideo}
          setIncludeVideo={setIncludeVideo}
          resetSortOrderFilter={resetSortOrderFilter}
          sort={sort}
          setSort={setSort}
          countryAndCertification={countryAndCertification}
          setCountryAndCertification={setCountryAndCertification}
        />
      )}
    </header>
  );
}
