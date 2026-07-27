---
title: "Configuració errònia de seguretat"
summary: "Deixar un sistema amb valors per defecte, permisos oberts o serveis innecessaris exposats."
category: ["atacs", "defensa"]
aliases: ["security misconfiguration"]
relacionats: ["control-acces-trencat", "superficie-atac", "pedac-de-seguretat"]
exemple: "Un servidor al núvol amb l'emmagatzematge de dades obert a tothom perquè ningú va canviar la configuració per defecte."
riscNivell: "alt"
draft: false
---

Una **configuració errònia de seguretat** no és una vulnerabilitat de codi, sinó un error humà a l'hora de configurar un sistema: deixar contrasenyes per defecte sense canviar, serveis innecessaris oberts a internet, permisos massa amplis o missatges d'error que revelen informació interna.

És una de les causes més freqüents de filtracions de dades, precisament perquè no cal cap tècnica sofisticada per explotar-la: només cal que algú trobi la porta que es va deixar oberta per descuit.

## Com protegir-te

Revisa i endureix la configuració per defecte de qualsevol servei abans de posar-lo en producció, desactiva tot el que no s'utilitzi i automatitza auditories periòdiques de configuració.
