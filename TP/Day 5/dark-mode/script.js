const themeToggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


const notesArea = document.getElementById("notes-area");

if (notesArea) {

    const pageKey = "notes-" + window.location.pathname;

    const savedNotes = localStorage.getItem(pageKey);

    if (savedNotes !== null) {
        notesArea.value = savedNotes;
    }

    notesArea.addEventListener("input", () => {
        localStorage.setItem(pageKey, notesArea.value);
    });
}