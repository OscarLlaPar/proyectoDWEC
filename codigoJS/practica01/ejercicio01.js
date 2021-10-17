/*
EJERCICIO 1:
Crea una página web que muestre un color de fondo aleatorio cada vez que 
entremos en ella.
En el head de la página, añadir:

*/
var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
document.write(`<div id=\"fondo\" style=\"background-color: rgb(${r}, ${g}, ${b})\"></div>`);

