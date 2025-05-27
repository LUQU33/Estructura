// -----------------------------------
// 1. DECLARACIÓN DE VARIABLES
// -----------------------------------

// Uso de let 
let nombre = "Pedro";

// Uso de const
const pais = "Argentina";

// Uso de var (no recomendable)
var edad = 21;

// -----------------------------------
// 2. TIPOS PRIMITIVOS
// -----------------------------------

// String (cadenas de texto)
let saludo = "Hola Mundo";

// Number (números)
let año = 2025;

// Boolean (booleanos: V o F)
let verdadero = true;
let falso = false;

// Undefined (indefinido)
let apellido;

// Null (vacío)
let mascotas = null;

// Symbol (claves únicas)
let id = Symbol("id");

// BigInt (para numeros MUY grandes)
let numeroGrande = 1234567891011121314151617181920n;

// -----------------------------------
// 3. TIPOS DE OBJETOS
// -----------------------------------

// Object (estructura de datos con propiedades)
let persona = {
    nombre: "Pedro",
    pais: "Argentina",
    edad: 21
};

// Array (lista ordenada de valores)
let lenguajes = ["JavaScript", "Python", "PHP", "C++"];

// Function (bloque de código reutilizable)
function saludar() {
    console.log("Hola desde una función :)")
}
console.log(saludar());

// Date (fecha y hora)
let fechaActual = new Date();
console.log(fechaActual);