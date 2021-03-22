var anos = [];
var arrayAnos = [];
var qtdadmax = 0;

function insereAnos(intervalo) {
    for (let j = 0; j < intervalo.length; j++) {
        let inicio = intervalo[j][0];
        let fim = intervalo[j][1];
        for (let i = inicio; i <= fim; i++) {
            anos.push(i);
        }
    }
}
let int = [];
int.push(1960);
int.push(2005);
let int1 = [];
int1.push(1945);
int1.push(2008);
let int2 = [];
int2.push(1938);
int2.push(1999)
let total1 = []
total1.push(int)
total1.push(int1)
total1.push(int2)
insereAnos(total1)
    // console.log(anos);
console.log(maiorOcorrencia(anos));

function maiorOcorrencia(vetor) {

    vetor.sort();
    var maior = null;
    var ocorrenciasMaior = -1;

    var contagem = 1;
    for (var i = 1; i <= vetor.length; i++) {
        if (i < vetor.length && vetor[i] === vetor[i - contagem]) contagem++;
        else if (contagem > ocorrenciasMaior) {
            maior = vetor[i - 1];
            ocorrenciasMaior = contagem;
        }
    }

    if (ocorrenciasMaior < qtdadmax) {} else {
        if (qtdadmax == 0)
            qtdadmax = ocorrenciasMaior;
        anos.splice(anos.indexOf(maior), 1);
        // console.log("Anos----" + anos);
        arrayAnos.push(maior);

        maiorOcorrencia(anos);
    }
    return arrayAnos;
}