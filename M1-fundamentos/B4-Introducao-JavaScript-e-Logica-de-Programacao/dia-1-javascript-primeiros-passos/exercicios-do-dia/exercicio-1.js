function cincoOperacoes(a, b, operacao) {
    const num1 = a;
    const num2 = b;

    if (operacao == "adição") {
        console.log(num1 + num2);
    } else if (operacao == "subtracao") {
        console.log(num1 - num2);
    } else if (operacao == "multiplicacao") {
        console.log(num1 * num2);
    } else if (operacao == "divisao") {
        console.log(num1 / num2);
    } else if (operacao == "modulo") {
        console.log(num1 % num2);
    }
}

console.log(cincoOperacoes(10, 3, "subtracao"));