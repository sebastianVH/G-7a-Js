//* Bucles While

/*
En nuestra cerveceria, tomaremos el pedido de los clientes de cada mesa, basado en el tipo de cerveza que quieran tomar: esta puede ser "rubia","negra","roja". La cantidad de clientes, dependera de la mesa, por lo que la cantidad de veces a tomar el pedido por cada cliente va a ser VARIABLE. Cada vez que tomemos el pedido de un cliente, agregaremos a nuestro contador de cervezas, una por cada uno de los tipos que haya! esto significa que tendremos un contador por rubias,negras y rojas. Al finalizar de tomar el pedido, mostraremos cuantas cervezas se pidieron de cada una en la mesa
*/

/*
let cant_clientes = prompt("Cuantos clientes hay en la mesa?") //pedimos los cliente de la mesa
let contador_pedidos = 0
let contador_rubias = 0
let contador_negras = 0
let contador_rojas = 0

while (contador_pedidos < cant_clientes) {
    let cerveza_pedida = prompt("Que cerveza desea tomar?\n1) Rubia\n2) Negra\n3) Roja") //pedimos al cliente que elija la cerveza

    switch (cerveza_pedida) {
        case "1":
            contador_rubias++
            break;
        case "2":
            contador_negras++
            break;
        case "3":
            contador_rojas++
            break;
    }

    contador_pedidos++
}

prompt(`Cervezas Rubias: ${contador_rubias} \nCervezas Negras: ${contador_negras}\nCervezas Rojas:${contador_rojas} `)
*/
//*Bucle for:

/*Voy a pedir al cliente que diga cuantos productos agregara a la lista de compras. En base a su eleccion, repetiremos el codigo, preguntando al cliente, el nombre del producto a agregar,y lo cargaremos a un Array con todos los productos que ya haya ingresado */

let cant_productos = prompt("Ingrese la cantidad de productos a cargar a la lista de compras: ")
let lista_compras = [] //lista vacia para almacenar nuestros productos

for (let i = 0; i < cant_productos; i++){
    //pedir al usuario el producto y agregarlo a la lista de compras
    let producto = prompt("Ingrese el producto a cargar: ")
    lista_compras.push(producto)
}

/*

let i = 0 =>contador

while (i<cant_productos)
{
    let producto = prompt("Ingrese el producto a cargar: ")
    lista_compras.push(producto)
    i++
}

*/
alert(lista_compras)
//homework: constara en construir un CONTADOR con cualquier ejemplo. Luego, ese mismo contador, lo pasaran al otro tipo  de bucle. Ejemplo: si primero lo hicieron con un FOR, lo pasaron a WHILE, o viceversa.
