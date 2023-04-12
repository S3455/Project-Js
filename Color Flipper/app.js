// Js pour les codes couleurs simples


const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


// méthode qui appelle la fonction getRandomNumber a chaque fois le bouton est cliqué 
click.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Avoir un nombre alétoire entier grace au floor * nb array
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}