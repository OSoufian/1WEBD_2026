// 1 – JQuery

$(function () {
    // Animation au survol
    $("#menu a").on("mouseenter", function () {
        $(this).stop().animate({
            paddingLeft: "20px",
            opacity: 0.7
        }, 200);
    });

    $("#menu a").on("mouseleave", function () {
        $(this).stop().animate({
            paddingLeft: "12px",
            opacity: 1
        }, 200);
    });

  // Scroll fluide
    $("#menu a").on("click",function (e) {
        e.preventDefault();

        const target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top - 60
        }, 800);
    });
});

// 2 – Lodash

const projects = [
    { title: "Portfolio HTML CSS", category: "Web", date: "2024-01-15" },
    { title: "Application météo", category: "Web", date: "2024-02-20" },
    { title: "Gestion étudiants", category: "BDD", date: "2024-03-10" },
    { title: "Mini jeu JavaScript", category: "Web", date: "2024-03-25" },
    { title: "Application Android", category: "Mobile", date: "2024-04-12" },
    { title: "Projet réseau Cisco", category: "Réseau", date: "2024-05-08" },
    { title: "Chatbot intelligent", category: "IA", date: "2024-06-01" },
    { title: "Site e-commerce", category: "Web", date: "2024-06-18" },
    { title: "Base de données cinéma", category: "BDD", date: "2024-07-03" },
    { title: "Application de notes", category: "Mobile", date: "2024-08-14" }
];

let currentPage = 1;
const itemsPerPage = 5;

function renderProjects() {
    const searchValue = document.getElementById("searchProject").value.toLowerCase();
    const categoryValue = document.getElementById("filterCategory").value;
    const sortValue = document.getElementById("sortDate").value;

    let filteredProjects = _.filter(projects, function (project) {
        const matchesSearch = project.title.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === "" || project.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    filteredProjects = _.orderBy(
        filteredProjects,
        ["date"],
        [sortValue === "recent" ? "desc" : "asc"]
    );

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const paginatedProjects = _.slice(
        filteredProjects,
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const tbody = document.getElementById("projectsTableBody");
    tbody.innerHTML = "";

    if (paginatedProjects.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3">Aucun projet trouvé</td>
            </tr>
        `;
    } else {
        paginatedProjects.forEach(function (project) {
            tbody.innerHTML += `
                <tr>
                    <td>${project.title}</td>
                    <td>${project.category}</td>
                    <td>${project.date}</td>
                </tr>
            `;
        });
    }

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button onclick="goToPage(${i})">${i}</button>
        `;
    }
}

function goToPage(page) {
    currentPage = page;
    renderProjects();
}

document.getElementById("searchProject").addEventListener("input", function () {
    currentPage = 1;
    renderProjects();
});

document.getElementById("filterCategory").addEventListener("change", function () {
    currentPage = 1;
    renderProjects();
});

document.getElementById("sortDate").addEventListener("change", function () {
    currentPage = 1;
    renderProjects();
});

renderProjects();

