import MoviesGrid from '@/components/moviesGrid/MoviesGrid';
import ImageLoading from '@/components/loading/ImageLoading';

const MoviesLoading = ({ noMovies }: { noMovies: boolean }) => {
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
          <div className="card-body px-4 pb-8">
            <div className="skeleton h-4 w-[248px]"></div>
            <div className="skeleton h-4 w-[196px]"></div>
          </div>
          <figure>
            <ImageLoading size={'smallPoster'} />
          </figure>
        </div>
      ))}
    </MoviesGrid>
  );
};

export default MoviesLoading;
