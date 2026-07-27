---
title: "Certificat TLS/SSL"
summary: "Document digital que xifra la connexió a una web i en verifica la identitat (el 'cadenat' del navegador)."
category: ["criptografia", "xarxes"]
aliases: ["certificat SSL", "HTTPS"]
relacionats: ["xifratge", "man-in-the-middle", "sniffing"]
exemple: "El candauet que veus a la barra d'adreces del navegador indica que la connexió amb aquella web està xifrada amb un certificat vàlid."
draft: false
---

Un **certificat TLS/SSL** és un document digital, emès per una entitat de confiança, que permet a un lloc web demostrar la seva identitat i establir una connexió xifrada amb el navegador de qui el visita. És la tecnologia darrere del "cadenat" i el prefix `https://` que veus a la barra d'adreces.

Sense aquest xifratge, qualsevol dada que enviïs a una web —contrasenyes incloses— podria viatjar en text pla i ser interceptada per algú que estigui escoltant la xarxa.

## Com aplicar-ho

Comprova sempre que les webs on introdueixes dades sensibles utilitzin HTTPS, i desconfia d'avisos del navegador que indiquin que un certificat no és vàlid o de confiança.
