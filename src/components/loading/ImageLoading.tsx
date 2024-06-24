export default function ImageLoading({
  size,
}: {
  size: 'smallPoster' | 'largePoster';
}) {
  if (size === 'smallPoster') {
    return <div className={`skeleton w-[256px] h-[384px]`}></div>;
  }

  return <div className={`skeleton w-[780px] h-[1280px]`}></div>;
}
