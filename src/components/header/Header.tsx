import Link from 'next/link';
import { Suspense, useState } from 'react';
import Pagination from '@/components/header/Pagination';
import ThemePicker from '@/components/header/ThemePicker';
import { useRouter, useSearchParams } from 'next/navigation';
import IsNsfwFilter from '@/components/header/filters/isNsfwFilter';

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
  isNsfw,
  setIsNsfw,
}: {
  totalPages: number;
  setPage?: (page: string) => void;
  page?: string;
  searchString?: string;
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchString =
    searchString || searchParams.get('searchString') || '';
  const [searchStr, setSearchStr] = useState<string>(defaultSearchString);

  return (
    <header className="navbar flex flex-col sticky top-0 bg-base-100 z-50 px-0">
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
          pageNumber={page || '1'}
        />
        {page && setPage && (
          <Suspense>
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          </Suspense>
        )}
        <ThemePicker />
      </div>
      <div className={'flex justify-around w-full p-4'}>
        <IsNsfwFilter isNsfw={isNsfw} setIsNsfw={setIsNsfw} />
        <div>Filter Two</div>
      </div>
    </header>
  );
}
