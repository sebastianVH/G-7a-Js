//* Sistema de ingreso de legajo en una escuela: vamos a crear objetos los cuales luego almacenaremos en un array, para utilizar como si fuese una base de datos
//* cada objeto tendra un numero legajo, nombre y apellido, dni, materia. Esto representara a un profesor. En nuestro sistema, tendremos la posibildiad de dar de alta un profesor, o ver cuales son los profesores que tengo cargados. El sistema tendra 2 opciones y la tercera sera la de salir
/*
let opcion = 0
const ingresos = []

alert("Bienvenidos a nuestro sistema de carga!")
while (opcion !== 3) {
    opcion = parseInt(prompt("Ingrese una opcion: \n1)Ingresar un nuevo legajo \n2) Ver legajos\n3)Salir. "))
    switch (opcion) {
        case 1:
            //ejecutar una nueva carga
            let nro_legajo= prompt("Ingrese Legajo")
            let nombre_apellido= prompt("Ingrese Nombre y Apellido")
            let dni= prompt("Ingrese DNI")
            let materia= prompt("Ingrese Materia a cargo")
            const nuevo_legajo = {legajo: nro_legajo, nombre_apellido: nombre_apellido, documento: dni, materia: materia}
            ingresos.push(nuevo_legajo)
            break;
        case 2:
            //listamos los legajos
            const lista_legajos = ingresos.map((legajo,index) => `Legajo nro${index+1}: ${legajo.legajo}, Nombre: ${legajo.nombre_apellido}  DNI: ${legajo.documento}\n`)
            alert(lista_legajos)
            break;
        case 3:
            alert("Gracias por usar nuestro sistema!")
            break;
        default:
            alert("Opcion no valida")
            break;
    }
}
*/
//*Crearemos la lista de compras: nos mostrata opciones para cargar nuevos productos, y la cantidad. Tendremos un menu con 3 opciones: cargar productos, ver lista de compras, salir.

let opcion = 0
const lista_compras = []

alert("Bienvenido al sistema de ingreso de productos")
while (opcion!== 3) {
    opcion = parseInt(prompt("Ingrese una opcion:\n1)Ingresar producto\n2)Ver productos\n3)Salir\n"))
    switch (opcion) {
        case 1:
            //carga productos
            let nombre_producto = prompt("Ingrese el producto:")
            let cant_productos =  parseInt(prompt("Ingrese la cantidad:"))
            const producto = {nombre: nombre_producto,cantidad: cant_productos}
            lista_compras.push(producto)
            break;
        case 2:
            //listar productos
            const listado =lista_compras.map((prod,index) => `Producto ${index+1}: Nombre: ${prod.nombre}, Cantidad: ${prod.cantidad}`)
            alert(listado)
            break;
        case 3:
            //salir
            alert("Gracias por utilizar nuestro sistema!!")
            break;
        default:
            alert("Opcion no valida")
            break;
    }
}

//HOMEWORK: replicar el sistema propuesto en nuestros ejercicios! deben utilizar un array para almacenar datos, un objeto que contendra diferentes datos dentro y luego sera almacenado en ese array (minimo 3 propiedades del objeto), un bucle con minimo 3 opciones: ingresar datos, ver datos y salir. (pueden agregar mas!), switch o if ,ELSEIF para manejar la condicion de eleccion del usuario. 