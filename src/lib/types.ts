export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export type MoviesQueryProps = {
  isNsfw: string;
  includeVideo: string;
  pageNumber: string;
  searchString?: string;
  movieId?: string;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
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
