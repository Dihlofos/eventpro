"use strict";
(function () {
  const form = document.querySelector(".js-form");
  initEvents();

  function initEvents() {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let res = {};
      const formData = new FormData(form);

      for (let [key, value] of formData.entries()) {
        res[key] = value;
      }
      sendEmail(res);
    });
  }

  function sendEmail({ name, email, phone, message }) {
    Email.send({
      SecureToken: "261a3ef1-af53-4ba0-b21b-e0243a3ca4d8",
      To: "jeymobile@mail.ru",
      From: "skvazy@gmail.com",
      Subject: `${name} sent you a message`,
      Body: `
        ${message};
        email: ${email};
        phone: ${phone}
      `,
    }).then((message) => console.log(message));
  }
})();

"use strict";
(function () {
  Marquee3k.init();
})();

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

"use strict";
(function () {
  var swiperTabs = new Swiper(".about__tabs", {
    direction: "vertical",
    autoplay: true,
    centeredSlides: true,
    effect: "fade",
    pagination: {
      el: ".tabs__pagination",
      clickable: true,
      type: "bullets",
    },
  });
})();
