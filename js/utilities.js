export default async function renderProducts() {
  const jacketsContainer = document.querySelector("#jackets-container");

  const baseUrl = `https://anasommer.com/api/wp-json/wc/store/products`;
  const response = await fetch(baseUrl);
  const jacketsData = await response.json();

  // Render jackets to the page
  jacketsData.map((jacket) => {
    // fix for p-tag which is coming back from WP and destroys styling
    const jacketShortDescription = jacket.short_description.slice(3, -4);

    // Shows Womens jackets
    if (jacket.categories[0] && window.location.pathname === "/womens.html") {
      jacketsContainer.innerHTML += ` 
        <section class="jacket-item">
        <a href="/item-page.html?id=${jacket.id}">
        <img src="${jacket.images[0].src}" class="jacket-image"/>
        </a>
        <h2 class="jacket-h2 futura-font-bold">${jacket.name}</h2>
        <p class="jacket-desc roboto-font">${jacketShortDescription}
            <span class="jacket-price futura-font-bold">NOK ${jacket.prices.price}.-</span>
      
       
        </p>
        <a href="/item-page.html?id=${jacket.id}" class="btn-add roboto-font">Show jacket</a>
        </section>
      `;
    }

    // Shows Mens jackets
    else if (
      !jacket.categories[0] &&
      window.location.pathname === "/mens.html"
    ) {
      jacketsContainer.innerHTML += ` 
        <section class="jacket-item">
        <a href="/item-page.html?id=${jacket.id}">
        <img src="${jacket.images[0].src}" class="jacket-image"/>
        </a>
        <h2 class="jacket-h2 futura-font-bold">${jacket.name}</h2>
        <p class="jacket-desc roboto-font">${jacketShortDescription}
            <span class="jacket-price futura-font-bold">NOK ${jacket.prices.price}.-</span>
      
       
        </p>
        <a href="/item-page.html?id=${jacket.id}" class="btn-add roboto-font">Show jacket</a>
        </section>
      `;
    }
  });
}
