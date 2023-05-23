/* LAÇO DE REPETIÇÃO:
laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes */

for (let i=0; i<101; i++){ // enquanto o ponto inicial ("let i=0;") for menor que 1001 ("i<101;"), vai acrescentando + 1 ("i++")
    document.getElementById("teste").innerHTML += i + ", ";
}

//

var ano = new Date().getFullYear();

for (let iAno=ano; iAno>=1900; iAno--){
    document.getElementById("ano").innerHTML += "<option valeu='"+iAno+"'>"+iAno+"</option";
}

//

const carros = ["Civic", "Ford Ka", "Fiat Uno", "Audi A3"];
var tamanho = carros.length;

for(let i=0; i<tamanho; i++){
    document.getElementById("carro").innerHTML += carros[i] + " - ";
}