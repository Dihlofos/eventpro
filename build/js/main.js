"use strict";
(function () {
  const swiperSlider = new Swiper(".about__swiper", {
    // Optional parameters
    direction: "horizontal",
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
})();

"use strict";
(function () {
  var swiperTabs = new Swiper(".about__tabs", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".tabs__pagination",
      clickable: true,
      type: "bullets",
    },
  });
})();
