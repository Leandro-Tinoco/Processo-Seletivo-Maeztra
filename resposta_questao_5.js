function retornaPosicoes(num) {
    let total = num
    for (let i = 2; i < num; i++) {
        total = i * total;
    }
    console.log(total)
}
retornaPosicoes(3);