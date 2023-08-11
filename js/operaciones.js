//console.log() => nos permite visualizar algun tipo de dato o mensaje en la consola del navegador
//para que nuestros archivos JS funcionen con el HTML debo LINKEARLOS (conectarlos)
// esto va en el html => <script type="module" src="**la ruta del archivo js**"></script>

//*Ejemplo => console.log("Hola mundo")

//Operaciones de datos en Js

//? Operaciones numericas:

let suma = 2 + 2
let resta = 8 - 6
let multiplicacion = 8 *3
let division = 16/4

let potencia = 8 ** 2
let resto = 15 % 6 //=> es el SOBRANTE de una division
let entero = Math.floor(16/6) // => la parte ENTERA de una division
let raiz = Math.sqrt(64) // raiz cuadrada de un numero

//? Operaciones de string:

let frase = "Hola"+"Mundo" // => si uso un signo + en 2 string, voy a unir (CONCATENAR) los string

//* Si intento dividir , multiplicar o restar 2 string ALFABETICOS, tendre un resultado NaN (Not a Number)
let resultado = "hola"/"mundo"

//! conversion de datos: Si pasamos datos NUMERICOS tipo string, e intentamos restar,dividir o multiplicar estos datos, Js, tratara de trasformar esos string a numeros y hacer la correspondiente OPERACION

//Pedido de datos a traves del prompt (ventana) y la muestra de mensajes (alert)

//* pedir datos a traves de prompt (ventana)

// let nombre_usuario = prompt("Diganos su nombre")
// alert("Hola "+nombre_usuario)

// let numero1 = prompt("Indique el primer numero:")
// let numero2 = prompt("Indique el segundo numero:")
// alert(Number(numero1)+Number(numero2)) //=> reconversion de DATOS: transformo mis datos a otro tipo de dato

//TEMPLATE STRING: nos permite a traves de las comillas invertidas (alt+96) utilizar variables dentro de STRINGS
// para usar una variable dentro del string debemos primero: poner el signo $ y luego abrir y cerrar llaves. Dentro de estas llaves colocaremos las variables