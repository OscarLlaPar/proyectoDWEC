/*
EJERCICIO 4:
Crea un script que lea números enteros hasta que el usuario introduzca un número 0. 
Finalmente debe mostrar el número máximo, el mínimo y la media de todos ellos. 
Debes controlar que introduzca números y no cualquier otro carácter. 
*/
var n;
var acum=parseInt(0);
var media;
for(var i=0;n!=0;i++){
    n=parseInt(prompt("Introduzca numero"));
    if(isNaN(n)){
        alert("No es un numero");
    }
    else if (n!=0){
        document.write(`<p>${n}</p>`);
        acum=parseInt(acum+n);
    }
    else{
        i--;
    }
}
media=acum/i;
document.write(`<p>La media es ${media}</p>`);
