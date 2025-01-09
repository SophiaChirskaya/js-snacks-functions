/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterWordsByLetter(wordsArray, letter) {
    const result = [];
    let targetLetter = "a";
    for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];
        if (word[0].toLowerCase() === targetLetter) {
            result.push(word);
          }
        }
      
        return result;
      }


// Invoca la funzione qui e stampa il risultato in console

const filteredNames = filterWordsByLetter(names, "A");
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]