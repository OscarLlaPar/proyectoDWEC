/*
EJERCICIO 2:
Crea un script que pida al usuario un número. Indicar al usuario si lo que ha introducido, 
es un número o no, y si es un número, decir si es par o no y si es primo o no.
*/
var n=prompt("Introduzca un numero: ");
var primo=true;
if (isNaN(n)){
    document.write("<p>NO NÚMERO</p>");
}
else{
    document.write(`<p>ES NÚMERO</p>`);
    if (n%2===0){
        document.write("<p>ES PAR</p>");
    }
    else{
        document.write("<p>ES IMPAR</p>");
    }
    for (var i = 2; i < n/2+1 && primo; i++) {
        if (n % i === 0) {
          primo=false;
        }
    }
    if (primo){
        document.write("<p>ES PRIMO</p>");
    }
    else{
        document.write("<p>NO ES PRIMO</p>");
    }
}
