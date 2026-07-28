import { CATEGORY_LABELS, RISC_LABELS, type Categoria } from './categories';

interface DefinedTermInput {
  id: string;
  title: string;
  summary: string;
  category: Categoria[];
  aliases?: string[];
  riscNivell?: 'baix' | 'mitja' | 'alt';
  url: string;
  definedTermSetUrl: string;
}

export function buildDefinedTermJsonLd(t: DefinedTermInput): Record<string, unknown> {
  const labels = t.category.map((c) => CATEGORY_LABELS[c]);
  const disambiguatingParts = [`Categoria: ${labels.join(', ')}.`];
  if (t.riscNivell) disambiguatingParts.push(`Nivell de risc: ${RISC_LABELS[t.riscNivell]}.`);

  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${t.url}#term`,
    name: t.title,
    description: t.summary,
    url: t.url,
    termCode: t.id,
    inDefinedTermSet: `${t.definedTermSetUrl}#definedtermset`,
    ...(t.aliases && t.aliases.length > 0 ? { alternateName: t.aliases } : {}),
    about: labels.map((name) => ({ '@type': 'Thing', name })),
    disambiguatingDescription: disambiguatingParts.join(' '),
  };
}

interface DefinedTermSetInput {
  name: string;
  description: string;
  url: string;
  termes: { title: string; url: string }[];
}

export function buildDefinedTermSetJsonLd(t: DefinedTermSetInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${t.url}#definedtermset`,
    name: t.name,
    description: t.description,
    url: t.url,
    inLanguage: 'ca',
    hasDefinedTerm: t.termes.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `${term.url}#term`,
      name: term.title,
      url: term.url,
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
