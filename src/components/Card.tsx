'use client';

import Link from 'next/link';
import Image from 'next/image';

const imgUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

const Card = ({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) => {
  return (
    <span className="p-5">
      <Link href={href} className={'flex flex-col h-[350px] justify-between'}>
        <h2 className="line-clamp-2">{title}</h2>
        <Image
          src={imgUrl + image}
          alt={`${title} Poster`}
          width={250}
          height={350}
        />
      </Link>
    </span>
  );
};

export default Card;
