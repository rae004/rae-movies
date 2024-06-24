import * as countries from '@/lib/availableCountries.json';

export type RegionFilterProps = {
  setRegion: (region: string) => void;
  region: string;
};

export default function RegionFilter({ setRegion, region }: RegionFilterProps) {
  return (
    <div className="dropdown dropdown-bottom h-full">
      <div tabIndex={0} role="button" className="btn m-1">
        {region || 'Select Region'}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content h-[800px] w-auto overflow-auto bg-base-100 rounded-box z-[1]  p-4 shadow"
      >
        {countries.map((country) => (
          <li key={country.iso_3166_1} className={'p-2 hover:bg-accent'}>
            <a onClick={() => setRegion(country.english_name)}>
              {country.english_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
