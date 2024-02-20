document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    let revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(function(element) {
      let revealPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;

      if (revealPosition < screenPosition) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  });
});
