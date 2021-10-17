/*
EJERCICIO 9:
Escribe un script que calcule la suma de los números pares y la suma de los números 
impares comprendidos entre dos números que le pides al usuario. Es decir, el usuario 
introduce por ejemplo el 45 y el 89 y debes de mostrar la suma de los números pares 
comprendidos entre el 45 y el 89 y por otro lado la suma de los números impares.
No contar extremos, es decir, el 45 y el 89 en este caso no se tienen en cuenta.
*/
var n1=parseInt(prompt("Introduzca primer numero: "));
var n2=parseInt(prompt("Introduzca segundo numero:"));
var aux;
if (n1>n2){
    aux=n1;
    n1=n2;
    n2=aux;
}
var apar=0;
var aimpar=0;
for(var i=n1+1;i<n2;i++){
    if(i%2===0){
        apar=apar+i;
    }
    else{
        aimpar=aimpar+i;
    }
}
document.write(`<p>Suma de números pares: ${apar}</p>`);
document.write(`<p>Suma de números impares: ${aimpar}</p>`);
