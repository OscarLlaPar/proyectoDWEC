/*
EJERCICIO 4
Crea una página que muestre los primeros 10000 símbolos de la tabla Unicode. Se 
mostrará en una tabla en la que en cada fila se indica el número de código, 
seguido del carácter de ese código. En cada fila se mostrarán 10 símbolos.
*/

document.write(`<table>`);
for (var i=0;i<=10000;i++){
    document.write(`<tr>`);
    for (var j=1;j<=10;j++){
    document.write(`<th>${i}</th>`);
    document.write(`<td>&#${i};</td>`);
    i++;
    }
    document.write(`</tr>`);
    
}
document.write(`</table>`);


