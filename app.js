const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");
const randomImage = document.querySelector(".random-image--js");
const randomInput = document.querySelector(".random-image__input");
const randomImageButton = document.querySelector(
  ".random-image__button-submit--js"
);
const randomResult = document.querySelector(".random-image__result");
const generateButton = document.querySelector(".random-image__button-generate");
const dragDropItem = document.querySelector(".drag-drop__box--item-js");
const dragDropBox = document.querySelectorAll(".drag-drop__box--js");
const dragDropImage = document.querySelector(".drag-drop__random-image--js");
const dragDropDescription = document.querySelector(
  ".drag-drop__description--js"
);

function addEventListeners() {
  photoItem.forEach((item) => {
    item.addEventListener("click", descriptionDisplay);
  });
  randomImageButton.addEventListener("click", checkAnswer);
  generateButton.addEventListener("click", scrollPosition);
  dragDropItem.addEventListener("dragstart", dragStart);
  dragDropItem.addEventListener("dragend", dragEnd);

  dragDropBox.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });
}

function descriptionDisplay(e) {
  const itemFirstChild = e.target.nextElementSibling.firstElementChild;
  const itemLastChild = e.target.nextElementSibling.lastElementChild;
  console.log(e.target);
  console.log(itemFirstChild);
  console.log(itemLastChild);
  itemFirstChild.classList.toggle("photo__description--english-show");

  if (!itemFirstChild.classList.contains("photo__description--english-show")) {
    itemLastChild.classList.toggle("photo__description--polish-show");
  }
}

const imageArray = [
  "./assets/animals/001-cow.png",
  "./assets/animals/002-dog.png",
  "./assets/animals/003-horse.png",
  "./assets/animals/004-pig.png",
  "./assets/animals/005-lion.png",
  "./assets/animals/006-elephant.png",
  "./assets/animals/007-monkey.png",
  "./assets/animals/008-whale.png",
  "./assets/animals/009-frog.png",
];

function getImage() {
  const randomNumber = Math.floor(imageArray.length * Math.random());
  randomImage.src = imageArray[randomNumber];
}

function checkAnswer(e) {
  e.preventDefault();
  const srcImage = randomImage.getAttribute("src");
  const re = /assets|.png|animals|[0-9]|-/;
  const words = srcImage.split(re);
  const imageName = words[6];
  const inputLowerCase = randomInput.value.toLowerCase();
  if (inputLowerCase === imageName) {
    console.log("correct");
    randomResult.classList.add("correct");
    randomResult.classList.remove("try-again");
    randomResult.innerText = "Correct!";
  } else {
    randomResult.classList.add("try-again");
    randomResult.classList.remove("correct");
    randomResult.innerText = "Try again...";
    console.log("Try again");
    randomInput.value = "";
  }
}

function scrollPosition(e) {
  e.preventDefault();
  getImage();
  randomInput.value = "";
  randomResult.classList.remove("correct");
  randomResult.classList.remove("try-again");
}

function dragStart(e) {
  this.classList.add("drag-drop__empty");
  setTimeout(() => this.classList.add("hide"), 0);
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
  e.target.classList.add("drag-drop__box--hovered");
}
function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
  e.target.classList.remove("drag-drop__box--hovered");
  // this.className = "drag-drop__box";
}
function drop(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
  e.target.classList.remove("drag-drop__box--hovered");
  this.appendChild(dragDropItem);
}

function dragEnd(e) {
  this.classList.remove("hide");
  e.target.classList.remove("drag-over");
}

// Immediately Invoked Function Expression (IIFE)
function dragDropRandomImage() {
  const randomNumber = Math.floor(imageArray.length * Math.random());
  dragDropImage.src = imageArray[randomNumber];
}
const randomExample = dragDropRandomImage();

function dragDropName() {
  const srcImage = dragDropImage.getAttribute("src");
  const re = /assets|.png|animals|[0-9]|-/;
  const words = srcImage.split(re);
  const imageName = words[6];
  console.log(imageName);
  console.log(dragDropDescription.innerText);
  dragDropDescription.innerText = imageName;
}

addEventListeners();
