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
