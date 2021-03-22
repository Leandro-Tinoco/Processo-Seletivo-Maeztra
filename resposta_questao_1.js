console.log(verificaCrescente(1234568));

function verificaCrescente(num) {
    let crescente = true
    let decrescente = true
    let numString = String(num)
    for (let i = 1; i < numString.length; i++) {
        let val1 = parseInt(numString.substr(i, 1))
        let val2 = parseInt(numString.substr(i - 1, 1))
        if (val1 - val2 != 0 && val1 - val2 != 1)
            crescente = false;
    }
    for (let i = 1; i < numString.length; i++) {
        let val1 = parseInt(numString.substr(i, 1))
        let val2 = parseInt(numString.substr(i - 1, 1))
        if (val2 - val1 != 0 && val2 - val1 != 1)
            decrescente = false
    }
    if (crescente === true || decrescente === true)
        return "Numeros Ordenados"
    else
        return "Numeros nao estao ordenados"
}