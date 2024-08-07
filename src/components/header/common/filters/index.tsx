import SortByFilter from '@/components/header/common/filters/SortByFilter';
import CountryAndCertificationFilter from '@/components/header/common/filters/countryAndRatings/CountryAndCertificationFilter';
import type { FiltersProps } from '@/lib/types';
import ToggleFilter from './toggleFilter';

export default function Filters({
  // isNsfw,
  // setIsNsfw,
  includeVideo,
  setIncludeVideo,
  resetSortOrderFilter,
  sort,
  setSort,
  countryAndCertification,
  setCountryAndCertification,
}: Partial<FiltersProps>) {
  return (
    <div className={'hidden md:flex justify-around w-full p-4 pb-0'}>
      {/*<ToggleFilter*/}
      {/*  key={1}*/}
      {/*  state={isNsfw}*/}
      {/*  setState={setIsNsfw}*/}
      {/*  title={'Include Adult'}*/}
      {/*/>*/}
      {includeVideo && setIncludeVideo && (
        <ToggleFilter
          key={2}
          state={includeVideo}
          setState={setIncludeVideo}
          title={'Include Video'}
        />
      )}

      {countryAndCertification && setCountryAndCertification && (
        <CountryAndCertificationFilter
          countryAndCertification={countryAndCertification}
          setCountryAndCertification={setCountryAndCertification}
        />
      )}

      {resetSortOrderFilter && sort && setSort && (
        <SortByFilter
          sort={sort}
          setSort={setSort}
          resetSortOrderFilter={resetSortOrderFilter}
        />
      )}
    </div>
  );
}
