// Error in promise --> fetch

const screen = {
  2: 0,
  6: 500,
  10: 900,
};
let familias;
let urlFamilias = "../controlador/controlador_familias.php";
fetch(urlFamilias) 
  .then((response) => response.json())
  .then((listadoFamilias) => {
    let totalFamilias = Object.keys(listadoFamilias).length;
    for (let i=0; i<totalFamilias;i++){
      let opcion = document.createElement("input");
      opcion.classList.add("boton","btn");
      opcion.type = "button";
      opcion.id = listadoFamilias[i].codigo;
      opcion.value = listadoFamilias[i].familia;
      document.getElementById("filtro").appendChild(opcion);
    }

  let url = "../controlador/controlador_articulos.php";
  let formulario = new FormData();
  formulario.append("familias",0);
  new Response(formulario).text().then(console.log)
  fetch(url,{method: "POST",  body: formulario})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cargapaginas(data);
    });
  });

function cargapaginas (productos){
  let variable = Object.keys(productos).length;
      document.getElementById("listado").innerHTML = "";
      for (let i = 0; i < variable; i++) {
        cargaproductos(productos[i]);
      }
}

function cargaproductos(producto) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "col-2", "m-1");
  tarjeta.style = "width: 16rem;";
  let foto = document.createElement("img");
  foto.src = `./images/${producto.codigo}.jpg`;
  foto.classList.add("card-img-top", "img-fluid");
  tarjeta.appendChild(foto);
  let cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body");
  let entries = Object.entries(producto);
  let fragmento = new DocumentFragment();
  entries.forEach(([key, value]) => {
    if (key != "codigo") {
      switch(true){
        case (key == "descripcion"): {
          let titulo = document.createElement("h5");
          titulo.classList.add("my-0");
          let mayus = key.substring(0,1).toUpperCase()+key.substring(1);
          titulo.innerHTML = `${value}`;
          cuerpo.appendChild(titulo);
          break
        };
        default: {
          let etiqueta = document.createElement("p");
          let mayus = key.substring(0,1).toUpperCase()+key.substring(1);
          etiqueta.innerHTML = `${mayus}: ${value}`;
          etiqueta.classList.add("my-0");
          fragmento.appendChild(etiqueta);
          break
        };

      

      }
    }
  });
  cuerpo.appendChild(fragmento);
  tarjeta.appendChild(cuerpo);
  document.getElementById("listado").appendChild(tarjeta);
}

document.getElementById("filtro").addEventListener("click", (event) => {
 event.preventDefault(); //  Para que no haga refesh 
 console.log(event.target.id);
 let urlArticulos = "../controlador/controlador_articulos.php";
 let datos = new FormData ();
 datos.append("familias",event.target.id);         // Si quisiera añadir algo
 new Response(datos).text().then(console.log)
//  FormData le paso un elemento del formulario y me muestra sus valores 
  fetch(urlArticulos, { method: "POST",  body: datos,})
    .then((response) => response.json())
    .then((respuesta) => {
      cargapaginas(respuesta)
    });
});
