// PARTIE I

console.log("Hello World!");


// 1. Calculer un prix

let prixHT = prompt("Entrez le prix unitaire HT :");
let tva = prompt("Entrez le taux de TVA (%) :");
let quantite = prompt("Entrez le nombre d'articles :");

let prixTTCunitaire = prixHT * (1 + tva / 100);
let totalTTC = prixTTCunitaire * quantite;
alert("Montant total TTC : " + totalTTC.toFixed(2) + " €");



// 2. Échange de deux variables

// 1. En utilisant une affectation multiple

let a = parseFloat(prompt("Entrez la valeur de a :"));
let b = parseFloat(prompt("Entrez la valeur de b :"));

[a, b] = [b, a];

alert("Après échange : a = " + a + " , b = " + b);

// 2. Sans utiliser d’affectation multiple

a = parseFloat(prompt("Entrez la valeur de a :"));
b = parseFloat(prompt("Entrez la valeur de b :"));

let temp = a;
a = b;
b = temp;

alert("Après échange : a = " + a + " , b = " + b);

// 2. Échange de trois variables

a = parseFloat(prompt("Entrez la valeur de a :")); // a = 5
b = parseFloat(prompt("Entrez la valeur de b :")); // b = 3

a = a + b; // 5 + 3 = 8
b = a - b; // 8 - 3 = 5
a = a - b; // 8 - 5 = 3

alert("Après échange : a = " + a + " , b = " + b);

// 3. Échange de trois variables
let x = parseFloat(prompt("Entrez la valeur de x :"));
let y = parseFloat(prompt("Entrez la valeur de y :"));
let z = parseFloat(prompt("Entrez la valeur de z :"));

a = x;

x = y;
y = z;
z = a;

alert("Après permutation : x = " + x + ", y = " + y + ", z = " + z);