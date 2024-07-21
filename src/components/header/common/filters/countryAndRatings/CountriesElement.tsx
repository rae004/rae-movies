import { CountryAndRating } from '@/lib/types';

export default function CountriesElement({
  country,
  countries,
  setCountryAndCertification,
}: {
  country: string;
  countries: string[];
  setCountryAndCertification: (arg0: CountryAndRating) => void;
}) {
  return (
    <div className="dropdown h-full">
      <div tabIndex={0} role="button" className="btn m-1 min-w-[89.16px]">
        {country}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 overflow-y-scroll h-[40rem] w-[14rem] z-[1]"
      >
        {countries.map((country, key) => (
          <li key={key}>
            <a
              onClick={() =>
                setCountryAndCertification({
                  country,
                  rating: 'Rating',
                })
              }
            >
              {country}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
