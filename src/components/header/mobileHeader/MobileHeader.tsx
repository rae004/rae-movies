import HomePageLink from '@/components/header/common/HomePageLink';
import MobileTray from '@/components/header/mobileHeader/MobileTray';
import SearchField from '@/components/header/common/SearchField';
import Pagination from '@/components/header/common/Pagination';
import ThemePicker from '@/components/header/common/theme/ThemePicker';
import SortByFilter from '@/components/header/common/filters/SortByFilter';
import CountryAndCertificationFilter from '@/components/header/common/filters/countryAndRatings/CountryAndCertificationFilter';
import ToggleFilter from '@/components/header/common/filters/toggleFilter';
import MobileTrayClose from '@/components/header/mobileHeader/MobileTrayClose';
import { HeaderProps } from '@/lib/types';

export default function MobileHeader({ ...props }: HeaderProps) {
  const trayElementId = 'mobile-tray';

  return (
    <div className="md:hidden drawer drawer-end flex flex-row justify-between">
      <HomePageLink setSearchStr={props.setSearchStr} padding={'pl-1'} />
      <MobileTray trayElementId={trayElementId}>
        <label
          htmlFor={`${trayElementId}`}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-100 text-base-content min-h-full w-80 p-4 gap-8">
          <div className={'flex flex-row justify-between items-center'}>
            <ThemePicker />
            <MobileTrayClose trayElementId={trayElementId} />
          </div>
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
              <Pagination
                setPage={props.setPage}
                page={props.page}
                totalPages={props.totalPages}
              />
            )}
          {!props.noFilterAndPagination && !props.searchParams.has('query') && (
            <>
              {props.resetSortOrderFilter && props.sort && props.setSort && (
                <SortByFilter
                  resetSortOrderFilter={props.resetSortOrderFilter}
                  sort={props.sort}
                  setSort={props.setSort}
                />
              )}
              {props.countryAndCertification &&
                props.setCountryAndCertification && (
                  <CountryAndCertificationFilter
                    countryAndCertification={props.countryAndCertification}
                    setCountryAndCertification={
                      props.setCountryAndCertification
                    }
                  />
                )}
              {props.includeVideo && props.setIncludeVideo && (
                <ToggleFilter
                  key={2}
                  state={props.includeVideo}
                  setState={props.setIncludeVideo}
                  title={'Include Video'}
                />
              )}
            </>
          )}
        </div>
      </MobileTray>
    </div>
  );
}
