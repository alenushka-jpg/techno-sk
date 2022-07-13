const noJs = document.querySelector('.no-js');
noJs.classList.remove('no-js');

const openBurger = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const navigation = document.querySelector('.page-header__nav');
const clientsSlider = document.querySelector('.clients__slider');

const modalFeedback = document.querySelector('.modal');
const modalClose= document.querySelector('.modal__close');
const jsMakeRequest= document.querySelector('.js-make-request');
const overlay = document.querySelector('.overlay');
const modalSelect = document.querySelector('.modal__select');

const breakpointT = window.matchMedia('(min-width: 744px)');
const breakpointD = window.matchMedia('(min-width: 1299px)');
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

function showModal() {
  modalFeedback.classList.add('modal--open');
}

function hiddenModal() {
  modalFeedback.classList.remove('modal--open');
}

function bodyHidden() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'fixed';
}

function bodyVisible() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'inherit';
}

function onModalClick() {
  showModal();
  bodyHidden();
  modalSelect.focus();
}

function onCloseModalClick() {
  hiddenModal();
  bodyVisible();
}

if (overlay) {
  overlay.addEventListener('click', hiddenModal);
}

overlay.addEventListener('click', bodyVisible);

jsMakeRequest.addEventListener('click', onModalClick);
modalClose.addEventListener('click', onCloseModalClick);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('modal--open')) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal--open');
      bodyVisible();
    }
  }
});

const initSwiper = () => {
  if (swiper) {
    swiper.destroy(true, true);
  }

  if (breakpointD.matches) {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 6,
      autoplay : 2,
      initialSlide: 0,
      speed: 1000,
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
    })
  } else if (breakpointT.matches) {
    swiper = new Swiper(clientsSlider, {
      loop: true,
      slidesPerView: 'auto',
      autoplay : 2,
      speed: 700,
      initialSlide: 0,
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
    breakpointD.addListener(initSwiper);
    initSwiper();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  initValuesSwiper();
});


const sendForm = () => {
  let regForm = document.querySelectorAll('form');

  if (!regForm) return;

  regForm.forEach((element) => {
    element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      let name = element.querySelector('input[type="text"]').value;
      let tel = element.querySelector('input[type="tel"]').value;
      let email = element.querySelector('input[type="email"]').value;

      const xhr = new XMLHttpRequest();
			//name и tel - переменные, которые объявляются в php
      const body = `&name=${name} &tel=${tel} &email=${email}`;

      xhr.open('POST', 'php/send-contact.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(body);

      setTimeout(() => {
        element.reset();
      }, 100);
    });
  });
};
