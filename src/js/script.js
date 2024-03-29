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
      //追記
      delay: 0, //追記
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
    // loop: true,
    // loop: true,
    spaceBetween: 24,
    slidesPerView: "1.5",
    speed: 2000,
    // loopAdditionalSlides: 2,
    // width: 280,

    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      //ブレークポイントの設定 小さい順に設定する！！
      768: {
        slidesPerView: 3.5,
        spaceBetween: 40,
        // width: 1265.5,
        // },
        // 1920: {
        //   slidesPerView: "5",
        //   spaceBetween: 40,
        //   width: 1825,
        // },
      },
      // 前後の矢印
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  });
});
