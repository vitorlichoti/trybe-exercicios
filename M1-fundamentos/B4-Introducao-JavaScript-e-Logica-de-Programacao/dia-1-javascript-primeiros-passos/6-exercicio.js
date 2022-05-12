let nota = 90;
let caso;

if (nota < 0 || nota == null) {
  caso = 4;
} else if (nota < 60) {
  caso = 1;
} else if (nota < 80) {
  caso = 2;
} else {
  caso = 3;
}

switch (caso) { 
  case 1:
    console.log("Você foi reprovado(a)");
    break;

  case 2:
    console.log("Você está na nossa lista de espera");
    break;

  case 3:
    console.log("Parabéns, você foi aprovado(a)!");
    break;

  default:
    console.log("Não se aplica");
}