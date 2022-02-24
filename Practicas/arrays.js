/*
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
var currentIndex = numeros.length, temporaryValue, randomIndex;
console.log(numeros);

for (var i = 1;i<=20;i++){
    document.write(`<h3>Combinación número ${i}</h3>`);
    numeros.sort(()=> Math.random() - 0.5);
    document.write("<p>");
    for (var j = 1; j<=6;j++){
        document.write(numeros[j]);
        document.write("&nbsp;");
    }
    document.write("</p>");
}
*/
var nAleatorio;
var veces = [0,0,0,0,0,0,0,0,0,0];
for(var i=1; i<=10000;i++){
    nAleatorio=Math.floor(Math.random() * 10) + 1;
    console.log(nAleatorio);
    veces[nAleatorio-1]=veces[nAleatorio-1]+1;
    console.log(veces);
}
