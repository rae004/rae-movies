export default function ReleaseDate({
  release_date,
}: {
  release_date: string;
}) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">Release Date</div>
      <div className="collapse-content">
        {new Date(release_date).toLocaleDateString('en-us', {
          timeZone: 'UTC',
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}
