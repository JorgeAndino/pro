
function alerta(){
    swal("facebook",
        "Opcion deshabilitada temporalmente", "error")
}
function newalert(){
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
      swal("¡Facebook!", "Opcion deshabilitada temporalmente", "error")
        .then(() => {
          // Enviar el formulario después de cerrar la alerta
          form.submit();
        });
    });
  }
});
