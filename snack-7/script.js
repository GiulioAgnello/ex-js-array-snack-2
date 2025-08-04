import books from "../database.js";

console.log(books);

// Funzione che restituisce quante volte un tag è stato usato tra tutti i libri
function tagCounts(tag) {
  return books.reduce((count, book) => {
    return count + book.tags.filter((t) => t === tag).length;
  }, 0);
}

console.log(tagCounts("css"));
