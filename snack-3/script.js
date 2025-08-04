import books from "../database.js";

console.log(books);

// array con tutti i nomi degli autori

const authors = books.map((b) => {
  const author = b.author;
  return author;
});

console.log(authors);

// Crea una variabile booleana (areAuthorsAdults)
// per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdults = authors.every((a) => a.age >= 18);

console.log(areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
authors.sort((a, b) => {
  return areAuthorsAdults ? a.age - b.age : b.age - a.age;
});

console.log(authors);
