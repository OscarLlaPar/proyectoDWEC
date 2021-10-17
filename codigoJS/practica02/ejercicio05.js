/*
EJERCICIO 5
Crea una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 
píxeles. Su posición en la pantalla será también aleatoria.
*/

for(var i=1;i<=2000;i++){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    var x=Math.floor(Math.random() * 101);
    var y=Math.floor(Math.random() * 101);
    document.write(`<div style=\"width: 50px; height: 50px; background-color:  rgb(${r}, ${g}, ${b}); position: absolute; left: ${x}%; top: ${y}%;\"></div>`);
}


