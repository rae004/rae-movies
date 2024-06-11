import Search from '@/components/Search';

export default function Header() {
  return (
    <header className={'sticky top-0 bg-white shadow-md h-12'}>
      <nav className={'flex flex-col h-full justify-center'}>
        <ul className={'flex flex-row gap-4 justify-between px-4'}>
          <li>
            <Search />
          </li>
          <ul className={'flex flex-row gap-4 justify-end px-4'}>
            <li className={'hover:bg-lime-400 px-1 h-full'}>
              <a href="/">Home</a>
            </li>
            <li className={'hover:bg-lime-400 px-1'}>
              <a href="/about">About</a>
            </li>
            <li className={'hover:bg-lime-400 px-1'}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
