var caract = "([]()())";
recebeCarct(caract);

function recebeCarct(carac) {
    let outra = carac;
    outra = outra.replace("1", "");
    outra = outra.replace("2", "");
    outra = outra.replace("3", "");
    outra = outra.replace("4", "");
    outra = outra.replace("5", "");
    outra = outra.replace("6", "");
    outra = outra.replaceAll("(", "1");
    outra = outra.replaceAll(")", "2");
    outra = outra.replaceAll("[", "3");
    outra = outra.replaceAll("]", "4");
    outra = outra.replaceAll("{", "5");
    outra = outra.replaceAll("}", "6");
    let cont = outra.length;
    for (let i = 0; i < cont; i++) {
        let soma1 = parseInt(outra.substr(i, 1));
        let soma2 = parseInt(outra.substr(i + 1, 1)) - 1;

        if (soma1 === soma2) {
            outra = outra.replace(String(soma1), "");
            outra = outra.replace(String(soma1 + 1), "");
            i = -1;
            cont = cont - 2;
        }
    }
    if (outra == "") console.log("Sequencia correta");
    else console.log("Sequencia incorreta");
}