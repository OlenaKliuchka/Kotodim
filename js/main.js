const slider = document.querySelector('.page-hero');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
  easing: 'cubic-bezier(.17,.67,.32,1.34)',
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);

const lightbox = new SimpleLightbox('.gallery a', {
  closeText: '&#128514;',
  fadeSpeed: 1000,
});

AOS.init();
