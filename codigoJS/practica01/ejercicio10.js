/*
EJERCICIO 10
*/
var n=parseInt(prompt("Introduzca número entero:"));
var resultado=1;
while(isNaN(n) || n>=100){
    var n=parseInt(prompt("Entrada no válida. Introduzca número entero menor que 100:"));
}
for(var i=2;i<=n;i++){
    resultado=resultado*i;
}
document.write(`<p>Factorial de ${n}: ${resultado}</p>`);
