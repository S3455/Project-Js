
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");


// Ouvrir
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

// Fermer
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
