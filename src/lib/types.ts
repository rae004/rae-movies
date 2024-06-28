export type Movie = {
  id: number;
  title: string;
  poster_path: string;
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
};

export type MovieProps = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  slug: string;
};

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
  totalPages: number;
  setPage?: (page: string) => void;
  page?: string;
  searchString?: string;
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
