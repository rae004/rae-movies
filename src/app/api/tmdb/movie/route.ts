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
      `${process.env.TMDB_BASE_URL}/movie/${movieId}?language=en-US&append_to_response=watch_providers,videos,credits,external_ids,images,keywords`,
    );
    const results = await fetch(tmdbPopularMoviesUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    Response.error();
  }
}
export const dynamic = 'force-dynamic';
