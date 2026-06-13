const html = document.querySelector("#htmlDocument");
const themeIcon = document.querySelector("#themeToggleIcon");
let darkTheme = true;
document.querySelector("#themeToggle").addEventListener("click", () => {
    if (darkTheme) {
        html.setAttribute("data-bs-theme", "light");
        themeIcon.classList = "bi bi-sun-fill";
    } else {
        html.setAttribute("data-bs-theme", "dark");
        themeIcon.classList = "bi bi-moon-stars-fill";
    }
    darkTheme = !darkTheme;
});