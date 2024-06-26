import { useSearchParams } from 'next/navigation';
import {
  ObjectParam,
  StringParam,
  useQueryParam,
  withDefault,
} from 'use-query-params';
import { useMoviesQueryNew } from '@/lib/queries';
import { CountryAndRating, Sort, SortOrderState } from '@/lib/types';
import { defaultCountryAndCertificationProps } from '@/components/header/filters/CountryAndCertificationFilter';

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
  const [countryAndCertification, setCountryAndCertification] = useQueryParam(
    'countryAndRating',
    withDefault(ObjectParam, defaultCountryAndCertificationProps),
  );
  const { country, rating } = countryAndCertification as CountryAndRating;

  const { data, isLoading, isError } = useMoviesQueryNew({
    searchString: searchString || '',
    pageNumber: page || '1',
    isNsfw,
    includeVideo,
    sortBy,
    sortOrder,
    movieId: slug,
    country,
    rating,
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
    countryAndCertification: countryAndCertification as CountryAndRating,
    setCountryAndCertification,
  };

  return {
    headerProps,
    moviesProps,
  };
}
