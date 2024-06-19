import { useQuery } from '@tanstack/react-query';
import getMovies from '@/app/api/getMovies';
import getMovie from '@/app/api/getMovie';
import searchMovies from '@/app/api/searchMovies';

export function useMoviesQuery(
  pageNumber: string,
  endpointKey: string = 'popular',
) {
  const searchParams = new URLSearchParams();
  searchParams.append('page', pageNumber);
  searchParams.append('endpointKey', endpointKey);

  return useQuery({
    queryFn: async () => await getMovies(searchParams),
    queryKey: [`movies/${endpointKey}`, pageNumber],
  });
}

export function useSearchMoviesQuery(searchString: string, pageNumber: string) {
  const searchParams = new URLSearchParams();
  searchParams.append('searchString', searchString);
  searchParams.append('pageNumber', pageNumber);

  return useQuery({
    queryFn: async () => await searchMovies(searchParams),
    queryKey: [`movies/search/${searchString}`, pageNumber],
  });
}

export function useMovieQuery(movieId: string) {
  return useQuery({
    queryFn: async () => await getMovie(parseInt(movieId, 10)),
    queryKey: [`movie/${movieId}`],
  });
}
