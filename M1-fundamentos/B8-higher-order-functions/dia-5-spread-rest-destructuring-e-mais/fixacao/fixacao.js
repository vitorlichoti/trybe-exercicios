const  randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40));

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'lichia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite ninho', 'aveia', 'granola'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
  // console.log(...args)
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(null, [1, 2, 3], { }));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { price } = product
console.log(`Caraca, R$${price}?? que caro!`);

const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const {name, age, homeWorld: {name: planetName}, description: {specieName: especie}} = character;

console.log(`This is ${name}, he has ${age} years old and lives in ${planetName}, he is a ${especie}!`);

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;

const spreadedValues = [...workDays, ...weekend];
console.log(spreadedValues);
// ou
console.log([...workDays, ...weekend]);


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const infoJobUser = {
  ...user,
  ...jobInfos,
}

console.log(infoJobUser);

const { name, age, nationality, profession, squad, squadInitials } = infoJobUser;

console.log(`Hi, my name is ${name}, I'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

//Array destructuring
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [ greeting, printGreeting] = saudacoes;

printGreeting(greeting);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

const things = ['gato', 'água', 'arroz'];
const [animal, bebida, comida] = things;

console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;

console.log(nationality);

const position2d = [1.0, 2.0];
const [x, y, z = 0, w = 8] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
console.log(w);

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting();

const multiply = (number, value = 2) => {
  return number * value;
};

console.log(multiply(8));
