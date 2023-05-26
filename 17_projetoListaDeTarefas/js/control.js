let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    // VALOR DIGITADO NO INPUT: 
    let valorInput = input.value;

    // SE NÃO FOR VAZIO, NEM NULKO, NEM INDEFINIDO:
    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)){

        ++contador;
        
        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fa-sharp fa-regular fa-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="fa-sharp fa-solid fa-trash"></i> Remover</button>
            </div>
        </div> `;

    // ADICIONANDO NOVO ITEM NO "MAIN":
    main.innerHTML += novoItem;

    // LIMPANDO O CAMPO "INPUT":
    input.value = "";
    input.focus();

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="item"){
        item.classList.add('click');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-circle-check');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('click');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // tecla "13" = ENTER
        event.preventDefault();
        btnAdd.click();
    }
})