/************Loading Page JS**********************/
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressText = document.getElementById('progress-text');
  const bootLoadedText = document.getElementById('boot-loaded');
  const enterButton = document.getElementById('enter-button');
  let isProgressComplete = false;

  const boxes = document.querySelectorAll('.box');
  anime({
    targets: boxes,
    scale: [
      { value: 0.1, easing: 'easeOutSine', duration: 1000 },
      { value: 1, easing: 'easeInOutQuad', duration: 1000 },
    ],
    delay: anime.stagger(50, { from: 'center' }),
    loop: true,
  });

  enterButton.addEventListener('click', function() {
    if (isProgressComplete) {
      gsap.to(loadingScreen, { y: '-100%', duration: 1, ease: 'power2.inOut' });
      
    }
    let beat = new Audio('./extras/music.mp3')
    beat.play();
    beat.loop = true;
  });

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 1;
    progressText.textContent = `${progress}%`;
    if (progress >= 100) {
      clearInterval(progressInterval);
      progressText.style.display = 'none';
      bootLoadedText.style.display = 'block';
      enterButton.style.opacity = "1"
      anime({
        targets: boxes,
        opacity: 0,
        duration: 500,
      });
      isProgressComplete = true;
    }
  }, 50);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-links");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


/*********GSAP Animation************/
gsap.registerPlugin(ScrollTrigger)
gsap.from('.about-container .about-title',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:0.5,
  scrollTrigger:{
    trigger : ".about-container .about-title",
    toggleActions : "play none none reverse",
  }
})
gsap.from('.about-container .about-para',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  scrollTrigger:{
    trigger : ".about-container .about-para",
    toggleActions : "play none none reverse",
 
  }
})

gsap.from('.skills',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".skills",
    toggleActions : "play none none reverse",

  }
})


const items = document.querySelectorAll('.card');
items.forEach((div, index) => {
  gsap.to(div, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.2, 
    scrollTrigger: {
      trigger: div,
      toggleActions: 'play none none reverse',
    },
  });
});


gsap.from('.hackhound',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".hackhound",
    toggleActions : "play none none reverse",
  
  }
})

gsap.from('.work-container .work-title-header',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-container .work-title-header",
    toggleActions : "play none none reverse",
    
  }
})

gsap.from('.work-title-machinelearning',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-title-machinelearning",
    toggleActions : "play none none reverse",
  
  }
})

gsap.from('.work-title-webdev',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-title-webdev",
    toggleActions : "play none none reverse",
    
  }
})

gsap.from('.work-title-flightdelay, .work-title-recommendation',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-title-flightdelay, .work-title-recommendation",
    toggleActions : "play none none reverse",
  
  }
})

gsap.from('.work-title-purple, .work-title-aim, .work-title-plc',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-title-purple, .work-title-aim, .work-title-plc",
    toggleActions : "play none none reverse",
  
  }
})

gsap.from('.motto-container h2',{
  opacity : 0,
  z:-20,
  scale:0,
  duration:1,
  scrollTrigger:{
    trigger : ".motto-container h2",
    toggleActions : "play none none reverse",
  }
})

gsap.from('.motto-container h1',{
  opacity : 0,
  z:-20,
  scale:0,
  duration:1,
  scrollTrigger:{
    trigger : ".motto-container h1",
    toggleActions : "play none none reverse",
  }
})


/************Custom Cursor JS***************/
document.addEventListener("DOMContentLoaded", function() {
  var customCursor = document.createElement("div");
  customCursor.className = "custom-cursor";
  document.body.appendChild(customCursor);
  
  document.addEventListener("mousemove", function(event) {
    customCursor.style.top = event.clientY + "px";
    customCursor.style.left = event.clientX + "px";
  });
  
  document.addEventListener("mouseout", function() {
    customCursor.style.top = "-100px";
    customCursor.style.left = "-100px";
  });
});
