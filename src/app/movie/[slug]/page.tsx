'use client';

import { useQuery } from '@tanstack/react-query';
import getMovie from '@/app/api/getMovie';

export default function Page({ params }: { params: { slug: string } }) {
  console.log('our params: ', params.slug);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovie(parseInt(params.slug, 10)),
    queryKey: [`movie/${params.slug}`], //Array according to Documentation
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  if ('success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {params.slug}</div>;
  }

  return (
    <div>
      <h1>
        <a href={data.homepage} target={'_blank'}>
          {data.original_title}
        </a>
      </h1>
      <img src={'https://image.tmdb.org/t/p/w500' + data.poster_path} />
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </div>
  );
}
