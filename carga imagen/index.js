function cargafoto(){
    document.getElementById('foto').src = 
    window.URL.createObjectURL(document.getElementById("imagen_fichero").files[0]);
    document.getElementById('nombre_foto').innerHTML = 
    document.getElementById("imagen_fichero").files[0].name;
}