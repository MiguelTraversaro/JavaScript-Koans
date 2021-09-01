// arrow function
const funcion1 = (mensaje, numero) => {
    console.log(mensaje, numero)
    return numero + " * 2 = " + numero * 2
}

const funcion2 = (numero) => numero + " * 2 = " + numero * 2

console.log(funcion1("numero: ", 1))
console.log(funcion2(2))