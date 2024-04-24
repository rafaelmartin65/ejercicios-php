function cargafoto(){
    document.getElementById('foto').src = 
    window.URL.createObjectURL(document.getElementById("imagen_fichero").files[0]);
    // document.getElementById('nombre_foto').innerHTML = document.getElementById("imagen_fichero").files[0].name;
}

document.getElementById("formulario").addEventListener("submit",(event) =>{
    event.preventDefault();
    const formData = new FormData(formulario)
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ' : ' + pair[1]); 
    }
    fetch("upload.php")
    .then(response => response.text())
    .then(datos => {
        console.log(datos);
    })
})