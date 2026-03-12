const themeToggleBtn = document.getElementById("theme-toggle");

const savedTheme = sessionStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        sessionStorage.setItem("theme", "dark");
    } else {
        sessionStorage.setItem("theme", "light");
    }
});