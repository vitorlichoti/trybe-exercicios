const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((index) => index === name);
}

console.log(hasName(names, 'Vitor'))
