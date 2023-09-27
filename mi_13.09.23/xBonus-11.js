/*
Aufgabe 7: Funktion als Parameter übergeben
Erstellen Sie eine Funktion, die eine andere Funktion als Parameter akzeptiert und sie zweimal ausführt.
*/

function zweimalAusfuehren(func) {
  func();
  func();
}




// Beispiel-Lösung 7:
function gruss() {
    console.log("Hallo!");
  }
  
  zweimalAusfuehren(gruss); // Ausgabe: Hallo! (zweimal)
  