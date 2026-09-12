# Shinobi no Michi – Charaktererstellung

Statische Website für GitHub Pages. Kein Konto und kein Server erforderlich.

## Veröffentlichung

1. Neues öffentliches Repository `shinobi-charakter` anlegen.
2. Den Inhalt dieses Ordners hochladen (nicht die ZIP-Datei selbst).
3. Settings → Pages → Deploy from a branch → main → /docs → Save.
4. Den von GitHub angezeigten Website-Link weitergeben.

Der Ordner `docs` enthält die fertig gebaute Website. Es ist kein Build auf GitHub nötig.
Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Benutzung

Charakter erstellen oder Vorlage wählen. Am Ende den Bogen speichern und als PDF oder JSON herunterladen. Speicherung erfolgt ausschließlich im aktuellen Browser. Eine JSON-Datei lässt sich hier erneut laden oder im SL-Schirm als Kampagnensicherung importieren. Die Merkliste im Regelverzeichnis gilt für die aktuelle Sitzung.

## Entwicklung

Node.js 22 oder neuer; `npm install`, danach `npm run build`. Mit einem lokalen HTTP-Server den Ordner docs öffnen. Direkter file://-Start unterstützt den PDF-Schriftdownload nicht zuverlässig.

`src` enthält die Charaktererstellung und Regelmodule aus dem SL-Schirm. `docs/styles.css` enthält dessen fertig kompilierte Gestaltung. Keine SL-Spielstände, Zugangsdaten oder Server-API sind enthalten.

Inoffizielles Fanprojekt. Keine Verbindung zu den Rechteinhabern von Naruto. Schriftlizenz: docs/fonts/LICENSE.txt. Hinweise zu gebündelten Softwarelizenzen: docs/app.js.LEGAL.txt.
