import ImageSkeleton from '@/components/common/ImageSkeleton';
import MoviesGrid from '@/components/moviesPage/pageComponents/MoviesGrid';

const MoviesSkeleton = ({ noMovies }: { noMovies: boolean }) => {
  return noMovies ? (
    <div
      className={
        'flex flex-col items-center justify-center w-[1080px] h-[500px]'
      }>
      <h1>No Movies found :(</h1>
    </div>
  ) : (
    <MoviesGrid>
      {[...Array(20)].map((_, key) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: index is only key available
          key={key}
          className="card bg-base-100 p-1 pb-4 group hover:bg-accent focus:bg-accent duration-500">
          <div className="card-body pl-0 pr-4 md:h-[105px]">
            <div className="skeleton h-4 w-[160px] md:w-[248px]" />
            <div className="skeleton h-4 w-[125px] md:w-[196px]" />
          </div>
          <div className={'hidden md:block'}>
            <ImageSkeleton size={'smallPoster'} />
          </div>
          <div className={'md:hidden'}>
            <ImageSkeleton size={'smallPoster'} />
          </div>
        </div>
      ))}
    </MoviesGrid>
  );
};

export default MoviesSkeleton;
