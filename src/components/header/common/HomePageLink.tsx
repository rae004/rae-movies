import Link from 'next/link';

export default function HomePageLink({
  setSearchStr,
  padding,
}: {
  setSearchStr: (str: string) => void;
  padding?: string;
}) {
  return (
    <Link
      className={`btn btn-ghost text-xl ${padding}`}
      href={'/?page=1'}
      onClick={() => setSearchStr('')}
    >
      RAE Movies
    </Link>
  );
}
