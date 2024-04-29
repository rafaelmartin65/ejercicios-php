fetch("http://localhost:3000/casas")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      cargarAlumno(element);
    });
  });

function cargarAlumno(perfil) {
  // Creamos la fila por alumno
  let fila = document.createElement("div");
  fila.classList.add("row", "align-items-center", "my-3");

  // Creamos la columna de la foto
  let colFoto = document.createElement("div");
  colFoto.classList.add("col");

  var foto = document.createElement("img");
  foto.src = "./fotos/" + perfil.nombre + ".jpg";
  foto.onerror = function() {
    this.src = "./fotos/notiene.jpg";
  };
  foto.style.width = "80px";
  foto.classList.add("rounded-circle");

  colFoto.appendChild(foto);
  fila.appendChild(colFoto);
  document.getElementById("contenedor").appendChild(fila);
}

// const container = document.getElementById("alumnosContainer");

//     // Iterar sobre los datos de los alumnos y agregar tarjetas al contenedor
//     data.forEach(alumno => {
//     const card = document.createElement("div");
//     card.classList.add("col-lg-4", "col-md-6", "mb-4");

//     card.innerHTML = `
//         <div class="card">
//         <img src="./fotos/${alumno.imagen}" class="card-img-top" alt="${alumno.nombre}">
//         <div class="card-body">
//             <h5 class="card-title">${alumno.nombre} ${alumno.apellidos}</h5>
//             <p class="card-text">ID: ${alumno.id}</p>
//             <p class="card-text">Email: ${alumno.email}</p>
//             <p class="card-text">Teléfono: ${alumno.telefono}</p>
//             <p class="card-text">Web: ${alumno.web}</p>
//         </div>
//         </div>
//     `;

//     container.appendChild(card);
//     });
// })
// .catch(error => console.error('Error fetching alumnos:', error));
