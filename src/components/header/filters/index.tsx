import ToggleFilter from './toggleFilter';

export type FiltersProps = {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
  includeVideo: string;
  setIncludeVideo: (prev: string) => void;
};

export default function Filters({
  isNsfw,
  setIsNsfw,
  includeVideo,
  setIncludeVideo,
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
    </div>
  );
}
