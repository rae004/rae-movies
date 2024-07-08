import { ImageSkeletonProps } from '@/lib/types';

export default function ImageSkeleton({ size }: ImageSkeletonProps) {
  if (size === 'smallPoster') {
    return (
      <div
        className={`skeleton w-[184px] h-[265px] md:w-[280px] md:h-[420px]`}
      ></div>
    );
  }

  if (size === 'smallRoundedPoster') {
    return <div className={`skeleton h-[450px] w-[300px] rounded-full`}></div>;
  }

  return (
    <div
      className={`skeleton w-[376px] h-[564px] md:w-[780px] md:h-[1280px]`}
    ></div>
  );
}
