const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
      entry.target.classList.remove("hidden");
    } else entry.target.classList.add("hidden");
  });
};

const observerOpts = {
  rootMargin: "10px 0px",
};

const observer = new IntersectionObserver(observerCallback, observerOpts);

// attach observer to elements
const mainSectionEls = document.querySelectorAll("section.main-section");

document.addEventListener("DOMContentLoaded", () => {
  mainSectionEls.forEach((mainSection) => {
    observer.observe(mainSection);
  });
});
