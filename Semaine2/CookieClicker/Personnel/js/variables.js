var score = 0;
var compteur = 1;

//Augmenter le score

$('#bouton').click(function() {

    score = score + compteur;
    document.getElementById("scoreAffichage").innerHTML = score;

});

//Incrémenter

$('#multiplicateur').click(function() {
 compteur = compteur * 2;
 score = score - 50;
});


