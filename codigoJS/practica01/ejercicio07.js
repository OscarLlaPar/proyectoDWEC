/*
EJERCICIO 7:
Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números 
que pides al usuario. El segundo número tiene que ser mayor o igual que el primer número.
*/

var n1=parseInt(prompt("Introduzca primer numero: "));
var n2=parseInt(prompt("Introduzca segundo numero: "));
var aux;
if (n1>n2){
    aux=n1;
    n1=n2;
    n2=aux;
}
document.write(`<h2>Múltiplos de dos</h2>`);
document.write(`<ul>`);
for(var i=n1;i<=n2;i++){
    if (i%2===0){
        document.write(`<li>${i}</li>`);
    }
}
document.write(`</ul>`);