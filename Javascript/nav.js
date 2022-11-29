// A click even will bbe active when users interactive with hambuger menu

const hambugerIcon = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-bar");
const navLink = document.querySelector(".nav-link");
hambugerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLink.array.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
