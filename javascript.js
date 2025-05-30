// Gestione apertura/chiusura offcanvas e carosello
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById('demo');
  const carouselElement = document.getElementById('carouselExample');

  if (offcanvasElement && carouselElement) {
    offcanvasElement.addEventListener('show.bs.offcanvas', function () {
      carouselElement.style.display = 'none';
    });

    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
      carouselElement.style.display = 'block';
    });
  }

  // Gestione visualizzazione sezioni materie
  const params = new URLSearchParams(window.location.search);
  const materia = params.get('materia');

  if (materia) {
    mostraMateria(materia);
  } else {
    const tutte = document.querySelectorAll('.materia');
    tutte.forEach(div => div.style.display = 'block');
  }
});

// Funzione per mostrare solo una sezione materia
function mostraMateria(materiaId) {
  const tutte = document.querySelectorAll('.materia');
  tutte.forEach(div => {
    if (div.id === materiaId) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}
