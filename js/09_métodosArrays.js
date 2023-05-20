// MÉTODOS PARA ARRAYS:

const pessoa = ['João', 'Gomes', 21, 'Desenvolvedor'];

pessoa.pop(); // método ".pop();" = remove o último item da matriz
pessoa.push('Front-End'); // método ".push(item.array);" = adiciona um novo item na matriz
pessoa.shift(); // método ".shift();" = remove o primeiro item da matriz e altera a posição dos demais itens
pessoa.unshift('Feijão'); // método ".unshift('nome.item');" = adiciona um item como o primeiro da matriz
delete pessoa[2]; // método "delete nome.array[item.array];" = remove determinado item e não altera a posição dos demais itens
pessoa.splice(2, 0,'Item adicionado 1', 'Item adicionado 2') // método "pessoa.splice(posição.add.item, itens.removidos, 'novo.item');" = adiciona um novo item na matriz em qualquer posição 

document.getElementById('teste').innerHTML = pessoa.join(' - '); // método ".join('ícone');" = altera o ícone e/ou tamanho do espeço entre um ítem e outro 

const lista1 = ['Arroz', 'Feijão', 'Macarrão'];
const lista2 = ['Leite', 'Refrigerante', 'Suco'];

const superLista = lista1.concat(lista2); // ".concat" = faz a junção de duas ou mais matrizes | SINTAXE: nova variável = variável1.concat(variável2);

document.getElementById('juntarMatrizes').innerHTML = superLista.join(' * ');

const jogadores = ['Cássio Ramos', 'Fagner', 'Yuri Alberto', 'Roger Guedes', 'Renato Augusto'];
jogadores.sort(); // ".sort();" = deixa os itens em ordem alfabética 
jogadores.reverse(); // ".reverse()" = deixa a ordem dos itens de trás para frente 

document.getElementById('ordemJogadores').innerHTML = jogadores;

const jogadoresAtacantes = jogadores.slice(2,4); // ".slice(item.início, item.final);" = deixa visível somente os itens que for a partir da posição selecionada dentro dos "()"

document.getElementById('jogadores').innerHTML = jogadoresAtacantes.join(' | ');

// deixando os números em ordem:
const numeros = [40, 100, 1, 5, 25, 10];

numeros.sort(function(a, b) {return b - a});
numeros.reverse();

console.log(numeros);
