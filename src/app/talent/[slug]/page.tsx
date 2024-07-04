'use client';

import { useTalentQuery } from '@/lib/queries';
import MovieLoading from '@/components/loading/MovieLoading';

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useTalentQuery({
    talentId: params.slug,
  });

  if (isLoading) return <MovieLoading />;
  if (isError) return <div>Sorry There was an Error</div>;
  if (data && 'success' in data && !data.success) {
    return <div>Sorry, No Movie Found for ID: {params.slug}</div>;
  }

  return (
    <>
      {/*<Header {...headerProps} />*/}
      <h1>IAM A PERSON!!!! {params.slug}</h1>
    </>
  );
}
