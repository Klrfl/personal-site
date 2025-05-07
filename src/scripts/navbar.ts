document.addEventListener("astro:page-load", () => {
  const navlinks = document.querySelector(".nav-links-wrapper");
  const openNavbarBtn = document.getElementById("open-nav");
  const closeNavbarBtn = document.getElementById("close-nav");

  openNavbarBtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });

  closeNavbarBtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });

  navlinks.addEventListener("click", () => {
    navlinks.classList.remove("active");
  });
});
