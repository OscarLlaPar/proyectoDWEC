/*
EJERCICIO 5:
Crea un script que permita validar una clave introducida por el usuario y tenga 3
intentos para introducirla bien. Si no la introduce bien, le da error y se sale del 
programa. La clave debe ser un número de 6 dígitos.
*/
var clave=prompt("Introduzca clave: ");
var clave2;
while(isNaN(clave)||clave.length!==6){
    var clave=prompt("Clave no válida. Introduzca clave de nuevo: ");
}
for(var i=1;i<=3;i++){
    clave2=prompt("Introduzca de nuevo la clave: ");
    if(clave2===clave){
        alert("Clave correcta");
        break;
    }
    else{
        alert(`Clave incorrecta. ${3-i} intentos restantes`);
    }
}
