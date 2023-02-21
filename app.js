const btns = document.querySelectorAll(".card__btn");
const cardSide1 = document.querySelectorAll(".card__side1");
const cardSide2 = document.querySelectorAll(".card__side2");
const submitBtn = document.querySelector(".form__btn");
const form = document.querySelector(".form");
const formInputs = document.querySelectorAll(".form__input");
const formLabels = document.querySelectorAll(".form__label");
const emailInput = document.querySelector(".email");
const emailLabel = document.querySelector(".emailLabel");

const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

// personal cards animation
for (const [index, btn] of btns.entries()) {
  btn.addEventListener("click", () => onClick(btn, index));
}

function onClick(btn, i) {
  btn.classList.toggle("card__btn--active");
  cardSide1[i].classList.toggle("card__side1--turned");
  cardSide2[i].classList.toggle("card__side2--turned");
}

// validation of form
submitBtn.addEventListener("click", () => {
  checkEmptyFields() && emailValidation() && form.submit();
});

function emailValidation() {
  if (regex.test(emailInput.value)) {
    return true;
  } else {
    emailInput.classList.add("form__input--invalid");
    emailLabel.textContent = "Please use a valid email address";
    emailLabel.classList.add("form__label--visible");
    return false;
  }
}

function checkEmptyFields() {
  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "") {
      formInputs[i].classList.add("form__input--invalid");
      formLabels[i].textContent = "This field is required";
      formLabels[i].classList.add("form__label--visible");
    }
  }

  if (Array.from(formInputs).find((input) => input.value === "")) {
    return false;
  } else {
    return true;
  }
}

// delet alerts when user types
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("focus", () => {
    formInputs[i].classList.remove("form__input--invalid");
    formLabels[i].classList.remove("form__label--visible");
  });
}
