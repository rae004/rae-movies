'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import getMovie from '@/app/api/getMovie';
import Loading from '@/components/Loading';
import Companies from '@/components/Companies';

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
        <span>
          <b>Release Date</b>:{' '}
          {new Date(data.release_date).toLocaleDateString('en-us', {
            timeZone: 'UTC',
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        {data.belongs_to_collection && (
          <span>
            <b>Collection</b>: {data.belongs_to_collection.name}
          </span>
        )}
        <figure>
          <figcaption>
            <b>Spoken Languages</b>:
          </figcaption>
          {data.spoken_languages && (
            <ul className={'flex flex-row gap-4'}>
              {data.spoken_languages.map(
                (
                  language: {
                    iso_639_1: string;
                    name: string;
                    english_name: string;
                  },
                  key: number,
                ) => (
                  <li key={key}>{language.english_name}</li>
                ),
              )}
            </ul>
          )}
        </figure>
        <figure>
          <figcaption>
            <b>Genres</b>:
          </figcaption>
          {data.genres && (
            <ul className={'flex flex-row gap-4'}>
              {data.genres.map(
                (genre: { id: number; name: string }, key: number) => (
                  <li key={key}>{genre.name}</li>
                ),
              )}
            </ul>
          )}
        </figure>
        <Companies production_companies={data.production_companies} />
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
