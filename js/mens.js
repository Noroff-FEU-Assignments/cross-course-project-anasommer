import jacketsData from "./data.js";

const jacketsContainer = document.querySelector("#jackets-container");

// Render jackets to the page
jacketsData.map((jacket) => {
  if (jacket.sex === "male") {
    jacketsContainer.innerHTML += ` 
                                <section class="jacket-item">
                                <a href="/item-page.html"
                                    ><img src="${jacket.img}" class="jacket-image"
                                /></a>
                                <h2 class="jacket-h2 futura-font-bold">${jacket.name}</h2>
                                <p class="jacket-desc roboto-font">
                                    ${jacket.shortDesc}
                                    <span class="jacket-price futura-font-bold">NOK ${jacket.price}.-</span>
                                </p>
                                <a href="added.html" class="btn-add roboto-font">Read more...</a>
                                </section>
                                `;
  }
});
