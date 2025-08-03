import books from "../database.js";

// trovo libri disponibili
const avalableBooks = books.filter((b) => b.available === true);

console.log(avalableBooks);

// discunt price
const discountedBooks = avalableBooks.map((b) => {
  const priceNumber = parseFloat(b.price);
  return {
    ...b,
    price: priceNumber * 0.2,
  };
});
console.log(discountedBooks);

// trovo solo prezzi interi
const fullPricedBook = discountedBooks.find((b) => parseInt(b.price));

console.log(fullPricedBook);
