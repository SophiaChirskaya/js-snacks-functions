/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(arr) {
    const initials = [];
    for (let i = 0; i < arr.length; i++) {
      initials.push(arr[i][0]);
    }
    return initials;
  }

// Invoca la funzione qui e stampa il risultato in console
const firstLetter = getInitials(names);
console.log(firstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]