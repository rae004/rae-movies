'use client';

export const PosterLoading = () => (
  <div className="skeleton w-[780px] h-[1080px]"></div>
);

const MovieLoading = ({}) => {
  return (
    <div className={'flex flex-row justify-between h-full py-5 gap-2'}>
      <div
        className={'skeleton flex flex-col w-[30.625rem] justify-start gap-4'}
      ></div>
      <PosterLoading />
    </div>
  );
};

export default MovieLoading;
