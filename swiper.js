const swiper = new Swiper('.blog_area_slide_warper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  mousewheel: true,
  keyboard: true,
      breakpoints: {
    // when window width is <= 700px
    700: {
      slidesPerView: 3,
    },
    200:{
      slidesPerView: 2,
    }
  }


});



const swiper2 = new Swiper('.resentwork_swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  slidesPerView: 3,

    breakpoints: {
    // when window width is <= 700px
    800: {
      slidesPerView: 3,
    },
    200:{
      slidesPerView: 2,
    }
  }



});


const swiper3 = new Swiper('.testimonial_swiper', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const imgSrc = activeSlide.getAttribute('data-img');
      const mainImg = document.querySelector('.main_img_box img');

      if (imgSrc && mainImg) {
        mainImg.src = imgSrc;
      }
    }
  }
});



const swiper4 = new Swiper('.brand_logo_swiper', {
  loop: true,

  slidesPerView: 4,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 30,
  autoplay: {
  delay: 1500,
  disableOnInteraction: false,
  
  }


});