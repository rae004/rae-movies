async function getData() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const results = await fetch(
      '/api/tmdb/movies?language=en-US&page=1',
      options,
    );

    return await results.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function getMovies() {
  return await getData();
}
