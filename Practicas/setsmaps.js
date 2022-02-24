/*SETS*/
    /*¿Qué son?*/
        /*Es un objeto que permite almacenar valores de todo tipo que no se 
        pueden repetir*/
    /*Declaración*/
        var conjunto=new Set();
        console.log("Set creado");
    /*Propiedades*/
        /*size: indica el tamaño de un Set*/
        console.log("'size' del Set nada mas creado");
        console.log(conjunto.size); //0, no tiene elementos
    /*Métodos*/
        /*add: añade un elemento al Set*/
        console.log('Añadir al Set los valores 1, 2, "tres" y 1');
        conjunto.add(1);
        conjunto.add(2);
        conjunto.add('tres');
        conjunto.add(1); //no lo añade porque está repetido
        console.log("'size' del Set");
        console.log(conjunto.size); //3
        /*delete: elimina un elemento del Set*/
        console.log("Borrar el valor 2 del Set");
        conjunto.delete(2);
        console.log("'size' del Set");
        console.log(conjunto.size); //2
        /*has: pregunta si un Set tiene un elemento*/
        console.log("¿El Set contiene el valor 2?");
        console.log(conjunto.has(2)); //false
        console.log('¿El Set contiene el valor "tres"?');
        console.log(conjunto.has("tres")); //true
    /*Recorrer conjuntos*/
        console.log('Recorrer el set:');
        for (let item of conjunto) console.log(item);
/*MAPAS*/
    /*¿Qué son?*/
        /*Es un objeto que guarda valores con una clave asignada a cada uno. La
        clave no se puede repetir*/
    /*Declaración*/
        var mapa=new Map();
        console.log("Mapa creado");
    /*Propiedades*/
        /*size*/
        console.log("'size' del Mapa nada mas creado");
        console.log(mapa.size); //0, no tiene elementos
    /*Métodos*/
        /*set: añade una clave y un valor al mapa*/
        mapa.set('a',1);
        mapa.set('b',2);
        mapa.set('c',1);
        mapa.set('a',3); //si se vuelve a usar una clave se reemplaza el valor anterior (1->3)
        console.log("'size' del Mapa");
        console.log(mapa.size); //3
        /*get: permite mostrar un valor a través de su clave*/
        console.log("Valores de las claves 'a' y 'c':");
        console.log(mapa.get('a')); //3
        console.log(mapa.get('c')); //1
        /*has: pregunta si un Mapa tiene un elemento a traves de su clave*/
        console.log("¿El Mapa contiene la clave 'a'?");
        console.log(mapa.has('a')); //true
        console.log("¿El Mapa contiene la clave 1?");
        console.log(mapa.has(1)); //false
        console.log("¿El Mapa contiene la clave 'd'?");
        console.log(mapa.has('d')); //false
        /*delete*/
        console.log("Borrar el valor con la clave 'b'");
        mapa.delete('b');
        console.log("Valor de la clave 'b': ");
        console.log(mapa.get('b')); //undefined
        console.log("'size' del Mapa");
        console.log(mapa.size); //2 
    /*Recorrer mapas*/
        console.log('Recorrer el mapa:');
        for (let item of mapa) console.log(item); //muestra cada clave con su valor como un array