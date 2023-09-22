import {users} from "./users"

//*users.js como una base de datos (siendo esto un GRAN ARRAY)
users.forEach( user => user.username);

const new_user = {
    id: 11 , 
    name: "Sebastian", 
    username: "SebasGA",
    phone: "0303456"
    }

users.push(new_user)

users.forEach( user => user);

//*Agregarle el PAIS a mi user cuyo id es 1


users[0].address["country"] = "France"

users[0].address

//*Muchas veces, es mas sencillo CREAR un objeto, Y agregarlo dentro de los objetos/arrays que ya contengan una propiedad
const pais = {country: "Argentina"}

const ubicacion_user = users[1].address

//ubicacion_user

//*para esto, vamos a utilizar un metodo llamado DESTRUCTURING: nos permite DESARMAR un objeto/array, y utilizar los elementos por separado

users[1].address = {...users[1]["address"],...pais}

users[1].address

const new_user_2 = {
    id: 12 , 
    name: "German", 
    username: "Ger22",
    phone: "123456"
    }

users.push(new_user_2)

users[11]

const country = {country: "Argentina"}

users[11] = {...users[11],...country}

users[11]

//*Array de canciones:

const playlist = {songs : []}

const song_1 = {name: "Californication",artist: "Red hot chili peppers"}
const song_2 = {name: "Mujer Amante", artist: "Rata Blanca"}
const song_3 = {name: "Imagine", artist: "John Lennon"}

playlist.songs = [...playlist.songs, song_1]
playlist.songs = [...playlist.songs, song_2]
playlist.songs = [...playlist.songs, song_3]

playlist.songs

//* Arca de noe

const animales_selva = ["Monos","Jirafas"]
const animales_desierto = ["Camellos","Serpiertes"]
const animales_africa = ["Elefantes","Leones"]
const animales_asia = ["Koala"]


const arca_noe = [...animales_africa, ...animales_selva, ...animales_desierto,...animales_asia]

arca_noe

//*Agregando al user 11 mas datos!

const datos_user = {mascota: "Firulais",estudios: "Prof en Ed Fisica",empleo: "Farmacia"}

users[11] = {...users[11],...datos_user}
users[11]

//! RECORDAR SIEMPRE DESESTRUCTURAR TODO LO QUE PRECISEMOS!!!

const datos = {nombre: "Marco Aurelio", apellido: "Solis"}
const domicilio = {domicilio: "Calle 550" , altura: 1889 }
const laboral = {profesion: "Carpintero", experiencia: "30 años"}

const user = {...datos,...laboral,...domicilio}
user.altura


//HOMEWORK: DESTRUCTURING.

/* 
-crear 3 arrays y mediante destructuring, crear un unico array con todos esos elementos
-crear 3 objetos, en el cual todos tengan 2 propiedades (cada objeto debe tener propiedades distintas), y mediante destructuring , crear un nuevo objeto que contenga TODAS las propiedades. 

*/