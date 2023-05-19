// VAR LET CONST:
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