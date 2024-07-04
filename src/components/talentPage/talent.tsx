import { useState } from 'react';
import Image from 'next/image';
import { MovieProps } from '@/lib/types';
import ImageLoading from '@/components/loading/ImageLoading';
import Name from '@/components/talentPage/pageComponents/Name';
import { Biography } from '@/components/talentPage/pageComponents/Biography';
import LifeEvents from '@/components/talentPage/pageComponents/LifeEvents';
import TalentSkeleton from '@/components/talentPage/pageComponents/Skeleton';

export default function Talent({ data, isLoading, isError, slug }: MovieProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (isLoading) return <TalentSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  if (data && 'success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {slug}</div>;
  }

  return (
    <div className={'flex flex-row justify-center h-full py-10 gap-8'}>
      <div className={'flex flex-col gap-4 max-w-xl justify-center'}>
        <Name name={data.name} />
        <Biography biography={data.biography} />
        <LifeEvents
          birthDate={data.birthday}
          deathDate={data.deathday}
          birthPlace={data.place_of_birth}
        />
      </div>
      <div className={'flex flex-col justify-center'}>
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
          />
        )}
        {!imageLoaded && <ImageLoading size={'smallRoundedPoster'} />}
      </div>
    </div>
  );
}
