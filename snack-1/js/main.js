/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/ 

//FOR
let somma = 0;
for(let i = 0 ; i < 5; i++){
    const numero = Number(prompt('Inserisci un numero'));
    somma += numero;
}

console.log(somma);

//WHILE
somma = 0 ;
let x = 0 ;

while( x < 5){
    const numero = Number(prompt('Inserisci un numero'));
    somma += numero;
    x++;

}
console.log(somma);
