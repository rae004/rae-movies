export default function ImageLoading({
  widthPx,
  heightPx,
}: {
  widthPx: number;
  heightPx: number;
}) {
  const width = widthPx.toString() + 'px';
  const height = heightPx.toString() + 'px';
  return <div className={`skeleton w-[${width}] h-[${height}]`}></div>;
}
