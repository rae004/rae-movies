'use client';

import Header from '@/components/header/Header';
import Talent from '@/components/talentPage/Talent';
import useTalentQuery from '@/lib/queries/talentQuery';

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
