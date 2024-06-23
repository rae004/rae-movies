import Card from '@/components/moviesGrid/Card';
import MoviesLoading from '@/components/loading/MoviesLoading';
import MoviesGrid from '@/components/moviesGrid/MoviesGrid';
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
  if (isLoading) return <MoviesLoading />;
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
