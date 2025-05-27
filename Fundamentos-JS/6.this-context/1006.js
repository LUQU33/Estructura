// 1. this en un objeto
const persona = {
    nombre: "Pedro",
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    },
};
persona.saludar(); // Hola, soy Pedro


// 2. this en una función flecha
const objeto = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, soy " + this.nombre);
    },
};

objeto.saludar(); // Hola, soy undefined 

// 3. Cambiar el this con call()
function saludar() {
    console.log("Hola, soy " + this.nombre);
}

const persona2 = { nombre: "Lucía" };

saludar.call(persona2); // Hola, soy Lucía