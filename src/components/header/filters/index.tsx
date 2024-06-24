import ToggleFilter from './toggleFilter';
import SortByFilter from '@/components/header/filters/SortByFilter';

export type FiltersProps = {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
  includeVideo: string;
  setIncludeVideo: (prev: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
};

export default function Filters({
  isNsfw,
  setIsNsfw,
  includeVideo,
  setIncludeVideo,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: FiltersProps) {
  return (
    <div className={'flex justify-around w-full p-4'}>
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
      <SortByFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  );
}
