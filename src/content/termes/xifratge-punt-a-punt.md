---
title: "Xifratge de punt a punt"
summary: "Xifratge en què només l'emissor i el receptor poden llegir el missatge, ni tan sols el servei intermediari."
category: ["criptografia"]
aliases: ["end-to-end encryption", "E2EE"]
relacionats: ["xifratge", "metadades"]
exemple: "Una app de missatgeria amb xifratge de punt a punt que ni la mateixa empresa que la fabrica pot llegir el contingut dels teus missatges."
draft: false
---

El **xifratge de punt a punt** és una forma de xifratge en què el missatge es xifra al dispositiu de l'emissor i només es pot desxifrar al dispositiu del receptor: cap servidor intermediari pel qual passi la comunicació —ni tan sols el proveïdor del servei— té la clau per llegir-ne el contingut.

Es diferencia del xifratge "en trànsit" (com el que ofereix HTTPS), en què el servidor intermediari sí que pot arribar a veure les dades en algun punt del procés.

## Com aplicar-ho

Tria aplicacions de missatgeria que ofereixin xifratge de punt a punt per defecte, i recorda que, tot i xifrar el contingut, les metadades de la comunicació (qui parla amb qui i quan) sovint no queden protegides igual.
