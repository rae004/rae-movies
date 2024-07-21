import path from 'node:path';

export async function GET(request: Request) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  if (!process.env.TMDB_BASE_URL) {
    console.error('TMDB_BASE_URL env var is not set...');
    return Response.error();
  }

  const clientUrl = new URL(request.url);

  let tmdbPopularMoviesUrl = path.join(process.env.TMDB_BASE_URL, 'movie');

  try {
    const movieId = clientUrl.searchParams.get('movieId');
    if (movieId) {
      tmdbPopularMoviesUrl = `${path.join(tmdbPopularMoviesUrl, movieId)}?append_to_response=credits`;
    } else {
      console.error('No movieId provided...');
      return Response.error();
    }

    const results = await fetch(tmdbPopularMoviesUrl, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error('Error fetching movie:', error);
    return Response.error();
  }
}
