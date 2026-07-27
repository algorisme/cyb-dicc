---
title: "CVSS (Common Vulnerability Scoring System)"
summary: "Sistema estàndard que puntua de 0 a 10 la gravetat d'una vulnerabilitat, segons com és de fàcil i greu explotar-la."
category: ["defensa", "atacs"]
aliases: ["Common Vulnerability Scoring System", "puntuació CVSS"]
relacionats: ["cve", "exploit"]
exemple: "Una vulnerabilitat amb CVSS 9.3 es considera crítica i sol prioritzar-se per damunt de qualsevol altra tasca de manteniment."
draft: false
---

El **CVSS** (*Common Vulnerability Scoring System*) és un estàndard obert que assigna una puntuació de 0 a 10 a cada vulnerabilitat, en funció de factors com la facilitat per explotar-la remotament, si cal interacció de la víctima, i quin impacte té sobre la confidencialitat, la integritat o la disponibilitat del sistema afectat.

Com més alta la puntuació, més urgent és aplicar-hi un pedaç: per sota de 4 es considera baixa gravetat, entre 4 i 7 mitjana, entre 7 i 9 alta, i per sobre de 9 crítica. Aquesta escala acompanya gairebé sempre un identificador CVE i és l'eina de referència que fan servir els equips de seguretat per decidir per on començar quan hi ha desenes de vulnerabilitats pendents de corregir.

## Per què és útil

Sense una mètrica comuna, cada organització prioritzaria els pedaços de manera diferent. El CVSS dona un llenguatge compartit que permet comparar la gravetat de vulnerabilitats molt diferents entre si i automatitzar decisions, com bloquejar un desplegament fins que es corregeixi tot allò puntuat per sobre d'un cert llindar.
