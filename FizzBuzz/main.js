entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let fb = [];

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value
})

function fizzBuzz(n) {
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fb.push('FizzBuzz');
        } else if (i % 3 === 0) {
            fb.push('Fizz');
        } else if (i % 5 === 0) {
            fb.push('Buzz');
        } else {
            fb.push(i);
        }
        fb.push('\n');
    }
    fb=fb.join('')
    return fb;
}

btn.addEventListener("click", ()=>{
    resultado = fizzBuzz(numero)    
    let hijo = document.createElement("h3")
    hijo.innerHTML = `la serie de FizzBuzz hasta el número ${numero} es ${resultado}`
    salida.appendChild(hijo)
})
