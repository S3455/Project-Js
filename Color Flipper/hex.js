// Js pour les codes couleurs Hex

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Crée le code hex

click.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Avoir un nombre aléatoire pour hex

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
