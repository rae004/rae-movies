import { useQuery } from '@tanstack/react-query';

export default function useCertificationCountriesQuery() {
  return useQuery({
    queryKey: ['countryAndCertification'],
    queryFn: async () => {
      const results = await fetch('/api/tmdb/countryAndCertifications', {
        method: 'GET',
      });
      return await results.json();
    },
  });
}
