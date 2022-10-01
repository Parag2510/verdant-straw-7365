let cart = document
  .querySelector("#cart_opan")
  .addEventListener("click", openCart);
let open = document.querySelector(".add_to_cart");
let close = document
  .querySelector("#idont")
  .addEventListener("click", closeCart);

function openCart() {
  //event.preventDefault();
  open.classList.add("active");
}
function closeCart() {
  //event.preventDefault();
  open.classList.remove("active");
}

// // ****************************Search Open*****************************

// let search = document
//   .querySelector("#search")
//   .addEventListener("click", openSearch);
// let open_search = document.querySelector(".search_pr");
// let close_search = document
//   .querySelector("#idont_closs")
//   .addEventListener("click", closeSearch);

// function openSearch() {
//  // event.preventDefault();
//   open_search.classList.add("open");
// }
// function closeSearch() {
//  // event.preventDefault();
//   open_search.classList.remove("open");
// }
let search = document.querySelector("#search").addEventListener("click",openmypage );

  let openmypage=()=>{
    window.location.href="navbar.html"
  }
// // ************************** user ************************************

let user_in = document.querySelector("#open_now");

user_in.addEventListener("click", openUser);
let open_manu = document.querySelector(".drop_down");
function openUser() {
  //event.preventDefault();
  // console.log("yes");
  open_manu.classList.add("open");
}

// search functionality

