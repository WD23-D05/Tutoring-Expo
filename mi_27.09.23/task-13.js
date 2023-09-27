// Aufgabe 13: Erstelle ein Objekt "konto" mit den Eigenschaften "kontostand" und "einzahlen". Die Methode "einzahlen" sollte einen Betrag akzeptieren und den Kontostand erhöhen. Füge auch eine Methode "abheben" hinzu, die einen Betrag akzeptiert und den Kontostand verringert.
/* Beispiel Ausgabe:
Kontostand vor Einzahlung: 1000
Kontostand nach Einzahlung: 1500
Kontostand nach Abhebung: 1300
Nicht ausreichend Guthaben.
*/
// Your code here:











console.log("Kontostand vor Einzahlung: " + konto.kontostand);
konto.einzahlen(500);
console.log("Kontostand nach Einzahlung: " + konto.kontostand);
konto.abheben(200);
console.log("Kontostand nach Abhebung: " + konto.kontostand);
konto.abheben(1500);