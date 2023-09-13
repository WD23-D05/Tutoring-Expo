/* Überprüfen Sie, ob genau zwei Argumente (zwei Zahlen) über die Befehlszeile übergeben wurden. Wenn nicht, 

geben Sie eine Fehlermeldung aus, die den korrekten Gebrauch des Programms erklärt.

Wenn zwei Argumente übergeben wurden, lesen Sie sie aus process.argv und konvertieren Sie sie in Ganzzahlen (Integer).

Addieren Sie die beiden Zahlen zusammen.

Geben Sie das Ergebnis auf der Konsole aus.

Beispiel:   $ node main.js 5 7
            Die Summe von 5 und 7 ist 12.*/

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

let sum = num1 + num2;

console.log(`Die Summe von ${num1} und ${num2} ist ${sum}`);
