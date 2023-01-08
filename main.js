import { updateGround, setupGround } from "./src/ground.js"
import { updateDino, setupDino, getDinoRect, setDinoLose } from "./src/dino.js"
import { updateCactus, setupCactus, getCactusRects } from "./src/cactus.js"

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

  // typing text animation script

  var typed = new Typed(".typing-2", {
    strings: ["Coder", "FrontEnd Dev", "Racing Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

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

var playIcon = document.getElementById('playIcon')
playIcon.onclick = function(){
  document.getElementById('myAudio2').play();
  document.getElementById('myAudio2').volume = 0.3;
  
}


/**GSAP and Tween Max */
var textWrapper = document.querySelector('.home .home-content .text-2')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g, "<span class='letter'>$&</span>"
);

anime.timeline({loop: false})
  .add({
    targets: '.home .home-content .text-2 .letter',
    opacity: [0,1],
    translateY: 0,
    easing: "easeOutExpo",
    duration: 7000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.home .home-content .text-2',
    opacity: 1,
    duration: 6000,
    easing: "easeOutExpo",
    delay: 1000
  });


  anime({
    targets : '#dev path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 200 },
    direction: 'alternate',
    loop: false
  })

TweenMax.from('.logo', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})
TweenMax.from('.floating-links-section-git', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})
TweenMax.staggerFrom('.navbar ul li', 1, {
  opacity: 0,
  x: -100,
  ease: Power3.easeInOut
},0.3)
TweenMax.from('.floating-links-section-linkedin', 1, {
  opacity: 0,
  x: -60,
  ease: Expo.easeInOut,
  delay:0.5
})

gsap.registerPlugin(ScrollTrigger)
gsap.to('.about .title',{
  scrollTrigger:{
    trigger:".about .title",
    toggleActions : "restart none none none",
  },
  x : 0,
  duration:2,
})
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
gsap.to('.border1',{
  scrollTrigger:{
    trigger : '.border1',
    toggleActions : "restart none none none",
    start:"top 10%",
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
gsap.to('.border3',{
  scrollTrigger:{
    trigger : '.border3',
    toggleActions : "restart none none none",
    start:"top 10%",
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
gsap.to('.border5',{
  scrollTrigger:{
    trigger : '.border5',
    toggleActions : "restart none none none",
    start:"top 10%",
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
    start:"top 10%",
    scrub:1,
    pin:true,
  },
  x:0,
  duration :10
})


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

gsap.to('.projects .title',{
  scrollTrigger:{
    trigger:".projects .title",
    toggleActions : "restart none none none",
  },
  x: 0,
  duration:3,
})

gsap.to('.contact .title',{
  scrollTrigger:{
    trigger:".contact .title",
    toggleActions : "restart none none none",
  },
  x: 0,
  duration:3,
})
gsap.to('.contact .contact-content .left p',{
  scrollTrigger:{
    trigger:".contact .contact-content .left p",
    toggleActions : "restart none none none",
  },  
  y: 0,
  opacity:1,
  duration:3,
})


var date_data = document.querySelector('.date')
date_data.innerHTML = "Don't watch the clock; do what it does. Keep going. ~ Sam Levenson";
/**Setting up the world */
const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001

const worldElem = document.querySelector("[data-world]")
const scoreElem = document.querySelector("[data-score]")
const startScreenElem = document.querySelector("[data-start-screen]")

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })

let lastTime
let speedScale
let score
function update(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  updateGround(delta, speedScale)
  updateDino(delta, speedScale)
  updateCactus(delta, speedScale)
  updateSpeedScale(delta)
  updateScore(delta)
  if (checkLose()) return handleLose()

  lastTime = time
  window.requestAnimationFrame(update)
}

function checkLose() {
  const dinoRect = getDinoRect()
  return getCactusRects().some(rect => isCollision(rect, dinoRect))
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  )
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
  score += delta * 0.01
  scoreElem.textContent = Math.floor(score)
}

function handleStart() {
  lastTime = null
  speedScale = 1
  score = 0
  setupGround()
  setupDino()
  setupCactus()
  startScreenElem.classList.add("hide")
  window.requestAnimationFrame(update)
}

function handleLose() {
  setDinoLose()
  setTimeout(() => {
    document.addEventListener("keydown", handleStart, { once: true })
    startScreenElem.classList.remove("hide")
  }, 100)
}

function setPixelToWorldScale() {
  let worldToPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}


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