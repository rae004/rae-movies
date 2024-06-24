export default function ImageLoading({
  widthPx,
  heightPx,
}: {
  widthPx: string;
  heightPx: string;
}) {
  return <div className={`skeleton w-[${widthPx}] h-[${heightPx}]`}></div>;
}
