/* JavaScript = é a linguagem de programação usada para adcionar interatividade ao seu site */

/* tipos de saída de dados JS: */

/* 1. selecionando determinado elemento "innerHTML" */
document.getElementById('texto').innerHTML='Meu primeiro texto <b>JS</b> usando "innerHTML"';
/* dentro do documento (document), selecionar elemento "id" (.getElementById("arquivo-id")) e dar saída com conteúdo HTML(.innetHTML="conteúdo") */

/* 2. "document.write" */
/* utilizar o método "JS interno:
    <body>
        <p>
            <script>
                document.write('Parágrafo escrito com o document.write');
            </script>
        </p>
    </body> */

/* 3. "alert" */
alert('Olá, mundo!');
/* alert('conteúdo'); */

/* 4. "console.log" */
console.log('Isso é um "console.log"');
/* console.log('conteúdo') = essa informação aparece na área de desenvolvimento do browser */

/* declarações JS */

/* JS = uma séria de declarações interpretada pelo navegador */

let a,b,c; a=5; b=6; c=7;
/* cada declaração é separada por ";" */

/* o JS pode ser escrito das seguintes maneiras: */
var pessoa = 'João' ;
var pessoa='João';

/* caso houver um quebra de linha antes do ";", no JS isso não interfere no código */

/* declaração em bloco: */
function minhafuncao(){
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
}
/* as "{" indicada que vai passar uma série de comandos em JS "}" */

/* SINTAXE = maneira que temos que digitar as nossas regras e nossos comandos */

console.log(5 + 5); /* conteúdo de número */
console.log('5 + 5'); /* conteúdo de texto, pois tem o "'conteúdo'" dentro dos "()" */

/* IMPORTANTE = o JS é sensível a letras maiúsculas e minúsculas, sendo assim, sempre seguir a sintaxe correta nas declarações de acordo com as letras maiúsculas e minúsculas */

/* no JS é utilizado as variáveis (VARIÁVEIS = utilizada para armazenar valores de dados) , sendo declaradas pelas palavras "var", "let" e/ou "const" */
var d = 1;
var e = 5;
var f = d + e;
console.log(f); 

/* formas de declarar variáveis: 
1. var 
2. let = dentro de cada bloco == '{}', a variável que receber 'let' não poderá ser redeclarada, somente se for usada novamente dentro de um outro '{}'
3. const = não é possível redeclarar a variável, independente do '{}' que ela estiver, */

var g=2;
var h=3;
var i=g+h;
alert(i);

/* SINTAXE das VARIÁVEIS
   declaração de variáveis: */
var j, k, l; 

// atribuição dos valores:
j = 3;
k = 2;
l = j - k; 

alert(l);

// outro exemplo:

var nome, sobrenome, nomeCompleto;

nome = 'João'
sobrenome = 'Gomes'
nomeCompleto = nome + ' ' + sobrenome;

document.getElementById('nome').innerHTML = nomeCompleto;

/* OPERADORES:

no JS os OPERADORES são usados para atribuir valores, comparar valores, executar operações aritméticas e outras coisas.

sinais dos operadores: 
+ - * / = ++ -- += -= && ||

os operadores são separados por 6 "categorias": */
// 1. operadores aritméticos (matemáticos);
var valor1, valor2, total;

valor1=5;
valor2=2;
total=valor1+valor2; // o símbolo "+" indica que o operador é aritmético, pois está realizando uma SOMA

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;
total = ++valor1; // o símbolo "++" indica que pegou o número da variável e somou +1, ou seja, "valor1 = 5" se tornou "valor1 = 6"; o símbolo "--", indica que pegou o número da variável e subtraiu -1, ou seja, "valor1 = 5" se tornou "valor1 = 4"

alert(total);
alert('O valor1 ficou: ' + valor1); // o símbolo "+" nesse caso, indica que a fórmula está juntando duas variáveis

// sinais dos operadores aritméticos: + - * / ++ --


// 2. operadores de atribuição;
var valor1, valor2, total;

valor1=5;
valor2=2;
total=valor1+valor2; // o símbolo "=" é um operador é de atribuição, pois indica que o "total" é IGUAL a soma do "valor1" com o "valor2"

//

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;
valor1 += valor2; // o símbolo "+=" é um operador é de atribuição, pois indica que o "valor1 = valor1 + valor2;"; funciona com outros sinais, um exemplo é o "-=", "valor1 -= valor2;", ao invés de uso "valor1 = valor1 - valor2;"

// sinais dos operadores de atribuição: = += -= *= /=

// 3. operadores de sequência; 

var valor3, valor4, nome;

valor3 = 'João ';
valor4 = 'Gomes';
nome = valor3 + valor4; // o símbolo "+" nesse caso, indica que a fórmula está juntando duas variáveis; operador de sequência é usado sempre quando a variável usa LETRA ao invés de números 

alert(nome);

// 4. operadores de comparação;
/* 4.1. muito utilizado em declaração lógica para comparar valores; sempre responde com verdadeira (true) ou falso (false)
    4.2 a SINTAXE do operador de comparação:
    4.2.1. "variável = (variável == variável);" */
var valor5, valor6, total;
valor5 = 10;
valor6 = 8; 
total = (valor5 == valor6); // o símbolo "==" indica se o VALOR que está dentro da variável é o mesmo; se for igual, no browser vai aparecer "true", se for diferente, vai aparecer "false"

alert(total);

// 

var valor5, valor6, total;
valor5 = 10;
valor6 = '10'; 
total = (valor5 === valor6); // o símbolo "===" indica se o VALOR e o TIPO que está dentro da variável é o mesmo; se for igual, no browser vai aparecer "true", se for diferente, vai aparecer "false"

alert(total);

//

var valor5, valor6, total;
valor5 = 10;
valor6 = 8; 
total = (valor5 != valor6); // o símbolo "!=" indica se o VALOR que está dentro da variável é diferente/não igual; o símbolo "!==" indica se o VALOR e o TIPO que está dentro da variável é diferente/não igual; se for igual, no browser vai aparecer "false", se for diferente, vai aparecer "true"

alert(total);

// sinais dos operadores de comparação: == === != !== < > <= >=

// 5. operador condicional (ternário);
var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 16) ? 'Não, eleitor' : 'Sim, eleitor'; // se idade ("(idade)") for menor que 16 ("< 16") primeiro resultado que der ("?") vai ser "Não, eleitor" ou (":") "Sim, eleitor"

alert('A resposta é: ' + eleitor + ', a idade dele(a) é de: ' + idade);

// 6. operadores lógicos; 

resultado = (idade > 60 && idade < 70); // se idade ("(idade)") for maior que 60 ("> 60") e ("&&") menor que 70 ("< 70"), no brower vai aparecer "true", caso contrário aparecerá "false"

alert(resultado);

//

resultado = (idade === 62 || idade === 72); //  se idade ("(idade)") for igual ("===") a 65 ou ("||") se idade ("(idade)") for igual ("===") a 72, no browser vai aparecer "true", caso contrário aparecerá "false"

alert(resultado);

//

resultado = !(idade === 62); // se idade ("(idade)") não ("!") for igual ("===") a 62, no browser vai aparecer "true", caso contrário aparecerá "false"

alert(resultado);

// sinais dos operadores lógicos: && || !

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

var valorReal = 7.89;
var cotação = 4.97;

var total = realParaDolar(valorReal, cotação);

alert('O valor em real é R$: ' + valorReal + ', o valor em dólar U$ é: ' + total);