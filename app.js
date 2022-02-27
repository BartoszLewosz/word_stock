const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");

for (let i = 0; i < photoItem.length; i++) {
  photoItem[i].addEventListener("click", descriptionDisplay);
}

function descriptionDisplay(e) {
  const itemFirstChild = e.target.nextElementSibling.firstElementChild;
  console.log(itemFirstChild);
  itemFirstChild.classList.toggle("photo__description--polish-show");
}
