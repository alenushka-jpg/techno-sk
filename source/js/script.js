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

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);

// function nextSlide(){
//   slides[currentSlide].className = 'slide';

//   for (i = 0; i < slides.length; i++) {
//     slides[0].style.display = "none"
//     slides[1].style.display = "none"
//     slides[2].style.display = "none"
//   }

//   currentSlide++;
    // if (currentSlide > slides.length) {currentSlide = 1}
    // slides[currentSlide-1].style.display = "block";
    // setTimeout(showSlides, 2000);

  // if(currentSlide >= slides.length){
  // currentSlide = 0;
  // }
  // slides[currentSlide].className = 'slide active';
// }

