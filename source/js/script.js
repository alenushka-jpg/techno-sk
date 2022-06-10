const openBurger = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const navigation = document.querySelector('.page-header__nav');

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
