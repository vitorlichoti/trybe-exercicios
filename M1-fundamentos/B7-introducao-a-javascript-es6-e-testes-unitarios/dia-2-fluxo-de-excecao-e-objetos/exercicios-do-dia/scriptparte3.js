const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//adiciona turno no objeto
const addNightTurn = (lesson2) => lesson2.turno = 'noite';

addNightTurn(lesson2);

// console.log(lesson2);

//lista as keys de um objeto
const listKeys = (obj) => Object.keys(obj);

listKeys(lesson1);
// console.log(listKeys(lesson1));

//mostra o tamanho do objeto
const objLength = (obj) => Object.entries(obj).length;

objLength(lesson3);

// console.log(objLength(lesson3));

//mostra os valores das keys de um objeto
const objValues = (obj) => Object.values(obj);

objValues(lesson1);

// console.log(objValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//soma o total de estudantes;
const totalStudents = (class1, class2, class3) => class1.numeroEstudantes + class2.numeroEstudantes + class3.numeroEstudantes;

totalStudents(lesson1, lesson2, lesson3);
console.log(totalStudents(lesson1, lesson2, lesson3));

//retorna valor do objeto pelo numero de indice
const valueKeyByNumber = (obj, index) => {
  const values = Object.values(obj);
  return values[index];
}

valueKeyByNumber(lesson1, 0);

console.log(valueKeyByNumber(lesson1, 0));

//verifica se key/value existem no objeto
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson2,'professor','Carlos'));