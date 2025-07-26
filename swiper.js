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
  spaceBetween: 24,
  mousewheel: true,
  keyboard: true,
      breakpoints: {
    // when window width is <= 700px
    700: {
      slidesPerView: 3,
    },
    330:{
      slidesPerView: 2,
    },
    0:{
      slidesPerView: 1,
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
    425:{
      slidesPerView: 2,
    },
    0:{
      slidesPerView: 1,
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


function open_img(img){
  let full_img_box= document.querySelector(".gallery .img_show")
  let full_img= document.querySelector(".gallery .img_show .img_box img")
    full_img_box.style.display="flex"
    full_img.src=img
}
function full_img_box_close(){
    let full_img_box= document.querySelector(".gallery .img_show")
    full_img_box.style.display="none"
}

const gallery_btn= document.querySelectorAll(".gallery .btn_area button")
const gallery_botoom_img= document.querySelectorAll(".gallery .img_area .img_box")
gallery_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target)
        const gallery_filter= e.target.dataset.filter
        console.log(gallery_filter)

        gallery_btn.forEach((button) => {
            button.classList.remove("active"); // Remove active class from all buttons
        });
        e.target.classList.add("active");

        gallery_botoom_img.forEach((img)=>{
            if(gallery_filter==="all"){
                img.style.display="flex";
            }else{
                if(img.classList.contains(gallery_filter)){
                    img.style.display="flex"
                }else{
                    img.style.display="none"
                }
            }
        })
    })
})

