# Diccionari de ciberseguretat

Glossari de termes de ciberseguretat explicats en català planer, pensat per a persones que no en són expertes (phishing, ransomware, XSS, sniffing...). Lloc estàtic fet amb [Astro](https://astro.build), pensat per allotjar-se a GitHub Pages.

## Estat actual

- **Contingut**: 61 termes redactats en català, amb frontmatter complet (categoria, alias, exemple, nivell de risc, termes relacionats).
- **Funcionalitats implementades**: cercador full-text (Pagefind), terme destacat aleatori a la home, índex alfabètic A-Z, llistat i pàgines per categoria, mode fosc amb persistència.
- **Desplegament**: workflow de GitHub Actions (`.github/workflows/deploy.yml`) que publica a GitHub Pages **només en crear un tag amb format `vX.X.X`** (p. ex. `v1.0.0`), no a cada push. Cal tenir Pages activat a Settings → Pages → Source = "GitHub Actions".
- **Verificat localment**: `npm run build` (Astro + Pagefind) i `astro check` sense errors; provat amb `astro preview`.

## Stack

- **Astro** (content collections amb Content Layer API) — cada terme és un fitxer Markdown a `src/content/termes/`.
- **Pagefind** — indexació i cerca full-text 100% client-side, generada en `npm run build`.
- **Sense backend ni base de dades**: tot es resol en build-time o al navegador (inclòs el terme destacat aleatori).

## Estructura

```
src/
├── content.config.ts        # schema Zod de la col·lecció "termes"
├── content/termes/*.md      # un fitxer per terme (nom de fitxer = slug/id)
├── layouts/                 # BaseLayout (head, tema), TermeLayout (fitxa de detall)
├── components/              # Header, Footer, ThemeToggle, SearchBox, TermeDestacat,
│                             # IndexAlfabetic, TermeCard, CategoriaBadge
├── lib/                     # categories.ts (etiquetes), url.ts (helper de base path)
├── pages/
│   ├── index.astro          # home
│   ├── termes/index.astro   # índex complet A-Z
│   ├── termes/[slug].astro  # fitxa de detall
│   ├── categories/          # llistat i pàgina per categoria
│   └── termes-index.json.ts # endpoint per al terme destacat
└── styles/global.css        # variables CSS clar/fosc
```

## Afegir un terme nou

Crea un fitxer `src/content/termes/<slug>.md` (el nom del fitxer és l'id canònic, s'hi referencien altres termes des de `relacionats`):

```yaml
---
title: "Nom del terme"
summary: "Definició curta (fins a 220 caràcters)."
category: ["atacs"]   # una o més de: atacs, malware, xarxes, autenticacio,
                       # privacitat-dades, criptografia, defensa,
                       # enginyeria-social, normativa-legal
aliases: ["sinònim"]        # opcional
relacionats: ["altre-slug"] # opcional, validat en build (falla si no existeix)
exemple: "Cas pràctic breu." # opcional
riscNivell: "alt"            # opcional: baix | mitja | alt
draft: false
---
Explicació llarga en català planer.
```

## Comandes

```bash
npm run dev       # servidor de desenvolupament (la cerca NO funciona aquí)
npm run build     # astro build + indexació de Pagefind → dist/
npm run preview   # serveix dist/ per provar build+cerca en local
npx astro check   # comprovació de tipus
```

## Desenvolupament local amb Docker

```bash
docker compose up      # arrenca el servidor de dev a http://localhost:4321/cyb-dicc/
docker compose up -d   # mateix, en segon pla
docker compose down    # atura i neteja el contenidor
```

No cal `npm install` previ ni tenir Node instal·lat a l'amfitrió: el contenidor (`node:22-alpine`) instal·la les dependències en un volum propi (`node_modules`) i munta el codi font en viu. Qualsevol canvi als fitxers de `src/content/termes/` (o a la resta del codi) es reflecteix immediatament sense reiniciar res, gràcies a `astro dev`. Nota: com amb `npm run dev`, el cercador (Pagefind) no funciona en aquest mode — cal `npm run build` + `npm run preview` per provar-lo.

## Fer una release (desplegar a producció)

El desplegament només s'activa amb un tag `vX.X.X`, no a cada push a `main`:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Pendent / properes passes

- Activar GitHub Pages (Settings → Pages → Source: GitHub Actions) al repo remot.
- Ampliar el glossari amb més termes a mesura que calgui.
