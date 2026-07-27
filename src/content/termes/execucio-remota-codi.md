---
title: "RCE (Execució remota de codi)"
summary: "Vulnerabilitat que permet a un atacant executar codi arbitrari en un sistema remot, sense accés físic ni credencials vàlides."
category: ["atacs"]
aliases: ["RCE", "Remote Code Execution", "execució de codi remot"]
relacionats: ["exploit", "escalada-de-privilegis", "webshell", "zero-day"]
exemple: "Una aplicació web accepta un fitxer sense validar-ne el contingut; l'atacant hi amaga codi que el servidor acaba executant."
riscNivell: "alt"
draft: false
---

Una vulnerabilitat d'**execució remota de codi** (RCE, de l'anglès *Remote Code Execution*) permet a un atacant fer córrer les seves pròpies instruccions en un ordinador o servidor aliè, sense necessitar-hi accés físic ni cap credencial vàlida. Sol aparèixer quan una aplicació processa dades d'entrada (un formulari, un fitxer pujat, una capçalera de xarxa) sense validar-les prou.

És un dels tipus de vulnerabilitat més greus que existeixen: un cop aconseguida l'execució de codi, l'atacant pot instal·lar malware, robar dades, moure's cap a altres sistemes de la xarxa o deixar un webshell per tornar-hi més endavant. Moltes de les intrusions més notòries dels últims anys comencen amb un RCE sense pedaçar en un sistema exposat a Internet.

## Com protegir-te

Mantén tot el programari i els sistemes exposats a Internet actualitzats amb els últims pedaços de seguretat, i limita al màxim els serveis que calgui exposar directament a la xarxa. Com a usuari particular, actualitzar el sistema operatiu i les aplicacions és la millor defensa contra aquest tipus de vulnerabilitat.
