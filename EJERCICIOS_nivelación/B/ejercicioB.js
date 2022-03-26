//Ejercicio
//pido un nombre al usuario/a
//pido al usuario/a que ingrese un numero
//hola "nombre de usuaria/o te pedimos que ingreses un numero"
//alerta con "nombreusuaria/o" tiene (numero de letras) caracteres; 
//le sumamos el numero que ingresaste el resultado es (numero de letras + numero ingresado)

let nombre= prompt("Escribe tu nombre");
let numero= prompt("¡Hola "+ nombre + "!, te pedimos que ingreses un número:");
alert(nombre + " tiene " + nombre.length + " caracteres" );
let suma= parseInt(numero) + nombre.length;
alert(nombre + ", si le sumamos el numero que ingresaste, el resultado da: " + suma);
