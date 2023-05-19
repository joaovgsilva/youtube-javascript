/* FUNÇÕES:

1. uma FUNÇÃO JavaScript é um bloco de código projetado para executar uma tarefa específica;
2. é como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída;
3. pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código;
4. uma função JS é executada quando "algo" a invoca (chama-a). */

// fórmula da função (SINTAXE):
// FUNÇÃO DE SOMA 
function soma(valor1,valor2) { // "function" = entrada
    return valor1 + valor2; // "return" = saída 
} // "{}" = bloco de códigos

/* function nome.função(valores.entrada){
    return valor.entrada + valor.entrada; 
} */ 

var total = soma(10,23); // =("invoca")nome.função(valor.desejado, valor.desejado);"

alert(total);

// 

// FUNÇÃO COTAÇÃO DO DÓLAR
function realParaDolar(real, cotaçãoDolar) {
    return real * cotaçãoDolar;
}

var valorReal = 10;
var cotação = 4.97;

var total = realParaDolar(valorReal, cotação);

alert('O valor em real é R$: ' + valorReal + ', o valor em dólar U$ é: ' + total);

// 

function alertHello(){
    alert('Hello, word!');
}

// FUNÇÃO DE FAHRENHEIT P/ CELSIUS
function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert('A temperatura é de ' + x + ' graus celsius');