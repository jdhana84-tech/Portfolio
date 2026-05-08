
// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

});

// TYPING EFFECT

new Typed("#typing", {

  strings: [
    "AI Enthusiast",
    "Creative Frontend Developer",
    "Future Software Engineer",
    "UI/UX Explorer"
  ],

  typeSpeed: 60,
  backSpeed: 40,
  loop: true

});

// AOS

AOS.init({
  duration: 1200
});

// CURSOR GLOW

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// GRAVITY EFFECT

const boxes = document.querySelectorAll(".gravity-box");

boxes.forEach(box => {

  box.addEventListener("mouseenter", () => {

    box.style.transform =
      `translateY(-35px) rotate(${Math.random()*20}deg)`;

  });

  box.addEventListener("mouseleave", () => {

    box.style.transform = "translateY(0px)";

  });

});
// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

});

// TYPING EFFECT

new Typed("#typing", {

  strings: [
    "AI Enthusiast",
    "Creative Frontend Developer",
    "Future Software Engineer",
    "UI/UX Explorer"
  ],

  typeSpeed: 60,
  backSpeed: 40,
  loop: true

});

// AOS

AOS.init({
  duration: 1200
});

// CURSOR GLOW

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// GRAVITY EFFECT

const boxes = document.querySelectorAll(".gravity-box");

boxes.forEach(box => {

  box.addEventListener("mouseenter", () => {

    box.style.transform =
      `translateY(-35px) rotate(${Math.random()*20}deg)`;

  });

  box.addEventListener("mouseleave", () => {

    box.style.transform = "translateY(0px)";

  });

});


