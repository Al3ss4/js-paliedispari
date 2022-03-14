console.log('JS OK!')



//Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//funzione 
function invertiParola(x){
    let xInversa = x.split('').reverse().join('');  
    return xInversa;
  }

//chiedi all'utente di inserire una parola
let parola = prompt('inserire una parola');

let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    //se è palindroma restituisci vero
    console.log('la parola è palindroma');
    // se !palindroma restituisci falso
  } else {
    console.log('la parola non è palindroma');
  }










// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//chiede all'utente di scegliere tra pari e dispari
let pariDispari = prompt('Pari o Dispari?');

//chiede all'utente di scegliere un numero tra 1 e 5
let numero = parseInt(prompt('Scegli un numero da 1 a 5'));

