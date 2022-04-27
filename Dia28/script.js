var numeroSecreto = parseInt(Math.random () * 11);
var qtdChute = 10;
var dificuldade = 1;

function Chutar(){
  
  var elementoResultado = document.getElementById("resultado")
  var chutesRestantes = document.getElementById("chutes")
  var chute = parseInt(document.getElementById("valor").value)
  console.log(chute)
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "VOCÊ ACERTOU"
    console.log("acertou")
    numeroSecreto = parseInt(Math.random () * 11);
    //Chutar(8)
  } else if (chute > 10 || chute < 0) 
  { 
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
  }
  else {
    qtdChute = qtdChute - 1;
   if (qtdChute <= 0){
     
     elementoResultado.innerHTML = "Você Perdeu, Recarregue a pagina para tentar      novamente!";
     chutesRestantes.innerHTML = "Você tem " + qtdChute + " Chutes Restantes!"
     //Chutar(12);
     
   }
   
   else {
     if (chute > numeroSecreto) {
       elementoResultado.innerHTML = "Você errou,tente novamente! Seu Palpite \(" + chute + ") é maior que o Numero Secreto" ;
     }
     else{
       elementoResultado.innerHTML = "Você errou,tente novamente! Seu Palpite \(" + chute + ") é menor que o Numero Secreto" ;
     }
     
     chutesRestantes.innerHTML = "Você tem " + qtdChute + " Chutes Restantes!"
   }
   
   
         }
}

//Colocar informacao de 0 a 10 mais que isso erro 
// == 
