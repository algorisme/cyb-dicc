---
title: "XSS (Cross-Site Scripting)"
summary: "Vulnerabilitat web que permet injectar codi maliciós que s'executa al navegador d'altres usuaris."
category: ["atacs"]
aliases: ["Cross-Site Scripting"]
relacionats: ["injeccio-sql", "csrf"]
exemple: "Un comentari en un fòrum que conté codi que, en ser vist per altres usuaris, els roba la sessió."
riscNivell: "mitja"
draft: false
---

**XSS (Cross-Site Scripting)** és una vulnerabilitat en aplicacions web que permet a un atacant injectar codi (normalment JavaScript) que s'executa al navegador d'altres usuaris quan visiten la pàgina afectada.

Passa quan una web mostra contingut introduït per un usuari (un comentari, un camp de cerca...) sense filtrar-lo o "escapar-lo" correctament. Amb això, un atacant pot robar sessions, redirigir a webs falses o modificar el que veu la víctima.

## Com protegir-te

Com a usuari, mantén el navegador actualitzat i desconfia d'enllaços sospitosos amb paràmetres estranys. Com a desenvolupador, cal escapar sempre el contingut generat per l'usuari abans de mostrar-lo (i és responsabilitat del lloc web, no de qui el visita).
