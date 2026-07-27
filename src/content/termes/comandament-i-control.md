---
title: "C2 (Comandament i control)"
summary: "Infraestructura que un atacant fa servir per controlar remotament el malware o els dispositius compromesos d'una víctima."
category: ["atacs", "malware"]
aliases: ["C2", "C&C", "Command and Control", "servidor C2"]
relacionats: ["botnet", "rat", "amenaca-persistent-avancada"]
exemple: "Un malware infectat envia periòdicament senyals a un servidor extern esperant rebre'n noves ordres a executar."
riscNivell: "alt"
draft: false
---

La infraestructura de **comandament i control** (C2, de l'anglès *Command and Control*) és el canal que un atacant utilitza per comunicar-se amb el malware que ha instal·lat en un dispositiu compromès: enviar-li ordres, actualitzar-lo o rebre'n les dades robades. Sense C2, molt malware quedaria "mut", incapaç de fer res més enllà del que ja porta programat.

Per dificultar-ne la detecció, els atacants sovint amaguen aquest trànsit dins de serveis legítims —dominis de núvol coneguts, xarxes socials o, cada cop més, connexions que semblen sortir del navegador de la mateixa víctima— de manera que es confon amb trànsit normal i passa desapercebut pels controls de xarxa habituals.

## Com protegir-te

La detecció de C2 sol dependre d'eines especialitzades de monitorització de xarxa (com un XDR) capaces d'identificar patrons de comunicació anòmals, més enllà de bloquejar ports o dominis coneguts. Com a usuari, evitar la infecció inicial —mantenint el sistema actualitzat i desconfiant de fitxers i enllaços sospitosos— és la millor manera de no acabar formant part d'aquesta infraestructura.
