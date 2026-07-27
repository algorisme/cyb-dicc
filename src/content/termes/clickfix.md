---
title: "ClickFix"
summary: "Enginy que convenç la víctima de copiar i executar ella mateixa una ordre maliciosa, fent-la passar per la solució a un problema."
category: ["enginyeria-social", "atacs"]
relacionats: ["baiting", "malware-sense-fitxers", "shell"]
exemple: "Un missatge en un fòrum diu que per arreglar un error cal obrir la terminal com a administrador i enganxar-hi una ordre; en realitat, instal·la malware."
riscNivell: "alt"
draft: false
---

El **ClickFix** és una tècnica d'enginyeria social que convenç la víctima perquè sigui ella mateixa qui executi l'ordre maliciosa, en lloc de fer-li obrir un fitxer infectat. Normalment es presenta com la "solució" a un problema fals —un error d'un joc, un document que no es veu bé, un captcha que no funciona— i demana obrir un terminal o el diàleg "Executar" de Windows i enganxar-hi unes instruccions.

Com que és la mateixa víctima qui copia i executa l'ordre, molts controls de seguretat que vigilen fitxers descarregats o adjunts de correu no hi detecten res estrany: no hi ha cap fitxer maliciós, només text que l'usuari ha enganxat voluntàriament. S'ha popularitzat sobretot en fòrums, comentaris i falses pàgines de verificació humana.

## Com reconèixer-lo

Qualsevol instrucció que et demani obrir una terminal o consola com a administrador i enganxar-hi una ordre per "arreglar" alguna cosa és, gairebé sempre, un intent de ClickFix. Cap solució legítima a un problema tècnic real funciona d'aquesta manera.

## Com protegir-te

No copiïs mai ordres de pàgines, fòrums o missatges desconeguts a una terminal o consola. Si un programa falla de veritat, busca la solució a la documentació oficial del fabricant.
