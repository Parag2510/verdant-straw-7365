
 import footer from './components/FOOTER.js';
 console.log(footer);
 let footer_div=document.getElementById('foot');
 footer_div.innerHTML=footer()

 
 
  let mybutton = document.getElementById("myBtn");
     

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  
 
  let tf=document.getElementById("myBtn").addEventListener("click",topFunction)
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }