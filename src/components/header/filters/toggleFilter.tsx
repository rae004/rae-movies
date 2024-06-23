export default function ToggleFilter({
  title,
  state,
  setState,
}: {
  title: string;
  state: string;
  setState: (prev: string) => void;
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">{title}</span>
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={state === 'true'}
          onClick={(prev) =>
            setState(prev.currentTarget.checked ? 'true' : 'false')
          }
        />
      </label>
    </div>
  );
}
