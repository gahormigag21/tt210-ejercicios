entrada1 = document.getElementById("numero")
entrada2 = document.getElementById("otroNumero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let otroNumero = 0
let resultado = 0

entrada1.addEventListener("input", (evento)=>{
    numero = evento.target.value
})
entrada2.addEventListener("input", (evento)=>{
    otroNumero = evento.target.value
})

function producto(numero,otroNumero){
    return numero*otroNumero
}

btn.addEventListener("click", ()=>{
    resultado = producto(numero,otroNumero)

    let hijo = document.createElement("h3")
    hijo.innerHTML = `El resultado de número ${numero} y numero ${otroNumero} es ${resultado}.`
    salida.appendChild(hijo)
})


console.log(resultado)