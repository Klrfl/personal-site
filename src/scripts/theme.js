const themeIdentifier = "klrfl-theme";
const bodyAttribute = "data-theme";

export function getTheme() {
  const themePreference = localStorage.getItem(themeIdentifier);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (themePreference !== "dark" && themePreference !== "light") {
    if (prefersDark.matches) localStorage.setItem(themeIdentifier, "dark");
    else localStorage.setItem(themeIdentifier, "light");
  }

  return localStorage.getItem(themeIdentifier);
}

export function setTheme(targetTheme) {
  document.body.setAttribute(bodyAttribute, targetTheme);
  localStorage.setItem(themeIdentifier, targetTheme);

  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");

  if (targetTheme === "dark") {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
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
