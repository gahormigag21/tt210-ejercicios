let arrayp=[3,5,1,2,6,1,9,12,56,8]
let aux = 0

function ordBurbuja(array) {

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]>array[i+1]) {
                aux = array[i]
                array[i]=array[i+1]
                array[i+1] = aux
            }
        }
    }
    
    return array
}

console.log(ordBurbuja(arrayp))