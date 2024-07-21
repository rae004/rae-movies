import type { useTalentQueryProps } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

async function getTalent({ ...props }: useTalentQueryProps) {
  const url = `${props.talentUrl}/?talentId=${props.talentId}`;
  const results = await fetch(url);
  return results.json();
}

export default function useTalentQuery({
  talentUrl = '/api/tmdb/talent',
  ...props
}: useTalentQueryProps) {
  return useQuery({
    queryFn: async () => await getTalent({ ...props, talentUrl }),
    queryKey: ['talent', props.talentId],
  });
}
