const ListadePecas = ["Ar Condicionado", "Motor", "Amortecedor"]

console.log(ListadePecas)

if (ListadePecas.length == 3) {
    console.log("Peças Cadastradas")
} else if (ListadePecas.length < 3) {
    console.log("Você Pode Cadastrar Mais Peças")
} else {
    console.log("Número de Peças Excedidas")
}

let peso = 300

if (peso >= 100) {
    console.log("Peso da Peça Está Adequado")
} else {
    console.log("Peso Insuficiente")
}

let nomepeca = "Disco de Freio"

if (nomepeca.length > 3) {
    console.log("Nome Adequado")
} else if (nomepeca.length == 0) {
    console.log("Nome Não Pode Estar Vazio")
} else {
    console.log("Cadastro Negado, o Nome Deve Possuir Mais de Três Caracteres")
}

switch (nomepeca.length) {
    case 0:
        console.log("Nome Não Pode Estar Vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("Cadastro Negado, o Nome Deve Possuir Mais de Três Caracteres")

    default:
        console.log("Nome Adequado")
        break;
}
