console.log("Bienvenido");
// Se obtienen elementos html
var login = document.getElementById('login');
var regPortada = document.getElementById("regPortada");
var reg = document.getElementById("registro");

function mostrarLogin() {
  // console.log("mostrar");
  login.style.display = "block";
  regPortada.style.display = "none";
}

function ocultarLogin() {
  // console.log("ocultar");
  login.style.display = "none";
  regPortada.style.display = "block";
}

function mostrarReg(){
  console.log("Mostrarreg");
  reg.style.display = "block";
  regPortada.style.display = "none";
}
function ocultarReg(){
  console.log("ocultar");
  reg.style.display = " none"
  regPortada.style.display = "block";
}
