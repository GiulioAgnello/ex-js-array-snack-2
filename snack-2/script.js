import books from "../database.js";

// trovo libri disponibili
const avalableBooks = books.filter((b) => b.available);

console.log(avalableBooks);

// discunt price
const discountedBooks = avalableBooks.map((b) => {
  const priceNumber = parseFloat(b.price.replace("€", ""));
  const discountedPrice = (priceNumber * 0.8).toFixed(2);
  return {
    ...b,
    price: `${discountedPrice}€`,
  };
});
console.log(discountedBooks);

// trovo solo prezzi interi
const fullPricedBook = discountedBooks.find((b) => {
  const price = parseFloat(b.price.replace("€", ""));

  return price % 1 === 0;
});

console.log(fullPricedBook);
