gsap.registerPlugin(ScrollTrigger)

function completeLoading() {
    document.body.classList.add("loading-complete");
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
  }
const tl = gsap.timeline(
    { onComplete: completeLoading}
);

gsap.from(".navbar .logo",{
  opacity:0,
  x:-100,
  ease:"power4.out",
  duration:1,
  delay:1,
})
gsap.from(".navbar-links li",{
  opacity:0,
  x:100,
  ease:"power4.out",
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
})


let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".about-title",
        start:"top center",
        end:"bottom center",
        toggleActions:"play none none reverse",
        
    }
    
})

t2.from(".about-para",{
    opacity:0,
    ease:"power4.out",
    duration:1.5,
    y:20,
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
    opacity:0,
    ease:"power4.out",
    duration:1.5,
    y:10,
    scrollTrigger:{
      trigger : ".dev-title",
      toggleActions : "play none none reverse",
      start:"top center",
      end:"bottom center",
    }
  })
  gsap.from('.itemcontainer',{
    opacity:0,
    ease:"power4.out",
    duration:1.5,
    x:10,
    scrollTrigger:{
      trigger : ".itemcontainer",
      toggleActions : "play none none reverse",
      start:"top center",
      end:"bottom center",
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

document.querySelector(".desc a").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 10);
}


/************Custom Cursor JS***************/
document.addEventListener("DOMContentLoaded", function() {
    var customCursor = document.createElement("div");
    customCursor.className = "custom-cursor";
    document.body.appendChild(customCursor);
    
    document.addEventListener("mousemove", function(event) {
      customCursor.style.top = event.clientY + "px";
      customCursor.style.left = event.clientX + "px";
    });
  
  });