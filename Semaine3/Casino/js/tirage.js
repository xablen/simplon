var pfJoueur = 100;
var pfCasino = 100;

$('button').click(function() {

// On récupère la première valeur

choixSelect_1 = document.getElementById("select_1");
choice1 = choixSelect_1.selectedIndex;
valeurCherchee1 = choixSelect_1.options[choice1].text;

// On récupère la deuxième valeur

choixSelect_2 = document.getElementById("choix_nombre");
choice2 = choixSelect_2.selectedIndex;
valeurCherchee2 = choixSelect_2.options[choice2].value;

// On récupère la troisème valeur

choixSelect_3 = document.getElementById("montant").value;

var nombreAleatoire = Math.floor(Math.random() * 37);


alert(" La roulette s'arrête sur le nombre " + nombreAleatoire + " !");

//On définit les conditions

if (nombreAleatoire==0){
	alert("Vous avez perdu votre mise !");
    pfCasino += parseFloat(choixSelect_3);
    pfJoueur -= choixSelect_3;
    $('p:eq(0)').remove();
    $('#informations').append("<p>Joueur : "+ pfJoueur + "; Casino : "+ pfCasino + "</p>");
}

else if (nombreAleatoire==choixSelect_2){
	alert("Vous récupérez votre mise et nous vous versons 35 fois la mise :) !");
    pfJoueur +=  parseFloat(choixSelect_3 + (choixSelect_3*35));
    $('p:eq(0)').remove();
    $('#informations').append("<p>Joueur : "+ pfJoueur + "; Casino : "+ pfCasino + "</p>");
}

else if ((nombreAleatoire%2==0)&&(valeurCherchee1=="Paire")){
	alert("C'est un nombre paire; je vous rends votre mise et une fois sa valeur ;) !");
	pfJoueur +=  parseFloat(choixSelect_3*2);
    $('p:eq(0)').remove();
    $('#informations').append("<p>Joueur : "+ pfJoueur + "; Casino : "+ pfCasino + "</p>");
}

else if ((nombreAleatoire%2!=0)&&(valeurCherchee1=="Impaire")){
     alert("C'est un nombre impaire; je vous rends votre mise et une fois sa valeur ;) !");
     pfJoueur +=  parseFloat(choixSelect_3*2);
     $('p:eq(0)').remove();
     $('#informations').append("<p>Joueur : "+ pfJoueur + "; Casino : "+ pfCasino + "</p>");
}

else {
	alert("Perdu, retentez vote chance");
	 pfCasino += parseFloat(choixSelect_3);
     pfJoueur -= choixSelect_3;
    $('p:eq(0)').remove();
    $('#informations').append("<p>Joueur : "+ pfJoueur + "; Casino : "+ pfCasino + "</p>");
}


});
