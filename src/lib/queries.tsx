import { useQuery } from '@tanstack/react-query';
import getMoviesNew from '@/app/api/getMoviesNew';
import { MoviesQueryProps } from '@/lib/types';

const getQueryKey = ({ ...props }: MoviesQueryProps) => {
  if (props.searchString) {
    return `movies/search/${props.searchString}`;
  }

  if (props.movieId) {
    return `movie/${props.movieId}`;
  }

  return 'movies/popular';
};

export function useMoviesQueryNew({ ...props }: MoviesQueryProps) {
  const searchParams = new URLSearchParams();
  searchParams.append('page', props.pageNumber);
  props.searchString && searchParams.append('searchString', props.searchString);
  props.movieId && searchParams.append('movieId', props.movieId);

  const queryKeyString = getQueryKey(props);
  return useQuery({
    queryFn: async () => await getMoviesNew(searchParams),
    queryKey: [queryKeyString, props.pageNumber],
  });
}
