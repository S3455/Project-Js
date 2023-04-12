// Selectionne les éléments 

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // supprimer la séléction des autres buttons 
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    
    // Cache les autres articles 
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
