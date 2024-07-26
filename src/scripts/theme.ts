const themeIdentifier = "klrfl-theme";
const bodyAttribute = "data-theme";

type Theme = "dark" | "light";

export function getTheme(): Theme {
  const themePreference = localStorage.getItem(themeIdentifier);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (themePreference !== "dark" && themePreference !== "light") {
    if (prefersDark.matches) localStorage.setItem(themeIdentifier, "dark");
    else localStorage.setItem(themeIdentifier, "light");
  }

  return localStorage.getItem(themeIdentifier) as Theme;
}

export function setTheme(targetTheme: Theme) {
  document.body.setAttribute(bodyAttribute, targetTheme);
  localStorage.setItem(themeIdentifier, targetTheme);

  const lightIcon = document.querySelector<HTMLElement>(".icon--light");
  const darkIcon = document.querySelector<HTMLElement>(".icon--dark");

  if (targetTheme === "dark") {
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const theme = getTheme();
  setTheme(theme);
});

const button = document.querySelector(".theme-toggle");

button.addEventListener("click", () => {
  const theme = getTheme();
  if (theme === "dark") setTheme("light");
  else setTheme("dark");
});
