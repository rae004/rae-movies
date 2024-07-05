import MoviesGrid from '@/components/moviesPage/pageComponents/MoviesGrid';
import ImageSkeleton from '@/components/common/ImageSkeleton';

const MoviesSkeleton = ({ noMovies }: { noMovies: boolean }) => {
  return noMovies ? (
    <div
      className={
        'flex flex-col items-center justify-center w-[1080px] h-[500px]'
      }
    >
      <h1>No Movies found :(</h1>
    </div>
  ) : (
    <MoviesGrid>
      {[...Array(20)].map((_, key) => (
        <div
          key={key}
          className="card bg-base-100 p-1 pb-4 group hover:bg-accent focus:bg-accent duration-500"
        >
          <div className="card-body pl-0 pr-4 h-[105px]">
            <div className="skeleton h-4 w-[248px]"></div>
            <div className="skeleton h-4 w-[196px]"></div>
          </div>
          <figure>
            <ImageSkeleton size={'smallPoster'} />
          </figure>
        </div>
      ))}
    </MoviesGrid>
  );
};

export default MoviesSkeleton;
