// ===============================
// FADE IN ON SCROLL
// ===============================

const faders = document.querySelectorAll(".card, .feature, .testimonial, .contact");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});


// ===============================
// TYPING EFFECT FOR HERO
// ===============================

const text = "Luxury Handmade Crochet Creations 💜";
const heroTitle = document.querySelector(".hero h1");

let index = 0;
heroTitle.innerHTML = "";

function typeEffect() {
  if (index < text.length) {
    heroTitle.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;