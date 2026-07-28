---
title: "Atac de força bruta"
summary: "Tècnica que prova sistemàticament totes les combinacions possibles de contrasenya fins encertar-la."
category: ["atacs", "autenticacio"]
aliases: ["brute force attack", "força bruta"]
relacionats: ["contrasenya", "gestor-de-contrasenyes", "autenticacio-dos-factors"]
exemple: "Un programa prova milers de contrasenyes per segon contra un formulari d'inici de sessió que no limita els intents."
riscNivell: "mitja"
draft: false
---

Un **atac de força bruta** consisteix a provar, de manera automatitzada i sistemàtica, moltes combinacions de contrasenya fins trobar la correcta. Pot fer-se provant totes les combinacions possibles, o —més eficient— provant primer contrasenyes filtrades en bretxes anteriors (un enfocament conegut com *credential stuffing*).

Com més curta i senzilla és una contrasenya, menys temps triga un atac de força bruta a encertar-la.

## Com protegir-te

Fes servir contrasenyes llargues i úniques per a cada servei (idealment amb un gestor de contrasenyes), activa l'autenticació de dos factors i, com a organització, limita el nombre d'intents d'inici de sessió permesos.
