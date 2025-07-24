let formularios = JSON.parse(localStorage.getItem("formularios")) || [];

document.getElementById("enviar").addEventListener("click", function (event) {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const nuevoFormulario = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje,
    fecha: new Date().toLocaleString()
  };

  formularios.push(nuevoFormulario);
  localStorage.setItem("formularios", JSON.stringify(formularios));

  console.log("Formulario guardado:", nuevoFormulario);
  alert("Mensaje enviado correctamente.");

  document.getElementById("formulario-contacto").reset();
});
