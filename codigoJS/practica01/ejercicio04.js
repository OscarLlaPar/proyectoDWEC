/*
EJERCICIO 4:
Crea un script que lea números enteros hasta que el usuario introduzca un número 0. 
Finalmente debe mostrar el número máximo, el mínimo y la media de todos ellos. 
Debes controlar que introduzca números y no cualquier otro carácter. 
*/
var n;
for(var i=1;n!=0;i++){
    n=prompt("Introduzca numero");
    if(isNaN(n)){
        alert("No es un numero");
    }
    else if (n!=0){
        document.write(`<p>${n}</p>`);
    }
}

