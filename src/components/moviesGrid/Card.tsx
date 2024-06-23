import Link from 'next/link';
import Image from 'next/image';
import * as path from 'path';
import { Suspense, useState } from 'react';
import ImageLoading from '@/components/loading/ImageLoading';

const Card = ({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) => {
  const imagePath = path.join(
    process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || '',
    'w342',
    image || '',
  );

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Link
      href={href}
      className="card bg-base-100 p-1 pb-4 group hover:bg-accent focus:bg-accent duration-500 xl:w-[288px] xl:h-[508px]"
    >
      <div className="card-body px-4 pb-4">
        <h2 className="text-xl line-clamp-2 group-hover:text-accent-content">
          {title}
        </h2>
      </div>
      <figure>
        <Suspense fallback={<ImageLoading widthPx={256} heightPx={384} />}>
          {!error && (
            <Image
              src={imagePath}
              alt={`${title} Poster`}
              title={title}
              width={250}
              height={350}
              className={`w-auto h-auto ${!loaded ? 'hidden' : ''}`}
              onLoadingComplete={() => setLoaded(true)}
              onError={() => setError(true)}
              priority
            />
          )}
          {!loaded && <ImageLoading widthPx={256} heightPx={384} />}
        </Suspense>
      </figure>
    </Link>
  );
};

export default Card;
