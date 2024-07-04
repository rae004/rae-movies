'use client';

import { useTalentQuery } from '@/lib/queries';
import Talent from '@/components/talentPage/Talent';
import Header from '@/components/header/Header';

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useTalentQuery({
    talentId: params.slug,
  });

  const talentProps = {
    data,
    isLoading,
    isError,
    slug: params.slug,
  };

  return (
    <>
      <Header />
      <Talent {...talentProps} />
    </>
  );
}
