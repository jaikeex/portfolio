import { useQuery } from '@tanstack/react-query';
import { client } from 'client';

export const useSanityData = (type: string) =>
  useQuery({
    queryKey: [type],
    queryFn: async () => {
      const query = `*[_type == "${type}"]`;
      const response = await client.fetch(query);
      return response;
    }
  });
