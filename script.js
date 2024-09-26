const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = [
  "Le cachalot est un mammifère marin",
  "Le pétunia est une fleur",
  "La serviette est un objet",
];
let score = 0;
let choix = prompt("Voulez-vous jouer avec des mots ou des phrases ?");
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Voulez-vous jouer avec des mots ou des phrases ?");
}

if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
    if (motUtilisateur === listeMots[i]) {
      score++;
    }
  }
  console.log("votre score est de : " + score + "sur" + listeMots.length);
} else {
  for (let i = 0; i < listePhrases.length; i++) {
    let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
    if (motUtilisateur === listePhrases[i]) {
      score++;
    }
  }
  console.log("votre score est de : " + score + "sur" + listePhrases.length);
}
