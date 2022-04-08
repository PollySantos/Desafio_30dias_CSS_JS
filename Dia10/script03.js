var um = parseInt(window.prompt('Digite o primeiro valor:', 'Digite aqui!')); 
var dois = parseInt(window.prompt('Digite o segundo valor:', 'Digite aqui!'));
var soma = um + dois;

 if(soma > 100){
     alert(soma + " é maior do que 100!");
   }
 else if(soma == 100){
     alert(soma + " é igual a 100!");
   }
 else{
     alert(soma + " é menor do que 100!");
   }