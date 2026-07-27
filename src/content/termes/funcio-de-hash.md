---
title: "Funció de hash"
summary: "Algorisme que converteix qualsevol dada en una cadena curta i única, impossible de revertir."
category: ["criptografia"]
aliases: ["hash", "funció resum"]
relacionats: ["xifratge", "contrasenya"]
exemple: "Un servei no guarda la teva contrasenya real, sinó el resultat de passar-la per una funció de hash; ni ell mateix la pot recuperar."
draft: false
---

Una **funció de hash** és un algorisme que transforma qualsevol quantitat de dades en una cadena de longitud fixa i aparentment aleatòria (el "hash"), de manera que la mateixa entrada sempre produeix el mateix resultat, però és pràcticament impossible desfer el procés per recuperar la dada original.

S'utilitza sobretot per guardar contrasenyes de manera segura (el servei només emmagatzema el hash, no la contrasenya real) i per verificar que un fitxer no s'ha modificat: si canvia una sola lletra, el hash resultant és completament diferent.

## Per què importa

A diferència del xifratge, un hash no es pot "desxifrar": per això és l'eina adequada per guardar contrasenyes, mentre que el xifratge s'utilitza quan cal poder recuperar la dada original.
