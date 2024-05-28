// Esercizi aggiuntivi (facoltativi) per D4
function arrayCasualeFunction() {
  let arrayCasuale = [];
  for (let index = 0; index < 10; index++) {
    const numeroCasuale = Math.floor(Math.random() * 101);
    arrayCasuale.push(numeroCasuale);
  }
  return arrayCasuale;
}
const arrayCasuale = arrayCasualeFunction();
console.log(arrayCasuale);
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log("Extra 1");
const checkArray = (array) => {
  let sum = 0;
  array.forEach((element) => {
    if (element > 5) {
      console.log(element + " " + "E' maggiore di 5");
      sum += element;
    } else {
      console.log(element + " " + "Non è maggiore di 5");
    }
  });
  return sum;
};
console.log(checkArray(arrayCasuale));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log("Extra 2");

const shoppingCart = [
  {
    price: 10,
    name: "Sedia",
    id: 1234,
    quantity: 2,
  },
  {
    price: 30,
    name: "Tavolo",
    id: 5678,
    quantity: 3,
  },

  {
    price: 50,
    name: "LED",
    id: 9101,
    quantity: 5,
  },
];

const shoppingCartTotal = (array) => {
  let sum = 0;
  array.forEach((array) => {
    sum += array.price * array.quantity;
  });
  return sum;
};
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log("Extra 3");

const newObject = {
  price: 8,
  name: "key",
  id: 1111,
  quantity: 10,
};

const addToShoppingCart = (obj, array) => {
  shoppingCart.push(obj);
  let count = 0;
  array.forEach((element) => {
    count++;
  });
  return count;
};
console.log(addToShoppingCart(newObject, shoppingCart));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("Esercizio 4");

const maxShoppingCart = (array) => {
  let maxPrice = array[0];
  array.forEach((element) => {
    if (element.price > maxPrice.price) {
      maxPrice = element;
    }
  });
  return maxPrice;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log("Esercizio 5");

const latestShoppingCart = (array) => array[array.length - 1];

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("Esercizio 6 da rivedere");

const loopUntil = (num) => {
  const random = Math.floor(Math.random() * 10);
  num = random;
  return num;
};

console.log(loopUntil(1));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("Esercizio 7");
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = (array) => {
  let sum = 0;
  array.forEach((element) => {
    if (element === "number") {
    }
    sum += element / array.length;
  });
  return sum;
};

console.log(average(arrayNumber));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log("Esercizio 8");
const arrayString = ["a", "ab", "abccccccccccc", "abcd", "abcde", "abcdef", "abcdefg"];
const longest = (array) => {
  let stringLength = "";
  array.forEach((element) => {
    if (element.length > stringLength.length) {
      stringLength = element;
    }
  });
  return stringLength;
};

console.log(longest(arrayString));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
console.log("Esercizio 9");

const antiSpam = (emailContent) => {
  if (emailContent.toUpperCase().includes("SPAM") || emailContent.toUpperCase().includes("SCAM")) {
    return true;
  } else {
    return false;
  }
};
console.log(antiSpam("ciao spam"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
