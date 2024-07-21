type Genre = { id: number; name: string };

export default function Genres({ genres }: { genres: Genre[] }) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        {genres.length > 1 ? 'Genres' : 'Genre'}
      </div>
      <div className="collapse-content">
        {genres && (
          <ul className={'flex flex-row flex-wrap gap-4'}>
            {genres.map((genre: Genre) => (
              <li key={genre.name}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
