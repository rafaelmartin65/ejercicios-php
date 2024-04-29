function cargaFoto() {
    document.getElementById("foto").src = window.URL.createObjectURL(document.getElementById("imagen_fichero").files[0]);
}

function procesarFicha() {
    // Pasos a seguir:
    // 1 - Leer los datos del formulario y cargarlos en un FormData
    // 2 - Buscar ese elemento en la base de datos y modificarlo o crearlo
    
    let formulario = document.getElementById("ficha");
    let datos = new FormData(formulario);

    //Vamos a hacer el fetch para intentar guardar los datos
    let url = "../../controlador/altamod_articulos.php"; 
    fetch(url,{
        method: "POST",
        body: datos
     })
        .then(res =>res.json())
        .then(response =>{
           console.log(response);
           // Aqui tendrian que cargarse los mensajes de alta o modificacion
           document.getElementById("error_mensaje").innerHTML = response.alerta.mensaje;
           for (let key in response.errores) {
               document.getElementById(key).innerHTML = response.errores[key];
           }
        })
}

function cargaCuerpo() {
    let datos = new FormData();
    let url = "../cuerpo/cuerpo.php";
    fetch(url, {
      method: "POST",
      body: datos,
    })
      .then((res) => res.text())
      .then((response) => {
        console.log(response);
        document.getElementById("cuerpo").innerHTML = response;
        listarRegistros();
      });
}