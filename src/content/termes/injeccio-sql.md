---
title: "Injecció SQL"
summary: "Vulnerabilitat que permet manipular consultes a una base de dades introduint codi SQL maliciós."
category: ["atacs"]
aliases: ["SQL injection", "SQLi"]
relacionats: ["xss", "csrf"]
exemple: "Escriure codi SQL dins d'un formulari de login per saltar-se l'autenticació sense conèixer cap contrasenya."
riscNivell: "alt"
draft: false
---

La **injecció SQL** és una vulnerabilitat que apareix quan una aplicació incorpora dades introduïdes per l'usuari directament dins d'una consulta a la base de dades, sense validar-les ni tractar-les correctament. Això permet a un atacant "injectar" codi SQL propi i manipular la consulta original.

Amb aquesta tècnica es pot arribar a llegir, modificar o esborrar dades de tota la base de dades —incloent-hi contrasenyes o informació de tots els usuaris— i, en casos greus, fins i tot obtenir control del servidor.

## Com protegir-te

És responsabilitat de qui desenvolupa l'aplicació: utilitzar consultes parametritzades i validar tota entrada d'usuari. Com a usuari final, no hi ha res a fer directament, més enllà de triar serveis que prenguin la seguretat seriosament.
