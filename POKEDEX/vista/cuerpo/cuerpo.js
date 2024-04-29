var anterior = "";
var siguiente = "";

function listarRegistros(pagina) {
	// Funcion que se va a encargar de hacer el fetch contra PHP
	let datos = new FormData();
	datos.append("pagina", pagina);
	let url = "../../controlador/controladorListaPokemon.php";
	fetch(url, {
		method: "POST",
		body: datos,
	})
		.then((res) => res.json())
		.then((response) => {
			console.log(response);
			anterior = response["anterior"];
			siguiente = response["siguiente"];
			if (anterior === null) {
				document.getElementById("anterior").classList.add('disabled');
			} else {
				document.getElementById("anterior").classList.remove('disabled');
			}
			if (siguiente === null) {
				document.getElementById("siguiente").classList.add('disabled');
			} else {
				document.getElementById("siguiente").classList.remove('disabled');
			}
			//Aqui eliminamos todos los datos anteriores
			let aborrar = document.getElementsByClassName("fila");
			while (aborrar.length > 0) {
				aborrar[0].parentNode.removeChild(aborrar[0]);
			}
			// Aqui tendrian que cargarse los datos en la pantalla
			for (let i in response["lista"]) {
				let fila = document.createElement("div");
				let dato = response["lista"][i].nombre;

				let col1 = document.createElement("div");
				let imagen = response["lista"][i].imagen;
				col1.className = "linea";
				col1.addEventListener("click", cargaFormulario.bind(dato), false);
				fila.appendChild(col1);
				col1.innerHTML = `<img  class="imagen" src="${imagen}" alt="">`;

				let col2 = document.createElement("div");
				col2.className = "linea";
				col2.addEventListener("click", cargaFormulario.bind(dato), false);
				fila.appendChild(col2);
				col2.innerHTML = response["lista"][i].nombre;
				col2.style.textTransform = "uppercase";
				col2.style.fontWeight = "bold";

				let col3 = document.createElement("div");
				col3.className = "linea tipos";
				col3.addEventListener("click", cargaFormulario.bind(dato), false);
				fila.appendChild(col3);
				let tipos = "";
				for (let j = 0; j < response["lista"][i].tipo.length; j++) {
					switch (response["lista"][i].tipo[0].tipo) {
						case "grass":
							fila.style.background =
								"linear-gradient(0deg, rgba(157,217,128,1) 0%, rgba(120,200,80,1) 66%, rgba(57,106,33,1) 100%)";
							col1.style.backgroundColor = "rgb(58, 102, 35)";
							break;
						case "fire":
							fila.style.background =
								"linear-gradient(0deg, rgba(252,194,69,1) 10%, rgba(199,24,0,1) 100%)";
							col1.style.backgroundColor = "rgb(134, 61, 9)";
							break;
						case "water":
							fila.style.background =
								"linear-gradient(0deg, #1CB5E0 0%, #000851 100%)";
							col1.style.backgroundColor = "rgb(15, 56, 156)";
							break;
						case "normal":
							fila.style.background =
								"linear-gradient(0deg, rgba(201,212,214,1) 0%, rgba(112,124,131,1) 66%, rgba(72,74,89,1) 100%)";
							col1.style.backgroundColor = "rgb(87, 87, 56)";
							break;
						case "electric":
							fila.style.background =
								"linear-gradient(0deg, rgba(255,255,111,1) 0%, rgba(228,217,53,1) 66%, rgba(227,181,9,1) 100%)";
							col1.style.backgroundColor = "rgb(143, 115, 4)";
							break;
						case "ice":
							fila.style.background =
								"linear-gradient(0deg, rgba(154,249,227,1) 0%, rgba(63,224,190,1) 66%, rgba(20,185,195,1) 100%)";
							col1.style.backgroundColor = "rgb(50, 133, 133)";
							break;
						case "fighting":
							fila.style.background =
								"linear-gradient(0deg, rgba(250,89,89,1) 0%, rgba(231,64,64,1) 66%, rgba(187,24,24,1) 100%)";
							col1.style.backgroundColor = "rgb(96, 24, 20)";
							break;
						case "poison":
							fila.style.background =
								"linear-gradient(0deg, rgba(209,128,209,1) 0%, rgba(160,64,160,1) 66%, rgba(80,32,80,1) 100%)";
							col1.style.backgroundColor = "rgb(80, 32, 80)";
							break;
						case "ground":
							fila.style.background =
								"linear-gradient(0deg, rgba(242,218,153,1) 0%, rgba(224,192,104,1) 66%, rgba(136,107,27,1) 100%)";
							col1.style.backgroundColor = "rgb(136, 107, 27)";
							break;
						case "flying":
							fila.style.background =
								"linear-gradient(0deg, rgba(215,209,235,1) 0%, rgba(168,144,240,1) 66%, rgba(59,22,169,1) 100%)";
							col1.style.backgroundColor = "rgb(59, 22, 169))";
							break;
						case "psychic":
							fila.style.background =
								"linear-gradient(0deg, rgba(241,150,177,1) 0%, rgba(248,88,136,1) 66%, rgba(161,6,53,1) 100%)";
							col1.style.backgroundColor = "rgb(161, 6, 53)";
							break;
						case "bug":
							fila.style.background =
								"linear-gradient(0deg, rgba(194,208,79,1) 0%, rgba(168,184,32,1) 66%, rgba(84,92,16,1) 100%)";
							col1.style.backgroundColor = "rgb(84, 92, 16)";
							break;
						case "rock":
							fila.style.background =
								"linear-gradient(0deg, rgba(207,184,84,1) 0%, rgba(184,160,56,1) 66%, rgba(91,80,28,1) 100%)";
							col1.style.backgroundColor = "rgb(91, 80, 28)";
							break;
						case "ghost":
							fila.style.background =
								"linear-gradient(0deg, rgba(169,150,201,1) 0%, rgba(112,88,152,1) 66%, rgba(56,44,76,1) 100%)";
							col1.style.backgroundColor = "rgb(56, 44, 76)";
							break;
						case "dark":
							fila.style.background =
								"linear-gradient(0deg, rgba(176,149,131,1) 0%, rgba(112,88,72,1) 66%, rgba(56,44,35,1) 100%)";
							col1.style.backgroundColor = "rgb(56, 44, 35)";
							break;
						case "dragon":
							fila.style.background =
								"linear-gradient(0deg, rgba(147,108,242,1) 0%, rgba(112,56,248,1) 66%, rgba(46,5,146,1) 100%)";
							col1.style.backgroundColor = "rgb(46, 5, 146)";
							break;
						case "steel":
							fila.style.background =
								"linear-gradient(0deg, rgba(211,211,226,1) 0%, rgba(184,184,208,1) 66%, rgba(78,78,117,1) 100%)";
							col1.style.backgroundColor = "rgb(78, 78, 117)";
							break;
						case "fairy":
							fila.style.background =
								"linear-gradient(0deg, rgba(238,205,208,1) 0%, rgba(240,182,188,1) 66%, rgba(230,85,100,1) 100%)";
							col1.style.backgroundColor = "rgb(175, 35, 50)";
							break;
					}
					tipos += response["lista"][i].tipo[j].tipo + " ";
				}
				let tipo = tipos.substring(0, tipos.length - 1).split(" ");
				// console.log(tipo);
				for (let t = 0; t < tipo.length; t++) {
					var pTipo = document.createElement("div");
					switch (tipo[t]) {
						case "grass":
							pTipo.style.background = "rgb(58, 102, 35)";
							break;
						case "fire":
							pTipo.style.background = "rgb(134, 61, 9)";
							break;
						case "water":
							pTipo.style.background = "rgb(15, 56, 156)";
							break;
						case "normal":
							pTipo.style.background = "rgb(87, 87, 56)";
							break;
						case "electric":
							pTipo.style.background = "rgb(143, 115, 4)";
							break;
						case "ice":
							pTipo.style.background = "rgb(50, 133, 133)";
							break;
						case "fighting":
							pTipo.style.background = "rgb(96, 24, 20)";
							break;
						case "poison":
							pTipo.style.background = "rgb(80, 32, 80)";
							break;
						case "ground":
							pTipo.style.background = "rgb(136, 107, 27)";
							break;
						case "flying":
							pTipo.style.background = "rgb(59, 22, 169)";
							break;
						case "psychic":
							pTipo.style.background = "rgb(161, 6, 53)";
							break;
						case "bug":
							pTipo.style.background = "rgb(84, 92, 16)";
							break;
						case "rock":
							pTipo.style.background = "rgb(91, 80, 28)";
							break;
						case "ghost":
							pTipo.style.background = "rgb(56, 44, 76)";
							break;
						case "dark":
							pTipo.style.background = "rgb(56, 44, 35)";
							break;
						case "dragon":
							pTipo.style.background = "rgb(46, 5, 146)";
							break;
						case "steel":
							pTipo.style.background = "rgb(78, 78, 117)";
							break;
						case "fairy":
							pTipo.style.background = "rgb(175, 35, 50)";
							break;
					}
					pTipo.innerHTML = tipo[t] + " ";
					pTipo.style.marginLeft = "10px";
					pTipo.style.letterSpacing = "0.1em";
					pTipo.style.padding = "0.25em";
					pTipo.style.lineHeight = "1";
					pTipo.style.borderRadius = "2px";
					pTipo.style.color = "white";
					col3.appendChild(pTipo);
				}
				// col3.innerHTML = pTipo;
				col3.style.textTransform = "uppercase";
				// console.log();

				let col4 = document.createElement("div");
				col4.className = "linea";
				col4.addEventListener("click", cargaFormulario.bind(dato), false);
				fila.appendChild(col4);
				col4.innerHTML = response["lista"][i].descripcion[0].descripcion;

				fila.className = "fila";
				contenedor.appendChild(fila);
			}
		});

}

window.onload = function () {
	listarRegistros("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8");
};

function cargaFormulario() {
	let datos = new FormData();
	datos.append("codigo", this);
	let url = "../../controlador/controladorCargaFicha.php";
	fetch(url, {
		method: "POST",
		body: datos,
	})
		.then((res) => res.text())
		.then((response) => {
			// console.log(response);
			// Aqui tendrian que cargarse los datos en el formulario
			document.getElementById("cuerpo").innerHTML = response;
		});
}

function seleccionado() {
	console.log(this);
}

function cargaSiguiente() {
	listarRegistros(siguiente);
}

function cargaAnterior() {
	listarRegistros(anterior);
}

document.getElementById("anterior").addEventListener("click", cargaAnterior);
document.getElementById("siguiente").addEventListener("click", cargaSiguiente);
