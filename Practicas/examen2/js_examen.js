// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load",comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 
	
	activarPaleta();
	
	crearLienzo();

	zonaDibujo.addEventListener("click",activarPincel);

	botonBorrar.addEventListener("click",borrarDibujo);

	function activarPaleta(){
		for (let color of paleta.children){
			color.addEventListener("click", (ev)=>{
				for(let c of paleta.children){
					c.classList.remove("seleccionado");
				}
				ev.target.classList.add("seleccionado");
			});
		}
	}

	function crearLienzo(){
		botonCrearLienzo.addEventListener("click",function(event){
			for(let i=0;i<tamLienzo.value;i++){
				console.log("Fila");
				let fila = document.createElement("tr");
				fila.setAttribute("class","fila");
				for(let j=0;j<tamLienzo.value;j++){
					let celda = document.createElement("td");
					celda.setAttribute("class","celda");
					fila.appendChild(celda);
				}
				zonaDibujo.appendChild(fila);
			}
			
		});
	}
	function activarPincel(){
		if(pincelActivo){
			pincel.innerHTML="PINCEL DESACTIVADO";
			pincelActivo=false;
			dibujo();
			
		}
		else{
			pincel.innerHTML="PINCEL ACTIVADO";
			pincelActivo=true;
		}
	}

	function dibujo(){
		let filas=zonaDibujo.children;
		for(let fila of filas){
			let celdas=fila.children;
			for(let celda of celdas){
				celda.addEventListener("mouseover", function(event){
					
					let colorActivo = document.getElementsByClassName("seleccionado")[0];
					let clases = colorActivo.classList;
					celda.classList.add(clases[0]);
					
					
					
					
				})
			}
		}
	}
	function borrarDibujo(){
		let filas=zonaDibujo.children;
		for(let fila of filas){
			let celdas=fila.children;
			for(let celda of celdas){
				if(celda.classList.length>1){
					celda.classList.remove(1);
				}
			}
		}
	}
}
