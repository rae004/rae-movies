import type { useMovieQueryProps } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

async function getMovie({ ...props }: useMovieQueryProps) {
  const url = `${props.movieUrl}/?movieId=${props.movieId}`;
  const res = await fetch(url);
  return await res.json();
}

export default function useMovieQuery({
  movieUrl = '/api/tmdb/movie',
  ...props
}: useMovieQueryProps) {
  return useQuery({
    queryFn: async () => await getMovie({ movieUrl, ...props }),
    queryKey: ['movie', props.movieId],
  });
}
