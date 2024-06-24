import { useSearchParams } from 'next/navigation';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import { useMoviesQueryNew } from '@/lib/queries';

export default function usePageQueryParam() {
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
  const [sortBy, setSortBy] = useQueryParam(
    'sortBy',
    withDefault(StringParam, ''),
  );
  const [sortOrder, setSortOrder] = useQueryParam(
    'sortOrder',
    withDefault(StringParam, ''),
  );

  const { data, isLoading, isError } = useMoviesQueryNew({
    searchString: searchString || '',
    pageNumber: page || '1',
    isNsfw,
    includeVideo,
    sortBy,
    sortOrder,
    setSortOrder,
    setSortBy,
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
    setSortBy,
    sortOrder,
    setSortOrder,
  };

  return {
    headerProps,
    moviesProps,
  };
}
