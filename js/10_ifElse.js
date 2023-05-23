 /* IF e ELSE:
 if: SE isso acontecer, vai acontecer aquilo;
 else: SE NÃO acontecer isso, vai acontecer aquilo */

 var interruptor = "off";

 if (interruptor=="on"){
    console.log('A lâmpada está ligada');
 } else {
    console.log('A lâmpada está desligada');
 }

 //

 var hora = new Date().getHours();
 console.log(hora);

 if (hora < 12){
    console.log('Bom dia'); // SE a hora ("var = hora") for menor que 12  ("< 12"), vai aparecer um alerta de "Bom dia"
 } else if (hora < 18) {
    console.log('Boa tarde'); // SE a hora for maior que 12 ("if (hora < 12)"") e menor que 18 ("< 18"), vai aparecer um alerta de "Boa tarde"
 } else {
    console.log('Boa noite'); // SE NÃO for nenhuma das opções acima, vai aparecer um alerta de "Boa noite"
 }

 //  IF e ELSE costuma ser usado dentro do JS para validação de formulários, exemplo: */

 function verificar(){
    let nome = document.getElementById("nome").value;
    
    if (nome == "" || nome == null){ // SE ("if") variável for igual vázio ("nome == """) ou ("||") variável for igual nulo ("nome == null") 
        let p = document.getElementById("teste"); 
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Nome é válido";
        p.style.color = "green";
    }
 }