---
title: "Tokenització"
summary: "Tècnica que substitueix una dada sensible per un identificador (token) sense valor fora del sistema que el va generar."
category: ["criptografia", "privacitat-dades"]
aliases: ["tokenization"]
relacionats: ["xifratge", "pii"]
exemple: "En pagar en línia, el número real de la targeta de crèdit no s'emmagatzema: el comerç només guarda un token que només el banc pot associar a la targeta original."
draft: false
---

La **tokenització** substitueix una dada sensible —un número de targeta, un identificador personal— per un valor equivalent (un *token*) que no té cap significat ni valor fora del sistema que l'ha generat i que sap com desfer la substitució.

A diferència del xifratge, on la dada original es pot recuperar matemàticament amb la clau adequada, un token sol ser un identificador aleatori sense cap relació matemàtica amb la dada real: encara que algú robi els tokens emmagatzemats, no en pot extreure la informació original sense accedir també al sistema que fa la conversió.
