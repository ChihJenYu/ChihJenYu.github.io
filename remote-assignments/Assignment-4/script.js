const navProducts = document.querySelector(".nav-products");
const navMore = document.querySelector(".nav-more");
const productsDropdown = document.querySelector(".products-dropdown");
const moreDropdown = document.querySelector(".more-dropdown");

navProducts.addEventListener("mouseenter", () => {
    productsDropdown.style.display = "block";
})

navProducts.addEventListener("mouseleave", () => {
    productsDropdown.style.display = "none";
})

navMore.addEventListener("mouseenter", () => {
    moreDropdown.style.display = "block";
})

navMore.addEventListener("mouseleave", () => {
    moreDropdown.style.display = "none";
})