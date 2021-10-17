/*EJERCICIO 1
Realiza un script que implemente un juego de encontrar un número aleatorio bajo 
las siguientes condiciones:
    a.La página calculará un numero aleatorio del 1 al 100.
    b.El usuario dispondrá de 5 intentos para adivinar el número.
    c.Si el usuario escribe algo que no es un número mostrará un mensaje de 
    error y volverá a pedir un número, pero esto no contará como un intento.
    d.Si el usuario acierta el número se le indica al usuario que ha acertado y 
    mediante un cuadro de confirmación se le pregunta si desea volver a jugar o 
    salir.
    e.Si el usuario no acierta con el número, le dirá si el número es mayor o 
    menor que el que ha introducido y le volverá a preguntar por un número.
    f.Si ha llegado al último intento y no ha acertado se le indicará al usuario 
    que ha perdido y mediante un cuadro de confirmación le preguntará si desea 
    volver a jugar o salir.
    g.Si se cancela cualquier cuadro, el juego termina indicando que se canceló 
    el juego.
    h.Cada vez que el usuario termine un juego, se deberá escribir en la página 
    información sobre ese juego:
        1.  Juego terminado: SI 
            Número de intentos: 4
            Número acertado: SI
        2.  Juego terminado: SI 
            Número de intentos: 5
            Número acertado: NO
        3.  Juego terminado: NO
            Número de intentos: 2
            Número acertado: NO
*/
do{
var n=Math.floor(Math.random() * 101);
var n2;
var iguales=false
for (var i=1;i<=5;i++){
    n2=prompt("Introduzca número para adivinar: ");
    
    while(isNaN(n2)||n2>100||n2<0){
        n2=prompt("Entrada no válida. Introduzca número para adivinar: ");
        
    }
    if(n2===null){
        break;
    }
    if (n2==n){
        iguales=true;
        alert("Número correcto.")
        break;
    }
    else{
        if(n2>n){
            alert("El número introducido es mayor.");
        }
        else{
            alert("El número introducido es menor.")
        }
    }
    
    
}
if(n2===null){
    document.write(`<p>Juego terminado: NO</p>`);
}
else{
    document.write(`<p>Juego terminado: SÍ</p>`);
}

document.write(`<p>Número de intentos: ${i-1}</p>`);
if(iguales){
    document.write(`<p>Número adivinado: SÍ</p>`);
}
else{
    document.write(`<p>Número adivinado: NO</p>`);
}
}while(confirm("¿Desea volver a jugar?")&&n2!=null);
