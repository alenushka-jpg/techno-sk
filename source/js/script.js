const openBurger = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const navigation = document.querySelector('.page-header__nav');
const clientsSlider = document.querySelector('.clients__slider');

const breakpointT = window.matchMedia('(min-width: 744px)');
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

  if (breakpointT.matches) {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 'auto',
      autoplay : 2,
      speed: 700,
      initialSlide: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      on: { // Приостановление листания при наведении
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });

          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      }
    })
  } else {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 'auto',
      speed: 1030,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      on: { // Приостановление листания при наведении
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });

          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      }
    });
  }
};

const initValuesSwiper = () => {
  if (clientsSlider) {

    breakpointT.addListener(initSwiper);
    initSwiper();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  initValuesSwiper();
})
