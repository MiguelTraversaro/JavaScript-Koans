// arrow function
const funcion1 = (mensaje, numero) => {
    console.log(mensaje, numero)
    return numero + " * 2 = " + numero * 2
}

const funcion2 = (numero) => numero + " * 2 = " + numero * 2

console.log(funcion1("numero: ", 1))
console.log(funcion2(2))


const numeros = [1, 2, 3, 4, 5, 6]

function espar(numero) {
    let resto = numero % 2
    return resto === 0
}

const pares = numeros.filter(espar)
console.log(pares)

const dobles = numeros.map(numero => numero * 2)
console.log(dobles)