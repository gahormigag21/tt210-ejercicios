salida = document.getElementById("resultado")
btn = document.getElementById("agregar")
btn2 = document.getElementById("mostrar")

const array1 = [1, 4, 9, 16];

// Pass a function to map

// Expected output: Array [2, 8, 18, 32]

let datosArray = [];

btn.addEventListener('click', function() {
    const input = document.getElementById('dataInput');
    const dato = input.value.trim();

    if (dato) {
        datosArray.push(dato);
        input.value = ''; // Limpiar el campo de entrada

        let hijo = document.createElement("h3")
        hijo.innerHTML = "Dato agregado: " + dato +"."
        salida.appendChild(hijo)
        console.log('Dato agregado:', dato);
    } else {
        console.log('Por favor, introduce un dato válido.');
    }
});

btn2.addEventListener('click', function() {
    
    const map1 = datosArray.map((x) => parseInt(x) + 1);

    let hijo = document.createElement("h3")
    hijo.innerHTML = `Array de datos: ${datosArray}`
    salida.appendChild(hijo)
    hijo = document.createElement("h3")
    hijo.innerHTML = `Array de datos sumando 1: ${map1}`
    salida.appendChild(hijo)
    
    console.log('Array de datos:', datosArray);
});
