export default function LifeEvents({
  birthDate,
  birthPlace,
  deathDate,
}: {
  birthDate: string;
  birthPlace?: string;
  deathDate?: string;
}) {
  return (
    <div className="flex w-full">
      <div className="card border-base-300 bg-base-200 rounded-box grid h-20 w-1/2 place-items-center">
        <span className={'font-medium'}>Born: {birthDate}</span>
        {birthPlace && (
          <span className={'px-4 text-center text-wrap'}>{birthPlace}</span>
        )}
      </div>
      <div className="divider divider-horizontal mx-0.5" />
      <div className="card border-base-300 bg-base-200 rounded-box grid h-20 w-1/2 place-items-center">
        <span className={'font-medium'}>
          {deathDate ? `Died: ${deathDate}` : 'Living'}
        </span>
      </div>
    </div>
  );
}
