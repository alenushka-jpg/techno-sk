const openBurger = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const navigation = document.querySelector('.page-header__nav');
const clientsSlider = document.querySelector('.clients__slider');

const breakpointD = window.matchMedia('(min-width: 1440px)');
const breakpointT = window.matchMedia('(min-width: 768px)');
let swiper;

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

const initSwiper = () => {
  if (swiper) {
    swiper.destroy(true, true);
  }

  if (breakpointD.matches) {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 5,
      speed: 0,
      disableOnInteraction: false,
      autoplay: {
        delay: 2000,
      },
    });
  } else if (breakpointT.matches) {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 'auto',
      speed: 0,
      disableOnInteraction: false,
      autoplay: {
        delay: 2000,
      },
    });
  } else {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 'auto',
      speed: 0,
      disableOnInteraction: false,
      autoplay: {
        delay: 2000,
      },
    });
  }
};

const initValuesSwiper = () => {
  if (clientsSlider) {

    breakpointD.addListener(initSwiper);
    breakpointT.addListener(initSwiper);
    initSwiper();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  initValuesSwiper();
})
