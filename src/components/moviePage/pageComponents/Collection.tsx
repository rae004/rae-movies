export default function Collection({
  collectionName,
}: {
  collectionName: string;
}) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">Collection</div>
      <div className="collapse-content">
        <span>{collectionName}</span>
      </div>
    </div>
  );
}
