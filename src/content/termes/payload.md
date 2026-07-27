---
title: "Payload"
summary: "La part d'un atac que conté l'acció maliciosa real: el que fa mal un cop l'atac ha tingut èxit."
category: ["atacs", "malware"]
aliases: ["càrrega útil"]
relacionats: ["exploit", "ransomware", "troia"]
exemple: "Un exploit aconsegueix entrar al sistema; el payload és el codi que, un cop dins, xifra els fitxers o roba dades."
riscNivell: "mitja"
draft: false
---

El **payload** és la part d'un atac que conté l'acció maliciosa que realment causa dany: xifrar fitxers, robar dades, obrir una porta del darrere... És diferent del mètode que l'ha fet arribar (un exploit, un correu de phishing, un fitxer USB): el vector d'entrada és "com hi arriba", el payload és "què fa un cop hi és".

Un mateix atac pot reutilitzar la mateixa tècnica d'entrada però variar el payload —o el mateix payload es pot distribuir per vies diferents—, precisament per dificultar que les eines de seguretat, que sovint detecten per signatures conegudes, el reconeguin.

## Com protegir-te

Com que el payload pot canviar constantment, no n'hi ha prou de confiar només en la detecció per signatures: cal combinar-ho amb anàlisi de comportament (sandbox, EDR/XDR) i, sobretot, evitar que el vector d'entrada (phishing, vulnerabilitats sense pedaçar) tingui èxit en primer lloc.
