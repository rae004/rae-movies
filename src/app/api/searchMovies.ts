export default async function searchMovies(searchParams: URLSearchParams) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const apiPathWithSearchParams = `/api/tmdb/search?${searchParams.toString()}`;
    const results = await fetch(apiPathWithSearchParams, options);

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}
