//*Metodos FOR para arrays:

const frutas = ["Banana","Manzana","Pera","Uva","Sandia"]
const alumnos = [
    {nombre:"Seba",email:"Sebastian@global.com"},
    {nombre:"Male",email:"Male@google.com"},
    {nombre:"Ricardo",email:"fort@gmail.com"}
]

//*FOR OF: realiza un recorrido POR CADA ELEMENTO QUE HAYA EN MI ARRAY.
for (const fruta of frutas){
    console.log("vamos a comprar "+ fruta);
}

/*
for(let i = 0; i<frutas.length; i++){
    console.log("vamos a comprar "+ frutas[i])
}
*/

//* FOR IN:

//array: una estructura en el cual cada elemento estaba posicionado por un INDICE array=["banana","manzana"]
//objeto: una estructura en el cual cada elemento 

const herramientas = ["Martillo","Serrucho","Clavo","Tornillo"]
const marca = {nombre: "Stanley", origen: "EEUU", actividad: "Fabrica de termos", fundacion: 1987}

//*por ejemplo, nos permite recorrer un objeto, y ver sus propiedades, contenido, o ambas
for (const llave in marca) {
    console.log(`propiedad: ${llave}, contenido: ${marca[llave]}`);;
}

//*RECORRE CADA INDICE COMO UN VALOR DEL ARRAY. Podemos ver el INDICE, o CONTENIDO, e inclusive AMBAS
for (const indice in herramientas) {
    console.log(herramientas[indice]);
}

//* veamos un caso PARTICULAR del for of:
//! EL FOR OF NO ME PERMITE RECORRER UN OBJETO
// for (const elemento of marca){
//     console.log(elemento);
// }


/* CUADRO DE FOR IN - FOR OF Y SUS DEVOLUCIONES

                QUE PUEDO RECORRER            QUE ME DEVUELVE EN CADA ITERACION
*FOR IN:         ARRAYS|OBJETOS                   INDICE|PROPIEDAD  
*FOR OF:            ARRAYS                       CONTENIDO DEL INDICE

*/

//? EJERCICIOS: RECONOCER QUE TIPO DE ESTRUCTURA ES Y QUE PODRIAMOS UTILIZAR:

const mascotas = ["Firulais","Momo","Pochi"] //array
const deptos = [{piso: 3,depto: "A"},{piso:1,depto:"C"}] //array con objetos
const empleados = {nombre: "Jose Luis",area: "Tesoreria", antiguedad: "5 años"} //objeto (puede contener un array)
const calle = {nombre: "Benito juarez", altura: 1556} //objeto (puede contener array)

/* 
                    for-in             for-of           DEVOLUCION EN CADA RECORRIDO             
mascotas              SI                 SI          => for in: un indice , for of => un elemento (contenido)
deptos                SI                 SI          => for in: un indice, for of => un elemento (cada objeto que haya dentro)
empleados             SI                 NO          => for in: una PROPIEDAD
calle                 SI                 NO          => for in: una PROPIEDAD

*/

//HOMEWORK: a cada uno de las estructuras creadas, recorrerlas con un FOR IN o FOR OF, segun correspondan. Dentro de cada recorrido, simplemente poner un console.log para ver la devolucion de cada estructura. eN EL FOR IN, tratar de devolver AMBAS COSAS EN MI ESTRUCTURA RECORRIDA (EJ: en mi array, devolver no solo el indice, sino tmb el contenido.)