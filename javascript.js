const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const navbtn = document.getElementsByClassName("navbtn");

navbar.addEventListener("click", () => {
  nav.classList.toggle("fadeout");
});

for (var i = 0; i < navbtn.length; i++) {
  const btnnav = document.querySelector(".navbtn");
  console.log(btnnav);

  btnnav.addEventListener("click", (event) => {
    const btn = event.target;
    const ulface = btn.parentElement.parentElement;
    console.log(ulface);
  });
}
