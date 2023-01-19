const itemContainer = document.querySelector("#item-description");
const breadcrumb = document.querySelector("#breadcrumb");
const cartEmpty = document.querySelector("#cart-empty");
const cartFull = document.querySelector("#cart-full");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

async function getJacketInfo(id) {
  const url = `https://anasommer.com/api/wp-json/wc/store/v1/products/${id}`;
  const response = await fetch(url);
  const jacket = await response.json();

  console.log(jacket);
  // Update breadcrumbs
  jacket.categories[0].name === "Mens"
    ? (breadcrumb.innerHTML = `Men's`) &&
      breadcrumb.setAttribute("href", "/mens.html")
    : (breadcrumb.innerHTML = `Women's`) &&
      breadcrumb.setAttribute("href", "/womens.html");

  // Render item to the page
  itemContainer.innerHTML = `
<div id="item-container">
<section class="margin-bottom">
<a href="/item-page.html"
    ><img src="${jacket.images[0].src}" class="item-image"
/></a>
</section>
<section>
<h2 class="jacket-h2 futura-font-bold">${jacket.name}</h2>
<p class="item-desc roboto-font">
   ${jacket.short_description.slice(3, -4)}
</p>
<span class="jacket-price futura-font-bold">NOK ${jacket.prices.price}.-</span>
<a href="added.html" class="btn-add roboto-font">+ Add to cart</a>
</section>
</div>
<section class="item-info jacket-item">
<h4 class="futura-font">
<i class="fa-solid fa-circle-info"></i> Product information:
</h4>
<p class="roboto-font item-desc">
${jacket.description.slice(3, -4)}
</p>

<section class="item-desc roboto-font extra-info">
<p><b>Weight:</b> ${jacket.attributes[1].terms[0].slug}</p>
<p><b>Activity:</b> ${jacket.attributes[2].terms[0].slug}</p>
<p><b>Material:</b> ${jacket.attributes[3].terms[0].slug}</p>
<p><b>Washability:</b> ${jacket.attributes[4].terms[0].slug}</p>
<p><b>Season:</b> ${jacket.attributes[5].terms[0].slug}</p>
<p><b>Features:</b> ${jacket.attributes[6].terms[0].slug}</p>
<p><b>Model year:</b> ${jacket.attributes[7].terms[0].slug}</p>
</section>
</section>
`;

  const btn = document.querySelector(".btn-add");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.textContent = "Added";
    cartEmpty.style.display = "none";
    cartFull.style.display = "block";

    localStorage.setItem("jacket", id);
  });
}

getJacketInfo(id);
