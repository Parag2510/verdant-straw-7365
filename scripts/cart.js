//catch element and add event for cart open and close
// document.getElementById("cart_logo").addEventListener("click", opencart);

// function opencart() {
//   document.getElementById("mycart").style.width = "350px";
// }

// document.getElementById("closecart").addEventListener("click", closecart);

// function closecart() {
//   document.getElementById("mycart").style.width = "0";
// }

// import navbar from "../components/navbar";

// import navbar and footer  {remaining task}

document.getElementById("up_cart").addEventListener("click", returnhome);

function returnhome() {
  window.location.href = "home.html";
}

document.getElementById("chout").addEventListener("click", ch_checkout);

function ch_checkout() {
  window.location.href = "home.html";
}

function multires() {
  let n_qty = document.getElementById("N_qty").value;

  let res = n_qty || 1 * 599;
  let res_show = document.getElementById("total_price");
  res_show.append(res);
}
multires();
