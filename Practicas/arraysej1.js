/*EJERCICIO 1*/
/*
Crea una aplicación que pida palabras al usuario hasta que pulse el botón cancelar. Después aparecerá un menú de opciones:
    1)Ver primera palabra insertada
    2)Ver última palabra insertada
    3)Ver todas las palabras
    4)Ver la palabra más larga
    5)Ver la palabra más corta
    6)Número de palabras insertadas
    7)Buscar una palabra
    8)Borrar duplicados
    9)Salir
*/
/*var palabras = new Array();
var palabra ="";
var opcion;
palabra=prompt("Introduzca palabra");
while(palabra!=null){
    palabras.push(palabra);
    palabra=prompt("Introduzca palabra");
}
opcion=parseInt(prompt("Introduzca opción:\n 1)Ver primera palabra insertada\n 2)Ver última palabra insertada\n 3)Ver todas las palabras\n 4)Ver la palabra más larga\n 5)Ver la palabra más corta\n 6)Número de palabras insertadas\n 7)Buscar una palabra\n 8)Borrar duplicados\n 9)Salir"));
switch(opcion){
    case 1: 
        document.write(`<h2>Primera palabra: </h2>`);
        document.write(`<p>${palabras[0]}</p>`);
        break;
    case 2: 
        document.write(`<h2>Última palabra: </h2>`);
        document.write(`<p>${palabras[palabras.length-1]}</p>`);
        break;
    case 3:
        document.write(`<h2>Todas las palabras: </h2>`);
        document.write("<ul>");
        for(var p of palabras){
            document.write(`<li>${p}</li>`);
        }
        document.write("</ul>");
        break;
    case 4:
        document.write(`<h2>Palabra más larga: </h2>`);
        let longitudMayor=0;
        let masLarga;
        for(var p of palabras){
            if(p.length>longitudMayor){
                longitudMayor=p.length;
                masLarga=p;
            }
        }
        document.write(`<p>${masLarga}</p>`);
        break;
    case 5:
        document.write(`<h2>Palabra más corta: </h2>`);
        let longitudMenor=Number.MAX_VALUE;
        let masCorta;
        for(var p of palabras){
            if(p.length<longitudMenor){
                longitudMenor=p.length;
                masCorta=p;
            }
        }
        document.write(`<p>${masCorta}</p>`);
        break;
    case 6:
        document.write(`<h2>Número de palabras insertadas: </h2>`);
        document.write(`<p>${palabras.length}</p>`);
        break;
    case 7:
        var palabraBuscar=prompt("Indique la palabra que desea buscar");
        var indice=palabras.indexOf(palabraBuscar);
        console.log(indice);
        if(indice!=-1){
            document.write(`<p>Palabra encontrada en la posicion ${indice+1}</p>`);
        }
        else{
            document.write(`<p>Palabra no encontrada</p>`);
        }
        break;
    case 8:
        palabras2 = palabras.filter(function(item, pos) {
            return palabras.indexOf(item) == pos;
        })
        document.write("<ul>");
        for(var p of palabras2){
            document.write(`<li>${p}</li>`);
        }
        document.write("</ul>");
        break;
    case 9:
        window.self.close();
        break;

}*/
/*EJERCICIO 2*/
/*Crear una aplicación que dibuje en pantalla el tablero del juego hundir la flota. Tiene que dibujar aleatoriamente en el tablero:
    1)dos barcos de tamaño cuatro (portaviones)
    2)tres de tamaño tres (acorazados)
    3)tres de tamaño dos(destructores)
    4)dos de tamaño uno (fragatas)
El tablero será de 10 por 10. Los barcos no se pueden solapar ni tocar y se pueden dibujar tanto en horizontal como en vertical.
*/
var tablero = [
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0),
    Array(0,0,0,0,0,0,0,0,0,0)
]
var libre= true;
var fila=0;
var columna=0;

//portaviones
for(var i=1;i<=2;i++){
    if(Math.floor(Math.random() * 2)==1){
        do{    
            fila=Math.floor(Math.random() * 7);
            columna=Math.floor(Math.random() * 10);
            console.log(fila);
            console.log(columna);
                    for (var l=fila;l<fila+4;l++){
                        if(tablero[l][columna]>0){
                            libre=false;
                            break;
                        }
                    }
            if(libre){ 
                for(var j=0;j<4;j++){
                    tablero[fila+j][columna]=1;
                }
            }
        }while(!libre);
        
    }
    else{
        do{    
            fila=Math.floor(Math.random() * 10);
            columna=Math.floor(Math.random() * 7);
            console.log(fila);
            console.log(columna);
                    for (var l=columna;l<columna+4;l++){
                            if(tablero[fila][l]>0 ){
                                libre=false;
                                break;
                            }
                    }
            if(libre){ 
                for(var j=0;j<4;j++){
                    tablero[fila][columna+j]=1;
                }
            }
        }while(!libre);
        
        
    }
    
}
//acorazados
for(var i=1;i<=2;i++){
    if(Math.floor(Math.random() * 2)==1){
        do{    
            fila=Math.floor(Math.random() * 7);
            columna=Math.floor(Math.random() * 10);
            console.log(fila);
            console.log(columna);
                    for (var l=fila;l<fila+3;l++){
                        if(tablero[l][columna]>0){
                            libre=false;
                            break;
                        }
                    }
            if(libre){ 
                for(var j=0;j<3;j++){
                    tablero[fila+j][columna]=1;
                }
            }
        }while(!libre);
        
    }
    else{
        do{    
            fila=Math.floor(Math.random() * 10);
            columna=Math.floor(Math.random() * 7);
            console.log(fila);
            console.log(columna);
                    for (var l=columna;l<columna+3;l++){
                            if(tablero[fila][l]>0 ){
                                libre=false;
                                break;
                            }
                    }
            if(libre){ 
                for(var j=0;j<3;j++){
                    tablero[fila][columna+j]=1;
                }
            }
        }while(!libre);
        
        
    }
}
//destructores
/*for(var i=1;i<=3;i++){
    if(Math.floor(Math.random() * 2)==1){
        let fila=Math.floor(Math.random() * 9);
        let columna=Math.floor(Math.random() * 10);
        tablero[fila][columna]=1;
        for(var j=1;j<2;j++){
            tablero[fila+j][columna]=3;
        }
    }
    else{
        let fila=Math.floor(Math.random() * 10);
        let columna=Math.floor(Math.random() * 9);
        tablero[fila][columna]=1;
        for(var j=1;j<2;j++){
            tablero[fila][columna+j]=3;
        }
    }
    
}*/
//fragatas
for(var i=1;i<=2;i++){
        do{
            fila=Math.floor(Math.random() * 7);
            columna=Math.floor(Math.random() * 10);
                
                if(tablero[fila][columna]!=0){
                    libre=false;
                }
        }while(!libre);
        if(libre){ 
            tablero[fila][columna]=4;
        }
    
}
document.write("<table>");
for(var fila of tablero){
    document.write("<tr>");
    for(var celda of fila){
        let color;
        switch(celda){
            case 1:
                color="style=\"background-color:blue\"";
                break;
            case 2:
                color="style=\"background-color:red\"";
                break;
            case 3:
                color="style=\"background-color:green\"";
                break;
            case 4:
                color="style=\"background-color:yellow\"";
                break;
            default:
                color="style=\"background-color:black\"";
                break;
        }
        document.write(`<td ${color}></td>`);
    }
    document.write("</tr>");
}
document.write("</table>");
