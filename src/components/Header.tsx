import Search from '@/components/Search';
import ThemePicker from '@/components/ThemePicker';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="navbar sticky top-0 bg-base-100 z-50">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={'/'}>
          RAE Movies
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <ThemePicker />
      </div>
    </header>
  );
}
