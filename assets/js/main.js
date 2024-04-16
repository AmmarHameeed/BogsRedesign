$(document).ready(function () {
  console.log("Page loaded successfully");

  var screenHeightOnLoad = $("html").height();
  var minusHeight = 138;

  var adjustedHeight = screenHeightOnLoad - minusHeight;

  $("#mobile__menu, #mobileMenu__overlay").css("height", adjustedHeight);

  const mobileMenuOpen = document.querySelector(".openMobileMenu");
  const mobileMenuClose = document.querySelector(".closeMobileMenu");

  mobileMenuOpen.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("mobile__menu").classList.toggle("opened");
  });

  mobileMenuClose.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("mobile__menu").classList.remove("opened");
  });

  $("#mobileMenu__overlay").on("click", function(){
    document.getElementById("mobile__menu").classList.remove("opened");
  })

  // 4 SLIDES SWIPER
  const swiper = new Swiper(".featured__products__swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
    },
  });

  // 2 SLIDES SWIPER
  const swiperDual = new Swiper(".dual__swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  });

  // Full width SLIDES SWIPER
  const swiperFullWidth = new Swiper(".fullWidth__swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
    },
  });

  // Full width SLIDES SWIPER
  const mobileOnlySwiper = new Swiper(".mobileOnlySwiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});
