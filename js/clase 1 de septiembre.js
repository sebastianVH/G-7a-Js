// alert("Hola mundo!")
// prompt("Ingresos de datos")

//*Adivinanza: tiene que adivinar cuantas lunas tiene Saturno: le diremos al usuario que adivine cuantas lunas posee (el numero correcto es 53). Si el usuario elige menos de ese numero, le pondremos un mensaje que diga "El numero de lunas es mayor al elegido!", si el usuario elige uno mayor, le pondremos "El numero de lunas es menos al elegido". Si acierta, le pondremos un anuncio que dice GANASTE!!!!. Mientras el usuario no acierte, el juego debe repetirse.
/*
alert("Bienvenidos a nuestro juego!!! Adivine cuantas lunas tiene Saturno....")

let cant_lunas = 53
let numero_arriesgado = 0
//*bucle:
while (numero_arriesgado != cant_lunas) {
    let numero_arriesgado = prompt("Indique un numero: ")
    if (numero_arriesgado > cant_lunas){
        alert("El numero de lunas es MENOR al arriesgado")
    } else if (numero_arriesgado < cant_lunas){
        alert("El numero de lunas es MAYOR al arriesgado")
    } else {
        alert("GANASTE!!!!!")
        break
    }
}
*/
//*contador: me pedira el registro de 5 alumnos (nombre y apellido). Cuando lleguemos a ingresar a 5, el bucle terminara

// let contador_alumnos = 0
// let lista_alumnos = []
// let cant_alumnos = prompt("Cuantos alumnos quiere guardar?")

// while (contador_alumnos < cant_alumnos ){
//     let nombre_alumno = prompt("Ingrese el nombre del alumno")
//     lista_alumnos.push(nombre_alumno)
//     contador_alumnos++ 
// }

// alert(lista_alumnos)


//*BUCLE FOR: se caracteriza por tener una cantidad de CICLOS (veces que se repite) de codigo YA ESTIPULADA.

// este bucle es muy utilizado para recorrer ARRAYS.
/*
El bucle for lleva 3 argumentos:
1: la variable de iniciacion (cumple la misma funcion que el CONTADOR que usamos en el while)
2: condicion a evaluar (cumple la misma funcion que los ARGUMENTOS DEL WHILE)
3: INCREMENTADOR: (cumple la misma funcion que el INCREMENTADOR del while)
*/
/* 
! let contador_alumnos = 0

while ( contador_alumnos < 10) {
    alert("Cargamos un alumno")
    contador_alumnos++
}
*/


// for(let contador_alumnos = 0;contador_alumnos < 3;contador_alumnos++){
//     //codigo a ejecutar:
//     alert("Cargamos un alumno. la expresion 'contador_alumnos' vale " + contador_alumnos)
// }

// let comida = ["Pizza","Empanadas","Pastas","Pure","Guiso","Pescado"]

// for(let i = 0; i < comida.length ;i++) {
//     alert(`Hoy quiero comer ${comida[i]}`)
// }

/* 
HOMEWORK: crear un array con 6 elementos, recorrerlo con un bucle for, e imprimir alguna frase junto con el elemento indicado en la posicion del array: 
ej: let mascotas = ["firulais","momo","Cuscus"]

for(let i = 0; i < mascotas.length; i++) {
    alert(`Tengo una mascota llamada ${mascotas[i]}`) =>
}
*/
let mascotas = ["firulais","momo","Cuscus"]

for(let i = 0; i < mascotas.length; i++) {
    alert(`Tengo una mascota llamada ${mascotas[i]}`)
}