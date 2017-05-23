console.log("Bienvenido");
// Se obtienen elementos html
var registro = document.getElementById('registro');
var regPortada = document.getElementById("regPortada");


function mostrarLogin() {
  // console.log("mostrar");
  registro.style.display = "block";
  regPortada.style.display = "none";
}

function ocultarLogin() {
  // console.log("ocultar");
  registro.style.display = "none";
  regPortada.style.display = "block";
}
