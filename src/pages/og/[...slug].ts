import { OGImageRoute } from 'astro-og-canvas';
import { getPublishedTermes } from '../../lib/termes';
import { CATEGORY_LABELS, RISC_LABELS } from '../../lib/categories';

const termes = await getPublishedTermes();
const pages = Object.fromEntries(termes.map((t) => [t.id, t.data]));

const RISC_RGB: Record<'baix' | 'mitja' | 'alt', [number, number, number]> = {
  baix: [47, 143, 91],
  mitja: [185, 130, 26],
  alt: [192, 57, 43],
};
const ACCENT_RGB: [number, number, number] = [29, 111, 140];

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_id, data) => {
    const labels = data.category.map((c) => CATEGORY_LABELS[c]);
    const eyebrow = labels.join(' · ') + (data.riscNivell ? ` — ${RISC_LABELS[data.riscNivell]}` : '');
    const summary = data.summary.length > 140 ? `${data.summary.slice(0, 137)}…` : data.summary;

    return {
      title: data.title,
      description: `${eyebrow}\n${summary}`,
      bgGradient: [
        [11, 30, 38],
        [29, 111, 140],
      ],
      border: {
        color: data.riscNivell ? RISC_RGB[data.riscNivell] : ACCENT_RGB,
        width: 14,
        side: 'block-start',
      },
      font: {
        title: { color: [255, 255, 255], size: 64, weight: 'Bold', families: ['Noto Sans'] },
        description: { color: [214, 222, 228], size: 32, weight: 'Normal', families: ['Noto Sans'] },
      },
      fonts: ['./src/assets/fonts/NotoSans-Regular.ttf', './src/assets/fonts/NotoSans-Bold.ttf'],
    };
  },
});
