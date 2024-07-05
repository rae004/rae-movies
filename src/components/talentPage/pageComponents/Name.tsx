export default function Name({ name }: { name: string }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-open border border-base-300 bg-base-200"
    >
      <h1 className="collapse-title text-2xl font-medium">{name}</h1>
    </div>
  );
}
