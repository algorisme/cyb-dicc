---
title: "Escaneig de ports"
summary: "Sondejar un sistema per descobrir quins serveis té oberts i podrien ser vulnerables."
category: ["xarxes", "atacs"]
aliases: ["port scanning"]
relacionats: ["tallafoc", "zero-day", "superficie-atac", "test-de-penetracio"]
exemple: "Un atacant escaneja totes les adreces IP d'una empresa buscant servidors amb serveis mal configurats i oberts."
riscNivell: "baix"
draft: false
---

L'**escaneig de ports** és la tècnica de comprovar sistemàticament quins "ports" (punts de connexió) d'un ordinador o servidor estan oberts i quins serveis hi escolten, per identificar possibles punts d'entrada a explotar.

No és un atac en si mateix —també l'utilitzen els equips de seguretat per auditar els seus propis sistemes—, però sol ser el primer pas d'un atac més ampli: un cop l'atacant sap quins serveis estan exposats, pot buscar-hi vulnerabilitats conegudes.

## Com protegir-te

Tanca o restringeix qualsevol port i servei que no sigui estrictament necessari, i utilitza un tallafoc per controlar quines connexions s'accepten des de l'exterior.
