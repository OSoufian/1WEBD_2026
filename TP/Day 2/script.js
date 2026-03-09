// ✅ Exercice 1
// Création du tableau

let fruits = ["pomme", "banane", "orange"];

// Afficher le premier fruit
console.log(fruits[0]);

// Ajouter "mangue" à la fin
fruits.push("mangue");

// Remplacer le deuxième élément (index 1)
fruits[1] = "fraise";

// ✅ Exercice 2
// Avec une boucle for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Avec forEach

fruits.forEach((fruit) => {
    console.log(fruit);
});



// ✅ Exercice 3
let nums = [3, 5, 7, 9, 11];

// Doubler chaque élément → map
let doubled = nums.map(n => n * 2);

// Filtrer : garder ceux > 10
let bigNums = doubled.filter(n => n > 10);

// Sommes
let sumOriginal = nums.reduce((acc, n) => acc + n, 0);
let sumDoubled = doubled.reduce((acc, n) => acc + n, 0);
let sumBig = bigNums.reduce((acc, n) => acc + n, 0);



// ✅ Exercice 4
let students = [
    { nom: "Jean", age: 20, note: 15 },
    { nom: "Sarah", age: 19, note: 10 },
    { nom: "Lucas", age: 21, note: 18 }
];

// Afficher nom + note
students.forEach(s => {
    console.log(s.nom + " a eu " + s.note);
});

// Étudiants avec note > 12
let goodStudents = students.filter(s => s.note > 12);

console.log("Étudiants avec > 12 :", goodStudents);

// Nouveau tableau avec uniquement les noms
let namesOnly = students.map(s => s.nom);
console.log(namesOnly);



// ✅ Exercice 5
let supinfoModule = {
    nom: "1WEBD",
    professeur: "Mme Martin",
    students: students,

    addStudent: function(nom, age, note) {
        this.students.push({ nom, age, note });
    },

    afficherMoyenne: function() {
        let total = this.students.reduce((acc, s) => acc + s.note, 0);
        let moyenne = total / this.students.length;

        console.log("Moyenne de la classe :", moyenne);
    }
};

// Exemple d'utilisation :
supinfoModule.addStudent("Nadia", 20, 14);
supinfoModule.afficherMoyenne();