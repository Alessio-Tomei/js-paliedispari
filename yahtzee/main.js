// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function randomInt (min = 0, max = 10) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function itSOdd (number) {
    return number % 2;
}

const victoryCondition = prompt('Scegli "pari" o "dispari":');
const userNumber = parseInt(prompt ('Scegli un numero da 1 a 5:'));

const computerNumber = randomInt(1, 5);

if (itSOdd(userNumber+computerNumber)) {
    if (victoryCondition == 'dispari') {
        console.log('Scelta: ', victoryCondition,' Numero utente: ', userNumber,' Numero computer: ', computerNumber, ' Il vicitore è l\'utente.');
    } else {
        console.log('Scelta: ', victoryCondition,' Numero utente: ', userNumber,' Numero computer: ', computerNumber, ' Il vicitore è il computer.');
    }
} else {
    if (victoryCondition == 'pari') {
        console.log('Scelta: ', victoryCondition,' Numero utente: ', userNumber,' Numero computer: ', computerNumber, ' Il vicitore è l\'utente.');
    } else {
        console.log('Scelta: ', victoryCondition,' Numero utente: ', userNumber,' Numero computer: ', computerNumber,' Il vicitore è il computer.');
    }
}
