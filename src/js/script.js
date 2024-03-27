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
  const swiper = new Swiper(".swiper", {
    loop: true,
    // autoplay: {
    //   //追記
    //   delay: 0, //追記
    // },
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
});
