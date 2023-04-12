
const questions = document.querySelectorAll(".question");

// Pour chaque bouton

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
 
// Afficher les contenue des quetions ou enlever
  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


