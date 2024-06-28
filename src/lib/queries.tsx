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

    if (props.sortBy && props.sortOrder) {
      key += `sortBy/${props.sortBy}.${props.sortOrder}/`;
    }

    if (
      props.country &&
      props.country !== 'Country' &&
      props.rating &&
      props.rating !== 'Rating'
    ) {
      key += `country/${props.country}/rating/${props.rating}/`;
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

const getSortByKey = (sortBy: string, sortOrder: string) => {
  if (sortBy && sortOrder) {
    return `${sortBy}.${sortOrder}`;
  }
  return '';
};

export function useMoviesQueryNew({ ...props }: MoviesQueryProps) {
  const searchParams = new URLSearchParams();
  searchParams.append('page', props.pageNumber);
  props.isNsfw && searchParams.append('isNsfw', props.isNsfw);
  props.searchString && searchParams.append('searchString', props.searchString);
  props.movieId && searchParams.append('movieId', props.movieId);
  props.includeVideo && searchParams.append('includeVideo', props.includeVideo);
  props.sortBy &&
    props.sortOrder &&
    searchParams.append('sortBy', getSortByKey(props.sortBy, props.sortOrder));
  props.country && searchParams.append('certification_country', props.country);
  props.rating && searchParams.append('certification', props.rating);

  const queryKeyString = getQueryKey(props);
  return useQuery({
    queryFn: async () => await getMoviesNew(searchParams),
    queryKey: [queryKeyString, props.pageNumber],
  });
}
