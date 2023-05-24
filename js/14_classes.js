/* CLASSES: 
1. são um conceito antigo em programação e várias linguagens utilizam elas, mas no JS isso é relativamente novo.

2. basicamente, as classes são "fábricas" para criar objetos; 
2.1. pode se dizer que são "funções especiais" para ciração de objetos.

3. as classes no JS usam um método chamado constructor() para "fabricar" objetos. 

4. para conseguir fazer a construção do objeto, antes tem que ter a fábrica pronta; diferente da "function", a "class" tem que estar pronta antes de chamarmos a função */

class Carro{ // quando se faz o uso de "class", o jeito correto de digitar o nosso código é sempre começando com a letra maiúscula
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Bi bi bi bi";
    }
}

const fordKa = new Carro ("Ford", "Ka", 2009);
const fiatUno = new Carro ('Fiat', 'Uno', 2009);

console.log(fordKa);
console.log(fiatUno.buzina());
fiatUno.ano = 2012; // "variável.propriedade = novo.valor.propriedade" = altera o valor da propriedade 
console.log(fiatUno); 