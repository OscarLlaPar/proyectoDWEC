/*
EJERCICIO 2:
Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, 
es un número o no, y si es un número, decir si es par o no y si es primo o no.
*/
var n=prompt("Introduzca un numero");
var primo=true;
if (isNaN(n)){
    console.log("NO NÚMERO");
}
else{
    console.log("ES NÚMERO");
    if (n%2===0){
        console.log("ES PAR");
    }
    else{
        console.log("ES IMPAR");
    }
    for (var i = 2; i < n/2+1 && primo; i++) {
        if (n % i === 0) {
          primo=false;
        }
    }
    if (primo){
        console.log("ES PRIMO");
    }
    else{
        console.log("NO ES PRIMO");
    }
}
