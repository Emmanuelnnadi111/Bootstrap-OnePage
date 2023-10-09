const swiper = new Swiper('.swiper', {
    //slide per view
    slidesPerView: 3,
    spaceBetween: 10,
    //auto play
    autoplay: {
      delay: 2000,
    },
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    
    //breakpoints
      // using "ratio" endpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
          // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }
  });