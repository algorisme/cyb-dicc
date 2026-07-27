---
title: "Segmentació de xarxa"
summary: "Dividir una xarxa en parts aïllades perquè un problema en una no es propagui a la resta."
category: ["defensa", "xarxes"]
relacionats: ["tallafoc", "principi-minim-privilegi", "cuc-informatic"]
exemple: "La xarxa de les càmeres de seguretat d'una empresa està separada de la xarxa on hi ha els ordinadors amb dades sensibles."
draft: false
---

La **segmentació de xarxa** consisteix a dividir una xarxa en parts més petites i aïllades entre si, de manera que el trànsit entre segments quedi controlat i limitat, normalment mitjançant tallafocs interns.

El seu valor principal és la contenció: si un dispositiu d'un segment queda compromès —per exemple, per un cuc informàtic que es propaga sol—, la segmentació dificulta que el problema salti a la resta de la xarxa.

## Com aplicar-ho

Separa xarxes segons criticitat i funció (per exemple, dispositius IoT, xarxa de convidats i xarxa corporativa en segments diferents) i limita explícitament quines connexions es permeten entre segments.
