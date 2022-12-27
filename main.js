$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "FrontEnd Dev","Racing Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Coder", "FrontEnd Dev","Racing Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname)
{
for(tablink of tablinks)
{
    tablink.classList.remove('active-link');
}
for(tabcontent of tabcontents)
{
    tabcontent.classList.remove('active-tab');
}

event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")


}

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',e => {
    // console.log(e);
    cursor.style.top = e.pageY +"px"
    cursor.style.left = e.pageX +"px"
})