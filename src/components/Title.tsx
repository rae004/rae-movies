export default function Title({ title }: { title: string }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-open border border-base-300 bg-base-200"
    >
      <h1 className="collapse-title text-2xl font-medium">{title}</h1>
    </div>
  );
}
