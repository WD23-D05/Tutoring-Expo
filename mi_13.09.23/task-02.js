/*
Aufgabe 2: Funktion mit Rückgabewert
Schreiben Sie eine Funktion, die den größeren von zwei Zahlen zurückgibt.
*/

function groessereZahl(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  

// Beispiel-Lösung 2:
const groessere = groessereZahl(8, 12);
console.log(groessere); // Ausgabe: 12