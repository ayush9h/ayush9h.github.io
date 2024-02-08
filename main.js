import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

// --------------------- Scroll By Lenis -------------------------
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  direction: "vertical",
  gestureDirection: "vertical",
  lerp: 0.01,
  smooth: 2,
  smoothTouch: false,
  touchMultiplier: 2,
  wheelMultiplier: 1,
  infinite: false,
  autoResize: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// --------------------- Custom Cursor -------------------------
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

// --------------------- Audio Play triggering -------------------------
const audio = new Audio("./assets/music.mp3");
let playBtn = document.querySelector(".music-toggle");
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.style.backgroundColor = "#F4CF54";
  } else {
    audio.pause();
    playBtn.style.backgroundColor = "";
  }
});

// --------------------- GSAP Navigation Bar -------------------------
const open = document.querySelector(".nav-toggle");
const close = document.querySelector(".close");
var tl = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });
open.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to(".navigation-links", { top: 0 })
      .to(".navigation-links", { height: "100vh" }, "-=.1")
      .to(
        ".navigation-links ul li a",
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8"
      )
      .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8");
  }
});

close.addEventListener("click", () => {
  tl.reverse();
});

// --------------------- GSAP Navigation Bar -------------------------
gsap.from(".navigation-bar h1", {
  opacity: 0,
  x: -20,
  duration: 2,
  ease: "power3.out",
});

// --------------------- GSAP Heading Titles and Scroll More -------------------------
gsap.from(".heading-title", {
  opacity: 0,
  y: -20,
  duration: 1,
  ease: "power3.out",
  delay: 1,
});
gsap.from(".heading-desc span", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  delay: 1,
  stagger: 0.05,
});

gsap.from(".scroll-more h1", {
  stagger: 0.5,
  duration: 1.5,
  ease: "power3.out",
  opacity: 0,
  y: 20,
});

// --------------------- GSAP Scroller Titles -------------------------
const animateScroller = (target) => {
  gsap.from(`${target}`, {
    width: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: `${target}`,
      start: "top 88%",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
};
animateScroller(".about");
animateScroller(".work");

// --------------------- GSAP Span  -------------------------
const animateText = (target) => {
  gsap.from(`${target} span`, {
    opacity: 0.15,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: `${target} span`,
      start: "top 77%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
};
animateText(".what-desc .first");
animateText(".what-desc .second");
animateText(".what-desc .third");
animateText(".what-desc .fourth");

animateText(".about-para");
animateText(".accolade-box");
animateText(".web-projects");
animateText(".ml-projects");
animateText(".blender-projects");
animateText(".blades-title");
animateText(".pokeball-title");
animateText(".nintendo-title");

// --------------------- GSAP Project Title -------------------------
const animateProject = (target) => {
  gsap.from(`${target}`, {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: `${target}`,
      start: "top 88%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
};

animateProject(".ml");
animateProject(".web");
