const screen = {
  2: 0,
  6: 500,
  10: 900,
};
let familias;
// let username = 'dardos603';
// let password = 'xqSUa6Ku';

let headers = new Headers();
// http://dardos603:xqSUa6Ku@dardoschuster.com.mialias.net/
headers.append('Content-Type', 'text/json');
headers.append("Access-Control-Allow-Origin", "*");
// headers.append('Authorization', 'Basic' + btoa(username + ":" + password));
let urlLocalidades = "http://dardoschuster.com.mialias.net/";
fetch(urlLocalidades, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.text())
  .then((listadoLocalidades) => {
    console.log(listadoLocalidades);
    let totalLocalidades = Object.keys(listadoLocalidades).length;
    for (let i = 0; i < totalLocalidades; i++) {
      let opcion = document.createElement("option");
      console.log(listadoLocalidades[i]);
      opcion.value = listadoLocalidades[i].id;
      opcion.innerHTML = listadoLocalidades[i].descripcion;
      document.getElementById("localidades").appendChild(opcion);
    }
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
function cargaproductos(propiedad) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "mx-1");
  tarjeta.style = "width: 15rem;";
  let foto = document.createElement("img");
  foto.src = `./imagenes/${propiedad.id}.jpg`;
  foto.classList.add("card-img-top", "img-fluid");
  tarjeta.appendChild(foto);
  let cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body", "py-0");
  let entries = Object.entries(propiedad);
  let fragmento = new DocumentFragment();
  entries.forEach(([key, value]) => {
    if (key != "id") {
      switch (true) {
        case key == "tipo": {
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

document.getElementById("filtro").addEventListener("change", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  let urlPropiedades = "../controlador/controlador_propiedades.php";
  let datos = new FormData(document.getElementById("filtro"));
  new Response(datos).text().then(console.log);
  fetch(urlPropiedades, {
    method: "POST",
    body: datos,
  })
    .then((response) => response.json())
    .then((respuesta) => {
      cargapaginas(respuesta);
    });
});
