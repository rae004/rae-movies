import { ImageSkeletonProps } from '@/lib/types';

export default function ImageSkeleton({ size }: ImageSkeletonProps) {
  if (size === 'smallPoster') {
    return <div className={`skeleton w-[280px] h-[420px]`}></div>;
  }

  if (size === 'smallRoundedPoster') {
    return <div className={`skeleton h-[450px] w-[300px] rounded-full`}></div>;
  }

  return <div className={`skeleton w-[780px] h-[1280px]`}></div>;
}
