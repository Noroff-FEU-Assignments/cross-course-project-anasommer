import jacketsData from "./data.js";

const itemContainer = document.querySelector("#item-description");
const breadcrumb = document.querySelector("#breadcrumb");
const cartEmpty = document.querySelector("#cart-empty");
const cartFull = document.querySelector("#cart-full");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

const jacket = jacketsData[id - 1];

// Update breadcrumbs
jacket.sex === "female"
  ? (breadcrumb.innerHTML = `Women's`) &&
    breadcrumb.setAttribute("href", "/womens.html")
  : (breadcrumb.innerHTML = `Men's`) &&
    breadcrumb.setAttribute("href", "/mens.html");

// Render item to the page
itemContainer.innerHTML = `
                            <div id="item-container">
                            <section class="margin-bottom">
                            <a href="/item-page.html"
                                ><img src="${jacket.img}" class="item-image"
                            /></a>
                            </section>
                            <section>
                            <h2 class="jacket-h2 futura-font-bold">${jacket.name}</h2>
                            <p class="item-desc roboto-font">
                               ${jacket.shortDesc}
                            </p>
                            <span class="jacket-price futura-font-bold">NOK ${jacket.price}.-</span>
                            <a href="added.html" class="btn-add roboto-font">+ Add to cart</a>
                            </section>
                            </div>
                            <section class="item-info jacket-item">
                            <h4 class="futura-font">
                            <i class="fa-solid fa-circle-info"></i> Product information:
                            </h4>
                            <p class="roboto-font item-desc">
                            ${jacket.fullDesc}
                            </p>
                          
                            <section class="item-desc roboto-font extra-info">
                            <p><b>Weight:</b> ${jacket.weight}</p>
                            <p><b>Activity:</b> ${jacket.activity}</p>
                            <p><b>Material:</b> ${jacket.material}</p>
                            <p><b>Washability:</b> ${jacket.washability}</p>
                            <p><b>Season:</b> ${jacket.season}</p>
                            <p><b>Features:</b> ${jacket.features}</p>
                            <p><b>Model year:</b> ${jacket.modelYear}</p>
                            </section>
                            </section>
`;

const btn = document.querySelector(".btn-add");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  btn.textContent = "Added";
  cartEmpty.style.display = "none";
  cartFull.style.display = "block";
});
