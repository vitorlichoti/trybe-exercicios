function maiorCaracter(arr){
  let maior = '';
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length >= maior.length){
      maior = arr[i];
    }
  }
  return maior;
}

console.log(maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));