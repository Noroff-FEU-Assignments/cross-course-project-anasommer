const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#msg");
const nameError = document.querySelector("#hint-name");
const emailError = document.querySelector("#hint-email");
const messageError = document.querySelector("#hint-message");

function checkLength(value, minLength) {
  if (value.trim().length > minLength) {
    return true;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const checkValue = regEx.test(email);
  return checkValue;
}

function validateForm(e) {
  const messageMinLength = 40;
  const nameMinLength = 3;
  e.preventDefault();

  if (checkLength(name.value, nameMinLength)) {
    nameError.style.display = "none";
    name.style.backgroundColor = "#d0f7db";
  } else {
    nameError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#d0f7db";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, messageMinLength)) {
    messageError.style.display = "none";
    message.style.backgroundColor = "#d0f7db";
  } else {
    messageError.style.display = "block";
  }

  if (
    name.value > nameMinLength &&
    email.value &&
    message.value.length > messageMinLength
  ) {
    location.replace("sent.html");
  }
}

contactForm.addEventListener("input", validateForm);
