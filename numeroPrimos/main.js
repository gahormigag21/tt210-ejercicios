entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let resultado

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})

function numeroPrimo(n){
    let esPrimo = false
    let cuenta = 0
    if(n==1){
        esPrimo = false
    }else{
        cuenta = 0
        for (let i = 2; i <=n; i++) {
            if (n%i==0) {
                cuenta++
            }
        }
        if (cuenta==1) {
            esPrimo=true
        } else {
            esPrimo=false
        }
    }
    return esPrimo
}

btn.addEventListener("click", ()=>{
    resultado = numeroPrimo(numero)

    let hijo = document.createElement("h3")
    if(resultado==true){
        hijo.innerHTML = `El número ${numero} es primo`
    }else{
        hijo.innerHTML = `El número ${numero} no es primo`
    }
    salida.appendChild(hijo)
})


console.log(resultado)