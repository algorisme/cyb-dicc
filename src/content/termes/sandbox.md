---
title: "Sandbox"
summary: "Entorn aïllat on es pot executar codi sospitós sense risc per a la resta del sistema."
category: ["defensa"]
aliases: ["entorn aïllat", "caixa de sorra"]
relacionats: ["honeypot", "antivirus", "malware-sense-fitxers"]
exemple: "Un antivirus que executa un fitxer sospitós dins d'un sandbox per veure què fa abans de permetre'l al sistema real."
draft: false
---

Un **sandbox** ("caixa de sorra") és un entorn aïllat i controlat on es pot executar un programa o obrir un fitxer sospitós sense que pugui afectar la resta del sistema. Si resulta ser maliciós, els danys queden contingut dins d'aquest espai tancat.

S'utilitza tant en eines de seguretat (per analitzar automàticament si un fitxer és maliciós abans de deixar-lo passar) com en el disseny d'aplicacions i navegadors, que sovint executen contingut no confiable en un sandbox per limitar-ne l'impacte.

## Com aplicar-ho

Molts navegadors i sistemes operatius ja incorporen sandboxing per defecte; a nivell d'usuari, mantenir-los actualitzats assegura que aquesta protecció funcioni correctament.
