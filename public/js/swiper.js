$(document).ready(() => {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    direction: 'horizontal',
    speed: 1000,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      }
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

})