// ÁMBITO LÉXICO (Scope)
function saludo() {
    let mensaje = "Hola desde la función";
    console.log(mensaje);
}

console.log(mensaje);

if (true) {
    let dentroIf = "Dentro del if";
    console.log(dentroIf);
}
console.log(dentroIf); // dentroIf is not defined

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