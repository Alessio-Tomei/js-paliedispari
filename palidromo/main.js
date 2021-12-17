// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
function removeSpace(string) {
    let tempString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            tempString += string[i];
        } 
    }
    console.log(tempString);
    return tempString;
}
function itSPalidrome(string) {
    for (let i = 0, j = string.length -1; i < Math.floor(string.length / 2); i++, j--) {
        if (string[i] != string[j]) {
            return false;
        }
        console.log(i, j, string[i], string[j]);   
    }
    return true;
}
const userString = prompt('Inserisci una parola o frase per vedere se è palindroma:');

console.log(itSPalidrome(removeSpace(userString.toLowerCase())));