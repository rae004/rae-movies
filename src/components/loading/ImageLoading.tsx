export default function ImageLoading({
  size,
}: {
  size: 'smallPoster' | 'largePoster' | 'smallRoundedPoster';
}) {
  if (size === 'smallPoster') {
    return <div className={`skeleton w-[256px] h-[384px]`}></div>;
  }

  if (size === 'smallRoundedPoster') {
    return <div className={`skeleton h-[450px] w-[300px] rounded-full`}></div>;
  }

  return <div className={`skeleton w-[780px] h-[1280px]`}></div>;
}
