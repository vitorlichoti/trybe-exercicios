const salarioBruto = 3000.00;
let caso;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    // caso = 1;
    salarioBase = salarioBruto - (salarioBruto * 8 / 100);
  } else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    // caso = 2;
    salarioBase = salarioBruto - salarioBruto * 9 / 100;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    // caso = 3
    salarioBase = salarioBruto - salarioBruto * 11 / 100;
  } else if (salarioBruto > 5189.82) {
    // caso = 4;
    salarioBase = salarioBruto - salarioBruto - 570.88;
  }

// salarioBase = salarioBruto - (salarioBruto * 8 / 100);

    if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
      salarioLiquido = salarioBase - ((salarioBase * 7.5 / 100) - 142.8);
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
      salarioLiquido = salarioBase - ((salarioBase * 15 / 100) - 354.8);
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
      salarioLiquido = salarioBase - ((salarioBase * 22.5 / 100) - 636.13);
    } else if (salarioBase > 4664.68) {
      salarioLiquido = salarioBase - ((salarioBase * 27.5 / 100) - 869.36);
    }
  
    console.log(salarioLiquido);
  // switch (caso) { 
  //   case 1:
  //     salarioBase = salarioBruto - (salarioBruto * 8 / 100);
  //     if (salarioBase > 1903.99) {
  //       salarioLiquido = salarioBase - ((salarioBase * 7.5 / 100) - 142.8);
  //     } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  //       salarioLiquido = salarioBase - ((salarioBase * 15 / 100) - 354.8);
  //     } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  //       salarioLiquido = salarioBase - ((salarioBase * 22.5 / 100) - 636.13);
  //     } else if (salarioBase > 4664.68) {
  //       salarioLiquido = salarioBase - ((salarioBase * 27.5 / 100) - 869.36);
  //     }
  //     break;
  
  //   case 2:
      
  //     break;
  
  //   case 3:
      
  //     break;
  
  //   default:
      
  // }