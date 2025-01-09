/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


// Invoca la funzione qui e stampa il risultato in console
const vowels = countVowels("javascript");
console.log(vowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)