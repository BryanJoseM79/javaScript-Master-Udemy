'use strict'

/*
1. Pida 6 numeros por pantalla y los mete en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqeuda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
(Se valorara el uso de funciones)
*/

function mostrarArray(elementos,textoCustom = ""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
        document.write("<ul>");
elementos.forEach((elemento,index)=> {
    document.write("<li>"+elemento+ "</li>");
});
        document.write("</ul>");
}


// 1. Pedir 6 numeros 
var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero",0));
}

// 2. Mostrar en el cuerpo de la pantalla 
mostrarArray(numeros);


// 2. Mostrar el array en la consola
console.log(numeros);


// 3. Ordenar y mostrar 
numeros.sort(function(a,b){return a-b}); // Para mostrar los numeros ordenados de menor a mayor
mostrarArray(numeros,' ordenado');

// 4. Invertir su orden y mostrarlo
numeros.reverse();
mostrarArray(numeros,' revertido');

// 5. Contar elementos
document.write("<h1>El array tiene:"+numeros.length+" elementos </h1>")

// 6. Busqueda 
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

    if(posicion &&  posicion != -1){
        document.write("<h1>ENCONTRADO</h1>");
        document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
    }else{
        document.write("<h1>NO ENCONTRADO</h1>");
    }
