$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
score = 0;
nbMultiplicateur = 1;
var autoclick = true;

function afficherScore() {
    $score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}

function clic() {
    score = score + nbMultiplicateur;
    afficherScore();

     if((score>199)&&(autoclick==true)){
      autoclick = setInterval("clic()",1000);  
      autoclick=false;
    }
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();



