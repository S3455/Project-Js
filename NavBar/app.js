

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Montre la nav bar ou l'enlever 
navToggle.addEventListener("click", function () {
   
  links.classList.toggle("show-links");
});