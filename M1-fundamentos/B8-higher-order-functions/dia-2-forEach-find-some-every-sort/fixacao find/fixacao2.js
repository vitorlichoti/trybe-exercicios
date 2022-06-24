const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((index) => index.length === 5);
}

console.log(findNameWithFiveLetters());
