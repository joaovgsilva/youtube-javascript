/* JavaScript = é a linguagem de programação usada para adcionar interatividade ao seu site */

/* TIPO DE SAÍDA:
1. selecionando determinado elemento "innerHTML" */
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

//

/* SINTAXE:
maneira que temos que digitar as nossas regras e nossos comandos */

console.log(5 + 5); /* conteúdo de número */
console.log('5 + 5'); /* conteúdo de texto, pois tem o "'conteúdo'" dentro dos "()" */

/* IMPORTANTE = o JS é sensível a letras maiúsculas e minúsculas, sendo assim, sempre seguir a sintaxe correta nas declarações de acordo com as letras maiúsculas e minúsculas */

/* no JS é utilizado as variáveis (VARIÁVEIS = utilizada para armazenar valores de dados) , sendo declaradas pelas palavras "var", "let" e/ou "const" */
var d = 1;
var e = 5;
var f = d + e;
console.log(f); 