import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'atacs',
  'malware',
  'xarxes',
  'autenticacio',
  'privacitat-dades',
  'criptografia',
  'defensa',
  'enginyeria-social',
  'normativa-legal',
] as const;

const termes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/termes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    category: z.array(z.enum(CATEGORIES)).min(1),
    aliases: z.array(z.string()).optional(),
    // Lletres addicionals per a l'índex A-Z, a més de la inicial del títol.
    // Útil per a termes amb acrònim en anglès i traducció catalana amb inicials diferents
    // (p. ex. VPN → V, però "xarxa privada virtual" → X).
    lletresIndex: z.array(z.string().length(1)).optional(),
    relacionats: z.array(reference('termes')).optional(),
    exemple: z.string().optional(),
    riscNivell: z.enum(['baix', 'mitja', 'alt']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { termes };
