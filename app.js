gsap.registerPlugin(ScrollTrigger)

function completeLoading() {
    document.body.classList.add("loading-complete");
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
    document.body.style.transition = "all 0.4s"
  }

gsap.from(".navbar .logo",{
  opacity:0,
  x:-100,
  ease:"power4.out",
  duration:1,
  delay:1,
})
gsap.from(".menu-button",{
  opacity:0,
  x:100,
  ease:"power.out",
  duration:1,
  delay:2,
  stagger:{
    amount:0.8,
  }
})
gsap.from(".home-container .home-title",{
  opacity:0,
  y:100,
  ease:"power.out",
  duration:1,
  delay:3,
  stagger:{
    amount:0.8,
  }
})
gsap.from(".home-container .desc",{
  opacity:0,
  z:100,
  ease:"power.out",
  duration:1,
  delay:4,
  stagger:{
    amount:0.8,
  }
})

gsap.from("#section-1",{
  opacity:0,
  ease:"power.out",
  duration:1,
  delay:5,
  onComplete:completeLoading,
})


let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".about-title",
        start:"top center",
        end:"bottom center",
        toggleActions:"play none none reverse",   
    }
})
function toggleMenu() {
  const navbarLinks = document.getElementById('navbar-menu');
  const menuButton = document.querySelector('.menu-button');

  if (navbarLinks.style.display === "block") {
    menuButton.classList.remove('menu-open');
    navbarLinks.style.display = "none";
  } else {
    menuButton.classList.add('menu-open');
    navbarLinks.style.display = "block";
  }
}


t2.from(".about-para",{
    opacity:0,
    ease:"power4.out",
    duration:1.5,
    y:20,
})

gsap.from(".about",{
  width:0,
  ease:"power4.out",
  duration:1.5,
  scrollTrigger:{
    trigger:".about",
    scrub:1,
  }
})
gsap.from(".work",{
  width:0,
  ease:"power4.out",
  duration:1.5,
  scrollTrigger:{
    trigger:".work",
    scrub:1,
  }
})


gsap.from(".skills",{
  opacity:0,
  y:-20,
  delay:0.5,
  ease:"power4.out",
  duration:1,
  scrollTrigger:{
    trigger:".skills",
    toggleActions:"play none none reverse",
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

  gsap.from('.accolades-title',{
    opacity : 0,
    x:20,
    duration:1,
    delay:2,
    scrollTrigger:{
      trigger : ".accolades-title",
      toggleActions : "play none none reverse",
    }
  })

  gsap.from('.accolades-details',{
    opacity : 0,
    x:20,
    duration:1,
    delay:3,
    scrollTrigger:{
      trigger : ".accolades-details",
      toggleActions : "play none none reverse",
    },
    stagger:{
      amount:0.5,
    }
  })

  gsap.from('.dev-title',{
    x:-100,
    ease:"power3.out",
    duration:1.5,
    scrollTrigger:{
      trigger : ".dev-title",
    }
  })
  gsap.from('.blades-of-chaos,.pokeball,.tesla',{
    opacity:0,
    ease:"power4.out",
    duration:1.5,
    x:10,
    scale:0,
    scrollTrigger:{
      trigger : ".blades-of-chaos,.pokeball,.tesla",
      toggleActions : "play none none reverse",
      start:"top center",
      end:"bottom center",
    }
  })
  // Hacked Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function applyEffect(event) {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 20);
}

document.querySelectorAll(".desc a").forEach(anchor => {
  anchor.addEventListener("mouseover", applyEffect);
});

// Apply effect to nav-bar links
document.querySelectorAll(".navbar-menu li a").forEach(anchor => {
  anchor.addEventListener("mouseover", applyEffect);
});

document.querySelectorAll(".social-accounts a").forEach(anchor => {
  anchor.addEventListener("mouseover", applyEffect);
});

document.querySelectorAll(".code-accounts a").forEach(anchor => {
  anchor.addEventListener("mouseover", applyEffect);
});
/************Custom Cursor JS***************/
document.addEventListener("DOMContentLoaded", function() {
    var customCursor = document.createElement("div");
    customCursor.className = "custom-cursor";
    document.body.appendChild(customCursor);
    
    document.addEventListener("mousemove", function(event) {

      customCursor.animate({
        left: `${event.clientX}px`,
        top: `${event.clientY}px`}, 
        { duration: 3000, fill: "forwards" });
      })
    });
  
/***************Project Carousel************************** */
    document.addEventListener("DOMContentLoaded", function () {
      const projects = document.querySelectorAll(".project");
      let currentProjectIndex = 0;
    
      function showProject(index) {
        projects.forEach((project, i) => {
          if (i === index) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      }
    
      // Initial display
      showProject(currentProjectIndex);
    
      // GSAP animation configuration
      const slideDuration = 0.5; 
      const animationEase = Power3.easeInOut; 
    
      // Handle navigation when clicking left arrow
      document.querySelector(".front").addEventListener("click", function () {
        var audio = new Audio('./extras/back_click.mp3');
        audio.play();
        const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        const prevProject = projects[prevIndex];
        const currentProject = projects[currentProjectIndex];
        
        // GSAP animation for sliding left and fading
        TweenMax.fromTo(
          currentProject,
          slideDuration,
          { x: 0, opacity: 1 },
          { x: "150%", opacity: 0, ease: animationEase }
        );
    
        TweenMax.fromTo(
          prevProject,
          slideDuration,
          { x: "-150%", opacity: 0 },
          { x: 0, opacity: 1, ease: animationEase, onComplete: () => showProject(prevIndex) }
        );
    
        currentProjectIndex = prevIndex;
      });
    
      // Handle navigation when clicking right arrow
      document.querySelector(".back").addEventListener("click", function () {
        var audio = new Audio('./extras/click.mp3');
        audio.play();
        const nextIndex = (currentProjectIndex + 1) % projects.length;
        const nextProject = projects[nextIndex];
        const currentProject = projects[currentProjectIndex];
        
        // GSAP animation for sliding right and fading
        TweenMax.fromTo(
          currentProject,
          slideDuration,
          { x: 0, opacity: 1 },
          { x: "-100%", opacity: 0, ease: animationEase }
        );
    
        TweenMax.fromTo(
          nextProject,
          slideDuration,
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 1, ease: animationEase, onComplete: () => showProject(nextIndex) }
        );
    
        currentProjectIndex = nextIndex;
      });
    });
    
    