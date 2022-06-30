const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const navbtn = document.querySelector(".navbtn");
const navbtns = document.getElementsByClassName("navbtn");

navbar.addEventListener("click", () => {
  nav.classList.toggle("fadeout");
});

for (var i = 0; i < navbtns.length; i++) {
  const navbutton = navbtns[i];
  navbutton.addEventListener("click", () => {
    nav.classList.toggle("fadeout");
  });
  console.log(navbutton);
}
