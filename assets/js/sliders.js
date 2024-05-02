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
        spaceBetween: 15,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
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

  // Full width SLIDES SWIPER
  const filterSwiper = new Swiper(".featured__actvityFilter__swiper", {
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
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
  });
  const terrainSwiper = new Swiper(".featured__terrainFilter__swiper", {
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
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });