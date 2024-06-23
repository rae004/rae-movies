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
};
