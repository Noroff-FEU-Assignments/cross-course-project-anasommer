const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#msg");
const nameError = document.querySelector("#hint-name");
const emailError = document.querySelector("#hint-email");
const messageError = document.querySelector("#hint-message");
const mainEl = document.querySelector("main");
const submitBtn = document.querySelector(".submit-btn");
let validName = false;
let validEmail = false;
let validMessage = false;

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
    validName = true;
  } else {
    nameError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#d0f7db";
    validEmail = true;
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, messageMinLength)) {
    messageError.style.display = "none";
    message.style.backgroundColor = "#d0f7db";
    validMessage = true;
  } else {
    messageError.style.display = "block";
  }
}

contactForm.addEventListener("input", validateForm);
submitBtn.addEventListener("click", function () {
  if (validName && validEmail && validMessage) {
    mainEl.innerHTML = `<img src="/images/iconSuccess.png" alt="success icon" id="success-icon" />
    <p class="added-heading futura-font-bold">
      Your message has been sent.
    </p>
    <a href="cart.html" class="btn-add roboto-font">Go to cart</a>
    <a href="index.html" class="btn-light roboto-font">Back to Shopping</a>`;
  }
});
