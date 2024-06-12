import Search from '@/components/Search';
import ThemePicker from '@/components/ThemePicker';

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">RAE Movies</a>
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
