import books from "../database.js";

const longBooks = books.filter((b) => b.pages > 300);

const longBooksTitles = longBooks.map((b) => b.title);

console.log(longBooksTitles);
