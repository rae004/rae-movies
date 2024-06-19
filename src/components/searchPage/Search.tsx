import { useMoviesQuery, useSearchMoviesQuery } from '@/lib/queries';
import MoviesLoading from '@/components/MoviesLoading';
import MoviesGrid from '@/components/moviesGrid/MoviesGrid';
import Card from '@/components/moviesGrid/Card';
import { Movie } from '@/lib/types';

export default function Search({
  page,
  searchTerm,
}: {
  page: string;
  searchTerm: string;
}) {
  const { data, isLoading, isError } = useSearchMoviesQuery(searchTerm, page);

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
