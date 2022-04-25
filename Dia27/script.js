function converterGraus() {
    var graus = parseInt(document.getElementById("graus").value);
    var fah = document.getElementById("fah");
    fah.innerHTML = "";
    var calcfah = (graus * 1.8 + 32).toFixed(0);
    fah.innerHTML = graus + "ºC é equivalente a " + calcfah + " ºF";
    var K = document.getElementById("K");
    K.innerHTML = "";
    var calcK = graus + 273;
    K.innerHTML = graus + "ºC é equivalente a " + calcK + " K";
  }
  
  function converterDistancia() {
    var kms = parseInt(document.getElementById("kms").value);
    var mil = document.getElementById("mil");
    mil.innerHTML = "";
    var calcmil = (kms * 0.621371).toFixed(2);
    mil.innerHTML = kms + "KMs é equivalente a " + calcmil + " Milhas";
  }
  
  // '=' atribui valor a variavel
  // '==' compara valores e retorna se verdadeiro ou falso
  // '===' compara valores E TIPO e retorna se verdadeiro ou falso