const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");

for (let i = 0; i < photoItem.length; i++) {
  photoItem[i].addEventListener("click", engDisplay);
}
