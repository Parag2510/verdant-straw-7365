let search = document
  .querySelector("#search")
  .addEventListener("click", openSearch);
let open_search = document.querySelector(".search_pr");
let close_search = document
  .querySelector("#idont_closs")
  .addEventListener("click", closeSearch);

function openSearch() {
  event.preventDefault();
  open_search.classList.add("open");
}
function closeSearch() {
  event.preventDefault();
  open_search.classList.remove("open");
}