export function Biography({ biography }: { biography: string }) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200 md:max-h-96 md:overflow-y-scroll">
      <h1 className="collapse-title text-2xl font-medium">Biography</h1>
      <p className="collapse-content">{biography}</p>
    </div>
  );
}
