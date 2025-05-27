// CLOSURES: función que "recuerda" las variables donde fue creada

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

// Aunque la función crearContador terminó,
// la función interna sigue teniendo acceso a "contador"