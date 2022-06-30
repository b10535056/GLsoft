const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");

navbar.addEventListener("click", () => {
  nav.classList.toggle("fadeout");
});
