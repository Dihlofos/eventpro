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
