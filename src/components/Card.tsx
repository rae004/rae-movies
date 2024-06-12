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
    <Link
      href={href}
      className="card bg-base-100 p-1 pb-4 group hover:bg-accent duration-500"
    >
      <div className="card-body px-4 pb-4">
        <h2 className="text-xl line-clamp-2 group-hover:text-accent-content">
          {title}
        </h2>
      </div>
      <figure>
        <Image
          src={imgUrl + image}
          alt={`${title} Poster`}
          width={250}
          height={350}
        />
      </figure>
    </Link>
  );
};

export default Card;
