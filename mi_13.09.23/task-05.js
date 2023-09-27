/*
Aufgabe 5: Funktion mit variabler Anzahl von Argumenten
Erstellen Sie eine Funktion, die eine beliebige Anzahl von Zahlen addiert und das Ergebnis zurückgibt.
*/

function summiere(...zahlen) {
    return zahlen.reduce((sum, zahl) => sum + zahl, 0);
  }
  




// Beispiel-Lösung 5:
const summe1 = summiere(1, 2, 3, 4, 5);
const summe2 = summiere(10, 20);
console.log(summe1); // Ausgabe: 15
console.log(summe2); // Ausgabe: 30