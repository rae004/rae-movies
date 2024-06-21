import ImageLoading from '@/components/loading/ImageLoading';

const MovieLoading = ({}) => {
  return (
    <div className={'flex flex-row justify-between h-full py-5 gap-2'}>
      <div
        className={'skeleton flex flex-col w-[30.625rem] justify-start gap-4'}
      ></div>
      <ImageLoading />
    </div>
  );
};

export default MovieLoading;
