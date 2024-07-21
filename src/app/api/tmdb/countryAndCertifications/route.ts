import * as path from 'node:path';

export async function GET() {
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
    const fetchUrl = path.join(
      process.env.TMDB_BASE_URL,
      '/certification/movie/list',
    );

    const results = await fetch(fetchUrl, options);
    const data = await results.json();

    return Response.json(data);
  } catch (error) {
    console.error('Caught Error getting country and certifications: ', error);
    return Response.error();
  }
}
