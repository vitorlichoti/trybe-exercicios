//***PARTE 1***

/*🚀 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
      Modifique a estrutura da função para que ela seja uma arrow function.
      Modifique as concatenações para template literals.
      Copie o código abaixo.*/
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);


/*🚀 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
    Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
    Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`[ ${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]} ]`);

const compareNumbers = (a, b) => a - b;
console.log(oddsAndEvens.sort(compareNumbers));


//***PARTE 2***

/*1 - Crie uma função que receba um número e retorne seu fatorial.
*/

// const factorial = n => {
//   (n < 2) ? n = 1 : fac = n; for(let i = n; i > 1; i -= 1) {fac *= i - 1;} return fac;
// }

// console.log(factorial(4));

//recursiva
const factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(4));

/*2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = phrase => {
  let phraseSplit = phrase.split(' ');
  let biggestWord = ' ';

  for (const word of  phraseSplit) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/*3 - 🚀 Crie uma página que contenha:
          Um botão ao qual será associado um event listener;
          Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
          Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

// const getClickButton = document.getElementById('button');
// const getCounter = document.getElementById('counter');
// let count = 0;

// getClickButton.addEventListener('click', () => {
//   count ++;
//   getCounter.innerText = count;
// })

/*4 - 🚀 Crie um código JavaScript com a seguinte especificação:
    Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
    Exemplo:
    String determinada: "Tryber x aqui!"
    Parâmetro: "Bebeto"
    Retorno: "Tryber Bebeto aqui!"
    Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
    */
    /*
    Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
    Exemplo:
    "Tryber x aqui!
    Minhas cinco principais habilidades são:
    JavaScript;
    HTML; ...
    #goTrybe".
*/

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));