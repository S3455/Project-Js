// Selectionner éléments 

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

// Bouton suivant

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

// Bouton précédent 

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

// gère l'affichage des diapo 

function carousel() {
// Si counter est inférieur a - 1 défini style block
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  // Si supérieru a 0 définir sur none 
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// style none

prevBtn.style.display = "none";
