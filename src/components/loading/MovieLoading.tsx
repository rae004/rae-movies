import ImageLoading from '@/components/loading/ImageLoading';

const MovieLoading = ({}) => {
  return (
    <div className={'flex flex-row justify-between h-full py-10 gap-2'}>
      <div className={'flex flex-col w-[30.625rem] justify-start gap-4'}>
        <div className={'skeleton h-full w-full'} />
      </div>
      <ImageLoading size={'largePoster'} />
    </div>
  );
};

export default MovieLoading;
