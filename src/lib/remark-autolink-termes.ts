import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { findAndReplace } from 'mdast-util-find-and-replace';
import type { Root } from 'mdast';
import type { VFile } from 'vfile';

const TERMES_DIR = path.resolve('./src/content/termes');

interface TermRef {
  label: string;
  slug: string;
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Detecta títols amb forma "ACRÒNIM (Nom complet)" (p. ex. "XSS (Cross-Site
// Scripting)", "DDoS (Denegació de servei distribuïda)") per afegir també
// l'acrònim sol com a patró, sense necessitat de duplicar-lo als aliases.
const ACRONYM_PREFIX = /^([A-Za-z][A-Za-z0-9]{1,9})\s*\(/;

function extractAcronym(title: string | undefined): string | null {
  if (!title) return null;
  const match = ACRONYM_PREFIX.exec(title);
  if (!match) return null;
  const candidate = match[1];
  const uppercaseCount = (candidate.match(/[A-Z]/g) ?? []).length;
  return uppercaseCount >= 2 ? candidate : null;
}

function loadTermRefs(): TermRef[] {
  const refs: TermRef[] = [];
  const files = fs.readdirSync(TERMES_DIR).filter((f) => f.endsWith('.md'));

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(TERMES_DIR, file), 'utf-8');
    const { data } = matter(raw);
    if (data.draft) continue;

    const names: string[] = [data.title, ...(data.aliases ?? [])].filter(Boolean);
    const acronym = extractAcronym(data.title);
    if (acronym) names.push(acronym);

    for (const label of names) {
      refs.push({ label, slug });
    }
  }

  // Termes més llargs primer, perquè coincidències com "spear-phishing" es
  // prefereixin abans que la subcadena més curta "phishing".
  refs.sort((a, b) => b.label.length - a.label.length);
  return refs;
}

function slugFromFile(file: VFile): string | undefined {
  const filePath = file.history[0] ?? file.path;
  if (!filePath) return undefined;
  return path.basename(filePath).replace(/\.md$/, '');
}

/**
 * Plugin de remark que enllaça automàticament, dins del cos de cada terme,
 * la primera menció de qualsevol altre terme del glossari (per títol o àlies)
 * cap a la seva pròpia fitxa. Mai enllaça un terme amb si mateix.
 */
export function remarkAutolinkTermes() {
  const refs = loadTermRefs();

  return (tree: Root, file: VFile) => {
    const currentSlug = slugFromFile(file);
    const linkedSlugs = new Set<string>();

    // Límits de paraula amb propietats Unicode: evita que "APT" coincideixi
    // dins de "adaptar", o "art" dins de "atacar", per exemple.
    const alternation = refs.map((r) => escapeRegExp(r.label)).join('|');
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}])(?:${alternation})(?![\\p{L}\\p{N}])`, 'giu');

    findAndReplace(
      tree,
      [
        pattern,
        (matched: string) => {
          const ref = refs.find((r) => r.label.toLowerCase() === matched.toLowerCase());
          if (!ref || ref.slug === currentSlug || linkedSlugs.has(ref.slug)) {
            return false; // deixa el text tal qual, sense enllaç
          }
          linkedSlugs.add(ref.slug);
          return {
            type: 'link',
            url: `../${ref.slug}/`,
            children: [{ type: 'text', value: matched }],
          };
        },
      ],
      { ignore: ['link', 'linkReference', 'heading', 'code', 'inlineCode'] }
    );
  };
}
