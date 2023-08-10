<script>
    const form = document.getElementById('whatsapp-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const userName = document.getElementById('user-name').value;
      const messageText = document.getElementById('message-text').value;
      
      const phoneNumber = '+351962836059'; // Substitua pelo número desejado
      
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageText)}`;
      
      window.open(whatsappLink, '_blank');
    });
  </script>