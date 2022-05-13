let nota = 70;

if (nota < 0 || nota > 100) {
    console.log("Valor inválido");
} else if (nota < 50) {
    console.log("F");
} else if (nota < 60) {
    console.log("E");
} else if (nota < 70) {
    console.log("D");
} else if (nota < 80) {
    console.log("C");
} else if (nota < 90) {
    console.log("B");
} else {
    console.log("A");
}
