---
title: "Escalada de privilegis"
summary: "Tècnica per aconseguir més permisos dels que un usuari o procés hauria de tenir, fins arribar a control total del sistema."
category: ["atacs"]
aliases: ["privilege escalation"]
relacionats: ["principi-minim-privilegi", "exploit", "rootkit"]
exemple: "Un atacant que ha entrat amb un usuari sense privilegis explota una falla del sistema operatiu per convertir-se en administrador."
riscNivell: "alt"
draft: false
---

L'**escalada de privilegis** és la tècnica que fa servir un atacant per aconseguir més permisos dels que li correspondrien, un cop ja ha aconseguit algun tipus d'accés inicial a un sistema. L'objectiu sol ser arribar a privilegis d'administrador o SYSTEM, que donen control total sobre l'equip.

Es distingeix entre escalada vertical —passar d'usuari normal a administrador— i horitzontal —accedir als recursos d'un altre usuari del mateix nivell de privilegis. Sovint aprofita vulnerabilitats del sistema operatiu, configuracions massa permissives o errors en com una aplicació gestiona els permisos.

## Com protegir-te

Aplicar el principi de mínim privilegi (donar a cada usuari i procés només els permisos estrictament necessaris), mantenir el sistema actualitzat i separar els comptes d'ús diari dels d'administració redueix molt la finestra d'oportunitat per a aquest tipus d'atac.
