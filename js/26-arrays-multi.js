'use strict'

var categorias =['Accion', 'Terror', 'Comedia'];
var peliculas =['La verdad duele', 'La vida es bella','Gran torino'];

peliculas.reverse();
console.log(peliculas);


var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula:");
    pelicula.push(elemento);
}while(elemento != "ACABAR");

*/

var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
    peliculas.splice(indice,1);
}

var peliculas_string = peliculas.join();
var cadena = "texto1, texto2,texto3";
var cadena_array = cadena.split(",");

console.log(peliculas_string);