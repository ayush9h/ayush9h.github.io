import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.148.0/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.148.0/examples/jsm/controls/OrbitControls.js'

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


/*******************Importing the canvas**************** */
const canvas = document.querySelector('.cube-render-scene')

/******************Creating a New Scene ******************/
const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );

/*******************Blender model loading*******************/
const loader = new GLTFLoader()
loader.load('./Resources/cube.glb',function(glb)
{
    const root = glb.scene;
    scene.add(root)
    root.position.set(0,0,0)
    root.scale.set(1.2,1.2,1.2)
    root.traverse(function(node){
        if(node.isMesh)
        node.castShadow = true
    })
})



/***************Setting the light for the scene********************** */
const light = new THREE.PointLight(0xffffff,0.5)
light.position.set(8,3,0)
scene.add(light)

const amblight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( amblight );



/***************Setting the window sizes********************** */
const sizes = {
    width: window.innerWidth,
    height : window.innerHeight
}

/************Setting up the camera for the scene************* */
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.5,100)
camera.position.set(10,4,10)
scene.add(camera);

window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();

    renderer2.setSize( window.innerWidth, window.innerHeight );

};

/***********Setting up the renderer for the scene************* */
const renderer = new THREE.WebGL1Renderer({canvas : canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(5);
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
renderer.outputEncoding = THREE.sRGBEncoding;
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate()




/*************************Controls of the scene******************/
const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enablePan = false;
controls.enableDamping = false;
controls.enableZoom = false





// /*----------------------------------
// -----For second model--------------- */


const canvas2 = document.querySelector('.webgl2')
const scene2 = new THREE.Scene();
scene2.background = new THREE.Color( 0x000000 );

const loader2 = new GLTFLoader()
loader2.load('./Resources/pokeball.glb',function(glb)
{
    const root = glb.scene;
    scene2.add(root)
    root.position.set(-2,0,0)
    root.scale.set(2.5,2.5,2.5)
    root.traverse(function(node){
        if(node.isMesh)
        node.castShadow = true
    })
})

const light2 = new THREE.PointLight(0xffffff,0.5)
light2.position.set(8,3,0)
scene2.add(light2)

const amblight2 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene2.add(amblight2);

const camera2 = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera2.position.set(1,0,10)
scene2.add(camera2);


const renderer2 = new THREE.WebGL1Renderer({canvas : canvas2});
renderer2.setSize(sizes.width,sizes.height);
renderer2.setPixelRatio(5);
renderer2.shadowMap.enabled = true;
renderer2.gammaOutput = true;
renderer2.outputEncoding = THREE.sRGBEncoding;
function animate2()
{
    requestAnimationFrame(animate2);
    renderer2.render(scene2,camera2)
}
animate2()


const controls2 = new OrbitControls( camera2, renderer2.domElement );
controls2.target.set( 0, 0.5, 0 );
controls2.update();
controls2.enablePan = false;
controls2.enableDamping = false;
controls2.enableZoom = false

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
------------TWEEN MAX AND ANIME-----------------
 ************************************************/
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
    delay: (el, i) => 20*i
  }).add({
    targets: '.home .home-content .text-2',
    opacity: 1,
    duration: 6000,
    
    easing: "easeOutExpo",
    delay: 6000
  });


  anime({
    targets : '#dev path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 200 },
    direction: 'alternate',
    loop: false
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
-----------QUOTATION GENERATOR-------------------
 ************************************************/
var date_data = document.querySelector('.date')
date_data.innerHTML = "Don't watch the clock; do what it does. Keep going. ~ Sam Levenson";
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