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

/* no JS é utilizado as variáveis (variáveis = utilizada para armazenar valores de dados) , sendo declaradas pelas palavras "var", "let" e/ou "const" */
var d = 1;
var e = 5;
var f = d + e;
console.log(f); 

/* IMPORTANTE = o JS é sensível a letras maiúsculas e minúsculas, sendo assim, sempre seguir a sintaxe correta nas declarações de acordo com as letras maiúsculas e minúsculas */