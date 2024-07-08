import Card from '@/components/moviesPage/pageComponents/Card';
import MoviesSkeleton from '@/components/moviesPage/pageComponents/Skeleton';
import MoviesGrid from '@/components/moviesPage/pageComponents/MoviesGrid';
import { Movie } from '@/lib/types';

export default function Movies({
  data,
  isLoading,
  isError,
}: {
  data: any;
  isLoading: boolean;
  isError: boolean;
}) {
  const noMovies = data?.results?.length === 0;
  if (isLoading || data?.results?.length === 0) {
    return <MoviesSkeleton noMovies={noMovies} />;
  }
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <MoviesGrid>
      {data.results.map((movie: Movie) => {
        return (
          <Card
            key={'movie' + movie.id}
            title={movie.title}
            image={movie.poster_path}
            href={`/movie/${movie.id}`}
          ></Card>
        );
      })}
    </MoviesGrid>
  );
}
