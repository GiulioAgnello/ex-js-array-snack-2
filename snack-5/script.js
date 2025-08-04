// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

function getBooks(ids) {
  // Creo un array di Promise usando map
  const promises = ids.map((id) =>
    fetch(`http://localhost:3333/books/${id}`).then((res) => res.json())
  );
  // Restituisco una Promise che risolve con l'array di libri
  return Promise.all(promises);
}

// Test
getBooks([2, 13, 7, 21, 19]).then((books) => {
  console.log(books);
});
