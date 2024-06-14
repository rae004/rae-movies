import Search from '@/components/header/Search';
import ThemePicker from '@/components/header/ThemePicker';
import Link from 'next/link';
import Pagination from '@/components/header/Pagination';

export default function Header({
  setPage,
  page,
}: {
  setPage: (page: number) => void;
  page: number;
}) {
  return (
    <header className="navbar sticky top-0 bg-base-100 z-50 px-0">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl " href={'/?page=1'}>
          RAE Movies
        </Link>
      </div>
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <Pagination setPage={setPage} page={page} />
        <ThemePicker />
      </div>
    </header>
  );
}
