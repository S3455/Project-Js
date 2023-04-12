const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// Check quand le bouton est appuyé est met la vidéo en pose ou play avec le slide

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// Prechargement
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
