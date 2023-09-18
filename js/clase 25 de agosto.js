//Switch: es similar al if-else if-else, pero en este caso en lugar de evaluar condiciones, chequea cada resultado del caso a evaluar

//*En nuestro edificio tenemos 4 deptos habilitados y porteria. Nuestro portero electrico, tiene los botones del 1 al 9, y todos son funcionales. En nuestro programa, si algun usuario toca el boton del depto correspondiente, enviara un alerta diciendo a que depto se esta comunicando. Si toca alguno de los que no estan habilitados, mostrara el mensaje de comunicacion a porteria.

//* MODO CON ELSE - ELSE IF - ELIF
// if (depto === 1){
    //     console.log("Comunicandose al depto 1");
    // }else if (depto === 2){
        //     console.log("Comunicandose al depto 2");
        // } else if (depto === 3){
            //     console.log("Comunicandose al depto 3");
            // } else if (depto === 4){
                //     console.log("Comunicandose al depto 4");
                // } else {
                    //     console.log("Comunicandose con porteria");
                    // }
                    
//*Dentro de la sentencia del switch, pondremos la variable a EVALUAR
const depto = 4

switch (depto){
    case 1: //*el CASE funciona como un IF-ELSE IF
        console.log("Comunicandose al depto 1")
        break; //!IMPORTANTE: SIEMPRE UTILIZAR EL BREAK 
    case 2:
        console.log("Comunicandose al depto 2")
        break;
    case 3:
        console.log("Comunicandose al depto 3")
        break;
    case 4:
        console.log("Comunicandose al depto 4")
        break;
    default: //* DEFAULT funciona como un ELSE
        console.log("Comunicandose con porteria")
        break;
}

//*TAMBIEN PUEDE EVALUAR condiciones de MAYOR O MENOR
//*con este switch, segun la nota del alumno, dira si promociona, debe dar final o recursar

const nota = 3

switch (nota){
    case 10:
        console.log("Promociona la materia");
        break;
    case (nota <7 && nota >4):
        console.log("Debe rendir final");
        break;
    case nota < 4:
        console.log("Debe recursas");
        break;
    default:
        console.log("no registra nota");
        break;
}

//! IMPORTANTE PARA RECORDAR:
//* IF - ELIF PERMITEN EVALUAR CONDICIONES BOOLEANAS EN SUS EXPRESIONES
//* SWITCH EVALUA RESULTADOS PROVENIENTES DE SUS EXPRESIONES

//HOMEWORK: crear un switch que evalue condiciones de compra de un comercio: la constante sera metodo_pago, y puede tener 3 valores: efectivo, tarjeta credito, tarjeta debito. Segun el metodo de pago, mostrara un mensaje: si es efectivo, mostrara: "tiene un 20% de descuento". si es tarjeta debito, mostrara el mensaje "Tiene un 10% de descuento" y si es tarjeta credito, mostrara un mensaje "Tiene 3 cuotas sin interes". Si indica otro metodo de pago, mostrara el mensaje "Por favor, indique que metodo de pago utilizara."


//* BUCLES, CICLICAS: son estructuras que ejecutar UN MISMO CODIGO bajo una determinada CONDICION. 

//?BUCLE WHILE: ejecuta su codigo MIENTRAS QUE la condicion a evaluar SEA VERDADERA

const numero_secreto = 15
const numero_arriesgado = 0

// while (numero_secreto !== numero_arriesgado) {
//     const numero_arriesgado =  parseInt(prompt("Adivine el numero secreto! Esta entre el 1 y el 20"))
//     if (numero_arriesgado !== numero_secreto){
//         alert("No es el numero secreto");
//     } else {
//         alert("Acertaste el numero!!!")
//         break //*utilizamos el break para salir del bucle que estemos ejecutando
//     }
// }

//*tmb podemos usar contadores: evaluar una condicion del while con un mayor o menor

let contador = 0
while (contador < 3) {
    console.log("se ejecuto el bucle");
    contador++
}
