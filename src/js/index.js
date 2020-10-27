import {tns} from 'tiny-slider/src/tiny-slider';
import $ from 'jquery';
let mainSlider = document.getElementById('hero-slider')
//let secSlider = document.getElementById('hero-slider')

  const slider = tns({
    container: '#main__slider',
    items: 1,
    //slideBy: 'page',
    autoplay: false,
    autoplayButtonOutput: false,
    nav: true,
    navContainer: '.slider__count',
    controls: false,
    stop: false,
    autoplayTimeout: 5000,
    mouseDrag: true,

  });
const slider2 = tns({
  container: '#main__slider2',
  items: 1,
  //slideBy: 'page',
  autoplay: false,
  autoplayButtonOutput: false,
  nav: true,
  navContainer: '.slider__count2',
  controls: false,
  stop: false,
  autoplayTimeout: 5000,
  mouseDrag: true,

});

if(mainSlider){
  const slider = tns({
    container: '#hero-slider',
    items: 1,
    nav: false,
    controls: true,
    mouseDrag: true,
    controlsContainer:'.controls',
    prevButton: '.controls__button_prev',
    nextButton: '.controls__button_next'

  });
}
$(document).ready(function (){
    $('#icon2').on('click', function (){
      $(this).toggleClass('open')
      $('header').toggleClass('active')
      $('.menu').slideToggle()
      let windowWidth =  window.innerWidth
      console.log(windowWidth < 992,windowWidth)
      if(windowWidth < 992){

        $('.lang').slideToggle()
      }
    })
})
