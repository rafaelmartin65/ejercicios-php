function cargafoto(){
    document.getElementById('foto').src =  window.URL.createObjectURL(document.getElementById("imagen_fichero").files[0]);
}

document.getElementById("formulario").addEventListener("submit",(event) =>{
    event.preventDefault();
    const formulario = document.getElementById('formulario');
    console.log(typeof formulario);
    const formData = new FormData(formulario)
    const formDataJson = Object.fromEntries(formData.entries());
    console.log(formDataJson)
    fetch("upload.php")
    .then(response => response.text())
    .then(datos => {
        console.log(datos);
    })
})