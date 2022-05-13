let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for (let index = 0; index < array.length - 1; index++) {
    resultado.push(array[index] * array[index + 1]);
  }
console.log(resultado);