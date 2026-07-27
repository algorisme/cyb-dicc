---
title: "Atac a la cadena de subministrament"
summary: "Comprometre un proveïdor o component de tercers per infectar totes les empreses que en depenen."
category: ["atacs"]
aliases: ["supply chain attack"]
relacionats: ["amenaca-persistent-avancada", "exploit", "pedac-de-seguretat"]
exemple: "Un atacant infecta una llibreria de programari molt utilitzada; totes les apps que la incorporen queden compromeses sense saber-ho."
riscNivell: "alt"
draft: false
---

Un **atac a la cadena de subministrament** no ataca directament la víctima final, sinó un proveïdor, component o eina que aquesta utilitza —una llibreria de codi, un actualitzador de programari, un servei extern. En comprometre aquest punt intermedi, l'atacant pot infectar de cop totes les organitzacions que en depenen.

Aquest tipus d'atac és especialment perillós perquè aprofita la confiança: les empreses solen confiar cegament en el codi i les actualitzacions dels seus proveïdors, sense revisar-los amb el mateix escrutini que el seu propi codi.

## Com protegir-te

Verifica l'origen i la integritat de les dependències i actualitzacions que incorpores, limita els permisos que atorgues a eines de tercers i mantén un inventari de tot el programari extern del qual depens.
