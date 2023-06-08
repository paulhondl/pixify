import imageSets from "./data.js"

// URL PARAM

let urlParams = new URLSearchParams(window.location.search);
let currentID = parseInt(urlParams.get("id"));

// INITIAL DISPLAY OF FIRST PICTURE

const imageSetContainer = document.querySelector(".image-set-container");

let startIndex = 0;

let chosenImageSet = imageSets.find(imageSet => imageSet.id === currentID);
console.log(chosenImageSet);

imageSetContainer.innerHTML = `
  <h2>${chosenImageSet.title}</h2>
  <h3>${chosenImageSet.name}</h3>
  <div class="caroussel">
    <img src=${chosenImageSet.images[startIndex]}>
    <p><span id="index-display">1</span> of 5</p>
    <div class="buttons-wrapper">
      <button id="previous-btn">Previous</button>
      <button id="next-btn">Next</button>
    </div>
  </div>
  `

// CAROUSSEL IMPLEMENTATION

const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

const indexDisplay = document.querySelector("#index-display");

previousBtn.addEventListener("click", () => {
  
  if(startIndex === 0) {
    startIndex = chosenImageSet.images.length - 1;
    
  } else {
    startIndex--;
  }
  document.querySelector(".caroussel img").src = chosenImageSet.images[startIndex];
  indexDisplay.textContent = startIndex + 1
})

nextBtn.addEventListener("click", () => {
  if(startIndex === chosenImageSet.images.length - 1) {
    startIndex = 0;
  } else {
    startIndex++;
  }
  document.querySelector(".caroussel img").src = chosenImageSet.images[startIndex];
  indexDisplay.textContent = startIndex + 1
})

