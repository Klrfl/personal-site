const navlinks = document.querySelector(".nav-links");
const openNavbarBtn = document.getElementById("open-nav");
const closeNavbarBtn = document.getElementById("close-nav");

openNavbarBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

closeNavbarBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
