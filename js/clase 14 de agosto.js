//!RECORDATORIO: DIFERENCIAS ENTRE ARRAY Y OBJETO:

//*El array se caracteriza por tener sus elementos ordenados a traves de INDICES
//*El objeto se caracteriza por tener sus elementos ordenados a traves de PROPIEDADES

//?METODOS: son funcionalidades las cuales me permiten ejecutar acciones sobre mis arrays u objetos. Estos pueden ser ITERACIONES, BUSQUEDAS, FILTROS, agregar o quitar elementos, etc.

//* Veamos primero arrays:

//Eliminar o reemplazar elementos en el medio del array:

//*splice(): nos permite agregar o eliminar elemento de un array
//el primer numero, representa el INDICE de inicio, el segundo la CANT  a eliminar
//el tercer parametro es OPCIONAL: nos permite insertar ELEMENTOS en el espacio del array que se elimino
const mis_compras = ["Harina","Azucar","Yerba","Fideos","Tomate","Morron","Lavandina"]
//mis_compras.splice(4,1,"Rollo de cocina")
console.log(mis_compras);

//*slice(): devuelve una fraccion del array como copia para utilizar en otra variable. NO MODIFICA EL ARRAY ORIGINAL, SINO QUE NOS DEVUELVE UNA COPIA
//el primer argumento, significa INDICE DE INICIO
//el segundo argumento, CANT DE ELEMENTOS A RECORRER PARA HACER LA COPIA

let nueva_lista = mis_compras.slice(1,4)
console.log(nueva_lista);

//*indexOf(): nos dice el indice del primer elemento que coincida con la busqueda. NOS DEVUELVE UN NUMERO
//si nos devuelve un -1, es xq el elemento NO ESTA EN EL ARRAY

let indice = mis_compras.indexOf("Mermelada")
console.log(indice);


//*join(): NOS DEVUELVE un string, el cual son los elementos del array, separador por un SEPARADOR ASIGNADO
//el argumento que le pasamos al join, sera el separador que tendra nuestro string. Si no colocamos ninguno, utilizara la "Coma" (,) como separador

const nombres = ["Seba","Lucas","Marina","Aye","Beto"]
const unido = nombres.join(", ")
console.log(unido);

//*reverse(): da vuelta el orden de un array. MODIFICA EL ARRAY ORIGINAL

nombres.reverse()

//*sort(): ordena el ARRAY

nombres.sort()
nombres.sort().reverse() //ORDENAMOS DE MANERA DESCENDENTE
console.log(nombres);

//!IMPORTANTE: ATENCION CON LOS NUMEROS!!!

const numeros = [4,8,22,11,9,15,3,100]
numeros.sort((a,b) => b - a) //orden DESCENDENTE NUMERICO
numeros.sort((a,b) => a - b) //orden ASCENDENTE NUMERICO

console.log(numeros);
