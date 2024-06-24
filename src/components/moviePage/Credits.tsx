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

export default function Credits({ cast, crew }: { cast: any[]; crew: any[] }) {
  const castHeaders = ['Name', 'Character', 'Department'];

  return (
    <div className="overflow-x-auto">
      <CreditsTable tableHeaders={castHeaders}>
        {cast.map((person) => (
          <CastTableRow
            key={person.id}
            imgSrc={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            name={person.name}
            character={person.character}
            department={person.known_for_department}
          />
        ))}
      </CreditsTable>
    </div>
  );
}
