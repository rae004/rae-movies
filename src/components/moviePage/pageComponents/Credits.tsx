import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const TableRow = ({
  imgSrc,
  name,
  character,
  department,
  talentId,
}: {
  imgSrc: string;
  name: string;
  character: string;
  department: string;
  talentId?: number;
}) => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <tr>
      <td>
        <Link href={`/talent/${talentId}`} target={'_blank'}>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                {!avatarError && (
                  <Image
                    src={imgSrc}
                    alt={`${name} Avatar`}
                    height={48}
                    width={48}
                    onError={() => setAvatarError(true)}
                    unoptimized
                  />
                )}
                {avatarError && <NoAvatarPlaceHolder name={name} />}
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </Link>
      </td>
      <td>{character}</td>
      <td>{department}</td>
    </tr>
  );
};

const getNAmeAbbreviation = (name: string) => {
  const nameArray = name.split(' ');
  return nameArray[0][0] + nameArray[nameArray.length - 1][0];
};

const NoAvatarPlaceHolder = ({ name }: { name: string }) => (
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span className="text-2xl bg-neutral text-neutral-content">
        {getNAmeAbbreviation(name)}
      </span>
    </div>
  </div>
);

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
              <TableRow
                key={key}
                imgSrc={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                name={person.name}
                character={person.character}
                department={person.known_for_department}
                talentId={person.id}
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
              <TableRow
                key={key}
                imgSrc={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                name={person.name}
                character={person.job}
                department={person.department}
                talentId={person.id}
              />
            ))}
          </CreditsTable>
        </div>
      </details>
    </div>
  );
}
