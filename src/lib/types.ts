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
