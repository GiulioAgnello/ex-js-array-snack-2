import books from "../database.js";

const longBooks = books.filter((b) => b.pages > 300);

console.log(longBooks);
