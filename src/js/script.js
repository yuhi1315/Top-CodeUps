jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    $(".js-hamburger,.js-sp-nav").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-sp-nav").fadeToggle();
    });
  });
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });
  function closeDrawer() {
    $(".js-sp-nav").fadeOut();
    $(".js-hamburger").removeClass("is-active");
  }
  const mv__swiper = new Swiper(".mv__swiper", {
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const campaign__swiper = new Swiper(".campaign__swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    spaceBetween: 24,
    slidesPerView: "1.5",
    speed: 2000,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
