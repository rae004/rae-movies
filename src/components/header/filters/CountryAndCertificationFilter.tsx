import { useState } from 'react';
import ReloadIcon from '@/components/icons/ReloadIcon';

export default function CountryAndCertificationFilter() {
  const [countryAndCertification, setCountryAndCertification] = useState({
    country: 'Country',
    rating: 'Rating',
  });

  const resetFilter = () => {
    setCountryAndCertification({ country: 'Country', rating: 'Rating' });
  };

  const { country, rating } = countryAndCertification;

  return (
    <div className={'flex items-center'}>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 min-w-[89.16px]">
          {country}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
        >
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  country: 'US',
                })
              }
            >
              US
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  country: 'UK',
                })
              }
            >
              UK
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  country: 'AU',
                })
              }
            >
              AU
            </a>
          </li>
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
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  rating: 'R',
                })
              }
            >
              R
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  rating: 'PG-13',
                })
              }
            >
              PG{'-'}13
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                setCountryAndCertification({
                  ...countryAndCertification,
                  rating: 'PG',
                })
              }
            >
              PG
            </a>
          </li>
        </ul>
      </div>
      <button onClick={() => resetFilter()} className="btn m-1">
        <ReloadIcon />
      </button>
    </div>
  );
}
