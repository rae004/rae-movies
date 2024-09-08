import Pagination from '@/components/header/common/Pagination';
import Card from '@/components/moviesPage/pageComponents/Card';
import MoviesGrid from '@/components/moviesPage/pageComponents/MoviesGrid';
import NoMoviesFound from '@/components/moviesPage/pageComponents/NoMoviesFound';
import MoviesSkeleton from '@/components/moviesPage/pageComponents/Skeleton';
import type { Movie, QueryReturnProps } from '@/lib/types';

export default function Movies({
  data,
  isLoading,
  isError,
  setPage,
  page,
  totalPages,
}: QueryReturnProps) {
  if (isLoading) {
    return <MoviesSkeleton />;
  }
  if (isError) return <div>Sorry There was an Error</div>;
  if (data.results.length === 0) return <NoMoviesFound />;

  return (
    <>
      <MoviesGrid>
        {data.results.map((movie: Movie) => {
          return (
            <Card
              key={`movie${movie.id}`}
              title={movie.title}
              image={movie.poster_path}
              href={`/movie/${movie.id}`}
            />
          );
        })}
      </MoviesGrid>
      <div className={'flex justify-center h-4 mb-8 md:hidden'}>
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
