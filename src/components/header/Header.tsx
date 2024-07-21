import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/mobileHeader/MobileHeader';
import type { HeaderProps } from '@/lib/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Header({
  sort,
  page,
  isNsfw,
  setSort,
  setPage,
  setIsNsfw,
  totalPages,
  searchString,
  includeVideo,
  setIncludeVideo,
  resetSortOrderFilter,
  countryAndCertification,
  setCountryAndCertification,
}: Partial<HeaderProps> & { searchString?: string }) {
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

  const headerProps = {
    sort,
    page,
    isNsfw,
    router,
    setSort,
    setPage,
    setIsNsfw,
    searchStr,
    totalPages,
    searchParams,
    setSearchStr,
    includeVideo,
    setIncludeVideo,
    resetSortOrderFilter,
    noFilterAndPagination,
    countryAndCertification,
    setCountryAndCertification,
  };

  return (
    <header className="navbar flex flex-col sticky top-0 bg-base-100 z-50 px-0 w-full">
      <DesktopHeader {...headerProps} />
      <MobileHeader {...headerProps} />
    </header>
  );
}
