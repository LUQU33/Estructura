// --------------------------------------
// EVENTOS
// --------------------------------------

// 1. Registrar un evento con addEventListener
const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
    alert("¡Hiciste clic en el botón!");
});

// 2. Propagación de eventos (bubbling)
const caja = document.getElementById("caja");
const botonDentro = document.getElementById("botonDentro");

caja.addEventListener("click", () => {
    console.log("Hiciste clic en el DIV");
});

botonDentro.addEventListener("click", (e) => {
  e.stopPropagation(); // Detiene la propagación
    console.log("Hiciste clic en el botón DENTRO del div");
});