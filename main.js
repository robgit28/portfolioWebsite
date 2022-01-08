// jQuery
$(document).ready(function(){
    $(window).scroll(function(){
// sticky navbar hold when scrolling
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

// scroll-up to home button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

// slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
// removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
// menu items click
    $('.navbar .menu li a').click(function(){
// applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

// toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

// typing text animation - home
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Advertising Professional", "Freelancer", "Dad", "Partner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
// typing text animation - about
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Advertising Professional", "Freelancer", "Dad", "Partner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// carousel
    $('.carousel').owlCarousel({
        margin: 50,
// loops cards
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
// responsive website layout
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// read more read less button
function myFunction() {
// retrieve each element
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
// displays rest of text
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
