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
var nalumnos=prompt("Introduzca numero de alumnos: ");
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
