import { client } from 'utils/sanity-client';

export const fetchSanityData = async (type: string) => {
  const query = `*[_type=="${type}"] | order(importance asc)`;
  const response = await client.fetch(query);
  return response;
};
