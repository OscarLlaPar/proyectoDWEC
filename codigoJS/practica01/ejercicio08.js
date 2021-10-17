
/*
EJERCICIO 8:
Escribe un script que calcule la suma de los números pares y los números impares de los 
números comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta. 
*/
var apar=0;
var aimpar=0;
for(var i=2;i<100;i++){
    if(i%2==0){
        apar=apar+i;
    }
    else{
        aimpar=aimpar+i;
    }
}
document.write(`<p>Suma de números pares: ${apar}</p>`);
document.write(`<p>Suma de números impares: ${aimpar}</p>`);
