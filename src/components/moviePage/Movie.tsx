import ImageSkeleton from '@/components/common/ImageSkeleton';
import Collection from '@/components/moviePage/pageComponents/Collection';
import Companies from '@/components/moviePage/pageComponents/Companies';
import Credits from '@/components/moviePage/pageComponents/Credits';
import Finances from '@/components/moviePage/pageComponents/Finances';
import Genres from '@/components/moviePage/pageComponents/Genres';
import Languages from '@/components/moviePage/pageComponents/Languages';
import Overview from '@/components/moviePage/pageComponents/Overview';
import ReleaseDate from '@/components/moviePage/pageComponents/ReleaseDate';
import MovieSkeleton from '@/components/moviePage/pageComponents/Skeleton';
import Title from '@/components/moviePage/pageComponents/Title';
import type { MovieProps } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Movie({ data, isError, isLoading, slug }: MovieProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (isLoading) return <MovieSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  if (data && 'success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {slug}</div>;
  }

  return (
    <div
      className={
        'flex flex-col justify-between gap-4 h-full m-1 pb-20 md:flex-row-reverse md:py-10 md:m-0'
      }>
      <div>
        {!error && (
          <Image
            src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
            alt={`${data.title} Poster`}
            title={data.title}
            width={780}
            height={1280}
            quality={100}
            className={`${!imageLoaded ? 'hidden' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setError(true)}
            priority
            unoptimized
          />
        )}
        {!imageLoaded && <ImageSkeleton size={'largePoster'} />}
      </div>
      <div
        className={'flex flex-col w-full justify-start gap-4 md:w-[30.625rem]'}>
        <Title title={data.title} />
        <Overview overview={data.overview} />
        <ReleaseDate release_date={data.release_date} />
        {data.belongs_to_collection && (
          <Collection collectionName={data.belongs_to_collection.name} />
        )}
        <Languages spoken_languages={data.spoken_languages} />
        <Genres genres={data.genres} />
        <Companies production_companies={data.production_companies} />
        <Finances
          revenue={data.revenue}
          budget={data.budget}
        />
        <Credits
          cast={data.credits.cast}
          crew={data.credits.crew}
        />
      </div>
    </div>
  );
}
