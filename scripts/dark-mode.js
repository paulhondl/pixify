const darkModeIcon = document.querySelector(".dark-mode-icon");
const darkModeButton = document.querySelector(".dark-mode-btn");
const main = document.querySelector("main");
const submitButton = document.querySelector(".submit-btn");

const previousBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")

// localStorage implementation

let isDarkModeOn = false;

if(localStorage.getItem("darkMode")) {
  isDarkModeOn = localStorage.getItem("darkMode") === "true";
}

let result = localStorage.getItem("darkMode")

function activateDarkMode() {
  document.body.style.backgroundColor = "var(--bg-dark)";
  main.classList.add("dark");
  darkModeButton.textContent = "Light Mode"
  darkModeIcon.classList.add("invert-icon-colors", "toggle-shadow");
  submitButton?.classList.add("outline");
  nextBtn?.classList.add("outline");
  previousBtn?.classList.add("outline");
}

function activateLightMode() {
  document.body.style.backgroundColor = "var(--bg-light)";
  main.classList.remove("dark");
  darkModeButton.textContent = "Dark Mode"
  darkModeIcon.classList.remove("invert-icon-colors", "toggle-shadow");
  submitButton?.classList.remove("outline");
  nextBtn?.classList.remove("outline");
  previousBtn?.classList.remove("outline");
}

if(result === "true") {
  activateDarkMode()
}
else if(result === "false") {
  activateLightMode();
}

// toggle theme on click

function toggleDarkMode() {

  isDarkModeOn = !isDarkModeOn

  localStorage.setItem("darkMode", isDarkModeOn);
 
  if(!isDarkModeOn) {
    activateLightMode();
  } else {
    activateDarkMode()
  }

}

darkModeIcon.addEventListener("click", toggleDarkMode)
darkModeButton.addEventListener("click", toggleDarkMode)