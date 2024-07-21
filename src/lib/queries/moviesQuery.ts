import type { MoviesQueryProps } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

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

    if (props.rating && props.rating !== 'Rating') {
      key += `country/${props.country}/rating/${props.rating}/`;
    } else {
      key.replace('^*country/*/rating/*/', '');
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

async function getMovies(searchParams: URLSearchParams) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const apiPathWithSearchParams = `/api/tmdb/moviesNew?${searchParams.toString()}`;
    const results = await fetch(apiPathWithSearchParams, options);

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}

export function useMoviesQuery({ ...props }: MoviesQueryProps) {
  const searchParams = new URLSearchParams(props.searchParams);
  props.isNsfw && searchParams.append('isNsfw', props.isNsfw);
  props.sortBy &&
    props.sortOrder &&
    searchParams.append('sortBy', getSortByKey(props.sortBy, props.sortOrder));
  props.country && searchParams.append('certification_country', props.country);
  props.rating && searchParams.append('certification', props.rating);

  const queryKeyString = getQueryKey(props);
  return useQuery({
    queryFn: async () => await getMovies(searchParams),
    queryKey: [queryKeyString, props.pageNumber],
  });
}
