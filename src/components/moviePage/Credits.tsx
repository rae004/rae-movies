import { ReactNode } from 'react';

type CastProps = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type CrewProps = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

const CreditsTable = ({
  children,
  tableHeaders,
}: {
  children: ReactNode;
  tableHeaders: string[];
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((header, key) => (
            <th key={key}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

const CastTableRow = ({
  imgSrc,
  name,
  character,
  department,
}: {
  imgSrc: string;
  name: string;
  character: string;
  department: string;
}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imgSrc} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{character}</td>
      <td>{department}</td>
    </tr>
  );
};

export default function Credits({
  cast,
  crew,
}: {
  cast: CastProps[];
  crew: CrewProps[];
}) {
  const castHeaders = ['Name', 'Character', 'Department'];
  const crewHeaders = ['Name', 'Job', 'Department'];

  return (
    <div className="overflow-x-auto ">
      <details className="collapse collapse-arrow bg-base-200">
        <summary className="collapse-title text-xl font-medium">Cast</summary>
        <div className="collapse-content">
          <CreditsTable tableHeaders={castHeaders}>
            {cast.map((person, key) => (
              <CastTableRow
                key={key}
                imgSrc={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                name={person.name}
                character={person.character}
                department={person.known_for_department}
              />
            ))}
          </CreditsTable>
        </div>
      </details>
      <div className="divider" />
      <details className="collapse collapse-arrow bg-base-200">
        <summary className="collapse-title text-xl font-medium">Crew</summary>
        <div className="collapse-content">
          <CreditsTable tableHeaders={crewHeaders}>
            {crew.map((person, key) => (
              <CastTableRow
                key={key}
                imgSrc={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                name={person.name}
                character={person.job}
                department={person.department}
              />
            ))}
          </CreditsTable>
        </div>
      </details>
    </div>
  );
}
