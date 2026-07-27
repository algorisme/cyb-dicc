---
title: "Control d'accés trencat"
summary: "Falla que permet a un usuari accedir a dades o funcions que no li haurien de correspondre."
category: ["atacs", "defensa"]
aliases: ["broken access control"]
relacionats: ["configuracio-erronia-seguretat", "principi-minim-privilegi"]
exemple: "Canviar un número a la URL (d'un ID de factura 1001 a 1002) i poder veure la factura d'un altre client."
riscNivell: "alt"
draft: false
---

El **control d'accés trencat** passa quan una aplicació no comprova correctament si un usuari té permís real per fer una acció o veure una dada concreta, més enllà d'haver iniciat sessió. És una de les vulnerabilitats més comunes i greus en aplicacions web.

Un exemple típic és poder accedir a informació d'altres usuaris simplement canviant un identificador a la URL, sense que el sistema verifiqui si aquella informació et pertany.

## Com protegir-te

Com a usuari, tanca sessió en acabar i informa l'empresa si detectes que pots veure dades que no haurien de ser teves. La correcció real —verificar permisos en cada petició al servidor— és responsabilitat de qui desenvolupa l'aplicació.
