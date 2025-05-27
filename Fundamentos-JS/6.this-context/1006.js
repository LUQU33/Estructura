// 1. this en un objeto
const persona = {
    nombre: "Pedro",
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    },
};

persona.saludar(); // Hola, soy Pedro

// 2. this en una función normal
function mostrarThis() {
    console.log(this);
}

mostrarThis(); // En modo estricto es undefined, si no, es el objeto global

// 3. this en una función flecha (usa el this del lugar donde fue creada)
const objeto = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, soy " + this.nombre);
    },
};

objeto.saludar(); // Hola, soy undefined (porque arrow no tiene su propio this)

// 4. Cambiar el this con call()
function saludar() {
    console.log("Hola, soy " + this.nombre);
}

const persona2 = { nombre: "Lucía" };

saludar.call(persona2); // Hola, soy Lucía