/*
Aufgabe 4: Die some-Funktion soll überprüfen, ob mindestens eine Zahl in einem Array größer als 10 ist, aber sie hat einen Fehler. Finde und korrigiere ihn.
*/

function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return true;
      }
    }
    return false;
  }
  
  // Beispiel:
  const numbers = [5, 7, 12, 3, 8];
  const greaterThanTen = some(numbers, (num) => num > 10);
  console.log(greaterThanTen);
  