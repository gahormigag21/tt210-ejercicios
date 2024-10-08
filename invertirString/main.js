let input = document.getElementById('dataInput');
let salida = document.getElementById("resultado")
let btn = document.getElementById("invertir")


btn.addEventListener('click', function() {

    var str = input.value;
    var reversedStr = str.split('').reverse().join('');
    let hijo = document.createElement("h3")
    hijo.innerHTML = "Cadena invertida: " + reversedStr +"."
    salida.appendChild(hijo)
    
});

