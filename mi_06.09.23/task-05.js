/* Passwortüberprüfung:

Schreibe ein Programm, das ein voreingestelltes Passwort und ein eingegebenes Passwort über die Befehlszeile vergleicht. Das Programm sollte ausgeben, ob das eingegebene Passwort korrekt ist oder nicht.

Beispiel:   $ node passwordChecker.js geheimespasswort
            Das Passwort ist korrekt! */

const correctPassword = "geheimespasswort";
const enteredPassword = process.argv[2];

if (enteredPassword === correctPassword){
    console.log(`Das Passwort ist korrekt`);
}   else {
    console.log(`Das Passwort ist falsch`);
}
