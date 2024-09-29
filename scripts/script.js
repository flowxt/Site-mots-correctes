function afficherResultat(score, nbMotsProposes) {
  //on affiche le score de l'utilisateur
  console.log("votre score est de : " + score + "sur" + nbMotsProposes);
}

function choisirPhrasesOuMots() {
  //tant que l'utilisateur
  let choix = prompt("Voulez-vous jouer avec des mots ou des phrases ?");
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Voulez-vous jouer avec des mots ou des phrases ?");
  }
  return choix;
}

function LancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nbMotsProposes = 0;

  if (choix === "mots") {
    score = LancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = LancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }
  afficherResultat(score, nbMotsProposes);
}
