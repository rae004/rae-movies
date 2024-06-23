export default function IncludeAdult({
  isNsfw,
  setIsNsfw,
}: {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">Include Adult </span>
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={isNsfw === 'true'}
          onClick={(prev) =>
            setIsNsfw(prev.currentTarget.checked ? 'true' : 'false')
          }
        />
      </label>
    </div>
  );
}
