var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao: " +pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW","Yamaha","Honda");

//Calcular a media de todos os numeros de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' '));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posicao do numero 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

var ar = [-5,10,15,20,-3,89];

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);

console.log(arr2);

var nomes = ["Maria","Joao","Lucas","Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo");
console.log(nomes);

var pais = ["Brasil","Argentina","Colombia"];

pais.unshift("Uruguai");
console.log(pais);

var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];

var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);