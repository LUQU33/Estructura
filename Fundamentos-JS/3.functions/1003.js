// --------------------------------------
// FUNCIONES
// --------------------------------------

// 1. Función tradicional (con nombre)
function saludar() {
    console.log("Hola, ¿cómo estás?");
}

saludar(); // Llama a la función

// Función con parámetros
function sumar(a, b) {
    console.log("Resultado:", a + b);
}

sumar(2, 3); // Muestra: Resultado: 5

// 2. Función anónima
let saludarAnonima = function () {
    console.log("Hola desde una función anónima");
};

saludarAnonima();

// 3. Función flecha
let saludarFlecha = () => {
    console.log("Hola desde una función flecha");
};

saludarFlecha();

// Función flecha con parámetros
let multiplicar = (x, y) => {
  console.log("Multiplicación:", x * y);
};

multiplicar(4, 2);