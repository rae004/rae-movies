async function getData(movieId: number) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const apiPathWithSearchParams = `/api/tmdb/movie?id=${movieId}`;
    console.log('our path: ', apiPathWithSearchParams);
    const results = await fetch(apiPathWithSearchParams, options);

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function getMovie(movieId: number) {
  return await getData(movieId);
}
