export default function ImageLoading({
  widthPx,
  heightPx,
}: {
  widthPx: number;
  heightPx: number;
}) {
  return (
    <div
      className={`skeleton w-[${widthPx.toString()}px] h-[${heightPx.toString()}px]`}
    ></div>
  );
}
