const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

let isLoading = false;  // Pour éviter de charger plusieurs fois en même temps
let draggedImage = null; // Image en cours de drag

// ---------- PARTIE 1 : INFINITE SCROLL ----------

function createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Image de la galerie";
    img.draggable = true;

    // Gestion du drag and drop
    img.addEventListener("dragstart", handleDragStart);   // Quand on commence à déplacer l'image
    img.addEventListener("dragover", handleDragOver);     // Quand on survole une autre image pendant le drag
    img.addEventListener("drop", handleDrop);             // Quand on lâche l'image sur une autre
    img.addEventListener("dragenter", handleDragEnter);   // Quand l'image déplacée entre dans la zone d'une autre image
    img.addEventListener("dragleave", handleDragLeave);   // Quand l'image déplacée sort de la zone d'une autre image


    return img;
}

async function loadMoreImages(count = 10) {
    isLoading = true;
    showLoader();

    for (let i = 0; i < count; i++) {
        try {
            const response = await fetch("https://picsum.photos/400/300");

            const imageUrl = response.url;

            const img = createImageElement(imageUrl);
            gallery.appendChild(img);
        } catch (error) {
            console.error("Erreur lors du chargement de l'image :", error);
        }
    }

    hideLoader();
    isLoading = false;
}


function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 200;

    if (!isLoading && scrollPosition >= threshold) {
        isLoading = true;
        showLoader();

        setTimeout(() => {
            loadMoreImages(10);
            hideLoader();
            isLoading = false;
        }, 1000);
    }
});

loadMoreImages(10);

// ---------- PARTIE 2 : DRAG & DROP ----------

function handleDragStart(event) {
    draggedImage = event.target;
    event.dataTransfer.effectAllowed = "move";
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function handleDrop(event) {
    event.preventDefault();

    const target = event.target;

    if (!draggedImage || target === draggedImage || target.tagName !== "IMG") {
        return;
    }

    target.classList.remove("drop-target");

    const images = Array.from(gallery.children);
    const draggedIndex = images.indexOf(draggedImage);
    const targetIndex = images.indexOf(target);

    if (draggedIndex < targetIndex) {
        gallery.insertBefore(draggedImage, target.nextSibling);
    } else {
        gallery.insertBefore(draggedImage, target);
    }

    draggedImage = null;
}

function handleDragEnter(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG" && event.target !== draggedImage) {
        event.target.classList.add("drop-target");
    }
}

function handleDragLeave(event) {
    if (event.target.tagName === "IMG") {
        event.target.classList.remove("drop-target");
    }
}

document.addEventListener("dragover", (event) => {
    event.preventDefault();
});
document.addEventListener("drop", (event) => {
    event.preventDefault();
});
