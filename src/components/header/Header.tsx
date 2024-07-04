import Link from 'next/link';
import { Suspense, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '@/components/header/Pagination';
import ThemePicker from '@/components/header/ThemePicker';
import Filters from '@/components/header/filters';
import { HeaderProps, SortOrderState } from '@/lib/types';

const SearchField = ({
  searchString,
  nextRouter,
  setSearchString,
  searchParams,
}: {
  searchString: string;
  setSearchString: (str: string) => void;
  nextRouter: any;
  searchParams: URLSearchParams;
}) => {
  const includeAdult = searchParams.get('isNsfw');
  const includeVideo = searchParams.get('includeVideo');
  const pageNumber = searchParams.get('page');
  const pushParams = new URLSearchParams();
  if (pageNumber) {
    pushParams.append('page', pageNumber);
  }
  if (includeAdult) {
    pushParams.append('isNsfw', includeAdult);
  }
  if (includeVideo) {
    pushParams.append('includeVideo', includeVideo);
  }

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search Movie"
        className="input input-bordered w-24 md:w-auto text-accent-contentsf placeholder-accent"
        value={searchString}
        onChange={(e) => setSearchString(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const search = e.currentTarget.value;
            if (search) {
              nextRouter.push(`/?${pushParams}&searchString=${search}`);
            } else {
              nextRouter.push(`/?${pushParams}`);
            }
          }
        }}
      />
    </div>
  );
};

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
  const isNoFilterPath = noFilterPaths.some(
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
        {!isNoFilterPath && page && setPage && totalPages && (
          <Suspense>
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          </Suspense>
        )}
        <ThemePicker />
      </div>
      {!isNoFilterPath && (
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
