// import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
// import {GLTFLoader} from 'https://unpkg.com/three@0.148.0/examples/jsm/loaders/GLTFLoader.js'
// import {OrbitControls} from 'https://unpkg.com/three@0.148.0/examples/jsm/controls/OrbitControls.js'

// import * as THREE from './three.js-master/build/three.module.js'
// import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'


$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  

  
  let navLink = document.querySelectorAll(".menu-btn");
  for (let i = 0; i < navLink.length; i++) {
      console.log(navLink[i]);
      navLink[i].addEventListener("mouseover", function () {
          new Audio("./extras/synth.mp3").play();
      });
  }
/**********************************************
-----------Typing animation Effect--------------
 ************************************************/
  var typed = new Typed(".typing-2", {
    strings: ["Coder", "FrontEnd Dev", "Racing Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

/**********************************************
-----------Tabbing Scripts for JS--------------
 ************************************************/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/**********************************************
------------JS FOR CONTACT FORMS--------------
 ************************************************/
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJXopMMDEbH446YY21FU_AMc1OtmuZR2-zsjv_6lUL6k1mF6IQi_D46fEfvlVf4L0y/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML = "Message Sent Successful !!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    }
  );
  form.reset().catch((error) => console.error("Error!", error.message));
});



/**********************************************
------------Tween Max and GSAP-----------------
 ************************************************/
gsap.registerPlugin(ScrollTrigger)
gsap.to('.home',{
  scrollTrigger:{
    trigger : '.home',
    toggleActions : "restart none none none",
    end:"bottom 100px",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :2
})

gsap.to('#home1',{
  scrollTrigger:{
    trigger : '#home1',
    toggleActions : "restart none none none",
    start  : "top center",
    scrub:1,
  },
  x:0,
  scale:1.2,
  rotate : -30,
  duration :2
})

/**********************************************
------------GSAP FOR BORDERS IN WEBSITE--------------
 ************************************************/
gsap.to('.border',{
  scrollTrigger:{
    trigger : '.border',
    toggleActions : "restart none none none",
    start:"top center",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})



gsap.to('.border2',{
  scrollTrigger:{
    trigger : '.border2',
    toggleActions : "restart none none none",
    start:"top center",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})

gsap.to('.border4',{
  scrollTrigger:{
    trigger : '.border4',
    toggleActions : "restart none none none",
    start:"top center",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})
gsap.to('.border6',{
  scrollTrigger:{
    trigger : '.border6',
    toggleActions : "restart none none none",
    start:"top center",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})
gsap.to('.border7',{
  scrollTrigger:{
    trigger : '.border7',
    toggleActions : "restart none none none",
    start:"top center",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})

/**********************************************
------GSAP FOR SPECIFIC CONTENTS IN WEBSITE------
 ************************************************/
gsap.to('.about .about-content .text',{
  scrollTrigger:{
    trigger:".about .about-content .text",
    toggleActions : "restart none none none",
  },
  x : 0,
  duration:2,
})

gsap.to('.about .about-content .right p',{
  scrollTrigger:{
    trigger:".about .about-content .right p",
    toggleActions : "restart none none none",
  },
  x : 0,
  delay:1,
  duration:2,
})

gsap.to('.about .about-content .left img',{
  scrollTrigger:{
    trigger:".about .about-content .left img",
    toggleActions : "restart none none none",
  },
  x : 0,
  duration:2,
})
/**********************************************
-----------APPEAR ON SCROLL EFFECT---------------
 ************************************************/
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



/**********************************************
-----------END OF JAVASCRIPT FOR WEBSITE---------
 ************************************************/