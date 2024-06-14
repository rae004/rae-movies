import { useQuery } from '@tanstack/react-query';
import Card from '@/components/moviesPage/Card';
import getMovies from '@/app/api/getMovies';
import Loading from '@/components/Loading';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function Movies({ page }: { page: number }) {
  const urlPageParam = new URLSearchParams('page=' + page);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(urlPageParam),
    queryKey: ['movies/popular', page],
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 p-10">
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
      </div>
    </div>
  );
}
