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