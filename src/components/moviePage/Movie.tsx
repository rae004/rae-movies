import { useState } from 'react';
import Image from 'next/image';
import Title from '@/components/moviePage/pageComponents/Title';
import Overview from '@/components/moviePage/pageComponents/Overview';
import ReleaseDate from '@/components/moviePage/pageComponents/ReleaseDate';
import Collection from '@/components/moviePage/pageComponents/Collection';
import Languages from '@/components/moviePage/pageComponents/Languages';
import Genres from '@/components/moviePage/pageComponents/Genres';
import Companies from '@/components/moviePage/pageComponents/Companies';
import ImageSkeleton from '@/components/common/ImageSkeleton';
import { MovieProps } from '@/lib/types';
import MovieSkeleton from '@/components/moviePage/pageComponents/Skeleton';
import Finances from '@/components/moviePage/pageComponents/Finances';
import Credits from '@/components/moviePage/pageComponents/Credits';

export default function Movie({ data, isError, isLoading, slug }: MovieProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (isLoading) return <MovieSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  if (data && 'success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {slug}</div>;
  }

  return (
    <div className={'flex flex-row justify-between h-full py-10 gap-2'}>
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
        <Finances revenue={data.revenue} budget={data.budget} />
        <Credits cast={data.credits.cast} crew={data.credits.crew} />
      </div>
      <div>
        {!error && (
          <Image
            src={`https://image.tmdb.org/t/p/w780/${data.poster_path}`}
            alt={`${data.title} Poster`}
            title={data.title}
            width={780}
            height={1280}
            quality={100}
            className={`${!imageLoaded ? 'hidden' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setError(true)}
            priority
          />
        )}
        {!imageLoaded && <ImageSkeleton size={'largePoster'} />}
      </div>
    </div>
  );
}
