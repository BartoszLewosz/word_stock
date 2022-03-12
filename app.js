const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");
const randomImage = document.querySelector(".random-image--js");
const randomInput = document.querySelector(".random-image__input");
const randomImageButton = document.querySelector(
  ".random-image__button-submit--js"
);

console.log(randomImageButton);

// for (let i = 0; i < photoItem.length; i++) {
//   photoItem[i].addEventListener("click", descriptionDisplay);
// }
photoItem.forEach((item) => {
  item.addEventListener("click", descriptionDisplay);
});

function descriptionDisplay(e) {
  const itemFirstChild = e.target.nextElementSibling.firstElementChild;
  const itemLastChild = e.target.nextElementSibling.lastElementChild;
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
getImage();

randomImageButton.addEventListener("click", checkAnswer);

function checkAnswer(e) {
  e.preventDefault();
}
