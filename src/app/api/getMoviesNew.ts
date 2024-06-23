export default async function getMoviesNew(searchParams: URLSearchParams) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const apiPathWithSearchParams = `/api/tmdb/moviesNew?${searchParams.toString()}`;
    const results = await fetch(apiPathWithSearchParams, options);

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}
