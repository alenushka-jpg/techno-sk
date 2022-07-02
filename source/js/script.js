const openBurger = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const navigation = document.querySelector('.page-header__nav');
// const breakpoint = window.matchMedia('(max-width: 768px)');

function showNavigation() {
  navigation.classList.add('page-header__nav--open');
}

function hiddenNavigation() {
  navigation.classList.remove('page-header__nav--open');
}

function onBurgerClick() {
  showNavigation()
}

function onCloseClick() {
  hiddenNavigation()
}

openBurger.addEventListener('click', onBurgerClick);
closeButton.addEventListener('click', onCloseClick);


// const swiper = new Swiper('.clients__slider', {
//   loop: true,
//   slidesPerView: 5,
//   autoplay: {
//     delay: 1000,
//   },
// });
