// CLOSURES

function crearContador() {
  let contador = 0; // variable "privada"

  return function () {
      contador++;
      console.log("Contador:", contador);
  };
}

const miContador = crearContador();

miContador(); // Contador: 1
miContador(); // Contador: 2
miContador(); // Contador: 3