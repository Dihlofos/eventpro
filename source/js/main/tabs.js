"use strict";
(function () {
  var swiperTabs = new Swiper(".about__tabs", {
    direction: "vertical",
    loop: true,
    autoplay: true,
    centeredSlides: true,
    effect: "fade",
    pagination: {
      el: ".tabs__pagination",
      clickable: true,
      type: "bullets",
    },
    navigation: {
      el: ".tabs__nav",
      nextEl: ".tabs__next",
      prevEl: ".tabs__prev",
    },
  });
})();
