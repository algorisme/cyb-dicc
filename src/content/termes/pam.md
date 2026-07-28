---
title: "PAM (gestió d'accessos privilegiats)"
summary: "Eines i polítiques que controlen, limiten i registren l'ús dels comptes amb permisos d'administrador."
category: ["autenticacio", "defensa"]
aliases: ["Privileged Access Management", "gestió d'accessos privilegiats"]
relacionats: ["principi-minim-privilegi", "iam", "escalada-de-privilegis"]
exemple: "Un administrador ha de sol·licitar accés temporal a un sistema crític, que queda registrat i caduca automàticament al cap d'una hora."
draft: false
---

El **PAM** és el conjunt d'eines i polítiques dedicades específicament als comptes amb permisos d'administrador —els més valuosos per a un atacant, perquè donen accés a gairebé tot. En lloc de mantenir credencials d'administrador actives permanentment, un sistema PAM les concedeix de manera temporal, sota demanda, i en registra cada ús.

Mentre l'IAM gestiona la identitat i els accessos de tots els usuaris en general, el PAM se centra en el subconjunt de comptes més sensibles, aplicant-hi controls addicionals com la caducitat automàtica o l'aprovació prèvia.
