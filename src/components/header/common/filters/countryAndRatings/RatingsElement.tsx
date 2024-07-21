import type { CountryAndRating, Rating } from '@/lib/types';
import { useState } from 'react';

export default function Ratings({
  setCountryAndCertification,
  countryAndCertification,
  countryLabel,
  ratings,
}: {
  setCountryAndCertification: (arg0: CountryAndRating) => void;
  countryAndCertification: CountryAndRating;
  countryLabel: string;
  ratings: Rating[];
}) {
  const [selectedRatings, setSelectedRatings] = useState<string>(
    countryAndCertification.rating,
  );
  const handleLocalState = (newCertification: string) => {
    setSelectedRatings((prev) => {
      if (prev.includes(`|${newCertification}`)) {
        return prev.replace(`|${newCertification}`, '');
      }

      if (prev.includes(newCertification)) {
        return prev.replace(newCertification, '');
      }

      return prev.length ? `${prev}|${newCertification}` : newCertification;
    });
  };
  const handleSubmit = () => {
    setCountryAndCertification({
      ...countryAndCertification,
      rating: selectedRatings,
    });
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className={`btn m-1 min-w-[89.16px] ${countryLabel === 'Country' && 'btn-disabled'}`}>
        Ratings
      </div>
      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
        {ratings?.map((rating: Rating) => {
          const selections = selectedRatings.split('|');
          const isSelected = selections.includes(rating.certification);
          return (
            <li
              key={rating.certification}
              className={isSelected ? 'bg-primary text-secondary-content' : ''}>
              <button
                type={'button'}
                onClick={() => handleLocalState(rating.certification)}>
                {rating.certification}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type={'submit'}
            className={'btn btn-sm mt-4'}
            onClick={handleSubmit}>
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
}
