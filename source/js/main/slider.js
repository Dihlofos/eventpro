"use strict";
(function () {
  const swiperSlider = new Swiper(".about__slider", {
    // Optional parameters
    direction: "horizontal",
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 1000,
    freeMode: true,

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
})();
