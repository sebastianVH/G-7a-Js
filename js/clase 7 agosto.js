//distintos tipos de console para ver nuestros errores/datos en una app
// console.log("Estoy en el archivo de 7 de agosto");
// console.error("Esto seria un error")
// console.warn("Mensaje de advertencia")

//Arrays y Objetos

//? Arrays:
// imaginemos que queremos comprar todo esto: "Yerba" "Arroz" "Harina" "Azucar" "Fideos"
//El array nos va a permitir guardar varios datos dentro
//cada elemento del Array , se separara utilizando UNA COMA

let lista_compras = ["Yerba","Arroz","Harina","Azucar","Fideos"] //para crear un Array, utilizamos los CORCHETES

//como manejar los datos de un array:
//*Agregar elementos:
lista_compras.push("Lavandina") //me permite agregar un elemento AL FINAL del Array. Para esto, escribimos el elemento dentro del parentesis
lista_compras

lista_compras.unshift("Tomates") //agregar AL PRINCIPIO DEL ARRAY
lista_compras

//*Quitar elementos:
let eliminado = lista_compras.pop() //elimina el ULTIMO ELEMENTO DEL ARRAY
eliminado

let primer_elemento = lista_compras.shift() //elimina el PRIMER ELEMENTO del ARRAY
primer_elemento

//*que tan largo es el Array
let largo_array = lista_compras.length
largo_array

//*como podemos ver el contenido de un solo elemento del array
//los arrays estan construidos mediante POSICIONES DE INDICE: cada elemento se guarda en un INDICE
//siempre, el primer indice es el 0

lista_compras[0]
lista_compras[3]
lista_compras[4]


//? Objetos
//para un objeto, yo lo creo usando llaves {}
let agenda = {
    nombre:"Sebastian",
    edad:36,
    email:"seba@globalacademy.com",
    mascota: "Gamora"
}

//acceso a los datos de las propiedades:
//para acceder a una propiedad y saber cual es su valor,tenemos 2 metodos: bracket notation y dot notation

//*en nuestro ejemplo, queremos saber que dato esta guardado en la propiedad NOMBRE
//dot notation: debemos poner el nombre del objeto seguido de un punto, y el nombre de la propiedad
agenda.nombre

//bracket notation: debemos poner nuestro objeto y seguido pondremos corchetes, y dentro la propiedad a evaluar su contenido
agenda["nombre"]

//*agregamos datos a un objeto
//simplemente debemos crear la propiedad, y asignarle el valor que querramos

agenda.direccion = "Av siempreviva 742"

agenda["ocupacion"] = "Programador"

//*quitar una propiedad usamos el delete

delete agenda["email"]
delete agenda.ocupacion

//? REPASO:

//Los arrays son estructuras que se ordenan a traves de INDICES (una posicion dentro del array)
//los objetos son estructuras que almacenan datos a traves de PROPIEDADES (una LLAVE que almacena un VALOR)

