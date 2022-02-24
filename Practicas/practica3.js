/* P1 3-4-6*/
/*
EJERCICIO 3:
Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla 
finalmente información de cada persona en un único mensaje.
*/
/*
var edad= new Array();
var sexo= new Array();
document.write(`<table>`);
for(var i=1;i<=3;i++){
    edad[i]=prompt(`Introduzca edad ${i}: `);
    sexo[i]=prompt(`Introduzca sexo ${i}: `);
    document.write(`<tr>`);
    document.write(`<td><p>Edad: ${edad[i]}</p></td>`);
    document.write(`<td><p>Sexo: ${sexo[i]}</p></td>`);
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
/*
var n=new Array();
for(var i=0;n[i-1]!=0;i++){
    n[i]=prompt("Introduzca numero"); 
    if(isNaN(n[i])){
        alert("No es un número")
    }  
}
for(var x of n){
    if(!isNaN(x)&&x!=0){
        document.write(`<p>${x}</p>`);
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
var nalumnos=prompt("Introduzca numero de alumnos: ");
var datos= new Array();
var nombre;
var exp;
var p;
var t;
var a;

document.write(`<table>`);
document.write(`<tr>`);
document.write(`<th>Nombre</th><th>Exp.</th><th>Práctica</th><th>Teoría</th><th>Actitud</th><th>Total</th>`);
document.write(`</tr>`);
for(var i=0;i<=nalumnos-1;i++){
    nombre=prompt("Introduzca nombre del alumno: ");
    console.log(nombre);
    exp=prompt("Introduzca expediente: ");
    console.log(exp);
    p=prompt("Nota de la parte práctica: ");
    while(isNaN(p)){
        alert("No es un numero");
        p=prompt("Nota de la parte práctica: ");
    }
    console.log(p);
    t=prompt("Nota de la parte teórica: ");
    while(isNaN(t)){
        alert("No es un numero");
        t=prompt("Nota de la parte práctica: ");
    }
    console.log(t);
    a=prompt("Nota de actitud: ");
    while(isNaN(a)){
        alert("No es un numero");
        a=prompt("Nota de la parte práctica: ");
    }
    total=(p*0.5)+(t*0.4)+(a*0.1);
    console.log(a);
    datos[i]=[nombre, exp, p, t, a, total];
    console.log(datos[i]);
}

//for in almacena indices en alumno, for of almacena variables en y

for(var alumno in datos){
    document.write(`<tr>`);
    for(var y of datos[alumno]){
        document.write(`<td>${y}</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);