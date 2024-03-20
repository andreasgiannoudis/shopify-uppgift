document.addEventListener('DOMContentLoaded', function() {
  var popupContent = document.getElementById('popup-content');
  var closeButton = document.getElementById('close-button');

  if (!sessionStorage.getItem('popupClosed')) {
      showPopup();
  }

  function showPopup() {
      popupContent.style.display = 'block';
  }

  function closePopup() {
      popupContent.style.display = 'none';
      sessionStorage.setItem('popupClosed', true);
  }

  closeButton.addEventListener('click', closePopup);

  window.addEventListener('beforeunload', function() {
      if (window.location.pathname !== '/') {
          sessionStorage.removeItem('popupClosed');
      }
  });
});
