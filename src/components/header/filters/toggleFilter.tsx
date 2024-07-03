import { useSearchParams } from 'next/navigation';

export default function ToggleFilter({
  title,
  state,
  setState,
}: {
  title: string;
  state: string;
  setState: (prev: string) => void;
}) {
  const handleStateChange = (prev: boolean) => {
    setState(prev ? 'true' : 'false');
  };

  if (useSearchParams().has('searchString')) {
    return null;
  }

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">{title}</span>
        <input
          type="checkbox"
          className="toggle"
          checked={state === 'true'}
          onChange={(prev) => handleStateChange(prev.currentTarget.checked)}
          onClick={(prev) => handleStateChange(prev.currentTarget.checked)}
        />
      </label>
    </div>
  );
}
