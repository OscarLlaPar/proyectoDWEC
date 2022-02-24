/*EJERCICIO 1*/
/*
Crea una función que muestre números de la serie de Fibonacci. La función recibirá como parámetro el número de elementos de la serie que queremos que muestre. 
Este dato se lo solicitaremos al usuario. Debes crear dos funciones para resolver este problema, una recursiva y otra iterativa.
*/
//Iterativa
function fibonacci(numElementos){
    var elementos=new Array();
    var n;
    for(let i=0;i<=numElementos-1;i++){
        if(i==0 || i==1){
            elementos.push(i);
        }
        else{
            n=elementos[elementos.length-1]+elementos[elementos.length-2];
            elementos.push(n);
        }
        
    }
    return elementos;
}
console.log(fibonacci(10));
//Recursiva
function fibonacciR(n){
        if(n==1){
            return 0
        }
        else if(n==2){
            return 1
        }
        else{
            
            return fibonacciR(n-1)+fibonacciR(n-2);
        }
}
console.log(fibonacciR(10));
/* EJERCICIO 2*/
/* Crea una función que reciba un array de palabras. la función devolverá un mapa que contenga como clave cada palabra y el valor es el número de 
veces que esa palabra aparece en el array. Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y mostraremos 
las repeticiones de las palabras.*/

let arrayPalabras=[
    "uno",
    "dos",
    "tres",
    "uno",
    "tres",
    "uno"
]
function mapaPalabras(palabras){
    if(palabras instanceof Array){
        let mapa=new Map();
        for(let palabra of palabras){
            if(mapa.get(palabra)!=null){
                let veces= mapa.get(palabra);
                mapa.set(palabra, veces+1);
            }
            else{
                mapa.set(palabra, 1);
            }
            
        }
        return mapa;
    }
    
}
console.log(mapaPalabras(arrayPalabras));
/* EJERCICIO 3*/
/* Crear una aplicación web que muestre un mapa del popular juegos buscaminas en el que aparezcan las minas dibujadas y también que se indique en las 
Casillas sin minas, las minas que hay alrededor. Hacerlo de forma modular de manera que dividamos la aplicación en una serie de funciones. 
Concretamente recomendaremos: 
    a.Una función a la que le pasaremos el tablero buscaminas (sería un array de 2 dimensiones) y coloque en él de manera aleatoria las minas.
    Esta podría dividirse en dos, siendo una más sencilla la que recibe el array del tablero, una posición en el y devuelve las minas alrededor de esa posición. 
    La función principal simplemente invoca a esa segunda recorriendo cada casilla.
    b.Otra función que recorra el tablero marcando en cada casilla las minas que hay alrededor.
    c.Finalmente,una tercera función que dibuje el tablero en una página web.Se pedirá al usuario el tamaño del tablero y las minas a colocar.*/

var tablero = [
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','',''),
    Array('','','','','','','','','','')
]   

var libre= true;
var fila=0;
var columna=0;
//poner minas
function ponerMinas(tablero, numeroMinas){

    for(var i=1;i<=numeroMinas;i++){
        do{
            libre=true;
            fila=Math.floor(Math.random() * 10);
            columna=Math.floor(Math.random() * 10);
                
                if(tablero[fila][columna]!=''){
                    libre=false;
                }
        }while(!libre);
        if(libre){ 
            tablero[fila][columna]='*';
        }

    }
}
ponerMinas(tablero, 30);

function contarMinas(tablero){
    for(let i=0;i<=tablero.length-1;i++){
        for(var j=0;j<=tablero.length-1;j++){
            contarCelda(tablero, i, j);
        }
    }
}
function contarCelda(tablero, fila, columna){
    var cont=0;
    for(let i=fila-1;i<=fila+1;i++){
        for(let j=columna-1;j<=columna+1;j++){
            if(i>=0 && j>=0 && i<=9 && j<=9){    
                if(tablero[i][j]=='*'){
                    cont+=1;
                }
                
            }
        }
    }
    if (cont!=0 && tablero[fila][columna]!='*'){
        tablero[fila][columna]=cont;
    }
}

contarMinas(tablero);

function dibujarTablero(tablero){
    document.write("<table>");
    for(var fila of tablero){
        document.write("<tr>");
        for(var celda of fila){
            switch(celda){
                case '':
                    document.write(`<td style="background-color: dimgrey">${celda}</td>`);
                    break;
                case '*':
                    document.write(`<td style="background-color: red; font-weight: bold; font-size: 45px; color:black">${celda}</td>`);
                    break;
                case 1:
                    document.write(`<td style="color: #5176c4; font-weight: bold">${celda}</td>`);
                    break;
                case 2:
                    document.write(`<td style="color: green; font-weight: bold">${celda}</td>`);
                    break;
                case 3:
                    document.write(`<td style="color: yellow; font-weight: bold">${celda}</td>`);
                    break;
                case 4:
                    document.write(`<td style="color: purple; font-weight: bold">${celda}</td>`);
                    break;
                case 5:
                    document.write(`<td style="color: red; font-weight: bold">${celda}</td>`);
                    break;
                case 6:
                    document.write(`<td style="color: turquoise; font-weight: bold">${celda}</td>`);
                    break;      
                case 7:
                    document.write(`<td style="color: magenta; font-weight: bold">${celda}</td>`);
                    break;   
                case 8:
                    document.write(`<td style="color: gray; font-weight: bold">${celda}</td>`);
                    break;     
                default:
                    document.write(`<td>${celda}</td>`);
            }
            
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
dibujarTablero(tablero);