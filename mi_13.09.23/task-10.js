/*
Aufgabe 10: Funktionsaufruf mit Callback
Schreiben Sie eine Funktion, die eine andere Funktion als Callback akzeptiert und diese mit einem Wert aufruft.
*/






// Beispiel-Lösung 10:
function benachrichtigung(meldung) {
    console.log("Benachrichtigung: " + meldung);
  }
  
  rufeMitCallback(benachrichtigung, "Dies ist eine Nachricht");
  // Ausgabe: Benachrichtigung: Dies ist eine Nachricht
  