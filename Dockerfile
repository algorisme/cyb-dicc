FROM node:22-alpine

# S'actualitza npm en build-time (no a cada arrencada) perquè min-release-age
# (.npmrc) requereix >=11.10.0, superior a la que porta la imatge per
# defecte. Fer-ho aquí ho deixa cachejat a la imatge i evita dependre de
# xarxa cada cop que s'aixeca el contenidor.
RUN npm install -g npm@latest

WORKDIR /app
