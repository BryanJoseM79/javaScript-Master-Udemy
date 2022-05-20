'use strict'

// Transformacion de textos 

var numero = 44;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "es muy buen curso";

var dato = numero.toString(); // Usar toString para cambiar un numero a texto 
    dato = texto1.toUpperCase(); // Usar toUpperCase para cambiar un texto de minusculas a MAYUSCULAS       
    dato = texto1.toLowerCase(); // Usar para poner el texto en minusculas
console.log(dato);

// Calcular longitud de un texto 

var nombre = "bryan jose grandon vasquez";

console.log(nombre.length); // .length para contar los caracteres del texto

// Como concatenar -- Unir textos en pocas palabras

var textoTotal = texto1+" "+texto2; // igual se puede usar el texto1.concat(" "+texto2);
console.log(textoTotal);