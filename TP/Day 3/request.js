function fetchSimulatedData() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 3000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(["Donnée 1", "Donnée 2", "Donnée 3"]);
            } else {
                reject("Erreur : Impossible de récupérer les données");
            }
        }, delay);
    });
}

let errorCount = 0;

async function loadData() {
    const messageEl = document.getElementById('message');
    const listEl = document.getElementById('data-list');
    const errorCountEl = document.getElementById('error-count');

    messageEl.textContent = "Chargement des données...";
    listEl.innerHTML = "";

    try {
        const data = await fetchSimulatedData();

        messageEl.textContent = "Données reçues avec succès ✅";

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listEl.appendChild(li);
        });

    } catch (error) {
        errorCount++;
        messageEl.textContent = error;
        errorCountEl.textContent = "Nombre d'erreurs : " + errorCount;
    }
}

const btn = document.getElementById('load-btn');
btn.addEventListener('click', loadData);