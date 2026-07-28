---
title: "PKI (infraestructura de clau pública)"
summary: "Sistema de certificats i claus que permet xifrar comunicacions i verificar la identitat digital de persones o servidors."
category: ["criptografia"]
aliases: ["Public Key Infrastructure", "infraestructura de clau pública"]
relacionats: ["xifratge", "certificat-tls-ssl", "funcio-de-hash"]
exemple: "Quan visites una web amb HTTPS, el navegador comprova el seu certificat digital, emès dins d'una PKI, per confirmar que és qui diu ser."
draft: false
---

Una **PKI** és el conjunt de tecnologies, polítiques i entitats (les anomenades autoritats de certificació) que permeten emetre, gestionar i verificar certificats digitals basats en xifratge de clau pública. Cada certificat vincula una identitat —una persona, una empresa, un servidor— amb un parell de claus criptogràfiques: una pública, que es pot compartir, i una privada, que s'ha de mantenir secreta.

Els certificats TLS/SSL que fan possible el "cadenat" del navegador són l'exemple més quotidià d'una PKI en funcionament: sense ella, no hi hauria manera fiable de comprovar que una web és qui diu ser.
