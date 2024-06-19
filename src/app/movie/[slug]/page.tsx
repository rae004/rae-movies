'use client';

import Image from 'next/image';
import * as path from 'path';
import Loading from '@/components/Loading';
import Companies from '@/components/moviePage/Companies';
import Genres from '@/components/moviePage/Genres';
import Languages from '@/components/moviePage/Languages';
import Collection from '@/components/moviePage/Collection';
import ReleaseDate from '@/components/moviePage/ReleaseDate';
import Overview from '@/components/moviePage/Overview';
import Title from '@/components/moviePage/Title';
import Header from '@/components/header/Header';
import { useMovieQuery } from '@/lib/queries';

const tmdbImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useMovieQuery(params.slug);

  if (isLoading) return <Loading />;
  if (isError) return <div>Sorry There was an Error</div>;
  if ('success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {params.slug}</div>;
  }

  return (
    <>
      <Header />
      <div className={'flex flex-row justify-between h-full py-5 gap-2'}>
        <div className={'flex flex-col w-[30.625rem] justify-start gap-4'}>
          <Title title={data.title} />
          <Overview overview={data.overview} />
          <ReleaseDate release_date={data.release_date} />
          {data.belongs_to_collection && (
            <Collection collectionName={data.belongs_to_collection.name} />
          )}
          <Languages spoken_languages={data.spoken_languages} />
          <Genres genres={data.genres} />
          <Companies production_companies={data.production_companies} />
        </div>
        <Image
          src={path.join(tmdbImageUrl || '', 'w780', data.poster_path || '')}
          alt={`${data.title} Poster`}
          title={data.title}
          width={780}
          height={780}
          quality={100}
          priority
        />
      </div>
    </>
  );
}
