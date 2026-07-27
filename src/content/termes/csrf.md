---
title: "Cross-Site Request Forgery (CSRF)"
summary: "Enganyar el navegador d'una víctima autenticada perquè executi una acció no desitjada en un altre lloc."
category: ["atacs"]
aliases: ["CSRF"]
relacionats: ["xss", "injeccio-sql"]
exemple: "Visitar una pàgina maliciosa que, sense que ho sàpigues, envia en segon pla una petició per canviar el teu correu al banc on tens sessió oberta."
riscNivell: "mitja"
draft: false
---

Un atac **Cross-Site Request Forgery (CSRF)** aprofita que estàs autenticat en un lloc web (per exemple, el teu banc) perquè una pàgina maliciosa diferent enviï, sense que te n'adonis, una petició a aquell lloc en nom teu —el navegador hi adjunta automàticament les teves credencials de sessió.

L'atacant no roba la teva contrasenya, sinó que "fa servir" la sessió que ja tens oberta perquè el sistema executi accions no autoritzades: canviar dades, fer transferències, etc.

## Com protegir-te

Tanca sessió dels serveis sensibles quan no els utilitzis i evita navegar per pàgines desconegudes mentre tens sessions importants obertes. La protecció tècnica real (tokens anti-CSRF) és responsabilitat del lloc web.
