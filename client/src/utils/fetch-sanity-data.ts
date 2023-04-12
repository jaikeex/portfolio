import { client } from 'client';

export const fetchSanityData = async (type: string) => {
  const query = `*[_type=="${type}"]`;
  const response = await client.fetch(query);
  return response;
};
