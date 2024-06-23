export default function IsNsfwFilter({
  isNsfw,
  setIsNsfw,
}: {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">NSFW</span>
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={isNsfw === 'true'}
          onClick={(prev) => {
            console.log('prev: ', prev.currentTarget.checked);
            setIsNsfw(prev.currentTarget.checked ? 'true' : 'false');
          }}
        />
      </label>
    </div>
  );
}
