let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("la altura es", dato.value);
});
rotulo.innerHTML = "Indique la altura de la persona:";
