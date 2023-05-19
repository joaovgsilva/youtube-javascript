/* EVENTOS:
1. são ações disparadas pela interação dos usuários na página;
2. o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

os eventos mais utilizados: */

// 1. "onclick" = disparado quando recebe um click;
function eventoClick(){
document.body.style.backgroundColor='orange';
}
// dentro do documento "body" ("document.body"), vamos alterar o a cor de fundo do "style" (".style.backgroundColor='orange';")

// 2. "ondblclick" = disparado quando clique duplo;
function eventoDblClick(){
    alert('Evento de clique duplo');
}

// 3. "onmouseover" = disparado quando o mouse está sobre;
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
// dentro da função "viraVermelhor" ("function viraVermelho()"), foi criado uma variável "div" ("let div") com o valor da div "teste" que está dentro do HTML ("=document.getElementById('teste');"); com a variável "div" ("div") vamos alterar a cor de fundo do "style" (".style.backgroundColor='red';")

// 4. "onmouseout" = disparado quando o mouse é movido para fora do elemento;
function viraAzul(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
}

// 5. "onmousemove" = disparado quando o mouse é movido no elemento;

/* function adicionaTexto(){
    let p = document.getElementById('texto');   
    p.append('O mouse moveu '); // "append" = adicionar
} */

// 6. "onmousedown" = disparado quando o clique do botão foi pressionado; 

// 7. "onmouseup" = disparado quando o clique do botão é liberado;

// 8. "onfocus" = disparado qunado o elemento recebe o foco;
function limpaTexto(){
    document.getElementById('campoTexto').value=''; 
}
// ".value" = altera o valor ("''") que estiver dentro do "id="campoTexto"" que está dentro do documento HTML

// 9. "onchange" = disparado quando existe uma mudança no conteúdo ("ao mudar"); 
function valorAlterado(){
    console.log('Valor alterado com sucesso')
}

// 10. "onblur" = disparado quando o elemento perde o foco;

// 11. "onkeydown" = disparado quando uma tecla é pressionada;
function teclaPressionada(){
    let input = document.getElementById('campoTexto').value;
    console.log(input);
}

// 12. "onkeypress" = disparado quando uma tecla é pressionada e solta;

// 13. "onkeyup" = disparado quando uma tecla é solta sobre um elemento;

// 14. "onload" = disparado quando a página terminou de ser carregada (body);

// 15. "onresize" = disparado quando há um redimencionamneto da janela.