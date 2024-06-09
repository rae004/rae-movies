async function getData(searchParams: URLSearchParams) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const apiPathWithSearchParams = `/api/tmdb/movies?${searchParams.toString()}`;
    const results = await fetch(apiPathWithSearchParams, options);

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function getMovies(searchParams: URLSearchParams) {
  return await getData(searchParams);
}
