// ÁMBITO LÉXICO (Scope)
function saludo() {
    let mensaje = "Hola desde la función";
    console.log(mensaje);
}

saludo();
// console.log(mensaje); // Error: mensaje no existe aquí

if (true) {
    let dentroIf = "Dentro del if";
    console.log(dentroIf);
}
// console.log(dentroIf); // Error: dentroIf no existe aquí

let global = "Variable global";

function mostrarGlobal() {
    console.log(global);
}

mostrarGlobal();

// HOISTING (elevación)
console.log(nombre); // undefined
var nombre = "Pedro";

// console.log(apellido); // Error
let apellido = "Gómez";

// console.log(edad); // Error
const edad = 30;

// Diferencia var y let
function ejemploVar() {
    var x = 10;
    if (true) {
    var x = 20;
    console.log("Dentro if:", x); // 20
    }
  console.log("Fuera if:", x); // 20
}

ejemploVar();

function ejemploLet() {
    let y = 10;
    if (true) {
    let y = 20;
    console.log("Dentro if:", y); // 20
    }
  console.log("Fuera if:", y); // 10
}

ejemploLet();