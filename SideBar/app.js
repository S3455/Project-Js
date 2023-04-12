// Selectionner éléments 

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Check quand le bouton est appuyé est affiche la barre

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
