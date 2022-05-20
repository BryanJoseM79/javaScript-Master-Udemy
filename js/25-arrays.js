'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Bryan Grandon";
var nombres = ["Victor robles","pepe robles","jara robles","juan robles", 52, true];

var lenguajes = new Array("PHP", "js", "Go", "Java","C","C#");

/*
var elemento = parseInt(prompt("Que elemento del array quiieres??",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
}else{
    alert("El usuario seleccionado es: " +nombres[elemento]);
}


document.write("<h1>Lenguajes de programacion del 2022</h1>");
document.write("<ul>");


for(var i = 0; i < lenguajes.length; i++){
        document.write("<li>"+lenguajes[i]+"</li>");
}
*/
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}


document.write("</ul>");

// Busquedas 

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

console.log(busqueda);

// Codigo optimisado de busqueda

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
   

console.log(busqueda);

// Codigo para buscar si el elemento es mayor menor o igual (.some)

var precios = [10,20,50,80,12];

var busqueda = precios.some(precio => precio < 10);

console.log(busqueda);