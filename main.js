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
  let navLink = document.querySelectorAll(".menu-btn");
  for (let i = 0; i < navLink.length; i++) {
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
------------THREE JS SCENES LOADING--------------
 ************************************************/

const canvas = document.querySelector(".blades-canvas")
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00000);

const loader = new GLTFLoader()
loader.load("./extras/blades.glb",function(gltf){
    scene.add(gltf.scene)
}, undefined,function (error){
  console.log(error);
});

var directionalLight = new THREE.DirectionalLight(0xffffff, 6);
directionalLight.position.set(1, 3, 1);
scene.add(directionalLight);


var directionalLight_2 = new THREE.DirectionalLight(0xffffff, 6);
directionalLight_2.position.set(-1, -3, 1);
scene.add(directionalLight_2);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4.5;


const renderer = new THREE.WebGL1Renderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;
controls.update();
window.addEventListener('resize', onWindowResize, false);
function animate()
{
  requestAnimationFrame(animate);
  scene.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
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