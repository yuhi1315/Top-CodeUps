jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
      const scrollHeight = $(document).height(); /*ページ全体の高さ*/
      const scrollPosition =
        $(window).height() +
        $(window).scrollTop(); /*ページの一番上からスクロールされた距離*/
      const footerPaddingTop = parseInt($("footer").css("padding-top"));
      const footerPaddingBottom = parseInt($("footer").css("padding-bottom"));
      const footHeight =
        $("footer").height() +
        footerPaddingTop +
        footerPaddingBottom; /*フッターの高さ*/

      if (scrollHeight - scrollPosition <= footHeight) {
        console.log(footHeight);
        $(".top-scroll").css({
          position: "absolute",
          bottom: 10 + footHeight,
        });
      } else {
        $(".top-scroll").css({
          position: "fixed",
          bottom: "10px",
        });
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });

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
    loop: true,
    loopAdditionalSlides: 2,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    spaceBetween: 24,
    slidesPerView: "1.26",
    speed: 2000,
    autoplay: {
      delay: 0,
      // disableOnInteraction: false,
    },
    breakpoints: {
      765: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //要素の取得とスピードの設定
  var box = $(".information__img"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    color.on("inview", function () {
      console.log("test");
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  //要素の取得とスピードの設定
  var box = $(".js-imgBg-change"),
    speed = 700;

  //画像のスクロールアニメーション
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      console.log("test");
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
