let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

info['recorrente'] = 'Sim';

console.log(info);

//mostra todas as chaves do objeto
for (let key in info){
  console.log(key);
}

//mostra todos os valores das chaves do objeto
for (let key in info){
  console.log(info[key]);
}

console.log(info.personage + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos recorrentes');