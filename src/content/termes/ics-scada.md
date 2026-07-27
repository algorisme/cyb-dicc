---
title: "ICS/SCADA (Sistemes de control industrial)"
summary: "Sistemes informàtics que controlen infraestructures físiques com fàbriques, xarxes elèctriques o plantes d'aigua."
category: ["xarxes", "defensa"]
aliases: ["ICS", "SCADA", "sistemes de control industrial", "OT"]
relacionats: ["segmentacio-de-xarxa", "superficie-atac", "amenaca-persistent-avancada"]
exemple: "Un atacant manipula des de fora el sistema que regula la pressió d'una planta de tractament d'aigua, alterant-ne el funcionament normal."
riscNivell: "alt"
draft: false
---

Els **ICS** (*Industrial Control Systems*) i **SCADA** (*Supervisory Control and Data Acquisition*) són els sistemes informàtics que supervisen i controlen processos físics: la producció d'una fàbrica, la distribució elèctrica, el tractament d'aigua o el trànsit ferroviari. A diferència de la informàtica tradicional, aquí un atac no es queda en la pèrdua de dades: pot arribar a alterar processos del món físic amb conseqüències directes sobre persones i infraestructures.

Molts d'aquests sistemes es van dissenyar fa dècades pensant en fiabilitat i disponibilitat, no en ciberseguretat, i sovint fan servir protocols sense xifratge ni autenticació. Connectar-los a Internet —per facilitar-ne el manteniment remot— els exposa a atacs per als quals mai es van pensar, un problema que preocupa especialment governs i operadors d'infraestructures crítiques com l'energia o l'aigua.

## Com protegir-te

La pràctica bàsica és mantenir aquests sistemes fora de l'abast directe d'Internet i segmentar-los en una xarxa separada de la resta de la informàtica corporativa, amb accessos remots estrictament controlats i monitoritzats.
