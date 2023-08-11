//comentario en Js: usamos 2 lineas

/* 
eso es un comentario
por bloque 
*/

//? Javascript es un lenguaje de programacion de alto nivel - interpretado

//que es un dato? es una fraccion minima de INFORMACION. Existen varios tipos de datos:

/*
Datos numericos: Entero o decimal
Datos alfanumericos: Letras,numeros y/o caracteres
Datos Booleano: Por ser true o false. Nos permiten evaluar una expresion como verdadera o falsa
*/

//*un dato numerico, simplemente se escribe colocando el numero:
// 4 es un dato numerico ENTERO. (integers)
// 190.10 es un dato numerico DECIMAL: los decimales, se separan POR PUNTO (float)
//*Un dato alfanumerico , se escribe colocandolo ENTRE COMILLAS. Pueden ser, simples o dobles. Pero siempre se INICIA Y FINALIZA CON LA MISMA. 
// un pass podria ser un ejemplo muy claro: sebaglobal10. Otro, muy usado ES EL MAIL sebastian36@gmail.com (string)
//* Un dato booleano, es una expresion que puede ser evaluada como verdadera o falsa: Messi es argentino. => true  La tierra mide 15000km ancho =>false

22363968514 - 33698521

//! regla numerica: si un dato, que son solo numeros NO SE UTILIZARAN PARA EVALUAR EXPRESIONES MATEMATICAS, se lo pondra como STRING (dato alfanumerico)

//? VARIABLES: es un espacio de almacenamiento en la memoria que referencia a un dato
//las variables, para ser utilizadas, deben ser DECLARADAS: significa darles un nombre que les indique su contenido, para que luego, sea facil de ubicar y usar el dato

//* Declarando variables

//modo 1: escribir el nombre de la variable, simplemente con lo que indiquemos: (no utilizar)

nombre = 'Seba'

//modo 2: es declararlo con la palabra reservada VAR (indica que es una variable) (no utilizar)

var mascota = "Budin"

//modo 3: usando la palabra reservada LET (indica que es una variable local) Recomendada!

let edad = 35

//modo 4: es usar la palabra reservada CONST (indica que es una CONSTANTE) Recomendadas!

const altura = 1.70

//! Atencion: las variables , segun su declaracion PUEDEN SER SOBREESCRITAS. Ademas, una variable con VAR, nos podria generar que armemos nuevas variable con las mismas declaraciones de variables

const direccion = "Av siempreviva 742"

direccion = "" //! CONST NO ME PERMITE CAMBIAR EL DATO CONTENIDO DENTRO

//? recordemos declarar nuestras variables con LET o CONST

let peso = 67.200
const dni = "33456787"