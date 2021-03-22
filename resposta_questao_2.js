var numeros = [4, 5, 44, 98, 4, 5, 6, 7];

function verificaRepetidos(num) {
    var novoArray = num.filter((res, i) => num.indexOf(res) !== i);
    console.log("Resultado dos números repetidos -> " + novoArray)
}
verificaRepetidos(numeros);