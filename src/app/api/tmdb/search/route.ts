import * as path from 'path';

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
    const clientParams = clientUrl.searchParams;
    const searchTerm = clientParams.get('searchString');
    const pageNumber = clientParams.get('pageNumber');

    if (!searchTerm || !pageNumber) {
      if (!searchTerm) console.error('No search term provided');
      if (!pageNumber) console.error('No page number provided');
      return Response.error();
    }

    const tmdbPopularMoviesUrl = new URL(
      path.join(process.env.TMDB_BASE_URL || '', 'search', 'movie'),
    );

    tmdbPopularMoviesUrl.searchParams.append('page', pageNumber);
    tmdbPopularMoviesUrl.searchParams.append('query', searchTerm);

    const results = await fetch(tmdbPopularMoviesUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    Response.error();
  }
}
export const dynamic = 'force-dynamic';
