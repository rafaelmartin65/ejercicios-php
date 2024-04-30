let ficha = document.getElementById('fichaCasa');
window.addEventListener('load', function(){
    ficha.style.display='none';
});


function muestraFicha(id, descripcion, año,garaje,dormitorios,baño, superficie, precio) {
    let img = ''
    ficha.style.display='block';
    img = 'ficheros/imagenes/casa'+id+'.jpg'
    console.log (img);
    document.getElementById('imagen').src = img;
    document.getElementById('id').value = id;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('año').value = año;
    document.getElementById('garaje').value = garaje;
    document.getElementById('dormitorios').value = dormitorios;
    document.getElementById('baños').value = baño;
    document.getElementById('superficie').value = superficie;
    document.getElementById('precio').value = precio; 
    
    
}