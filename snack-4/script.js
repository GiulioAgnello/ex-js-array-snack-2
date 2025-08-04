import books from "../database.js";

console.log(books);

// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = books.map((b) => {
  const autors = b.author;
  return autors.age;
});

console.log(ages);

let initialValue = 0;

const agesSum = ages.reduce((acc, curr) => acc + curr, initialValue);

console.log(agesSum / ages.length);
