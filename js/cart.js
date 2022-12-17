import jacketsData from "./data.js";

const cartWrapper = document.querySelector("#cart-wrapper");
const checkOutBtn = document.querySelector(".check-out-btn");

const id = localStorage.getItem("jacket");
const item = jacketsData[id - 1];
let itemQuantity = 1;
let totalPrice = item.price;

// Form & validation
const form = document.querySelector("form");
const cardNumber = document.querySelector("#credit-card");
const cvvNumber = document.querySelector("#cvv");
const CVVlength = 3;
const cardLength = 16;

function checkLength(value, length) {
  if (value.trim().length === length) {
    return true;
  }
}

function renderCart() {
  cartWrapper.innerHTML = ` 
                            <section id="cart-container">
                            <img
                            src="${item.img}"
                            alt="Jacket image"
                            class="cart-image"
                            />
                            <div class="cart-info">
                            <h3 class="futura-font-bold cart-heading">${item.name}</h3>
                            <button id="remove"><img src="/images/minus-icon.png" alt="minus icon" disabled/></button
                            ><span class="cart-value roboto-font" id="quantity">${itemQuantity}</span>
                            <button id="add"><img src="/images/pluss-icon.png" alt="pluss icon" /></button>
                            </section> <section class="cart-details roboto-font">
                            <p>Shipping: Free</p>
                            <p class="cart-total">Total: ${totalPrice} NOK</p>
                             </section>  
                        `;

  const quantity = document.querySelector("#quantity");
  const add = document.querySelector("#add");
  const remove = document.querySelector("#remove");

  // Add and remove item
  add.addEventListener("click", function () {
    quantity.innerHTML = itemQuantity++;
    totalPrice += item.price;
    renderCart();
  });

  remove.addEventListener("click", function () {
    if (itemQuantity > 0) {
      quantity.innerHTML = itemQuantity--;
      totalPrice -= item.price;
    } else {
      remove.disabled = true;
      quantity.innerHTML = 0;
      itemQuantity = 0;
    }
    renderCart();
  });

  return cartWrapper;
}

renderCart();

// Form validation
form.addEventListener("input", function () {
  if (
    checkLength(cardNumber.value, cardLength) &&
    checkLength(cvvNumber.value, CVVlength)
  ) {
    // Clean local storage when order is placed
    checkOutBtn.addEventListener("click", function () {
      localStorage.clear();
      checkOutBtn.setAttribute("href", "./checkout-success.html");
    });
  }
});
