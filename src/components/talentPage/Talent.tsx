import ImageSkeleton from '@/components/common/ImageSkeleton';
import { Biography } from '@/components/talentPage/pageComponents/Biography';
import LifeEvents from '@/components/talentPage/pageComponents/LifeEvents';
import Name from '@/components/talentPage/pageComponents/Name';
import TalentSkeleton from '@/components/talentPage/pageComponents/Skeleton';
import type { MovieProps } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Talent({ data, isLoading, isError, slug }: MovieProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (isLoading) return <TalentSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  if (data && 'success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {slug}</div>;
  }

  return (
    <div
      className={
        'flex flex-col md:flex-row-reverse justify-center h-full py-10 gap-8'
      }>
      <div className={'flex flex-col items-center md:justify-center'}>
        {!error && (
          <Image
            src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
            alt={`${data.title} Poster`}
            title={data.title}
            width={300}
            height={450}
            quality={100}
            className={`${!imageLoaded ? 'hidden' : ''} rounded-full`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setError(true)}
            priority
            unoptimized
          />
        )}
        {!imageLoaded && <ImageSkeleton size={'smallRoundedPoster'} />}
      </div>
      <div
        className={
          'flex flex-col gap-4 mx-1 max-w-xl justify-center md:min-w-[574px]'
        }>
        <Name name={data.name} />
        <Biography biography={data.biography} />
        <LifeEvents
          birthDate={data.birthday}
          deathDate={data.deathday}
          birthPlace={data.place_of_birth}
        />
      </div>
    </div>
  );
}
