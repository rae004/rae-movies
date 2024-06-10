'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import getMovie from '@/app/api/getMovie';
import Loading from '@/components/Loading';

const tmdbImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovie(parseInt(params.slug, 10)),
    queryKey: [`movie/${params.slug}`], //Array according to Documentation
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Sorry There was an Error</div>;
  if ('success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {params.slug}</div>;
  }

  return (
    <div className={'flex flex-row justify-between h-full p-5'}>
      <div className={'flex flex-col w-1/2 justify-start gap-10'}>
        <h1>
          <b>Title</b>: {data.title}
        </h1>
        <span>
          <b>Overview</b>: {data.overview}
        </span>
        {data.belongs_to_collection && (
          <span>
            <b>Collection</b>: {data.belongs_to_collection.name}
          </span>
        )}
      </div>
      <Image
        src={tmdbImageUrl + data.poster_path}
        alt={`${data.title} Poster`}
        width={500}
        height={750}
      />
    </div>
  );
}
