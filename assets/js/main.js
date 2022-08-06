/* init footer */
window.onload = function () {
  let contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}
/* finish footer */


/* inif footer */
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  /* footer */



