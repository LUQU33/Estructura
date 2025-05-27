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

// 2. Función anónima (sin nombre, guardada en una variable)
let saludarAnonima = function () {
    console.log("Hola desde una función anónima");
};

saludarAnonima(); // Se usa igual que una normal

// 3. Función flecha (forma corta de escribir una función)
let saludarFlecha = () => {
    console.log("Hola desde una función flecha");
};

saludarFlecha();

// Función flecha con parámetros
let multiplicar = (x, y) => {
  console.log("Multiplicación:", x * y);
};

multiplicar(4, 2);