type Genre = { id: number; name: string };

export default function Genres({ genres }: { genres: Genre[] }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-open border border-base-300 bg-base-200"
    >
      <div className="collapse-title text-xl font-medium">
        {genres.length > 1 ? 'Genres' : 'Genre'}
      </div>
      <div className="collapse-content">
        {genres && (
          <ul className={'flex flex-row gap-4'}>
            {genres.map((genre: Genre, key: number) => (
              <li key={key}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
