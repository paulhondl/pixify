// DOM ELEMENTS

const logo = document.querySelector("h1");
const submitButton = document.querySelector(".submit-btn");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

// Linkifying the submitButton (if page has one)

submitButton?.addEventListener("click", () => document.location = "./submissions.html");

// MOBILE NAVIGATION

hamburger.addEventListener("click", () => mobileNav.classList.toggle("visible"));

window.addEventListener("resize", () => {
  if(window.innerWidth >= 600) {
    mobileNav.classList.remove("visible");
  }
})