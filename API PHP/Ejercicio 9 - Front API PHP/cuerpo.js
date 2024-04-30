let ultimo = 0;
fetch("http://localhost/ejercicios/API%20PHP/Ejercicio%2010%20-%20API/")
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    datos.forEach((elemento) => {
      if (parseInt(elemento.id) > ultimo) ultimo = parseInt(elemento.id);
      cargaAlumno(elemento);
    });
  });

function cargaAlumno(perfil) {
  // Creamos la fila (una por alumno)
  let fila = document.createElement("div");
  fila.classList.add("row", "align-items-center");

  // Creamos la columna de la foto
  let colFoto = document.createElement("div");
  colFoto.classList.add("col");

  let foto = document.createElement("img");
  foto.src = "./fotos/" + perfil.nombre + ".jpg";
  foto.onerror = () => {
    foto.src = "./fotos/nofoto.webp";
  };
  foto.style.width = "80px";
  foto.classList.add("rounded-circle", "m-2");

  colFoto.appendChild(foto);
  fila.appendChild(colFoto);

  colFoto.appendChild(foto);
  let colNombre = document.createElement("div");
  colNombre.classList.add("col");
  let nombre = document.createElement("p");
  nombre.innerHTML = perfil.nombre;
  colNombre.appendChild(nombre);
  fila.appendChild(colNombre);

  let colApellidos = document.createElement("div");
  colApellidos.classList.add("col");
  let apellidos = document.createElement("p");
  apellidos.innerHTML = perfil.apellidos;
  colApellidos.appendChild(apellidos);
  fila.appendChild(colApellidos);

  let colEmail = document.createElement("div");
  colEmail.classList.add("col");
  let email = document.createElement("p");
  email.innerHTML = perfil.email;
  colEmail.appendChild(email);
  fila.appendChild(colEmail);

  let colTelefono = document.createElement("div");
  colTelefono.classList.add("col");
  let telefono = document.createElement("p");
  telefono.innerHTML = perfil.telefono;
  colTelefono.appendChild(telefono);
  fila.appendChild(colTelefono);

  let colWeb = document.createElement("div");
  colWeb.classList.add("col");
  let web = document.createElement("p");
  web.innerHTML = perfil.web;
  colWeb.appendChild(web);
  fila.appendChild(colWeb);

  // Agregamos los iconos
  let colIconos = document.createElement("div");
  colIconos.classList.add("col");
  let lista = document.createElement("ul");
  lista.classList.add("d-flex");
  let elementomodificar = document.createElement("li");
  let modificar = document.createElement("i");
  modificar.classList.add("fa-solid", "fa-pencil", "fa-lg", "btn");
  modificar.id = perfil.id;
  modificar.onclick = fmodificar;
  let elementoeliminar = document.createElement("li");
  let eliminar = document.createElement("i");
  eliminar.classList.add("fa-solid", "fa-trash-can", "fa-lg", "btn");
  eliminar.id = perfil.id;
  eliminar.onclick = () =>{
    feliminar(perfil);
  }
  elementomodificar.appendChild(modificar);
  elementoeliminar.appendChild(eliminar);
  lista.appendChild(elementomodificar);
  lista.appendChild(elementoeliminar);
  colIconos.appendChild(lista);
  fila.appendChild(colIconos);

  document.getElementById("contenedor").appendChild(fila);
}

function fmodificar(event) {
  fetch("formulario.php")
    .then((respuesta) => respuesta.text())
    .then((lineasFormulario) => {
      document.getElementById("cuerpo").innerHTML = lineasFormulario;
      document.getElementById("id").value = event.target.id;
      fetch("http://localhost:3000/alumnos/" + event.target.id)
        .then((response) => response.json())
        .then((fichaAlumno) => {
          document.getElementById("nombre").value = fichaAlumno.nombre;
          document.getElementById("apellidos").value = fichaAlumno.apellidos;
          document.getElementById("telefono").value = fichaAlumno.telefono;
          document.getElementById("email").value = fichaAlumno.email;
          document.getElementById("web").value = fichaAlumno.web;
          document.getElementById("foto").src =
            "./fotos/" + fichaAlumno.nombre + ".jpg";
        });
      let script = document.createElement("script");
      script.src = "formulario.js";
      document.head.appendChild(script);
    });
}

document.getElementById("nuevo").addEventListener("click", (event) => {
  fetch("formulario.php")
    .then((respuesta) => respuesta.text())
    .then((lineasFormulario) => {
      document.getElementById("cuerpo").innerHTML = lineasFormulario;
      document.getElementById("id").value = ultimo + 1;
      document.getElementById("id").disabled;
      let script = document.createElement("script");
      script.src = "formulario.js";
      document.head.appendChild(script);
    });
});

function feliminar(perfil) {
  let formData = new FormData();
  formData.append("nombre",perfil.nombre);
  fetch("http://localhost:3000/alumnos/" + perfil.id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((mensaje) => {
      console.log(mensaje);
      fetch("eliminoFoto.php",{
        method:"POST",
        body: formData,
      })
      .then((response) => response.text())
      .then((mensajeFoto) => {
        console.log(mensajeFoto);
      });
    });
  location.href = "./index.php";
}
