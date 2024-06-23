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

  try {
    const clientUrl = new URL(request.url);
    console.log('our client url:', clientUrl.href);
    let tmdbPopularMoviesUrl = process.env.TMDB_BASE_URL;
    const clientParams = clientUrl.searchParams;

    if (clientParams.has('searchString')) {
      tmdbPopularMoviesUrl = path.join(tmdbPopularMoviesUrl, 'search', 'movie');
    } else if (clientParams.has('movieId')) {
      tmdbPopularMoviesUrl = path.join(
        tmdbPopularMoviesUrl,
        'movie',
        clientParams.get('movieId') || '',
      );
    } else {
      tmdbPopularMoviesUrl = tmdbPopularMoviesUrl + '/discover/movie';
    }

    const fetchUrl = new URL(tmdbPopularMoviesUrl);

    if (clientParams.has('page')) {
      const page = clientParams.get('page');
      fetchUrl.searchParams.append('page', page || '1');
    }

    if (clientParams.has('searchString')) {
      const searchString = clientParams.get('searchString');
      fetchUrl.searchParams.append('query', searchString || '');
    }

    if (clientParams.has('isNsfw')) {
      const isNsfw = clientParams.get('isNsfw');
      fetchUrl.searchParams.append('include_adult', isNsfw || '0');
    }

    if (clientParams.has('movieId')) {
      fetchUrl.searchParams.append('append_to_response', 'credits');
    }

    console.log('our final url:', fetchUrl.href);

    const results = await fetch(fetchUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    Response.error();
  }
}
export const dynamic = 'force-dynamic';
