import { animate, inView, stagger } from "motion";

const targets = document.querySelectorAll(".main-section ul > *");
const noAnimationsPlease = window.matchMedia(
  "(prefers-reduced-motion)",
).matches;

if (!noAnimationsPlease) {
  inView(
    targets,
    (e) => {
      e.classList.toggle("hidden");
      animate(
        e,
        { y: ["50%", 0], opacity: [0, 1] },
        {
          type: "spring",
          stiffness: 50,
          delay: stagger(0.3, { startDelay: 0.2 }),
        },
      );
    },
    { margin: "0% 0% 20px 0%" },
  );
}
