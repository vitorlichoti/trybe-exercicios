const sum = (...numbers) => {
  return numbers.reduce((acc, element) => acc + element);
}

console.log(sum());