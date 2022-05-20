function palindromo(string){
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--){
    reverse += string[i]
  }

  if (string === reverse){
    return "é palíndromo";
  } else {
    return "não é palíndromo";
  }
}

console.log(palindromo('arara'));
