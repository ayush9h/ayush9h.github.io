gsap.registerPlugin(ScrollTrigger)
// Loading animation
function startloader(){
  let counterElement = document.querySelector(".counter")
  let currentValue = 0;

  function updateCounter(){
    if(currentValue === 100)
    { 
      return;
    }
    currentValue+=Math.floor(Math.random()*10) - 1;

    if(currentValue > 100)
    {
      currentValue = 100
    }
    counterElement.textContent = currentValue
    let delay = Math.floor(Math.random()*200) - 50
    setTimeout(updateCounter,delay);
  }
  updateCounter();
}
function completeLoading() {
  document.body.classList.add("loading-complete");
  document.body.style.overflowY = 'auto';
  document.body.style.overflowX = 'hidden';
}

startloader()

gsap.to(".counter",0.25,{
  delay:3.5,
  opacity:0,
})

gsap.to(".bar",1.5,{
  delay:3.5,
  height:0,
  stagger:{
    amount:1,
  },
  ease:"power4.inOut",
  onComplete: completeLoading,
})
/************Mobile Menu***************/
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

/********* Hacked Effect ***************/ 
const values = ["BLENDER ARTIST", "AI/ML ENTHUSIAST", "FRONT END DEVELOPER"];
        const target = document.querySelector("#main__skill");

        let currentIndex = 0;

function changeText() {
    gsap.to(target, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            currentIndex = (currentIndex + 1) % values.length;
            target.innerText = values[currentIndex];
            gsap.to(target, { duration: 0.5, opacity: 1 });
        }
    });
}

setInterval(changeText, 3000);

// Initialize the text to the first value
target.innerText = values[currentIndex];

/************GSAP Code for web***************/
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

gsap.from('.skill-container .cpp',{
  opacity : 0,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".skill-container .cpp",
    toggleActions : "play none none reverse",

  }
})


gsap.from('.skill-container .py',{
  opacity : 0,
  y:-20,
  duration:1.5,
  delay:1,
  scrollTrigger:{
    trigger : ".skill-container .py",
    toggleActions : "play none none reverse",

  }
})

gsap.from('.skill-container .react',{
  opacity : 0,
  x:-20,
  duration:1,
  delay:2,
  scrollTrigger:{
    trigger : ".skill-container .react",
    toggleActions : "play none none reverse",

  }
})

gsap.from('.skill-container .blender',{
  opacity : 0,
  x:-20,
  duration:1,
  delay:2,
  scrollTrigger:{
    trigger : ".skill-container .blender",
    toggleActions : "play none none reverse",

  }
})

gsap.from('.skill-container .html5',{
  opacity : 0,
  y:20,
  duration:1,
  delay:2,
  scrollTrigger:{
    trigger : ".skill-container .html5",
    toggleActions : "play none none reverse",

  }
})


gsap.from('.skill-container .css',{
  opacity : 0,
  y:20,
  duration:1,
  delay:2,
  scrollTrigger:{
    trigger : ".skill-container .css",
    toggleActions : "play none none reverse",

  }
})


gsap.from('.skill-container .flask',{
  opacity : 0,
  x:20,
  duration:1,
  delay:2,
  scrollTrigger:{
    trigger : ".skill-container .flask",
    toggleActions : "play none none reverse",

  }
})
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
    customCursor.style.top = "-20rem";
    customCursor.style.left = "-20rem";
  });
});
