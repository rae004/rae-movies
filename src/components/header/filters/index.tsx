import IncludeAdult from './includeAdult';

export type FiltersProps = {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
};

export default function Filters({ isNsfw, setIsNsfw }: FiltersProps) {
  return (
    <div className={'flex justify-around w-full p-4'}>
      <IncludeAdult isNsfw={isNsfw} setIsNsfw={setIsNsfw} />
      <div>Filter Two</div>
    </div>
  );
}
