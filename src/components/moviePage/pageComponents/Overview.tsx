export default function Overview({ overview }: { overview: string }) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">Overview</div>
      <div className="collapse-content">{overview}</div>
    </div>
  );
}
