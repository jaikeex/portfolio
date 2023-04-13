import { useQuery } from '@tanstack/react-query';
import { client } from 'client';

export const useSanityData = <T>(type: string) =>
  useQuery<T>({
    queryKey: [type],
    queryFn: async () => {
      const query = `*[_type == "${type}"]`;
      const response = await client.fetch(query);
      return response;
    }
  });
