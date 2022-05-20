function maiorValor(arr) {
  let maior;
  let indice;
  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i] >= arr[i + 1]) {
      maior = arr[i];
      indice = i;
    } else {
      maior = arr[i + 1];
      indice = i + 1;
    }
  }
  return indice;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));