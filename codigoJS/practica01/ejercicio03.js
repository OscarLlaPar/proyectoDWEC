/*
EJERCICIO 3:
Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla 
finalmente información de cada persona en un único mensaje.
*/
var edad;
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
