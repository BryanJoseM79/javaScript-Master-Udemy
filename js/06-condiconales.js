'use strict'

// Condicional If
// Si A es igual a B entonces haz algo

// Si pasa esto
// if(){
// Ejecuta esto
// }


var edad1 = 10;
var edad2 = 12;
if(edad1 > edad2){
    console.log("Edad uno es mayor que edad2");
}else{
    console.log("La edad uno es inferior");
}

// Operadpres relacionales 
// Mayor : >
// Menor: <
// Mayor o igual: >=
// Menor o igual: <=
// Igual: =
// Distinto: !=

var edad = 19;
var nombre = "David Suarez";

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" Tiene "+edad+" Años, es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres milenial');
    }
}else{
     // Es menor de edad
     console.log(nombre+" Tiene "+edad+" Años, es menor de edad");
}

// Operadores Lógicos
// And (Y): &&
// Or (o): ||
// Negación: !


var year = 2028;
// Negación
if(year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

// And
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR 
if(year == 2008 || year >= 2018 && year == 2028){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}
