"use strict";

//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ["mario", "marco", "luca"];
const cognomi = ["rossi", "verdi", "blu"];
const listaRandom = [];
for (let i = 0 ; i < 3 ; i++){
    const randomNumberName = Math.floor(Math.random() * nomi.length);
    const randomNumberCognome = Math.floor(Math.random() * cognomi.length);

    const newFullName = `${nomi[randomNumberName]} ${cognomi[randomNumberCognome]}`;
    listaRandom.push(newFullName);
}

console.log(listaRandom);