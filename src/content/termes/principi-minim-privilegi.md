---
title: "Principi de mínim privilegi"
summary: "Donar a cada usuari o sistema només els permisos estrictament necessaris per fer la seva feina."
category: ["defensa"]
aliases: ["least privilege"]
relacionats: ["control-acces-trencat", "segmentacio-de-xarxa", "amenaca-interna"]
exemple: "Un empleat de comptabilitat no té accés al codi font de l'empresa perquè no li cal per a la seva feina."
riscNivell: "baix"
draft: false
---

El **principi de mínim privilegi** estableix que cada usuari, procés o sistema hauria de tenir només els permisos mínims necessaris per fer la seva funció, ni un de més.

El seu valor és limitar el dany potencial: si un compte amb pocs privilegis es veu compromès, l'atacant només pot fer allò que aquell compte tenia permès fer, en lloc de tenir accés a tot el sistema.

## Com aplicar-ho

Revisa periòdicament qui té accés a què i retira permisos que ja no calen. Evita treballar amb comptes d'administrador per a tasques del dia a dia que no ho requereixin.
