/*
EJERCICIO 3
Crea una página web que pida al usuario números hasta que el usuario pulse el 
botón cancelar. Se debe comprobar si lo que inserta el usuario es un número o no. 
Al finalizar se debe mostrar la suma de todos los números introducidos y en el  
caso de que se hayan insertado caracteres no numéricos, mostrar también todos 
los caracteres que se han introducido.
*/
var suma = 0;
var n=0;
while(n!=null){
    n = prompt("Introduzca numero: ");
    
    if (isNaN(n)){
        document.write(`<p>${n}</p>`);
        alert("No es un numero");
    }
    else if(n!=null){
        document.write(`<p>${n}</p>`);
        alert("Es un numero");
        suma+=parseInt(n);
    }
}
document.write(`<p>Total: ${suma}</p>`);



