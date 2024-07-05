import ImageSkeleton from '@/components/common/ImageSkeleton';

const MovieSkeleton = ({}) => {
  return (
    <div className={'flex flex-row justify-between h-full py-10 gap-2'}>
      <div className={'flex flex-col w-[30.625rem] justify-start gap-4'}>
        <div className={'skeleton h-full w-full'} />
      </div>
      <ImageSkeleton size={'largePoster'} />
    </div>
  );
};

export default MovieSkeleton;
