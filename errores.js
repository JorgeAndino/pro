
function alerta(){
    swal("facebook",
        "Opcion deshabilitada temporalmente", "error")
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[name="contact"]');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      // Prevenir el envío normal para mostrar la alerta primero
      event.preventDefault();
      
      // Mostrar la alerta
      swal("¡Formulario enviado!", "Tu información ha sido enviada correctamente", "success")
        .then(() => {
          // Enviar el formulario después de cerrar la alerta
          form.submit();
        });
    });
  }
});
