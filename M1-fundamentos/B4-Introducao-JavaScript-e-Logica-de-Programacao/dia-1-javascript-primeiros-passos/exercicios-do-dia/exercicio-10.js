const valorCusto = 15;
const valorVenda = 20;
const quantidade = 1000;
let valorCustoTotal = 0;
let lucro = 0;

if (valorCusto >= 0 || valorVenda >= 0) {
    valorCustoTotal += (valorCusto * quantidade) + ((valorCusto * quantidade * 20) / 100);
    lucro += (valorVenda * quantidade) - valorCustoTotal;

    console.log("total do lucro:" + lucro);
    
} else {
    console.log("erro nos valores informados");
}