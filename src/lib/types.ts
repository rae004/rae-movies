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

export type SortOrderState = { order: string; by: string };
