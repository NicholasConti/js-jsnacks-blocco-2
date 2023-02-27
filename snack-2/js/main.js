"use strict";

//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

let input = Number(prompt(' inserisci un numero'));

if ((input % 2) === 0){
    console.log(input);
} else {
    input ++;
    console.log(input);
}