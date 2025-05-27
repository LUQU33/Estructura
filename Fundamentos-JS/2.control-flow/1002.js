// --------------------------------------
// 1. INSTRUCCIONES CONDICIONALES
// --------------------------------------

// if y else
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// switch (cuando hay varios casos posibles)
let dia = "martes";

switch (dia) {
    case "lunes":
    console.log("Inicio de semana");
    break;
    case "martes":
    console.log("Segundo día");
    break;
    case "miércoles":
    console.log("Mitad de semana");
    break;
    default:
    console.log("Día no registrado");
}

// --------------------------------------
// 2. BUCLES (LOOPS)
// --------------------------------------

// for (ejecuta un bloque un número definido de veces)
for (let i = 1; i <= 5; i++) {
    console.log("Contando con for:", i);
}

// while (ejecuta mientras se cumpla una condición)
let contador = 1;

while (contador <= 3) {
    console.log("Contando con while:", contador);
    contador++;
}

// do while (ejecuta al menos una vez, luego verifica)
let numero = 5;

do {
    console.log("Este bloque se ejecuta al menos una vez");
    numero--;
} while (numero > 0);