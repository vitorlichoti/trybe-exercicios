const newPerson = () => {
  return {
    nome: 'Vitor Lichoti',
    email: 'vitorlichoti@gmail.com',
  }
}

const newEmployees = (func) => {
  const employees = {
    id1: func, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newPerson()));
