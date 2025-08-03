import books from "../database.js";

const avalableBooks = books.filter((b) => b.available === true);

console.log(avalableBooks);
