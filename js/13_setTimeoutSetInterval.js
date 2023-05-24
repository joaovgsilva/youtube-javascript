/* EVENTOS DE TEMPO COM JAVASCRIPT:
1. os eventos de tempo permitem a execução do código em intervalos de tempo especificados. 
1.1. esses intervalos de tempo são chamados de eventos de cronometragem;

2. os métodos-chave para usar com JS são:
2.1. setTimeout(function, tempo de milisegundos);
2.1.1. executada em função, depois de esperar um número especificado de milisegundos. */

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    tempo = setTimeout(function(){ // setTimeout = ativa a função apenas UMA vez quando der o tempo especificado 
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000);
}

function pararContagem(){
    clearTimeout(tempo); // "clear" = comando que serve para parar o que estiver sendo executado 
    document.getElementById('tempo').innerHTML = "Parou a contagem!"
}

/* 
2.2. setInterval(function, milliseconds);
2.2.1 é o mesmo que setTimeout(), mas repete a execução da função continuamente. 
*/

function ativarContagem(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1; // "parseInt" = transforma texto em número 
        document.getElementById('tempo').innerHTML = soma;
    }, 1000)
}

function pararContagem(){
    clearInterval(tempo);
}
