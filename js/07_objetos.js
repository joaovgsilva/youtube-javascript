/* OBJETOS:
são basicamente variáveis com muitos valores dentro:
1. variável nome.variável = {propriedade:"valor.propriedade", propriedade:"valor.propriedade", propriedade:"valor.propriedade"};
1.1 geralmente é utilizada a variável "const" 
2. os valores dentro de um objeto são chamados propriedades;
3. objetos também podem ter métodos; método = uma função colocada dentro de uma propriedade. */ 

const carro1 = {
    marca:'ford', 
    modelo:'ka', 
    ano: 2009, 
    placa:'ABC1D23',
    buzina: function() {alert('Bi bi bi bi')}
};

console.log(carro1.placa); // apertando o F12 dentro do browser e acessando a aba "Console", podemos observar que o "console.log" está pegando as informações do objeto "carro" e puxando (".") somente a proprieda "placa"

carro1.buzina(); // o browser vai mostra o valor que está dentro do "alert" 

//

const carro2 = {
    marca:'ford', 
    modelo:'ka', 
    ano: 2009, 
    placa:'ABC1D23',
    completo: function(){
        return 'A marca do carro é ' + this.marca + ' e o ano dele é ' + this.ano
        // ao invés de usar "carro2.marca", como estamos dentro do objeto, se usa o "this.marca"; this = objeto que estamos dentro, nessa caso "carro2"
    }
};

console.log(carro2.completo());