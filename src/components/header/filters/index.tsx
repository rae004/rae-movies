import ToggleFilter from './toggleFilter';
import SortByFilter from '@/components/header/filters/SortByFilter';
import CountryAndCertificationFilter from '@/components/header/filters/CountryAndCertificationFilter';
import { FiltersProps } from '@/lib/types';

export default function Filters({
  isNsfw,
  setIsNsfw,
  includeVideo,
  setIncludeVideo,
  resetSortOrderFilter,
  sort,
  setSort,
  countryAndCertification,
  setCountryAndCertification,
}: FiltersProps) {
  return (
    <div className={'flex justify-around w-full p-4 pb-0'}>
      <ToggleFilter
        key={1}
        state={isNsfw}
        setState={setIsNsfw}
        title={'Include Adult'}
      />
      <ToggleFilter
        key={2}
        state={includeVideo}
        setState={setIncludeVideo}
        title={'Include Video'}
      />
      <CountryAndCertificationFilter
        countryAndCertification={countryAndCertification}
        setCountryAndCertification={setCountryAndCertification}
      />
      <SortByFilter
        resetSortOrderFilter={resetSortOrderFilter}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}
