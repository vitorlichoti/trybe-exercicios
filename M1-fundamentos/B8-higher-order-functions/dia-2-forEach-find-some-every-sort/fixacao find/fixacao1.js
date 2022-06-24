const numbers = [19, 21, 30, 3, 45, 22, 15];

//solução por uma variável
// const findDivisibleBy3And5 = numbers.find((num) => num % 3 === 0 && num % 5 === 0);

// console.log(findDivisibleBy3And5);

//solução por uma função
const findDivisibleBy3And5 = () => {
  return numbers.find((num) => num % 3 === 0 && num % 5 === 0);
}

console.log(findDivisibleBy3And5());
