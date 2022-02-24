/*EJERCICIO 1*/
/*
Crea un tipo de objeto que sirva para representar ordenadores. 
    •Sus propiedades son:
        a.Marca
        b.Modelo
        c.Memoria RAM
        d.Capacidad del disco duro
        e.Pulgadas de pantalla
    •Tendrá además un método toString, que mostrará en formato de texto los detalles 
    del ordenador.
    •Al crear un ordenador se pueden indicar todos los valores, pero por defecto se 
    toman como valores 17 pulgadas, 512 GB de disco duro, y 4 GB de RAM.
    •Crear  otro  tipo  de  objeto  que  represente ordenadores  portátiles,  los  
    cuales  heredan  todo  lo de los ordenadores, pero añaden una propiedad llamada 
    autonomía, que es número que expresa las horas de autonomía de su batería. 
    Por defecto si no se indica otro valor, la autonomía será de 4 horas, 
    las pulgadas de la pantalla serán 12 y el disco duro 256 GB. Además también 
    tendrá un método toString, que mostrará la información de los ordenadores portátiles.
*/
class Ordenador{
    marca 
    modelo
    ram
    discoDuro
    pulgadas

    constructor(marca, modelo, ram=4, discoDuro=512, pulgadas=17){
        this.marca=marca
        this.modelo=modelo
        this.ram=ram
        this.discoDuro=discoDuro
        this.pulgadas=pulgadas
    }

    toString(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, RAM: ${this.ram}, Disco duro: ${this.discoDuro}, Pulgadas: ${this.pulgadas}`
    }
}
class Portatil extends Ordenador{
    #autonomia
    constructor(marca, modelo, ram=4, discoDuro=512, pulgadas=17, autonomia=4){
        super(
            super.marca=marca,
            super.modelo=modelo,
            super.ram=ram,
            super.discoDuro=discoDuro,
            super.pulgadas=pulgadas
        )
        this.#autonomia=autonomia
    }
    toString(){
        return super.toString()+`, Autonomía: ${this.#autonomia}`
    }
}