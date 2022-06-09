const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");
const randomImage = document.querySelector(".random-image--js");
const randomInput = document.querySelector(".random-image__input");
const randomImageButton = document.querySelector(
  ".random-image__button-submit--js"
);
const randomResult = document.querySelector(".random-image__result");
const generateButton = document.querySelector(".random-image__button-generate");

function addEventListeners() {
  photoItem.forEach((item) => {
    item.addEventListener("click", descriptionDisplay);
  });
  randomImageButton.addEventListener("click", checkAnswer);
  generateButton.addEventListener("click", scrollPosition);
}

function descriptionDisplay(e) {
  const itemFirstChild = e.target.nextElementSibling.firstElementChild;
  const itemLastChild = e.target.nextElementSibling.lastElementChild;
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

function getRandomImage(arr, image) {
  const randomNumber = Math.floor(arr.length * Math.random());
  image.src = arr[randomNumber];
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
  getRandomImage(imageArray, randomImage);
  randomInput.value = "";
  randomResult.classList.remove("correct");
  randomResult.classList.remove("try-again");
}

// function dragDropName() {
//   const srcImage = dragDropImage.getAttribute("src");
//   const re = /assets|.png|animals|[0-9]|-/;
//   const words = srcImage.split(re);
//   const imageName = words[6];
//   dragDropDescription.innerText = imageName;
// }
// dragDropName();
// console.log(typeof dragDropBox);
// const dragDropArray = Object.entries(dragDropBox);
// console.log(dragDropArray);

// for (let i = 1; i < dragDropArray.length; i++) {
//   const randomNumber = Math.floor(imageArray.length * Math.random());
//   const boxImage = document.createElement("img");
//   boxImage.setAttribute("src", imageArray[randomNumber]);
//   boxImage.classList.add("drag-drop__random-image");
//   dragDropArray.appendChild(boxImage);
//   console.log(boxImage);
// }
// const RandomDragDrop = (getRandomDragDrop) => {
//   for (let box = 0; box < dragDropBox[index]; box++)
// }

addEventListeners();
