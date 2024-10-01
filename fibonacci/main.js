entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let fibo = [0,1]

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})

function obtenerFibo(n){
    if (n==0) {
        fibo =[0]
    } else if(n==1){
        fibo= [0,1]
    }else{ 
        for (let i = 2; i <= n; i++) {
            fibo[i]= fibo[i-1] + fibo [i-2] ;
        }
    }
    return fibo
}

btn.addEventListener("click", ()=>{
    resultado = obtenerFibo(numero)    
    let hijo = document.createElement("h3")
    hijo.innerHTML = `la serie de fibonacci del número ${numero} es ${resultado}`
    salida.appendChild(hijo)
})


