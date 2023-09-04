const observerOptions = {
  rootMargin: "10px",
  threshold: 0.2,
};

const mainSectionObserver = new IntersectionObserver(
  (entries, mainSectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        entry.target.classList.remove("hidden");
      }
    });
  },
  observerOptions
);

const mainSections = document.querySelectorAll("section.main-section");

document.addEventListener("DOMContentLoaded", () => {
  mainSections.forEach((mainSection) => {
    mainSection.classList.add("hidden");
    mainSectionObserver.observe(mainSection);
  });
});
