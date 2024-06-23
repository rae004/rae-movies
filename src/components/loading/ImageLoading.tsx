export default function ImageLoading({
  widthPx,
  heightPx,
}: {
  widthPx: number;
  heightPx: number;
}) {
  return <div className={`skeleton w-[${widthPx}px] h-[${heightPx}px]`}></div>;
}
