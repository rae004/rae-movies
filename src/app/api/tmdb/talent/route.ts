import * as path from 'path';

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

  let tmdbPopularMoviesUrl = path.join(process.env.TMDB_BASE_URL, 'person');

  try {
    const talentId = clientUrl.searchParams.get('talentId');
    if (talentId) {
      tmdbPopularMoviesUrl = path.join(tmdbPopularMoviesUrl, talentId);
    } else {
      console.error('No talentId provided...');
      return Response.error();
    }

    const results = await fetch(tmdbPopularMoviesUrl, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error('Error fetching talent:', error);
    return Response.error();
  }
}
