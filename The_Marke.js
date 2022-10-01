//**********************************    Image animation  *************************************

let main = document.querySelector(".avtar");
let imgset = document.querySelector(".avtar>img");

main.addEventListener("mousemove", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  imgset.style.transformOrigin = `${x}px ${y}px`;
  imgset.style.transform = "scale(2)";
});
main.addEventListener("mouseleave", function () {
  imgset.style.transformOrigin = "center";
  imgset.style.transform = "scale(1)";
});

//***********************************   price change  ***************************************

document.querySelector(".month>button").addEventListener("click", first_month);
function first_month(event) {
  event.preventDefault();
  let butn1 = document.querySelector(".month>button");
  butn1.style.backgroundColor = "#E1E1E1";
  document.querySelector(".append").innerText = "599.00";
  let price = document.querySelector(".append").innerText;
  localStorage.setItem("price", price);
}
document
  .querySelector(".month>button+button")
  .addEventListener("click", three_month);
function three_month(event) {
  event.preventDefault();
  let butn2 = document.querySelector(".month>button+button");
  butn2.style.backgroundColor = "#E1E1E1";
  document.querySelector(".append").innerText = "1599.00";
  let price = document.querySelector(".append").innerText;
  localStorage.setItem("price", price);
}

//***********************************      Quntity Change    *********************************

let incriment = document.querySelector(".qun>button");
incriment.addEventListener("click", incrimen_prs);
let count = 1;
let name = (document.querySelector("#quntity").value = 1);
chak(name);
function incrimen_prs(event) {
  event.preventDefault();
  count++;
  let name = (document.querySelector("#quntity").value = count);
  chak(name);
}

let decriment = document.querySelector("#quntity+button");
decriment.addEventListener("click", decrimen_prs);

function decrimen_prs(event) {
  event.preventDefault();
  if (count <= 1) {
    count = 1;
  } else {
    count--;
  }
  let name = (document.querySelector("#quntity").value = count);
  chak(name);
}

function chak(name) {
  let qun = name;
  localStorage.setItem("quntity", qun);
}

// ******************************************   add to cart *********************************

document.querySelector(".add").addEventListener("click", function () {
  let arr = [];
  submitObj(arr);
  window.location.reload();
});
function submitObj(arr) {
  let avtar = document.querySelector(".avtar>img").src;
  let name = document.querySelector("#ap_product_name").innerText;
  let obj = {
    ime: avtar,
    name: name,
    price: localStorage.getItem("price"),
    qun: localStorage.getItem("quntity"),
  };
  arr.push(obj);
  localStorage.setItem("add_to_cart", JSON.stringify(arr));
}

// *************************************      table     **********************************

let tittal = document.querySelectorAll(".ap_active");
let doc = document.querySelectorAll(".td_cont");

tittal.forEach(function (ele, index) {
  ele.addEventListener("click", function () {
    event.preventDefault();
    doc.forEach(function (content) {
      content.classList.remove("active");
    });
    tittal.forEach(function (ele) {
      ele.classList.remove("active");
    });
    doc[index].classList.add("active");
    tittal[index].classList.add("active");
  });
});
