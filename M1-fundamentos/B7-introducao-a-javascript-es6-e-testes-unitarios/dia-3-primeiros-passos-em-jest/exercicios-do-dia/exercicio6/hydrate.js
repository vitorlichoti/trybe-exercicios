function hydrate(str) {
  let num = [];
  let numToString = []
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    num.push(str[i].replace(/[^0-9]/g, '0'));
  }
  for (let j = 0; j < num.length; j += 1) {
    numToString.push(parseInt(num[j], 10));
  }
  for (let k = 0; k < numToString.length; k += 1) {
    sum += numToString[k];
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
};

module.exports = hydrate;
