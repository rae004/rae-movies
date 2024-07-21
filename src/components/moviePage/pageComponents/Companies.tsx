import Image from 'next/image';

type Company = {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
};

type CompaniesProps = {
  production_companies: Company[];
};

export default function Companies({ production_companies }: CompaniesProps) {
  if (!production_companies || production_companies.length === 0) return null;

  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        Production {production_companies.length > 1 ? 'Companies' : 'Company'}
      </div>
      <div className="collapse-content">
        <ul
          className={
            'flex flex-row flex-wrap gap-4 p-2 bg-accent rounded-xl justify-center items-center'
          }>
          {production_companies.map((company: Company) => (
            <li
              key={company.name}
              className={'flex flex-col px-4'}>
              {company.logo_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`}
                  className={'w-auto h-auto'}
                  alt={`${company.name} Logo`}
                  title={`${company.name}`}
                  height={92}
                  width={92}
                  unoptimized
                />
              ) : (
                <span className={'text-accent-content'}>{company.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
