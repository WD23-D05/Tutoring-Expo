/*
Aufgabe 2: In dieser filter-Funktion soll sie alle geraden Zahlen aus einem Array filtern, aber es gibt einen Fehler. Finde und korrigiere ihn.
*/

function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Beispiel:
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = filter(numbers, (num) => num % 2 === 0);
  console.log(evenNumbers);
  