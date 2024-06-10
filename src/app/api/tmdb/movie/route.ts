export async function GET(request: Request) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  try {
    const clientUrl = new URL(request.url);
    const movieId = clientUrl.searchParams.get('id');
    const tmdbPopularMoviesUrl = new URL(
      `${process.env.TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
    );
    const results = await fetch(tmdbPopularMoviesUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
}
