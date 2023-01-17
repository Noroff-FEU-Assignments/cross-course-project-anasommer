const jacketsContainer = document.querySelector("#jackets-container");

const baseUrl = `https://anasommer.com/api/wp-json/wc/store/products`;

async function renderProducts(url) {
  const response = await fetch(url);
  const jacketsData = await response.json();

  // Render jackets to the page
  jacketsData.map((jacket) => {
    if (jacket.categories[0]) {
      const jacketShortDescription = jacket.short_description.slice(3, -4);

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

renderProducts(baseUrl);
