const photoDescription = document.querySelectorAll(".photo__description--js");
const photoItem = document.querySelectorAll(".photo__item--js");

for (let i = 0; i < photoItem.length; i++) {
  photoItem[i].addEventListener("click", descriptionDisplay);
}

function descriptionDisplay(e) {
  const itemFirstChild = e.target.nextElementSibling.firstElementChild;
  const itemLastChild = e.target.nextElementSibling.lastElementChild;
  console.log(itemFirstChild);
  console.log(itemLastChild);
  itemLastChild.classList.toggle("photo__description--english-show");

  if (!itemLastChild.classList.contains("photo__description--english-show")) {
    itemFirstChild.classList.toggle("photo__description--polish-show");
  }
}
