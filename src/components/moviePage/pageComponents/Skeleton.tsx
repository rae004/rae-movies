import ImageSkeleton from '@/components/common/ImageSkeleton';

const MovieSkeleton = ({}) => {
  return (
    <div
      className={
        'flex flex-col md:flex-row-reverse justify-between h-full py-10 gap-2'
      }
    >
      <ImageSkeleton size={'largePoster'} />
      <div
        className={
          'flex flex-col w-[576px] md:w-[30.625rem] justify-start gap-4'
        }
      >
        <div className={'skeleton h-[574px] w-[376px] md:h-full md:w-full'} />
      </div>
    </div>
  );
};

export default MovieSkeleton;
