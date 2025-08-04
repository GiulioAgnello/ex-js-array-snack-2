import books from "../database.js";

console.log(books);

// Funzione che restituisce quante volte un tag è stato usato tra tutti i libri
const tagCount = books.reduce((count, book) => {
  book.tags.forEach((tag) => {
    if (count[tag]) {
      count[tag]++;
    } else {
      count[tag] = 1;
    }
  });
  return count;
}, {});

console.log(tagCount);
