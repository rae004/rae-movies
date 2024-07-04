import { useSearchParams } from 'next/navigation';
import { CountryAndRatingFilterProps } from '@/lib/types';
import ReloadIcon from '@/components/common/ReloadIcon';
import useCertificationCountriesQuery from '@/lib/queries/certificationCountriesQuery';

export const defaultCountryAndCertificationProps = {
  country: 'Country',
  rating: 'Rating',
};

export default function CountryAndCertificationFilter({
  countryAndCertification,
  setCountryAndCertification,
}: CountryAndRatingFilterProps) {
  const resetFilter = () => {
    setCountryAndCertification(defaultCountryAndCertificationProps);
  };

  const { data, isLoading, isError } = useCertificationCountriesQuery();

  if (useSearchParams().has('searchString')) {
    return null;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const countries = Object.keys(data.certifications);
  countries.sort((a, b) => {
    if (a === 'US') return -1;
    if (b === 'US') return 1;
    return a.localeCompare(b);
  });
  const { country, rating } = countryAndCertification;
  const ratings = data.certifications[country];

  return (
    <div className={'flex items-center'}>
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
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className={`btn m-1 min-w-[89.16px] ${country === 'Country' && 'btn-disabled'}`}
        >
          {rating}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
        >
          {ratings &&
            ratings.map((rating: { certification: string }, key: number) => (
              <li key={key}>
                <a
                  onClick={() =>
                    setCountryAndCertification({
                      ...countryAndCertification,
                      rating: rating.certification,
                    })
                  }
                >
                  {rating.certification}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <button onClick={() => resetFilter()} className="btn m-1">
        <ReloadIcon />
      </button>
    </div>
  );
}
