const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");
const imageArray = [1, 2, 3, 4, 5, 6];

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

const imageArrayLength = imageArray.length;
const randomNumber = Math.floor(imageArrayLength * Math.random());
console.log(randomNumber);
