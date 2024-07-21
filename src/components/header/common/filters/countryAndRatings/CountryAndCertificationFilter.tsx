import ReloadIcon from '@/components/common/ReloadIcon';
import CountriesElement from '@/components/header/common/filters/countryAndRatings/CountriesElement';
import Ratings from '@/components/header/common/filters/countryAndRatings/RatingsElement';
import useCertificationCountriesQuery from '@/lib/queries/certificationCountriesQuery';
import type { CountryAndRatingFilterProps, Rating } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

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
  const { country } = countryAndCertification;
  const ratings: Rating[] = data.certifications[country];
  ratings?.sort((a, b) => a.order - b.order);

  return (
    <div className={'flex items-center self-center'}>
      <CountriesElement
        country={country}
        countries={countries}
        setCountryAndCertification={setCountryAndCertification}
      />
      <Ratings
        setCountryAndCertification={setCountryAndCertification}
        countryAndCertification={countryAndCertification}
        countryLabel={country}
        ratings={ratings}
      />
      <button
        aria-checked={false}
        type={'reset'}
        onClick={() => resetFilter()}
        className="btn m-1">
        <ReloadIcon />
      </button>
    </div>
  );
}
