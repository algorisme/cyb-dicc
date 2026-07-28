---
title: "IDS/IPS (sistemes de detecció i prevenció d'intrusions)"
summary: "Sistemes que vigilen el trànsit de xarxa per detectar (IDS) o bloquejar activament (IPS) activitat sospitosa."
category: ["defensa", "xarxes"]
aliases: ["Intrusion Detection System", "Intrusion Prevention System", "IDS", "IPS"]
relacionats: ["tallafoc", "siem", "escaneig-de-ports"]
exemple: "L'IPS talla automàticament una connexió en detectar un patró típic d'escaneig de ports massiu."
draft: false
---

Un **IDS** (*Intrusion Detection System*) analitza el trànsit d'una xarxa a la recerca de patrons que indiquin un possible atac —un escaneig de ports, l'ús d'un exploit conegut— i avisa l'equip de seguretat. Un **IPS** (*Intrusion Prevention System*) fa el mateix però un pas més enllà: pot bloquejar automàticament el trànsit sospitós sense esperar intervenció humana.

Sovint es despleguen junts amb el tallafoc, com una segona capa que ja no només filtra per regles fixes sinó que busca comportaments anòmals.
