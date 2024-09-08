import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export type Rating = {
  certification: string;
  meaning: string;
  order: number;
};

export type MoviesQueryProps = {
  isNsfw: string;
  includeVideo: string;
  pageNumber: string;
  sortBy: string;
  sortOrder: string;
  country: string;
  rating: string;
  searchString?: string;
  movieId?: string;
  searchParams: URLSearchParams;
};

export type QueryReturnProps = {
  // biome-ignore lint/suspicious/noExplicitAny: we don't know what the data will be when it's queried
  data: any;
  isLoading: boolean;
  isError: boolean;
  setPage: (page: string) => void;
  page: string;
  totalPages: number;
};

export type MovieProps = {
  slug: string;
} & Partial<QueryReturnProps>;

export type CardProps = {
  title: string;
  image: string;
  href: string;
};

export type Sort = {
  order: string;
  by: string;
};

export type SortOrderState = Sort;

export type CountryAndRating = { country: string; rating: string };

export type CountryAndRatingFilterProps = {
  countryAndCertification: CountryAndRating;
  setCountryAndCertification: (arg0: CountryAndRating) => void;
};

export type FiltersProps = {
  isNsfw: string;
  setIsNsfw: (prev: string) => void;
  includeVideo: string;
  setIncludeVideo: (prev: string) => void;
  resetSortOrderFilter: () => void;
  sort: SortOrderState;
  setSort: (sort: SortOrderState) => void;
  countryAndCertification: CountryAndRating;
  setCountryAndCertification: (arg0: CountryAndRating) => void;
};

export type HeaderProps = {
  sort?: Sort;
  page?: string;
  isNsfw?: string;
  searchStr: string;
  totalPages?: number;
  includeVideo?: string;
  router: AppRouterInstance;
  searchParams: URLSearchParams;
  noFilterAndPagination: boolean;
  setSort?: (sort: Sort) => void;
  setPage?: (page: string) => void;
  resetSortOrderFilter?: () => void;
  setIsNsfw?: (prev: string) => void;
  setSearchStr: (str: string) => void;
  setIncludeVideo?: (vid: string) => void;
  countryAndCertification?: CountryAndRating;
  setCountryAndCertification?: (a: CountryAndRating) => void;
};

export type ImageSkeletonProps = {
  size: 'smallPoster' | 'largePoster' | 'smallRoundedPoster';
};

export type useTalentQueryProps = {
  talentId: string;
  talentUrl?: string;
};

export type useMovieQueryProps = {
  movieId: string;
  movieUrl?: string;
};
