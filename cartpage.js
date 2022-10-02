import navbar from "./components/navbar.js";
let container = document.getElementById("mynavbar");
container.innerHTML = navbar();
console.log(container);

let cart = document
  .querySelector("#cart_opan")
  .addEventListener("click", openCart);
let open = document.querySelector(".su_add_to_cart");
let close = document
  .querySelector("#idont")
  .addEventListener("click", closeCart);

function openCart() {
  event.preventDefault();
  open.classList.add("active");
}
function closeCart() {
  event.preventDefault();
  open.classList.remove("active");
}
