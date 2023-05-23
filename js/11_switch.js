/* SWITCH: 
é usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. caso a condição não seja compatível não será executada e o valor padrão será acionado */

function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); // "variável = variável.toLowerCase();" = converte todo texto para minúsculo

    switch (cor) {
    case "azul": // caso seja azul "case = "azul": "
        document.body.style.backgroundColor="blue";
        break;
    case "vermelho": 
        document.body.style.backgroundColor="red";
        break;
    case "amarelo":
        document.body.style.backgroundColor="yellow";
        break;
    default: // "default" = comportamente padrão
        document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " + cor;
    } 
}

//

function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0: 
            document.getElementById("testeDia").innerHTML="Hoje é Domingo";
            break;
        case 1: 
            document.getElementById("testeDia").innerHTML="Hoje é Segunda-Feira";
            break;
        case 2:
            document.getElementById("testeDia").innerHTML="Hoje é Terça-Feira";
            break;
        case 3:
            document.getElementById("testeDia").innerHTML="Hoje é Quarta-Feira";
            break;
        case 4:
            document.getElementById("testeDia").innerHTML="Hoje é Quinta-Feira";
            break;
        case 5:
            document.getElementById("testeDia").innerHTML="Hoje é Sexta-Feira";
            break;
        case 6:
            document.getElementById("testeDia").innerHTML="Hoje é Sábado";
            break;
        default:
            document.getElementById("testeDia").innerHTML = "ERROR";
        } 
}