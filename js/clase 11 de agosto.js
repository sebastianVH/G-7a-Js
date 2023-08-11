//? ESTRUCTURAS MULTIDIMENSIONALES:

//Un array con objetos dentro:

const lista_compras = ["Naranja","Manzana","Sandia"]

const ticket_compra = [
    {
        producto: "Azucar",
        cantidad: 2,
        precio: 450
    },
    {
        producto: "Yerba",
        cantidad: 3,
        precio: 600
    },
    {
        producto: "Fideos",
        cantidad: 3,
        precio: 280
    }
] 

ticket_compra[0]

//un objeto que dentro contiene un array

const user = {
    nombre: "Sebastian",
    edad: 36,
    mascotas:[
        "Gamora",
        "Budin",
        "Panchito"
    ]
}

user["mascotas"]

//Array conteniendo arrays:

const alumnos = [["Seba",9],["Mati",10],["Terry",8]]
alumnos[0]

//Objetos que dentro tienen otros objetos

const usuario = {
    nombre: "Manolito",
    mail: "manolo10@gmail.com",
    telefono: "(033)123582",
    direccion: {
        calle: "Av siempreviva 742",
        ciudad: "Mar del plata",
        provincia: "Bs As",
        codigoPostal: "7600"
    }
}

//

const userA = ["Budin","Seba"]
const userB = {
    postreFavorito: "Budin",
    nombre: "Seba"
}

userB.postreFavorito
userA[1]

//? ACCESO A LA INFORMACION CONTENIDA DENTRO DE UNA ESTRUCTURA MULTIDIMENSIONAL

// const ticket_compra = [
//     {
//         producto: "Azucar",
//         cantidad: 2,
//         precio: 450
//     },
//     {
//         producto: "Yerba",
//         cantidad: 3,
//         precio: 600
//     },
//     {
//         producto: "Fideos",
//         cantidad: 3,
//         precio: 280
//     }
// ] 

ticket_compra[2].precio

/* 
const user = {
    nombre: "Sebastian",
    edad: 36,
    mascotas:[
        "Gamora",
        "Budin",
        "Panchito"
    ]
} */

user.mascotas[1]


/*

const usuario = {
    nombre: "Manolito",
    mail: "manolo10@gmail.com",
    telefono: "(033)123582",
    direccion: {
        calle: "Av siempreviva 742",
        ciudad: "Mar del plata",
        provincia: "Bs As",
        codigoPostal: "7600"
    }
}

*/

usuario.direccion.calle

/*
const alumnos = [["Seba",9],["Mati",10],["Terry",8]]
*/

console.log(alumnos[2][0])

/*
homework: van a crear un array que contenga 3 objetos: esos objetos son articulos cuyas propiedades son: id, nombre, origen ( pueden darle los valores que quieran a sus propiedades. Ej id:1 , nombre: mouse, origen:china). Luego, van a mostrar a traves del console.log LA PROPIEDAD NOMBRE DEL SEGUNDO OBJETO GUARDADO

homework2: van a crear un objeto que sea un paciente, que tiene las siguientes caracteristicas: nombre, edad, y consultas. Consultas es un array que en cada indice tendra un string sobre las consultas que hizo (ej:"Dolor de espalda","Mareos","Dolor de cabeza",etc). Van a cargarle 3 consultas, y haran un console.log de la ULTIMA consulta que haya hecho. 

*/