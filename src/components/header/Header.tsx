import Link from 'next/link';
import { Suspense, useState } from 'react';
import Pagination from '@/components/header/Pagination';
import ThemePicker from '@/components/header/ThemePicker';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchField = ({
  searchString,
  nextRouter,
  pageNumber,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (str: string) => void;
  nextRouter: any;
  pageNumber: string;
}) => {
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search Movie Title"
        className="input input-bordered w-24 md:w-auto"
        value={searchString}
        onChange={(e) => setSearchString(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const search = e.currentTarget.value;
            if (search) {
              nextRouter.push(`/?page=${pageNumber}&searchString=${search}`);
            } else {
              nextRouter.push(`/?page=${pageNumber}`);
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
}: {
  totalPages: number;
  setPage?: (page: string) => void;
  page?: string;
  searchString?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchString =
    searchString || searchParams.get('searchString') || '';
  const [searchStr, setSearchStr] = useState<string>(defaultSearchString);

  return (
    <header className="navbar sticky top-0 bg-base-100 z-50 px-0">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl "
          href={'/?page=1'}
          onClick={() => setSearchStr('')}
        >
          RAE Movies
        </Link>
      </div>
      <div className="flex-1">
        <SearchField
          searchString={searchStr}
          setSearchString={setSearchStr}
          nextRouter={router}
          pageNumber={page || '1'}
        />
      </div>
      <div className="flex-none gap-2">
        {page && setPage && (
          <Suspense>
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          </Suspense>
        )}
        <ThemePicker />
      </div>
    </header>
  );
}
