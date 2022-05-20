'use strict'

/*
Un programa que nos diga si un numero es par o impar.
1.- Que tenga ventana prompt
2.- Si no es valido que lo vuelva a pedir de nuevo el numero ingresado
*/

var number = parseInt(prompt('Introduce un numero',0));

    while(isNaN(number)){
        number = parseInt(prompt('Introduce un numero',0));
    }
    if(number % 2 == 0){
        alert("Es un numero par");
    }else{
        alert("Es impar");
    }