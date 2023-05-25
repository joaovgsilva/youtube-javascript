// MANIPULAÇÃO DE DATAS: 

// 1. DATA:
let data = new Date();
console.log(data);

// 2. ANO ATUAL:
let ano = data.getFullYear();
console.log(ano);

// 3. MÊS ATUAL - onde começa em 0 (Janeiro) e termina em 11 (Dezembro):
let mes = data.getMonth();
console.log(mes); 

// 3.1. MÊS ATUAL - de Janeiro até Dezembro
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// 4. DIA DO MÊS:
let diaMes = data.getDate();
console.log(diaMes); 

// 5. DIA DA SEMANA - onde começa no 0 (Domingo) e termina no 6 (Sábado):
let diaSemana = data.getDay();
console.log(diaSemana);

// 5.1.  DIA DA SEMANA - de Domingo até Sábado:
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

// 6. HORA - de 0 até 23:
let hora = data.getHours();
console.log(hora);

// 7. MINUTOS - de 0 até 59:
let minutos = data.getMinutes();
console.log(minutos);

// 8. SEGUNDOS - de 0 até 59:
let segundos = data.getSeconds();
console.log(segundos);

// 9. MILISEGUNDOS - de 0 até 999:
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// 10. DATA PADRÃO PT-BR - Dia/Mês/Ano + Horário:
let dataHorárioBR = data.toLocaleString('pt-BR');
console.log(dataHorárioBR);

// 10.1 DATA PADRÃO PT-BR - Dia/Mês/Ano:
let dataBR = data.toLocaleString('pt-BR',{dateStyle:"short"});
console.log(dataBR);

// 10.2 DATA PADRÃO PT-BR - Horário:
let horarioBR = data.toLocaleString('pt-BR',{timeStyle:"short"});
console.log(horarioBR);

// 10.3 DATA PADRÃO PT-BR - junção dos valores separados:
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {return x<10 ? '0' + x : '' + x}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

// 11. COMPARAR DATAS - Maior ou Menor: 
var hoje = new Date();
var vencimento = new Date(2024, 4, 25); // new Date(ano, mês, dia) | IMPORTANTE: "mês" começa em 0 (Janeiro) e termina em 11 (Dezembro)

if(hoje > vencimento){
    console.log("Sua conta está vencida!");
} else {
    console.log("Sua conta ainda não venceu!");
}

// 12. DIFERENÇA ENTRE DUAS DATAS EM DIAS:
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log("Faltam " + diferencaDias + " dias para o final do ano!");

