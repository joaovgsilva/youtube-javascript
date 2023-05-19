/* ARRAYS:
1. os ARRAYS JavaScript são usados para armazenar vários valores em uma única variável. diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os ARRAYS não possuem propriedades. o item dentro dele é encontrado pela posição;

2. lista de itens, com controle, por ordem de uma posição dentro dele:               [0]      [1]       [2]         [3]      
2.1 const lista = ["arroz", "feijão", "macarrão", "leite"];
    
    a lista[0] (lista na posição 0) vai conter o valor "arroz"
    a lista[1] (lista na posição 1) vai conter o valor "feijão"
    a lista[2] (lista na ...assim por diante. 
        
3. com objetos trabalhamos usando "{}", já com matrizes (array) trabalhamos com "[]". veja a diferença:
:: objeto ::
const pessoa = {
    nome: "João", 
    sobrenome: "Gomes", 
    idade:"21"
};

pessoa.nome;

:: array ::
const pessoa = [
    "João",
    "Gomes",
    21
];

pessoa[0]; */

const lista = [
/* [0] */ "arroz",
/* [1] */ "feijão",
/* [2] */ "macarrão",
/* [3] */ "leite"
];

lista[2] = 'café'; // alterando o valor da ARRAY 

console.log(lista);

//

const pessoa = ['João', 'Gomes', 20, 'Desenvolvedor'];

console.log(pessoa);

console.log(pessoa.length); // ".length" = indica a quantidade de itens que tem dentro da matriz

alert(pessoa[pessoa.length -1]); // = fórmula indica qual é o último item da matriz

pessoa.push('Front End'); // ".push" = acrescenta mais um item na matriz
pessoa[pessoa.length] = 'Brasileiro'; // fórmula acrescenta mais um item na matriz 

alert(Array.isArray(pessoa)); // verificando se a matriz é verdadeira: variável(Array.isArry(nome.matriz)); 