/*
Aufgabe 1: Die folgende map-Funktion sollte ein Array von Zahlen verdoppeln, aber sie hat einen Fehler. Finde und korrigiere ihn.
*/

function map(arr, func) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
      result.push(func(arr[i]));
    }
    return result;
  }
  
  // Beispiel:
  const numbers = [1, 2, 3, 4, 5];
  const doubled = map(numbers, (num) => num * 2);
  console.log(doubled);
  