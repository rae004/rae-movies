import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import ImageSkeleton from '@/components/common/ImageSkeleton';
import { CardProps } from '@/lib/types';

const Card = ({ title, image, href }: CardProps) => {
  const imagePath = `https://image.tmdb.org/t/p/w342/${image}`;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Link
      href={href}
      className="card bg-base-100 p-1 pb-4 group hover:bg-accent focus:bg-accent duration-500 xl:w-[288px] xl:h-[544px]"
    >
      <div className="card-body pl-0 pr-4 pb-4">
        <h2
          className="text-xl line-clamp-2 group-hover:text-accent-content"
          title={title}
        >
          {title}
        </h2>
      </div>
      <figure>
        <Suspense fallback={<ImageSkeleton size={'smallPoster'} />}>
          {!error && (
            <Image
              src={imagePath}
              alt={`${title} Poster`}
              title={title}
              width={250}
              height={350}
              className={`w-auto h-auto ${!loaded ? 'hidden' : ''}`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              priority
              unoptimized
            />
          )}
          {!loaded && <ImageSkeleton size={'smallPoster'} />}
        </Suspense>
      </figure>
    </Link>
  );
};

export default Card;
