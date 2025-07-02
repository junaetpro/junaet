window.addEventListener("scroll", ()=>{
    var nav_bg_color= document.getElementById("nav_area");
    if(window.scrollY>100){
        nav_bg_color.classList.add("nav_bg_color")
        nav_bg_color.classList.add("nav_area_other_page_bg_color")
    }else{
        nav_bg_color.classList.remove("nav_bg_color")
        nav_bg_color.classList.remove("nav_area_other_page_bg_color")
    }
})


//=================================
  const menuBtn = document.querySelector('.menu_btn');
  const menuArea = document.querySelector('.menu_btn_area');

  menuBtn.addEventListener('click', () => {
    menuArea.classList.toggle('active');
  });

//=========================================================
var service_btn= document.querySelectorAll(".Service .service_btn_area button");
var service_box= document.querySelectorAll(".Service .service_area .service_box")

service_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        var service_filter= e.target.dataset.filter
        service_btn.forEach((b)=>{
            b.classList.remove("active")
        })
        e.target.classList.add("active")

        service_box.forEach((img)=>{
            
            if(img.classList.contains(service_filter)){
                img.style.display="flex"
            }else{
                img.style.display="none"
            }
        })
    })
})


function src_service(){
    let service_src= document.getElementById("service_src").value.toLocaleLowerCase();
    console.log(service_src)
    let service_box= document.querySelectorAll(".Service .service_area .service_box")
    service_box.forEach((service)=>{
        let service_title= service.querySelector(".Service .service_area .service_box h3").innerHTML.toLocaleLowerCase()
        if(service_title.includes(service_src)){
            service.style.display="flex"
        }else{
            service.style.display="none"
        }
    })
}


//==============================

var portfolio_btn= document.querySelectorAll(".portfolio .btn_area button")
var portfolio_box= document.querySelectorAll(".portfolio .portfolio_area .p_box")

portfolio_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        var portfolio_filter= e.target.dataset.filter
        portfolio_btn.forEach((b)=>{
            b.classList.remove("active")
        })
        e.target.classList.add("active")

        portfolio_box.forEach((box)=>{
            if(box.classList.contains(portfolio_filter)){
                box.style.display="block"
            }else{
                box.style.display="none"
            }
        })
    })
})

function src_portfolio(){
    let portfolio_src= document.getElementById("portfolio_src").value.toLocaleLowerCase()
    console.log(portfolio_src)
    let portfolio_box= document.querySelectorAll(".portfolio .portfolio_area .p_box")
    portfolio_box.forEach((portfolio)=>{
        let portfolio_title=portfolio.querySelector(".portfolio .portfolio_area .p_box .text_come_bottom h3").innerHTML.toLocaleLowerCase()
        if(portfolio_title.includes(portfolio_src)){
            portfolio.style.display="flex"
        }else{
            portfolio.style.display="none"
        }
    })

}
//------

//===========progress countion==========

var hero_right_count= document.querySelector(".hero_area .right .hero_skill_text .hero_right_count")
var hero_right_count_start= 0;
var hero_right_count_end= 30;
var count_speed= 20;

var hero_right_count_fn= setInterval(()=>{
    hero_right_count_start++
    hero_right_count.textContent= `${hero_right_count_start}+`
    if(hero_right_count_start==hero_right_count_end){
        clearInterval(hero_right_count_fn)
    }
},count_speed)
//===================



// Select all skill counters (1st set)
var skill_s1_count = document.querySelector(".about .right .skills_col .s1_count");
var skill_s2_count = document.querySelector(".about .right .skills_col .s2_count");
var skill_s3_count = document.querySelector(".about .right .skills_col .s3_count");
var skill_s4_count = document.querySelector(".about .right .skills_col .s4_count");
var skill_s5_count = document.querySelector(".about .right .skills_col .s5_count");
var skill_s6_count = document.querySelector(".about .right .skills_col .s6_count");

// Select all skill counters (2nd set)
var skill_s1_count2 = document.querySelector(".about .right .skills_col .s1_count2");
var skill_s2_count2 = document.querySelector(".about .right .skills_col .s2_count2");
var skill_s3_count2 = document.querySelector(".about .right .skills_col .s3_count2");
var skill_s4_count2 = document.querySelector(".about .right .skills_col .s4_count2");
var skill_s5_count2 = document.querySelector(".about .right .skills_col .s5_count2");
var skill_s6_count2 = document.querySelector(".about .right .skills_col .s6_count2");

// Define end values for each skill
var skill_s1_count_end = 90;
var skill_s2_count_end = 95;
var skill_s3_count_end = 97;
var skill_s4_count_end = 90;
var skill_s5_count_end = 95;
var skill_s6_count_end = 99;

// Speed of counting (in ms)
var skill_count_speed = 20;

// Function to animate each skill counter
function animateCounter(element, endValue) {
    let startValue = 0;
    let interval = setInterval(() => {
        startValue++;
        element.textContent = `${startValue}%`;
        if (startValue === endValue) {
            clearInterval(interval);
        }
    }, skill_count_speed);
}

// Start animations for both counter sets
animateCounter(skill_s1_count, skill_s1_count_end);
animateCounter(skill_s1_count2, skill_s1_count_end);

animateCounter(skill_s2_count, skill_s2_count_end);
animateCounter(skill_s2_count2, skill_s2_count_end);

animateCounter(skill_s3_count, skill_s3_count_end);
animateCounter(skill_s3_count2, skill_s3_count_end);

animateCounter(skill_s4_count, skill_s4_count_end);
animateCounter(skill_s4_count2, skill_s4_count_end);

animateCounter(skill_s5_count, skill_s5_count_end);
animateCounter(skill_s5_count2, skill_s5_count_end);

animateCounter(skill_s6_count, skill_s6_count_end);
animateCounter(skill_s6_count2, skill_s6_count_end);

//===============================================

    const topBtn = document.getElementById("topBtn");
    window.onscroll = () => {
      topBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    };

    

const socialLink = document.querySelector('.social_link');
const leftPart = document.querySelector('.social_link .left');
const rightPart = document.querySelector('.social_link .right');
leftPart.addEventListener('mouseenter', () => {
    socialLink.style.right = '0';
});
rightPart.addEventListener('mouseenter', () => {
    socialLink.style.right = '0';
});
leftPart.addEventListener('mouseleave', () => {
    socialLink.style.right = '-44px';
});
rightPart.addEventListener('mouseleave', () => {
    socialLink.style.right = '-44px';
});

let scrollTimeout;
let hover = false;
function hideSocial() {
    if (!hover) {
        socialLink.style.display = 'none';
    }
}
setTimeout(hideSocial, 5000);
window.addEventListener('scroll', () => {
    socialLink.style.display = 'flex';  // show it
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(hideSocial, 5000);  // hide 5s after scroll stops
});
socialLink.addEventListener('mouseenter', () => {
    hover = true;
    clearTimeout(scrollTimeout); // prevent hiding while hovered
});

socialLink.addEventListener('mouseleave', () => {
    hover = false;
    scrollTimeout = setTimeout(hideSocial, 5000); // start timer again
});