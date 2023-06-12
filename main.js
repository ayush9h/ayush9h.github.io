import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.148.0/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.148.0/examples/jsm/controls/OrbitControls.js'

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

/************Loading Page JS***************/
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressText = document.getElementById('progress-text');
  const bootLoadedText = document.getElementById('boot-loaded');
  const enterButton = document.getElementById('enter-button');
  let isProgressComplete = false;

  loadingScreen.style.visibility = 'visible';
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
      anime({
        targets: boxes,
        opacity: 0,
        duration: 500,
      });
      isProgressComplete = true;
    }
  }, 100);
});

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
    start:"top 60%",
    end: "bottom 20%",
  }
})
gsap.from('.about-container .about-para',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  scrollTrigger:{
    trigger : ".about-container p",
    toggleActions : "play none none reverse",
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
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
      start: 'top 60%',
      end: 'bottom 20%',
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
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
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
    start:"top 60%",
    end: "bottom 20%",
  }
})

gsap.from('.work-container .blades-of-chaos',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-container .blades-of-chaos",
    toggleActions : "play none none reverse",
    start:"top 60%",
    end: "bottom 20%",
  }
})

gsap.from('.work-container .blades-canvas',{
  opacity : 0,
  scale:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-container .blades-canvas",
    toggleActions : "play none none reverse",
    start:"top 90%",
    end: "bottom 20%",
  }
})

gsap.from('.work-container .pokeball',{
  opacity : 0,
  rotationX : -45,
  y:-20,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-container .pokeball",
    toggleActions : "play none none reverse",
    start:"top 60%",
    end: "bottom 20%",
  }
})

gsap.from('.work-container .pokeball-canvas',{
  opacity : 0,
  scale:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger : ".work-container .pokeball-canvas",
    toggleActions : "play none none reverse",
    start:"top 90%",
    end: "bottom 20%",
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
    start:"top 90%",
    end: "bottom 20%",
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
    start:"top 90%",
    end: "bottom 20%",
  }
})


/**************Three JS Scene*****************/
const canvas = document.querySelector(".blades-canvas")
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x09001f);

const loader = new GLTFLoader()
loader.load("./models/blades.glb",function(gltf){
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
controls.enabled = false;
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

/************Three JS for pokeball************/
const canvas_pokeball = document.querySelector(".pokeball-canvas")
const scene_pokeball = new THREE.Scene();
scene_pokeball.background = new THREE.Color(0x09001f);

const loader_pokeball = new GLTFLoader()
loader_pokeball.load("./models/pokeball.glb",function(glx){
    scene_pokeball.add(glx.scene)
}, undefined,function (error){
  console.log(error);
});

var directionalLight_pokeball = new THREE.DirectionalLight(0xffffff, 2);
directionalLight_pokeball.position.set(1, 3, 1);
scene_pokeball.add(directionalLight_pokeball);

var directionalLight2_pokeball = new THREE.DirectionalLight(0xffffff, 2);
directionalLight2_pokeball.position.set(0, -3, 0);
scene_pokeball.add(directionalLight2_pokeball);


const camera_pokeball = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera_pokeball.position.z = 6;


const renderer_pokeball = new THREE.WebGL1Renderer({ canvas: canvas_pokeball, antialias: true });
renderer_pokeball.setSize(window.innerWidth, window.innerHeight);
renderer_pokeball.gammaOutput = true;
renderer_pokeball.gammaFactor = 2.2;

const controls_pokeball = new OrbitControls(camera_pokeball, renderer.domElement);
controls_pokeball.enableZoom = false;
controls_pokeball.update();
window.addEventListener('resize', onWindowResize_pokeball, false);
function animate_pokeball()
{
  requestAnimationFrame(animate_pokeball);
  scene_pokeball.rotation.y += 0.01;
  controls_pokeball.update();
  renderer_pokeball.render(scene_pokeball, camera_pokeball);
}
animate_pokeball();

function onWindowResize_pokeball() {
  camera_pokeball.aspect = window.innerWidth / window.innerHeight;
  camera_pokeball.updateProjectionMatrix();
  renderer_pokeball.setSize(window.innerWidth, window.innerHeight);
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
  
  document.addEventListener("mouseout", function() {
    customCursor.style.top = "-100px";
    customCursor.style.left = "-100px";
  });
});
