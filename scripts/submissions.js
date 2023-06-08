import imageSets from "./data.js";

const imagesGrid = document.querySelector(".images-grid");

imageSets.forEach(imageSet => {
  let submissionHTML = `
    <a class="submission" href="./details.html?id=${imageSet.id}">
      <div class="cover-image">
        <img src=${imageSet.images[0]}>
      </div>
      <div class="title-photographer">
        <p>${imageSet.title} - ${imageSet.name}</p>
        <p><small>see more</small></p>
      </div>
    </a>`
    imagesGrid.insertAdjacentHTML("beforeend", submissionHTML);
})

// SUBMITTING NEW WORK

const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
const username = document.querySelector("#username");
const entryTitle = document.querySelector("#entry");
const url1 = document.querySelector("#url-1");

// submit event does not fire when any required field is empty

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const submissionFormData = new FormData(form);
  const userName = submissionFormData.get("username")
  const entry = submissionFormData.get("entry");
  const url = submissionFormData.get("url-1");

  const newSubmissionHTML = `
    <div class="submission" >
      <div class="cover-image">
          <img alt="some image" src=${url}>
        </div>
      <div class="title-photographer">
        <p>${entry} - ${userName}</p>
        <p><small>see more</small></p>
      </div>
    </div>`
  
  imagesGrid.insertAdjacentHTML("afterbegin", newSubmissionHTML);
  form.reset();
});