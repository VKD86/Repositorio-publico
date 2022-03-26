
//let nombre = prompt("Escribe tu nombre");
//let edad = prompt("Escribe tu edad");

//document.write("Hola " + nombre + " tu edad es " + edad );
//document.write(`Hola ${nombre}, tu edad es: ${edad}`);

// EJERCICIO: pedir un nombre por prompt
// darle la bienvenida en una alerta usando el nombre
// pedirle al usuario un nro
// en una alerta escribirle el resultado de la suma de las letras de su nombre más el nro que ingresó

let nombre = prompt ("Por favor, escribe tu nombre:");
//alert("Bienvenido/a " +  nombre)     FORMA MAS FACIL
alert("¡Bienvenido/a" + " " +  `${nombre}` + "!");

let numero = prompt ("Por favor " + `${nombre}` + " escribe un número:");

let resultado = nombre.length + parseInt(numero);

alert(resultado);


