//Initialisation des armes//
var Arme = {

  initArme: function(nom,force) {
    this.nom = nom;
    this.force = force;

    for(i=0;i<=3;i++){
     do{
    this.posx = Math.floor(Math.random()*10);
    this.posy = Math.floor(Math.random()*10);
      }while(($("#x"+ this.posx + "y"+ this.posy).hasClass('joueur0'))||($("#x"+ this.posx + "y"+ this.posy).hasClass('joueur1'))||($("#x"+ this.posx + "y"+ this.posy).hasClass("Magie_Verte"))||($("#x"+ this.posx + "y"+ this.posy).hasClass("Magie_Bleue"))||($("#x"+ this.posx + "y"+ this.posy).hasClass("Magie_Rouge"))||($("#x"+ this.posx + "y"+ this.posy).hasClass("Magie_Noire"))||($("#x"+ this.posx + "y"+ this.posy).hasClass("blocs"))||($("#x"+ this.posx + "y"+ this.posy).hasClass("zone")));
     }
    },

    nom: function() {
    var nom = nom;
      return nom;
    },

    // Renvoie le placement initial des armes
    placerArme: function () {
        var placement = $("#x"+ this.posx + "y"+ this.posy).addClass(this.nom).removeClass('blocs');
        return placement;
      }
};
