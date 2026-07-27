---
title: "Webshell"
summary: "Script maliciós instal·lat en un servidor web compromès que permet a un atacant executar-hi ordres de manera remota."
category: ["atacs", "malware"]
relacionats: ["shell", "execucio-remota-codi", "rootkit"]
exemple: "Després d'explotar un RCE, l'atacant deixa un fitxer PHP amagat al servidor que li permet tornar-hi i executar ordres quan vulgui."
riscNivell: "alt"
draft: false
---

Un **webshell** és un petit script (sovint escrit en PHP, JSP o ASP) que un atacant instal·la dins d'un servidor web compromès per aconseguir-hi una porta d'entrada permanent. Un cop actiu, el webshell li permet executar ordres al servidor, navegar pels seus fitxers o pujar-ne de nous, tot des d'un simple navegador o una petició web.

El seu ús habitual és com a pas posterior a una explotació —per exemple, després d'aprofitar un RCE—: mentre el servidor no es netegi a fons, l'atacant hi manté accés encara que es tanqui la vulnerabilitat original que va fer servir per entrar-hi la primera vegada. Sol amagar-se amb noms de fitxer que imiten arxius legítims del sistema.

## Com protegir-te

Monitoritzar canvis inesperats als fitxers del servidor web, restringir els permisos d'escriptura del procés web i revisar periòdicament si hi ha fitxers desconeguts són pràctiques bàsiques per detectar-ne la presència. Si es confirma un webshell, cal considerar compromès tot el servidor, no només el fitxer trobat.
