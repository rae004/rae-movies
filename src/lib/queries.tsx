import { useQuery } from '@tanstack/react-query';
import getMoviesNew from '@/app/api/getMoviesNew';
import { MoviesQueryProps } from '@/lib/types';

const getQueryKey = ({ ...props }: MoviesQueryProps) => {
  const constructKey = (str: string) => {
    let key = '';

    if (props.isNsfw === 'true') {
      key = 'isNsfw/';
    }

    if (props.includeVideo === 'true') {
      key += 'includeVideo/';
    }

    return key + str;
  };
  if (props.searchString) {
    return constructKey(`movies/search/${props.searchString}`);
  }

  if (props.movieId) {
    return constructKey(`movie/${props.movieId}`);
  }

  return constructKey('movies/popular');
};

export function useMoviesQueryNew({ ...props }: MoviesQueryProps) {
  const searchParams = new URLSearchParams();
  searchParams.append('page', props.pageNumber);
  props.isNsfw && searchParams.append('isNsfw', props.isNsfw);
  props.searchString && searchParams.append('searchString', props.searchString);
  props.movieId && searchParams.append('movieId', props.movieId);
  props.includeVideo && searchParams.append('includeVideo', props.includeVideo);

  const queryKeyString = getQueryKey(props);
  return useQuery({
    queryFn: async () => await getMoviesNew(searchParams),
    queryKey: [queryKeyString, props.pageNumber],
  });
}