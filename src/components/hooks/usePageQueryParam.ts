import { useSearchParams } from 'next/navigation';
import {
  ObjectParam,
  StringParam,
  useQueryParam,
  withDefault,
} from 'use-query-params';
import { useMoviesQueryNew } from '@/lib/queries';
import { SortOrderState } from '@/lib/types';

export type Sort = {
  order: string;
  by: string;
};

const defaultSortOrderParams = {
  order: 'Desc',
  by: 'Popularity',
};

export default function usePageQueryParam(slug?: string) {
  const searchParams = useSearchParams();
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(StringParam, searchParams.get('page')),
  );
  const [searchString, _] = useQueryParam(
    'searchString',
    withDefault(StringParam, searchParams.get('searchString')),
  );
  const [isNsfw, setIsNsfw] = useQueryParam(
    'isNsfw',
    withDefault(StringParam, 'false'),
  );
  const [includeVideo, setIncludeVideo] = useQueryParam(
    'includeVideo',
    withDefault(StringParam, 'false'),
  );
  const [sort, setSort] = useQueryParam(
    'sort',
    withDefault(ObjectParam, defaultSortOrderParams),
  );
  const resetSortOrderFilter = () => {
    setSort(defaultSortOrderParams);
  };
  const getQuerySortByValues = (sort: SortOrderState) => ({
    sortOrder: sort.order,
    sortBy: sort.by,
  });
  const { sortBy, sortOrder } = getQuerySortByValues(sort as SortOrderState);

  const { data, isLoading, isError } = useMoviesQueryNew({
    searchString: searchString || '',
    pageNumber: page || '1',
    isNsfw,
    includeVideo,
    sortBy,
    sortOrder,
    movieId: slug,
  });
  const moviesProps = {
    data,
    isLoading,
    isError,
  };
  const headerProps = {
    setPage,
    page: page || '1',
    searchString: searchString || '',
    totalPages: data?.total_pages || 500,
    isNsfw,
    setIsNsfw,
    includeVideo,
    setIncludeVideo,
    sortBy,
    sortOrder,
    resetSortOrderFilter,
    sort: sort as Sort,
    setSort,
  };

  return {
    headerProps,
    moviesProps,
  };
}
