// TAREA
// pedir nombre; devolver cantidad de caracteres del nombre;
// Pedir numero; alerta que que muestre suma del nro. ingresado + cdad de caracteres

let nombre = prompt("Ingresa tu nombre");

alert(`${nombre}, tu nombre tiene ${nombre.length} letras`);

let numero = prompt(`${nombre}, ingresa un número`);

let suma = Number(numero) + nombre.length

alert(`${nombre}, la suma de la cantidad de letras de tu nombre y el número que ingresaste es igual a ${suma}`);

