//*map(): ejecuta una accion sobre cada uno de los elementos de mi array

const mis_compras = ["Harina","Azucar","Yerba","Fideos","Tomate","Morron","Lavandina"]

const compras = mis_compras.map( (articulo) => {
    return "Hay que comprar "+articulo
})

mis_compras
compras

const numeros = [4,6,9,22,15,7]

const numeros_multiplicados = numeros.map( (numero) => {
    return numero*2
}
)
numeros_multiplicados

//*filter(): nos DEVUELVE un array con los elementos que hayan PASADO EL FILTRO INDICADO (ejecuta, nos da un true o false, y nos devuelve EL ELEMENTO)

/*const numeros = [4,6,9,22,15,7] */

const mayores_a_10 = numeros.filter( num => {
    return num >= 10
})

/* const mis_compras = ["Harina","Azucar","Yerba","Fideos","Tomate","Morron","Lavandina"] */
const elementos = mis_compras.filter(art =>{
    return art.charAt(0) >= "M"
})

elementos
mayores_a_10

//*reduce(): opera sonre todos los elementos del array, y nos devuelve ese resultado

/*const numeros = [4,6,9,22,15,7] */

const suma = mis_compras.reduce((total,num) =>{
    return total + num
})

suma

//*includes(): Esto nos devuelve un BOOLEANO. (verdadero o falso). Nos dice si un elemento se encuentra o no en un array

/*const numeros = [4,6,9,22,15,7] */

const resultado = mis_compras.includes("Mayonesa")
resultado

//*toString(): trasforma un array a String
/* const mis_compras = ["Harina","Azucar","Yerba","Fideos","Tomate","Morron","Lavandina"] */

const array_string = numeros.toString()
array_string

//*concat(): nos fusiona todos los array en uno nuevo

const fabrica = ["Jorge","Pablo","Analia"]
const contaduria = ["Mauricio","Leonela","Sandra"]
const ventas = ["Juan Pablo","Ernesto","Mariana"]

const empleados = fabrica.concat(contaduria,ventas)

empleados

//*some(): nos DEVUELVE un booleano. Verifica si AL MENOS un elemento cumple con la condicion dada

/*const numeros = [4,6,9,22,15,7] */

const verificacion = numeros.some( numero => numero > 30)
verificacion

//*every(): nos DEVUELVE un booleando. Verifica si TODOS los elementos cumplen con la condicion dada

const verifica = numeros.every( numero => numero >6)
verifica

//*findIndex(): nos DEVUELVE el INDICE que se encuentra el PRIMER ELEMENTO ENCONTRADO. Si no lo encuentra, devuelve un -1

const indice = empleados.findIndex( empleado => empleado.charAt(0) === "C")
indice

//*from(): crea un array desde un string 

//let mi_array = Array.from()

//*forEach(): aplica , al igual que el map, una ejecucion a cada elemento del array. NO NOS DEVUELVE NADA

/*const numeros = [4,6,9,22,15,7] */
const num_multiplicados = numeros.forEach(num=> num*2)
num_multiplicados


//*Fill(): completa un array con determinados elementos. MODIFICA EL ARRAY ORIGINAL
numeros.fill(0,2,4)
numeros

const mi_array = Array(10)
mi_array.fill(9)

