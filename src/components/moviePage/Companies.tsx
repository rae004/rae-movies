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

const tmdbImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

export default function Companies({ production_companies }: CompaniesProps) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-open border border-base-300 bg-base-200"
    >
      <div className="collapse-title text-xl font-medium">
        Production {production_companies.length > 1 ? 'Companies' : 'Company'}
      </div>
      <div className="collapse-content">
        <ul
          className={
            'flex flex-row gap-4 p-2 bg-accent rounded-xl justify-center items-center'
          }
        >
          {production_companies.map((company: Company, key: number) => (
            <li key={key} className={'flex flex-col px-4'}>
              {company.logo_path ? (
                <Image
                  src={tmdbImageUrl + company.logo_path}
                  alt={`${company.name} Logo`}
                  height={120}
                  width={120}
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
