const btns = document.querySelectorAll(".card__btn");
const cardSide1 = document.querySelectorAll(".card__side1");
const cardSide2 = document.querySelectorAll(".card__side2");

for (const [index, btn] of btns.entries()) {
  btn.addEventListener("click", () => onClick(btn, index));
}

function onClick(btn, i) {
  btn.classList.toggle("card__btn--active");
  cardSide1[i].classList.toggle("card__side1--turned");
  cardSide2[i].classList.toggle("card__side2--turned");
}
