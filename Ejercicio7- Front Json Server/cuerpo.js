fetch("http://localhost:3000/alumnos")
.then(response => response.json())
.then(datos => {
    datos.forEach(elemento => {
        cargaAlumno(elemento);     
    });
})

function cargaAlumno(perfil){
    // Creamos la fila (una por alumno)
    let fila = document.createElement("div");
    fila.classList.add("row","align-items-center");

    // Creamos la columna de la foto
    let colFoto = document.createElement("div");
    colFoto.classList.add("col");

    let foto = document.createElement("img");
    foto.src = "./fotos/"+perfil.nombre +".jpg";
    foto.onerror = () => {foto.src = "./fotos/nofoto.webp"};
    foto.style.width = "80px";
    foto.classList.add("rounded-circle");

    

    // Agregamos los iconos
    let colIconos = document.createElement("div");
    colIconos.classList.add("col");
    let lista = document.createElement("ul");
    lista.classList.add("d-flex");
    let elementomodificar = document.createElement("li");
    let modificar = document.createElement("i");
    modificar.classList.add("fa-solid","fa-pencil","fa-lg","btn");
    modificar.onclick = fmodificar;
    let elementoeliminar = document.createElement("li");
    let eliminar = document.createElement("i");
    eliminar.classList.add("fa-solid", "fa-trash-can","fa-lg","btn")
    elementomodificar.appendChild(modificar);
    elementoeliminar.appendChild(eliminar);
    lista.appendChild(elementomodificar);
    lista.appendChild(elementoeliminar);
    colIconos.appendChild(lista);

    colFoto.appendChild(foto);
    fila.appendChild(colFoto);
    fila.appendChild(colFoto);
    fila.appendChild(colFoto);
    fila.appendChild(colFoto);
    fila.appendChild(colFoto);
    fila.appendChild(colIconos);
    document.getElementById("contenedor").appendChild(fila);

    
}

function fmodificar(){
    document.getElementById("cuerpo").innerHTML =  '<?php include "formulario.php"; ?>';
}
