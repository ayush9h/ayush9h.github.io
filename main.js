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
  var typed = new Typed(".typing", {
    strings: ["Coder", "FrontEnd Dev", "Racing Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Coder", "FrontEnd Dev", "Racing Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

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

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  // console.log(e);
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJXopMMDEbH446YY21FU_AMc1OtmuZR2-zsjv_6lUL6k1mF6IQi_D46fEfvlVf4L0y/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML = ">>> exit 0 <<<";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    }
  );
  form.reset().catch((error) => console.error("Error!", error.message));
});


TweenMax.from('.logo', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})
TweenMax.staggerFrom('.navbar ul li', 1, {
  opacity: 0,
  x: -100,
  ease: Power3.easeInOut
}, 0.3)
TweenMax.from(".text-2", 1, {
  opacity: 0,
  delay: 2,
  y: -800,
  ease: Expo.easeInOut
})
TweenMax.from(".cursor", 1, {
  opacity: 0,
  delay: 0.2,
  y: -20,
  ease: Expo.easeInOut
})
TweenMax.from(".typing", 1, {
  opacity: 0,
  delay: 2,
  x: -100,
  ease: Expo.easeInOut
})

TweenMax.from(".home", 2, {
  opacity: 0,
  delay: 0.6,
  x: -800,
  ease: Expo.easeInOut
})
TweenMax.from(".navbar img", 2, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})
