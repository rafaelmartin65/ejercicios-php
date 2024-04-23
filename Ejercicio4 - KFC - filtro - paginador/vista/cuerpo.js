//  Carga inicial de datos 
// Cargamos productos , familias y cantidad de elementos
let familias;
let paginaActual = 1;
let urlFamilias = "../controlador/controlador_familias.php";
// Carga la lista de familias
fetch(urlFamilias)
  .then((response) => response.json())
  .then((listadoFamilias) => {
    let totalFamilias = Object.keys(listadoFamilias).length;
    for (let i = 0; i < totalFamilias; i++) {
      let opcion = document.createElement("option");
      opcion.value = listadoFamilias[i].codfamilia;
      opcion.innerHTML = listadoFamilias[i].nombfamilia;
      document.getElementById("familias").appendChild(opcion);
    }
    let formulario = new FormData(document.getElementById("filtro"));
    formulario.append("pagina", 1);
    let urlContador = "../controlador/controlador_articulos_contador.php";
    // Lista cuantos paginas vamos a mostrar de datos (segun el filtro)
    fetch(urlContador, {
      method: "POST",
      body: formulario,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Creamos el paginador
        paginador(data.total);
        let url = "../controlador/controlador_articulos.php";
        // Cargamos los articulos
        fetch(url, {
          method: "POST",
          body: formulario,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            cargapaginas(data);
          });
      });
  });

// -----------------------------------------------
// Cargamos todos los productos
// -----------------------------------------------
function cargapaginas(productos) {
  let variable = Object.keys(productos).length;
  document.getElementById("listado").innerHTML = "";
  for (let i = 0; i < variable; i++) {
    cargaproductos(productos[i]);
  }
}

// -----------------------------------------------
// Cargamos un producto en pantalla
// -----------------------------------------------
function cargaproductos(producto) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "mx-1");
  tarjeta.style = "width: 15rem;";
  let foto = document.createElement("img");
  foto.src = `./imagenes/${producto.codigo}.jpg`;
  foto.classList.add("card-img-top", "img-fluid");
  tarjeta.appendChild(foto);
  let cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body", "py-0");
  let entries = Object.entries(producto);
  let fragmento = new DocumentFragment();
  entries.forEach(([key, value]) => {
    if (key != "codigo") {
      switch (true) {
        case key == "descripcion": {
          let titulo = document.createElement("h5");
          titulo.classList.add("my-0");
          let auxiliar = key.substring(0, 1).toUpperCase() + key.substring(1);
          titulo.innerHTML = `${auxiliar}: ${value}`;
          cuerpo.appendChild(titulo);
          break;
        }
        default: {
          let etiqueta = document.createElement("p");
          let auxiliar = key.substring(0, 1).toUpperCase() + key.substring(1);
          etiqueta.innerHTML = `${auxiliar}: ${value}`;
          etiqueta.classList.add("my-0");
          fragmento.appendChild(etiqueta);
          break;
        }
      }
    }
  });
  cuerpo.appendChild(fragmento);
  tarjeta.appendChild(cuerpo);
  document.getElementById("listado").appendChild(tarjeta);
}

// Disparamos el cambio de familia
document.getElementById("filtro").addEventListener("change", (event) => {
  event.preventDefault();
  let datos = new FormData(document.getElementById("filtro"));
  datos.append("pagina", 1);
  // new Response(datos).text().then(console.log);
  leerPagina(datos);
});

// Cargamos el paginador (botones anterior y siguiente mas un numero para cada pagina segun cantidad de elementos)
function paginador(cantidad) {
  document.getElementById("paginador").innerHTML = "";
  let anterior = document.createElement("input");
  anterior.type = "button";
  anterior.value = "Anterior";
  anterior.id = "anterior";
  if (paginaActual == 1) anterior.disabled = true;
  document.getElementById("paginador").appendChild(anterior);
  for (let i = 1; i <= cantidad; i++) {
    let pagina = document.createElement("a");
    pagina.innerHTML = i;
    pagina.id = i;
    pagina.href = "";
    document.getElementById("paginador").appendChild(pagina);
  }
  let siguiente = document.createElement("input");
  siguiente.value = "Siguiente";
  siguiente.id = "siguiente";
  siguiente.type = "button";
  if (paginaActual == cantidad) siguiente.disabled = true;
  document.getElementById("paginador").appendChild(siguiente);
}

// Leemos la pagina que marcan en el paginador y saltamos a esa pagina (incluido anterior y siguiente)
document.getElementById("paginador").addEventListener("click", (event) => {
  event.preventDefault();
  let formulario = new FormData();
  formulario.append("familias", document.getElementById("familias").options[document.getElementById("familias").selectedIndex].value);
  let totalPaginas = document.getElementById("paginador").childElementCount;
  // Preguntas para cambiar de pagina
  // Es el boton anterior
  if (event.target.id == "anterior" && paginaActual != 1) paginaActual--;
  // Es el boton siguiente
  if (event.target.id == "siguiente" && paginaActual != totalPaginas) paginaActual ++;
  // No es siguiente y tampoco es anterior (osea es un numero ???)
  if (!isNaN(event.target.id)) paginaActual = parseInt(event.target.id);
  formulario.append("pagina",paginaActual);
  leerPagina(formulario);
});  

// Leer los datos correspondientes a la pagina seleccionada
function leerPagina(datos) {
  let urlArticulos = "../controlador/controlador_articulos.php";
  let urlContador = "../controlador/controlador_articulos_contador.php";
  fetch(urlContador, {
    method: "POST",
    body: datos,
  })
    .then((response) => response.json())
    .then((data) => {
      paginador(data.total);
      fetch(urlArticulos, {
        method: "POST",
        body: datos,
      })
        .then((response) => response.json())
        .then((respuesta) => {
          cargapaginas(respuesta);
        });
    });
}
