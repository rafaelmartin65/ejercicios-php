console.log("cargo formulario js")

document.getElementById("botonAceptar").addEventListener("click", () => {
  console.log("Carga de formulario");
  const form = document.getElementById('formularioMantenimiento');
  const formData = new FormData(form);
  const formDataJson = Object.fromEntries(formData.entries());
  console.log(formDataJson);

  // Configurar las opciones de la solicitud fetch
  const fetchOptions = {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataJson),
  };
  // Enviar la solicitud fetch al servidor JSON
    fetch('http://localhost:3000/alumnos/'+formDataJson.id, fetchOptions)
    .then(response => response.text())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

