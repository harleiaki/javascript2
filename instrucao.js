var pais = "Brasil";

if (pais != "Brasil") {
    console.log("Vc e estrangeiro");
} else {
    console.log("Vc e brasileiro");
}

var idade = 22;

if (idade < 16) {
    console.log("Nao vota")
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatorio")
}

var diaSem = 4;

switch (diaSem) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terca")
        break;
    default:
        console.log("Esse dia da semana nao existe!")
}