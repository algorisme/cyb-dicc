import { getCollection } from 'astro:content';

export async function getPublishedTermes() {
  return getCollection('termes', ({ data }) => !data.draft);
}
