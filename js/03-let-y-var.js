'use strict'

// Pruebas con Let y var


// Prueba con var
var numero = 40;
console.log(numero); // Valor 40

if(true);{
    var numero = 50;
    console.log(numero); // Valor 50
}

console.log(numero); // Valor 50

//Prueba con Let
var texto = "Curso JS";
console.log(texto); // Valor Curso JS

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto); // Valor Laravel 5
}

console.log(texto);