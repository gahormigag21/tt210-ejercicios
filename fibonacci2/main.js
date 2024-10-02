entrada = document.getElementById("numero")
entrada2 = document.getElementById("otroNumero")
entrada3 = document.getElementById("tope")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let otroNumeronumero = 0
let tope = 0
let fibo = [0,1]

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})
entrada2.addEventListener("input", (evento)=>{
    otroNumero = evento.target.value
})
entrada3.addEventListener("input", (evento)=>{
    tope = evento.target.value
})

function obtenerFibo(t,n,n2){
    fibo= [n,n2]
    console.log(fibo)
    if (t==0) {
        fibo =[n]
    }else{ 
        for (let i = 2; i <= t; i++) {
            fibo[i]= parseInt(fibo[i-1]) + parseInt(fibo [i-2]) ;
        }
    }
    console.log(fibo)
    return fibo
}

btn.addEventListener("click", ()=>{
    resultado = obtenerFibo(tope,numero,otroNumero)    
    let hijo = document.createElement("h3")
    hijo.innerHTML = `la serie de fibonacci del número ${numero} es ${resultado}`
    salida.appendChild(hijo)
})


