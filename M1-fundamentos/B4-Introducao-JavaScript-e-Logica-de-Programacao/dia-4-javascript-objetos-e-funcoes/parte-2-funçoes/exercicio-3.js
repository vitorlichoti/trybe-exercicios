function maiorValor(arr) {
  let menor;
  let indice;
  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i] <= arr[i + 1]) {
      menor = arr[i];
      indice = i;
    } else {
      menor = arr[i + 1];
      indice = i + 1;
    }
  }
  return indice;
}

console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]));