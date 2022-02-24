/*EJERCICIO 1*/
/*Crea una página que pida al usuario un texto y una clave numérica y cifre el texto 
con la clave pasada. Para ello se deberá desplazar el código de cada carácter tantas 
posiciones como nos indique la clave. Por ejemplo, texto: “Alberto”, clave: “2”, 
texto cifrado: “Cndgtvq”.*/
/*var texto = prompt("Introduzca texto: ");
console.log(texto);
var cifra = parseInt(prompt("Introduzca clave (Número): "));
console.log(cifra);
console.log(typeof(cifra));
var arrayCodigos =new Array();
var nuevoTexto = '';
for(let i=0; i<=texto.length-1; i++){
    let codigo = parseInt(texto.charCodeAt(i));
    let nuevoCodigo = parseInt(codigo+cifra);
    nuevoTexto+=String.fromCharCode(nuevoCodigo);
}
console.log(arrayCodigos);

console.log(nuevoTexto);
document.write(`<p>${nuevoTexto}</p>`)*/
/*EJERCICIO 2*/
/*Crea una función para detectar palíndromos. La función recibirá un texto y devolverá
verdadero o falso en función de si el texto es o no es palíndromo. Hay que tener en 
cuenta que se deben ignorar los signos de puntuación, espacios, interrogaciones, 
paréntesis,etc., tambiénse ignoran tildes y diéresis y no se distingue entre mayúsculas
 y minúsculas.
*/
function esPalindromo(texto){
    let salida = true;
    if(typeof(texto)==="string"||texto instanceof String){
        textoComparar= quitarTildes(texto.toUpperCase());
        for(let i=0; i<=(textoComparar.length-1)/2 && salida;i++){
            if(textoComparar[i]!=textoComparar[textoComparar.length-1-i]){
                salida=false;
            }
        }
    }
    else{
        salida=false;
    }


    return salida;
}
console.log(esPalindromo("ala"))
/*EJERCICIO 3*/
/*
Crea una función para detectar anagramas. Un anagrama es una palabra que resulta de 
transponer las letras de otra, por ejemplo: “SENTIDO” y “DESTINO”. La función recibirá 
como mínimo dos palabras, aunque puede recibir más y devolverá verdadero o falso en 
función de si las palabras son anagramas de las mismas letras. 
*/
function esAnagrama(texto1, texto2){
    let salida=true;
    let texto1Comparar=Array.from(quitarTildes(texto1.toUpperCase()));
    let texto2Comparar=Array.from(quitarTildes(texto2.toUpperCase()));
    texto1Comparar=texto1Comparar.sort();
    texto2Comparar=texto2Comparar.sort();
    console.log(texto1Comparar);
    console.log(texto2Comparar);
    for(let i=0; i<=texto1Comparar.length-1 && salida;i++){
        if(texto1Comparar.length!=texto2Comparar.length || texto1Comparar[i]!=texto2Comparar[i]){
            salida=false;
        }
    }
    return salida;
}
console.log(esAnagrama("sentido","destino"));

function quitarTildes(texto){
    if(typeof(texto)==="string"||texto instanceof String){
        texto=texto.replace('á','a');
        texto=texto.replace('e','e');
        texto=texto.replace('í','i');
        texto=texto.replace('ó','o');
        texto=texto.replace('ú','u');
        texto=texto.replace('Á','A');
        texto=texto.replace('É','E');
        texto=texto.replace('Í','I');
        texto=texto.replace('Ó','O');
        texto=texto.replace('Ú','U');
    }
    return texto;
}