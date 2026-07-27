import { CATEGORIES } from '../content.config';

export type Categoria = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Categoria, string> = {
  atacs: 'Atacs',
  malware: 'Malware',
  xarxes: 'Xarxes',
  autenticacio: 'Autenticació',
  'privacitat-dades': 'Privacitat i dades',
  criptografia: 'Criptografia',
  defensa: 'Defensa',
  'enginyeria-social': 'Enginyeria social',
  'normativa-legal': 'Normativa i legal',
};

export const RISC_LABELS: Record<'baix' | 'mitja' | 'alt', string> = {
  baix: 'Risc baix',
  mitja: 'Risc mitjà',
  alt: 'Risc alt',
};
