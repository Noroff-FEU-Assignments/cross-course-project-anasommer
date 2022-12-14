const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu when user clicks a link
navLink.forEach((link) => {
  return link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
