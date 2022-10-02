//catch element and add event for cart open and close
// document.getElementById("cart_logo").addEventListener("click", opencart);

// function opencart() {
//   document.getElementById("mycart").style.width = "350px";
// }

// document.getElementById("closecart").addEventListener("click", closecart);

// function closecart() {
//   document.getElementById("mycart").style.width = "0";
// }

// import navar

// import navbar from "../components/navbar";

// document.getElementById("");
// ======================================importing navbar==================================
import navbar from "./components/navbar.js";
let container = document.getElementById("mynavbar");
container.innerHTML = navbar();
console.log(container);
// =========================================================================================
// ======================================importing footer==================================

import footer from "./Footer/FOOTER.js";
console.log(footer);
let footer_div = document.getElementById("foot");
footer_div.innerHTML = footer();

// =========================================================================================

document.getElementById("up_cart").addEventListener("click", returnhome);

function returnhome() {
  window.location.href = "home.html";
}

document.getElementById("chout").addEventListener("click", ch_checkout);

function ch_checkout() {
  window.location.href = "checkout.html";
}

function multires() {
  let n_qty = document.getElementById("N_qty").value;

  let res = n_qty || 1 * 599;
  let res_show = document.getElementById("total_price");
  res_show.append(res);
}
multires();
