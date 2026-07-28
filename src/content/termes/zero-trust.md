---
title: "Zero Trust"
summary: "Model de seguretat que parteix de la base que cap usuari ni dispositiu és de confiança per defecte, ni tan sols dins la xarxa corporativa."
category: ["defensa", "xarxes"]
aliases: ["confiança zero", "Zero Trust Architecture"]
relacionats: ["segmentacio-de-xarxa", "principi-minim-privilegi", "autenticacio-dos-factors"]
exemple: "Un empleat ha de tornar a verificar la seva identitat i el seu dispositiu cada vegada que accedeix a una aplicació interna, encara que ja estigui connectat a la xarxa de l'oficina."
draft: false
---

**Zero Trust** és un enfocament de seguretat que trenca amb la idea clàssica del "castell amb muralla": abans, un cop dins la xarxa corporativa, es confiava per defecte en tot el que hi havia connectat. Amb Zero Trust, en canvi, cap usuari, dispositiu o aplicació es considera de confiança pel simple fet d'estar-hi dins —cal verificar-ho tot, cada vegada.

A la pràctica, això vol dir combinar autenticació forta, accessos limitats al mínim necessari (principi de mínim privilegi) i xarxes segmentades, de manera que un atacant que aconsegueixi entrar en un punt no pugui moure's lliurement per la resta del sistema.

## Com s'aplica

Cada sol·licitud d'accés es reavalua segons qui la fa, des de quin dispositiu, des d'on i en quin moment, en lloc de donar per fet que "ja hi és, doncs és de confiança".
