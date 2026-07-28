---
title: "Threat hunting"
summary: "Recerca activa i manual d'amenaces que ja podrien estar dins d'un sistema, sense esperar que una alerta automàtica les detecti."
category: ["defensa"]
aliases: ["caça d'amenaces"]
relacionats: ["ioc", "siem", "mitre-attack"]
exemple: "Un analista busca manualment patrons estranys als registres, sospitant que un atacant porta setmanes movent-se sense ser detectat."
draft: false
---

El **threat hunting** consisteix a buscar activament senyals d'un atacant que ja podria ser dins dels sistemes, en lloc d'esperar que una eina automàtica (com el SIEM o l'EDR) generi una alerta. Parteix de la idea que cap defensa és perfecta i que, especialment en atacs sofisticats i persistents, l'atacant pot passar temps sense activar cap detecció automàtica.

Un analista de threat hunting formula hipòtesis ("i si algú ha fet servir aquesta tècnica concreta del marc ATT&CK?") i les contrasta manualment amb els registres disponibles, buscant indicis subtils que els sistemes automàtics podrien haver passat per alt.
