my-react-app/
|-- src/
|   |-- components/
|       |-- UserDetail.jsx
|   |-- pages/
|       |-- UserProfile.jsx
|   |-- App.jsx
|   |-- index.js

Aufgabe 1: Grundlagen von useParams
Aufgabe:
Erstelle eine Route /user/:id in App.jsx, die das Komponente UserDetail.jsx rendert. Nutze useParams in UserDetail.jsx, um die id aus der URL zu extrahieren und sie anzuzeigen.

Aufgabe 2: Benutzerprofilseite
Aufgabe:
Erstelle eine Benutzerprofilseite UserProfile.jsx unter dem Ordner pages. Implementiere eine Route /profile/:username in App.jsx, die UserProfile.jsx rendert. Verwende useParams, um den username aus der URL zu extrahieren und ihn anzuzeigen.

Aufgabe 3: Verknüpfung von Komponenten
Aufgabe:
Füge in UserDetail.jsx einen Link zu der Benutzerprofilseite hinzu, die die ID des Benutzers als username in der URL verwendet.

Aufgabe 4: Default-Werte
Aufgabe:
Aktualisiere UserDetail.jsx, um einen Standardwert für id zu verwenden, falls keiner in der URL vorhanden ist. Zeige einen Hinweis an, wenn keine ID vorhanden ist.

Aufgabe 5: Verwendung von Mehreren Parametern
Aufgabe:
Aktualisiere UserProfile.jsx, um sowohl username als auch section aus der URL zu extrahieren und anzuzeigen. Die URL sollte beispielsweise /profile/:username/:section sein.