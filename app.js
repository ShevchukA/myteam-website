const btns = document.querySelectorAll(".card__btn");
const cardSide1 = document.querySelectorAll(".card__side1");
const cardSide2 = document.querySelectorAll(".card__side2");
const submitBtn = document.querySelector(".form__btn");
const formInputs = document.querySelectorAll(".form__input");
const formLabels = document.querySelectorAll(".form__label");

const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

for (const [index, btn] of btns.entries()) {
  btn.addEventListener("click", () => onClick(btn, index));
}

function onClick(btn, i) {
  btn.classList.toggle("card__btn--active");
  cardSide1[i].classList.toggle("card__side1--turned");
  cardSide2[i].classList.toggle("card__side2--turned");
}

submitBtn.addEventListener("click", () => {
  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "") {
      formInputs[i].classList.add("form__input--invalid");
      formLabels[i].textContent = "This field is required";
      formLabels[i].classList.add("form__label--visible");
    }
  }

  if (!regex.test(formInputs[1].value)) {
    formInputs[1].classList.add("form__input--invalid");
    formLabels[1].textContent = "Please use a valid email address";
    formLabels[1].classList.add("form__label--visible");
  }
});

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("focus", () => {
    formInputs[i].classList.remove("form__input--invalid");
    formLabels[i].textContent = "This field is required";
    formLabels[i].classList.remove("form__label--visible");
  });
}
