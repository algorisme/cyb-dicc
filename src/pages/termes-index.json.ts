import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const termes = await getCollection('termes', ({ data }) => !data.draft);
  const payload = termes
    .map((entry) => ({ id: entry.id, title: entry.data.title, summary: entry.data.summary }))
    .sort((a, b) => a.title.localeCompare(b.title, 'ca'));

  return new Response(JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });
};
