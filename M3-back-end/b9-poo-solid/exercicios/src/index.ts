import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const trybeClube = new Clube();

// testes na quadra de futebol
// const quadraFutebol = new QuadraFutebol();
// trybeClube.adicionarQuadra(quadraFutebol);

// data que queremos reservar, aqui você pode colocar qualquer data obedecendo ano-mes-dia
const dataReserva = new Date('2022-12-28');

// const reservarQuadraFutebol = trybeClube
//   .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
//   .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
//   // console.log(reservarQuadraFutebol);

// testes na quadra de tenis
const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraTenis);

const reserverQuadraTenis = trybeClube
  .buscarQuadra<QuadraTenis>(0)
  .reservar(dataReserva);

console.log(reserverQuadraTenis);

