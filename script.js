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



// function numeri random pc 
function numeroPcRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// function somma due numeri 
function sommaNumeri(numeroPrimo, numeroSecondo){
    return sommaFunction = numeroPrimo + numeroSecondo;
}

//function per verificare se la somma dei due numeri sia pari o dispari 
function isPari(sommaFunct){
    if(sommaFunct % 2 == 0){
        return 'pari';
    } else{
        return 'dispari';
    }    
}

//chiede all'utente di scegliere tra pari e dispari
let pariODispari = prompt('Pari o Dispari?');

//chiede all'utente di scegliere un numero tra 1 e 5
let numero = parseInt(prompt('Scegli un numero da 1 a 5'));

//genera un numero random al pc tra 1 e 5 
let generaNumeroRandom = numeroPcRandom(1,5);

// somma i numeri del pc e dell'utente
let somma = sommaNumeri(numero, generaNumeroRandom);

// dichiara se la somma dei due numeri sia pari o dispari
let risultato = isPari(somma);


console.log('utente:' + pariODispari);



