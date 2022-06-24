const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

// console.log(authorBornIn1947());

//Aplica-se a condicional if utilizando operadores lógicos. O primeiro é o not (!) antes de nameBook. Fazemos isso, pois o fato de nameBook não guardar nenhum valor é retornado "undefined" por padrão, consequentemente o JavaScript interpreta ele como um valor "falsy", que se traduz como "false" propriamente. Desta maneira, ao utilizar o operador not (!) antes de nameBook, estamos negando que ele seja falso, ou seja, convertendo-o para "true";
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

// console.log(smallerName());

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

// console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
  return books.sort((batata, almondega) => almondega.releaseYear - batata.releaseYear);
}

// console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900);
}

console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)))
}

console.log(authorUnique());
