/*
Aufgabe 3: In dieser forEach-Funktion sollen die Elemente eines Arrays verdoppelt und ausgegeben werden, aber es gibt einen Fehler. Finde und korrigiere ihn.
*/

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i] * 2);
    }
  }
  
  // Beispiel:
  const numbers = [1, 2, 3, 4, 5];
  forEach(numbers, (num) => console.log(num));
  