//Algoritmo que retorna a maior palavra do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';

for(let i = 0; i < array.length; i++){
    if (array[i].length > maior.length) {
        maior = array[i];
    }
}

console.log(maior);


//Algoritmo que retorna a menor palavra do array
// let menor = array[0];
// for(let i = 0; i < array.length; i++){
//     if (array[i].length < menor.length) {
//         menor = array[i];
//     }
// }
// console.log(menor);
    