/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("Esercizio 1");

const area = function area(l1, l2) {
  const result = l1 * l2;
  return result;
};
const result = area(5, 3);
console.log("Area rettangolo", result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("Esercizio 2");

function crazySum(num1, num2) {
  if (num1 != num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}
const esercizio2 = crazySum(3, 2);
console.log("Risultato", esercizio2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("Esercizio 3");

function crazyDiff(num2) {
  const mat = Math.abs(num2 - 19);
  if (num2 > 19) {
    return mat * 3;
  } else {
    return mat;
  }
}
const esercizio3 = crazyDiff(6);
console.log("Risultato", esercizio3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("Esercizio 4");

function boundary(num4) {
  if (num4 >= 20 && num4 <= 100) {
    return true;
  } else if (num4 === 400) {
    return "uguale a 400";
  } else {
    return "Non è compreso tra 20 e 100 e non è nemmeno 400";
  }
}
const esercizio4 = boundary(30);
console.log("Risultato", esercizio4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("Esercizio 5");

function epify(stringa) {
  if (stringa.startsWith("Epicode")) {
    return stringa;
  } else {
    return "Epicode " + stringa;
  }
}
const esercizio5 = epify("Mirko");
console.log("Risultato", esercizio5);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("Esercizio 6");

function check3and7(numero) {
  if ((numero >= 0 && numero % 3 === 0) || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

const esercizio6 = check3and7(1);
console.log(esercizio6);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("Esercizio 7");
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
const esercizio7 = reverseString("EPICODE");
console.log(esercizio7);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("Esercizio 8");

function upperFirst(stringa) {
  return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}
console.log(upperFirst("epicode"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("Esercizio 9");

function cutString(stringa) {
  return stringa.slice(1, -1);
}
const esercizio9 = cutString("epicode");
console.log(esercizio9);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("Esercizio 9");

function giveMeRandom(num9) {
  let array = [];
  for (let index = 0; index < num9; index++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}
const esercizio10 = giveMeRandom(3);
console.log(esercizio10);
