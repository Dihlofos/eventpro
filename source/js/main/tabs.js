"use strict";
(function () {
  var swiperTabs = new Swiper(".about__tabs", {
    direction: "vertical",
    centeredSlides: true,
    effect: "fade",
    pagination: {
      el: ".tabs__pagination",
      clickable: true,
      type: "bullets",
    },
  });
})();
