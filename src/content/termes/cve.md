---
title: "CVE"
summary: "Identificador únic i públic assignat a cada vulnerabilitat coneguda, per poder-la referenciar de manera inequívoca."
category: ["atacs", "defensa"]
aliases: ["Common Vulnerabilities and Exposures"]
relacionats: ["cvss", "zero-day", "pedac-de-seguretat", "exploit"]
exemple: "Un fabricant publica un pedaç i, al comunicat, hi indica el codi CVE-2026-12569 perquè tothom pugui identificar exactament quina falla corregeix."
draft: false
---

**CVE** (de l'anglès *Common Vulnerabilities and Exposures*) és un sistema públic i gratuït que assigna un identificador únic a cada vulnerabilitat de seguretat coneguda —amb el format CVE-any-número—, de manera que fabricants, investigadors i eines de seguretat de tot el món puguin parlar exactament de la mateixa falla sense ambigüitat.

Un identificador CVE no diu per si sol com de greu és el problema: només l'anomena i el descriu breument. Per saber-ne la gravetat cal mirar la puntuació CVSS que sol acompanyar-lo, i per saber si ja s'explota activament, catàlegs com el KEV (*Known Exploited Vulnerabilities*) que manté l'agència nord-americana CISA.

## Per què és útil

Disposar d'un identificador comú permet prioritzar quins pedaços aplicar primer, seguir l'evolució d'una amenaça a través de diferents fonts i comprovar ràpidament si un sistema propi es veu afectat per una vulnerabilitat que surt a les notícies.
