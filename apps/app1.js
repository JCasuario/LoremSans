  (function() {
    emailjs.init("kMlpEZmBkwWqizGzO");
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recargar la página

    // Parámetros para enviar a EmailJS
    const params = {
      user_name: document.getElementById('user_name').value,
      user_email: document.getElementById('user_email').value,
      message: document.getElementById('message').value
    };

    const serviceID = 'service_7k0rbw9';
    const templateID = 'template_cmoob38';

    emailjs.send(serviceID, templateID, params)
      .then(response => {
        document.getElementById('user_name').value = "",
        document.getElementById('user_email').value = "",
        document.getElementById('message').value = ""
      }, error => {
        alert('Error al enviar el correo', error);
      });
  });