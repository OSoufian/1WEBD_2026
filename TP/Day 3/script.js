const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btn.textContent = "☀️ Mode clair";
    } else {
        btn.textContent = "🌙 Mode sombre";
    }
});
