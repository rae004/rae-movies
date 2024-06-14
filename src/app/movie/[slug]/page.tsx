'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import getMovie from '@/app/api/getMovie';
import Loading from '@/components/Loading';
import Companies from '@/components/moviePage/Companies';
import Genres from '@/components/moviePage/Genres';
import Languages from '@/components/moviePage/Languages';
import Collection from '@/components/moviePage/Collection';
import ReleaseDate from '@/components/moviePage/ReleaseDate';
import Overview from '@/components/moviePage/Overview';
import Title from '@/components/moviePage/Title';
import Header from '@/components/header/Header';

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
  // todo replace fake setPage
  const setPage = (number: number) => console.log('setPage', number);

  return (
    <>
      <Header page={1} setPage={setPage} />
      <div className={'flex flex-row justify-between h-full py-5 gap-2'}>
        <div className={'flex flex-col w-[45%] justify-start gap-4'}>
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
          src={tmdbImageUrl + data.poster_path}
          alt={`${data.title} Poster`}
          width={650}
          height={650}
          quality={100}
        />
      </div>
    </>
  );
}
