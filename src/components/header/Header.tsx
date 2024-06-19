import Link from 'next/link';
import { Suspense } from 'react';
import Pagination from '@/components/header/Pagination';
import ThemePicker from '@/components/header/ThemePicker';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const SearchField = ({
  searchString,
  setSearchString,
  nextRouter,
  pathname,
}: {
  searchString: string;
  setSearchString: ((searchString: string) => void) | undefined;
  nextRouter: any;
  pathname: string;
}) => {
  return pathname === '/search' ? (
    <Link href={'/?page=1'} className="btn btn-outline btn-primary">
      New Search
    </Link>
  ) : (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search Movie Title"
        className="input input-bordered w-24 md:w-auto"
        value={searchString}
        onChange={(e) =>
          setSearchString && setSearchString(e.currentTarget.value)
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const search = e.currentTarget.value;
            if (search) {
              nextRouter.push(`/search?searchString=${search}&page=1`);
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
  setSearchString,
}: {
  setPage?: (page: string) => void;
  page?: string;
  searchString?: string;
  setSearchString?: (searchString: string) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="navbar sticky top-0 bg-base-100 z-50 px-0">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl " href={'/?page=1'}>
          RAE Movies
        </Link>
      </div>
      <div className="flex-1">
        <SearchField
          searchString={searchString || ''}
          setSearchString={setSearchString}
          nextRouter={router}
          pathname={pathname}
        />
      </div>
      <div className="flex-none gap-2">
        {page && setPage && (
          <Suspense>
            <Pagination setPage={setPage} page={page} />
          </Suspense>
        )}
        <ThemePicker />
      </div>
    </header>
  );
}
