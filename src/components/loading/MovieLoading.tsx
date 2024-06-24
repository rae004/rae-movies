import ImageLoading from '@/components/loading/ImageLoading';

const MovieLoading = ({}) => {
  return (
    <div className={'flex flex-row justify-between h-[1280px] py-5 gap-2'}>
      <div
        className={'skeleton flex flex-col w-[488px] justify-start gap-4'}
      ></div>
      <ImageLoading widthPx={'780px'} heightPx={'1170px'} />
    </div>
  );
};

export default MovieLoading;
