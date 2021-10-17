/*
EJERCICIO 2
Crea una  aplicación  web  que  pida  al  usuario  un  número  entero  positivo  
y dibuje triángulos con tantos asteriscos como haya indicado el usuario con el 
número introducido. Un ejemplo de ejecución sería el siguiente:

Triángulo 1:

*
* *
* * *
* * * *
* * * * *
* * * * * *

Triángulo 2:

* * * * * *
* * * * *
* * * *
* * *
* *
* 

Triángulo 3:

     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

Triángulo 4:

* * * * * *
 * * * * *
  * * * *
   * * *
    * *
     *

*/
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