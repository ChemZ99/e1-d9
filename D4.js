/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("---------- esercizio 1");
let l1 = 12;
let l2 = 24;
let result;
const area = function (integer1, integer2) {
  result = integer1 * integer2;
  return result;
};
area(l1, l2);
console.log("base", l1, "altezza", l2, "area", result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("---------- esercizio 2");
let randNum1 = Math.floor(Math.random() * 100);
let randNum2 = Math.floor(Math.random() * 100);
let total;
const crazysum = function (anyint1, anyint2) {
  if (anyint1 !== anyint2) {
    total = anyint1 + anyint2;
  } else {
    total = (anyint1 + anyint2) * 3;
  }
  return total;
};
crazysum(randNum1, randNum2);
console.log("primo numero", randNum1, "secondo numero", randNum2, "risultato", total);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("---------- esercizio 3");
let randNum3 = Math.floor(Math.random() * 100);
let subtraction;
let subtraction2;
const crazydiff = function (anyint3) {
  subtraction = anyint3 - 19;
  console.log("numero fornito", anyint3, "risultato", subtraction);
  if (anyint3 > 19) {
    subtraction2 = (anyint3 - 19) * 3;
    console.log("il valore fornito e' maggiore di 19 quindi risultato extra", subtraction2);
  }
};
crazydiff(randNum3);

// si puo fare assoluto con Math.abs

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("---------- esercizio 4");
let n = Math.floor(Math.random() * 500);
let output;
const boundary = function (integer) {
  if ((integer >= 20 && integer <= 100) || n === 400) {
    output = true;
  } else {
    output = false;
  }
  return output;
};
boundary(n);
console.log("numero fornito =", n, "output =", output);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("---------- esercizio 5");
let phrase = "is gonna disintegrate my brain";
const epify = function (string1) {
  let arrayedphrase = string1.split(" ");
  console.log(arrayedphrase);
  if (arrayedphrase[0] !== "EPICODE") {
    console.log("if check");
    return "EPICODE " + string1;
  }
  return string1;
};
console.log(epify(phrase));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("---------- esercizio 6");
let randNum4 = Math.floor(Math.random() * 500);
console.log("numero dato - ", randNum4);
const check3and7 = function (anyint4) {
  if (anyint4 % 3 === 0) {
    console.log("il numero e' divisibile per 3");
  } else if (anyint4 % 7 === 0) {
    console.log("il numero e' divisibile per 7");
  } else {
    console.log("il numero non e' divisibile ne' per 3 ne' per 7");
  }
};
check3and7(randNum4);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("---------- esercizio 7");
let phrase2 = "EPICODE";
const reverseString = function (string2) {
  const invertedarr = string2.split("");
  invertedarr.reverse();
  let invertedstring = invertedarr.join("");
  console.log(invertedstring);
};
reverseString(phrase2);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("---------- esercizio 8");
let phrase3 = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nam neque metus feugiat vulputate sem";
let capitalizedArray = [];
let arrayedphrase2 = [];
console.log("before ", phrase3);
const upperFirst = function (string3) {
  arrayedphrase2 = string3.split(" ");
  console.log("array check", arrayedphrase2);
  for (i = 0; i < arrayedphrase2.length; i++) {
    capitalizedArray[i] = arrayedphrase2[i].charAt(0).toUpperCase() + arrayedphrase2[i].slice(1);
    console.log("for check");
  }
  let capitalizedPhrase = capitalizedArray.join(" ");
  console.log("array check", capitalizedArray);
  console.log("after", capitalizedPhrase);
};
upperFirst(phrase3);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("---------- esercizio 9");
let phrase4 = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nam neque metus feugiat vulputate sem";
console.log("before - ", phrase4);
const cutString = function (string4) {
  let arrayedphrase3 = string4.split(" ");
  arrayedphrase3.pop();
  arrayedphrase3.shift();
  let cuttedString = arrayedphrase3.join(" ");
  console.log("after - ", cuttedString);
};
cutString(phrase4);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("---------- esercizio 10");
let n2 = Math.floor(Math.random() * 10);
console.log("numero random - ", n2);
const crazyArray = [];
const giveMeRandom = function (integer2) {
  const crazyArray = [];
  for (i = 0; i < n2; i++) {
    crazyArray.push(Math.floor(Math.random() * 10));
  }
  console.log(crazyArray);
  return crazyArray;
};
giveMeRandom(n2);

console.log("crazyArray out of function check", crazyArray);
