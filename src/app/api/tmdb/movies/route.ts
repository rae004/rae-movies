import * as path from 'path';

const movieDbFilterPaths: { path: string; queryParamKey: string }[] = [
  {
    path: path.join('discover', 'movie'),
    queryParamKey: 'discover',
  },
  {
    path: path.join('movie', 'popular'),
    queryParamKey: 'popular',
  },
  {
    path: path.join('movie', 'top_rated'),
    queryParamKey: 'top_rated',
  },
];

const isEndpointKeySet = (queryParams: URLSearchParams) => {
  if (!queryParams.has('endpointKey')) return false;

  const endpointKey = queryParams.get('endpointKey');

  return (
    endpointKey !== '' && endpointKey !== undefined && endpointKey !== null
  );
};

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

    let endpointKey = isEndpointKeySet(clientParams)
      ? clientParams.get('endpointKey') || 'popular'
      : 'popular';
    const endpoint = movieDbFilterPaths.find(
      (path) => path.queryParamKey === endpointKey,
    );

    const tmdbPopularMoviesUrl = new URL(
      path.join(process.env.TMDB_BASE_URL || '', endpoint?.path || ''),
    );
    clientParams.forEach((key, val) => {
      tmdbPopularMoviesUrl.searchParams.append(val, key);
    });

    if (endpoint?.queryParamKey === 'search') {
      tmdbPopularMoviesUrl.searchParams.append(
        'query',
        clientParams.get('searchString') || '',
      );
    }

    const results = await fetch(tmdbPopularMoviesUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    Response.error();
  }
}
export const dynamic = 'force-dynamic';
