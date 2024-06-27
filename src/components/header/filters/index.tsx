import ToggleFilter from './toggleFilter';
import SortByFilter from '@/components/header/filters/SortByFilter';
import CountryAndCertificationFilter from '@/components/header/filters/CountryAndCertificationFilter';
import { SortOrderState } from '@/lib/types';

export type FiltersProps = {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
  includeVideo: string;
  setIncludeVideo: (prev: string) => void;
  resetSortOrderFilter: () => void;
  sort: SortOrderState;
  setSort: (sort: SortOrderState) => void;
};

export default function Filters({
  isNsfw,
  setIsNsfw,
  includeVideo,
  setIncludeVideo,
  resetSortOrderFilter,
  sort,
  setSort,
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
      <CountryAndCertificationFilter />
      <SortByFilter
        resetSortOrderFilter={resetSortOrderFilter}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}
