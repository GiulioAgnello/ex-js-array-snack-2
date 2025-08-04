import books from "../database.js";

console.log(books);

// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

const areThereAvailableBooks = books.some((b) => b.available === true);

console.log(areThereAvailableBooks);

const bookByPrice = books.map((b) => {
  const priceNumber = parseFloat(b.price);
  return;
});
