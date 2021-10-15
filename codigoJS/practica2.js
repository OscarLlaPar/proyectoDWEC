/*EJERCICIO 1
*/
/*do{
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
*/
/*
EJERCICIO 2
*/
/*
var n=parseInt(prompt("Introduzca numero entero positivo: "));
document.write(`<p>`);
for(var i=1;i<=n;i++){
    for(var j=0;j<i;j++){
        document.write(` * `);
    }
    document.write(`<br>`);
}
document.write(`</p>`);
document.write(`<p>`);
for(var i=0;i<=n;i++){
    for(var j=0;j<n-i;j++){
        document.write(` * `);
    }
    document.write(`<br>`);
}
document.write(`</p>`);
document.write(`<p>`);
for(var i=1;i<=n;i++){
    for(var j=1;j<=n-i;j++){
        document.write(`&nbsp;`);
    }
    for(var k=0;k<2*i-1;k++){
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`</p>`);
document.write(`<p>`);
for(var i=1;i<=n;i++){
    for(var k=0;k<i-1;k++){
        document.write(`&nbsp;`);
    }
    for(var j=0;j<=n*2-i*2;j++){
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`</p>`);
*/
/*
EJERCICIO 3
*/
/*var suma = 0;
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
*/
/*
EJERCICIO 4
*/
/*
document.write(`<table>`);
for (var i=0;i<=10000;i++){
    document.write(`<tr>`);
    for (var j=1;j<=20;j++){
    document.write(`<th>${i}</th>`);
    document.write(`<td>&#${i};</td>`);
    i++;
    }
    document.write(`</tr>`);
    
}
document.write(`</table>`);
*/
/*
EJERCICIO 5
*/

for(var i=1;i<=2000;i++){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    var x=Math.floor(Math.random() * 101);
    var y=Math.floor(Math.random() * 101);
    document.write(`<div style=\"width: 50px; height: 50px; background-color:  rgb(${r}, ${g}, ${b}); position: absolute; left: ${x}%; top: ${y}%;\"></div>`);
}

/*
----------------------------------------
*/