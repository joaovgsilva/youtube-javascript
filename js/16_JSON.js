/* JSON:
1. significa JavaScript Object Notation ou em pt-BR fica algo como notação de objeto JavaScript;

2. de modo geral, JSON é basicamente uma forma de converter um objeto em texto e um texto e um objeto; 

3. é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de testo é lido por praticamente toda linguagem de programação; 

4. para trabalhar com JSON usamos dois métodos: 
4.1 JSON.parse() = converte texto no padrão JSON em objetos; 
4.2 JSON.stringify() = converte objetos em texta no padrão JSON. */

// OBJETO: 
const carro = {  
    marca: "Ford",
    modelo: "Ka",
    ano: 2009,
    motor: ['1.0', '1.6']
}

// OBJETO -> TEXTO:
let textoTeste = JSON.stringify(carro);

document.getElementById('teste').innerHTML = textoTeste;

// TEXTO -> OBJETO: 
let objTeste = JSON.parse(textoTeste); 

console.log(objTeste.motor[0]);

// JASON NA PRÁTICA: 
const ajaxTeste = new XMLHttpRequest(); // = método para fazer uma requisição ao site sem precissar acessar o site através do browser
ajaxTeste.open('GET', 'https://viacep.com.br/ws/08773300/json/'); // = ".open('GET')" = pegar; nesse exemplo está pegando as informações do "https://"" que vem na sequência 
ajaxTeste.send(); // ".send" = solicitação 

ajaxTeste.onload = function(){ // = ".onload" = após ter carregado todas as informações
    document.getElementById('area').innerHTML = this.responseText; 
    let obj = JSON.parse(this.responseText);
    console.log('CEP:' + ' ' + obj.cep);
} 

//

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input 
    + '/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
    }
}