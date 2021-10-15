/*
EJERCICIO 1:
Crea una página web que muestre un color de fondo aleatorio cada vez que 
entremos en ella.
En el head de la página, añadir:
<style>
    #fondo{
        position: fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
    }
</style>
*/
/*var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
document.write(`<div id=\"fondo\" style=\"background-color: rgb(${r}, ${g}, ${b})\"></div>`);
*/
/*
EJERCICIO 2:
Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, 
es un número o no, y si es un número, decir si es par o no y si es primo o no.
*/
/*var n=prompt("Introduzca un numero");
var primo=true;
if (isNaN(n)){
    console.log("NO NÚMERO");
}
else{
    console.log("ES NÚMERO");
    if (n%2==0){
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
        console.log("NO ES PRIMO")
    }
}
*/
/*
EJERCICIO 3:
Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla 
finalmente información de cada persona en un único mensaje.
*/
/*var edad;
var sexo;
document.write(`<table>`);
for(var i=1;i<=10;i++){
    edad=prompt(`Introduzca edad ${i}: `);
    sexo=prompt(`Introduzca sexo ${i}: `);
    document.write(`<tr>`);
    document.write(`<td><p>Edad: ${edad}</p></td>`);
    document.write(`<td><p>Sexo: ${sexo}</p></td>`);
    document.write(`</tr>`);
}
document.write(`</table>`);
*/
/*
EJERCICIO 4:
Crea un script que lea números enteros hasta que el usuario introduzca un número 0. 
Finalmente debe mostrar el número máximo, el mínimo y la media de todos ellos. 
Debes controlar que introduzca números y no cualquier otro carácter. 
*/
/*var n;
for(var i=1;n!=0;i++){
    n=prompt("Introduzca numero");
    if(isNaN(n)){
        alert("No es un numero");
    }
    else if (n!=0){
        document.write(`<p>${n}</p>`);
    }
}*/
/*
EJERCICIO 5:
Crea un script que permita validar una clave introducida por el usuario y tenga 3
intentos para introducirla bien. Si no la introduce bien, le da error y se sale del 
programa. La clave debe ser un número de 6 dígitos.
*/
/*var clave=prompt("Introduzca clave: ");
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
*/
/*EJERCICIO 6:
Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá 
que introducir el número de alumnos que va a gestionar el script. 

La nota final de cada alumno se calcula según el siguiente criterio: 
    a.Parte práctica 40%
    b.Parte teórica 30%
    c.Actitud 10%

El script leerá el nombre del alumno y su número de expediente y las notas obtenidas en 
cada parte. Finalmente mostrará el resultado de todos los alumnos y una media de la nota 
final y una media de cada parte.

Nota:
    •El número de expediente está formado por 4 números y una letra minúscula
    •Las notas deben estar entre 0 y 10. Si se introduce un valor que no es numérico
    o no está entre los valores 0-10, dará un error y volverá a pedir la información. 
*/
/*var nalumnos=prompt("Introduzca numero de alumnos: ");
var nombre;
var exp;
var p;
var t;
var a;
document.write(`<table>`);
document.write(`<th>Nombre</th><th>Exp.</th><th>Práctica</th><th>Teoría</th><th>Actitud</th><th>Total</th>`);
for(var i=1;i<=nalumnos;i++){
    nombre=prompt("Introduzca nombre del alumno: ");
    exp=prompt("Introduzca expediente: ");
    p=prompt("Nota de la parte práctica: ");
    while(isNaN(p)){
        alert("No es un numero");
        p=prompt("Nota de la parte práctica: ");
    }
    t=prompt("Nota de la parte teórica: ");
    while(isNaN(t)){
        alert("No es un numero");
        t=prompt("Nota de la parte práctica: ");
    }
    a=prompt("Nota de actitud: ");
    while(isNaN(a)){
        alert("No es un numero");
        a=prompt("Nota de la parte práctica: ");
    }
    document.write(`<tr>`);
    document.write(`<td>${nombre}</td>`);
    document.write(`<td>${exp}</td>`);
    document.write(`<td>${p}</td>`);
    document.write(`<td>${t}</td>`);
    document.write(`<td>${a}</td>`);
    document.write(`<td>${(p*0.5)+(t*0.4)+(a*0.1)}</td>`);
    document.write(`</tr>`);
}
document.write(`</table>`);
*/
/*
EJERCICIO 7:
Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números 
que pides al usuario. El segundo número tiene que ser mayor o igual que el primer número.
*/
/*
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
*/
/*
EJERCICIO 8:
Escribe un script que calcule la suma de los números pares y los números impares de los 
números comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta. 
*/
/*
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
*/
/*
EJERCICIO 9:
Escribe un script que calcule la suma de los números pares y la suma de los números 
impares comprendidos entre dos números que le pides al usuario. Es decir, el usuario 
introduce por ejemplo el 45 y el 89 y debes de mostrar la suma de los números pares 
comprendidos entre el 45 y el 89 y por otro lado la suma de los números impares.
No contar extremos, es decir, el 45 y el 89 en este caso no se tienen en cuenta.
*/
/*
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
    if(i%2==0){
        apar=apar+i;
    }
    else{
        aimpar=aimpar+i;
    }
}
document.write(`<p>Suma de números pares: ${apar}</p>`);
document.write(`<p>Suma de números impares: ${aimpar}</p>`);
*/
/*
EJERCICIO 10
*/
/*var n=parseInt(prompt("Introduzca número entero:"));
var resultado=1;
while(isNaN(n) || n>=100){
    var n=parseInt(prompt("Entrada no válida. Introduzca número entero menor que 100:"));
}
for(var i=2;i<=n;i++){
    resultado=resultado*i;
}
document.write(`<p>Factorial de ${n}: ${resultado}</p>`);
*/