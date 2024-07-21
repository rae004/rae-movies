import * as path from 'node:path';

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
    let searchOrDiscoverUrl = process.env.TMDB_BASE_URL;
    const clientUrl = new URL(request.url);
    const clientParams = clientUrl.searchParams;

    if (clientParams.has('query')) {
      searchOrDiscoverUrl = path.join(searchOrDiscoverUrl, 'search', 'movie');
    } else {
      searchOrDiscoverUrl = path.join(searchOrDiscoverUrl, 'discover', 'movie');
    }

    const fetchUrl = new URL(searchOrDiscoverUrl);

    clientUrl.searchParams.forEach((value, key) => {
      fetchUrl.searchParams.append(key, value);
    });

    if (clientParams.has('isNsfw')) {
      const isNsfw = clientParams.get('isNsfw');
      fetchUrl.searchParams.append('include_adult', isNsfw || '0');
    }

    if (clientParams.has('sortBy')) {
      const sortBy = clientParams.get('sortBy');
      if (sortBy) {
        fetchUrl.searchParams.append(
          'sort_by',
          `${sortBy.split(' ').join('_').toLowerCase()}`,
        );
      }
    }

    const results = await fetch(fetchUrl.href, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
export const dynamic = 'force-dynamic';
