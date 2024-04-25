function cargafoto(){
    document.getElementById('foto').src =  window.URL.createObjectURL(document.getElementById("imagen_fichero").files[0]);
}

document.getElementById("formulario").addEventListener("submit",(event) =>{
    event.preventDefault();
    const formulario = document.getElementById('formulario');
    const formData = new FormData(formulario)
    const formDataJson = Object.fromEntries(formData.entries());
    
    console.log(formDataJson)

    const fetchOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: formData,
    };

    fetch("upload.php", fetchOptions)
    .then(response => response.text())
    .then(datos => {
        alert(datos);
    })
})