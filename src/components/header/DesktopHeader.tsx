import HomePageLink from '@/components/header/common/HomePageLink';
import Pagination from '@/components/header/common/Pagination';
import SearchField from '@/components/header/common/SearchField';
import Filters from '@/components/header/common/filters';
import ThemePicker from '@/components/header/common/theme/ThemePicker';
import type { HeaderProps } from '@/lib/types';
import { Suspense } from 'react';

export default function DesktopHeader({ ...props }: HeaderProps) {
  return (
    <>
      <div className={'hidden md:flex justify-between w-full'}>
        <HomePageLink setSearchStr={props.setSearchStr} />
        <SearchField
          searchString={props.searchStr}
          setSearchString={props.setSearchStr}
          nextRouter={props.router}
          searchParams={props.searchParams}
        />
        {!props.noFilterAndPagination &&
          props.page &&
          props.setPage &&
          props.totalPages && (
            <Suspense>
              <Pagination
                setPage={props.setPage}
                page={props.page}
                totalPages={props.totalPages}
              />
            </Suspense>
          )}
        <ThemePicker />
      </div>
      {!props.noFilterAndPagination && !props.searchParams.has('query') && (
        <Filters
          isNsfw={props.isNsfw}
          setIsNsfw={props.setIsNsfw}
          includeVideo={props.includeVideo}
          setIncludeVideo={props.setIncludeVideo}
          resetSortOrderFilter={props.resetSortOrderFilter}
          sort={props.sort}
          setSort={props.setSort}
          countryAndCertification={props.countryAndCertification}
          setCountryAndCertification={props.setCountryAndCertification}
        />
      )}
    </>
  );
}
