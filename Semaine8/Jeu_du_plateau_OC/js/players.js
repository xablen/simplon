//Initialisation des joueurs//
var Joueur = {

 initJoueur: function(nom) {
    this.nom = nom;
    this.pv = 100;
    this.posx = Math.floor(Math.random()*10);
    this.posy = Math.floor(Math.random()*10);
    },
   
    nom: function() {
    var nom = nom;
      return nom;
    },

    // Renvoie le placement initial du joueur
    placerJoueur: function () {
        var placement = $("#x"+ this.posx + "y"+ this.posy).addClass(this.nom).removeClass('blocs');
        return placement;
      },
    // Renvoie les zones de déplacement autorisées pour les joueurs
    zoneJoueur: function() {
      var autorise1=true;
    for(i=1;i<=3;i++){
      if(!$("#x"+ (this.posx+i) + "y"+ this.posy).hasClass('blocs')&&(autorise1===true)){
        var zone1 = $("#x"+ (this.posx+i) + "y"+ this.posy).addClass("zone");
        }
      else{
      autorise1=false;
        }

      for(j=0;j<=1;j++){   
      if($("#x"+ (this.posx+i) + "y"+ this.posy).hasClass("joueur"+j)){
        $("#x"+ (this.posx+i) + "y"+ this.posy).removeClass("zone");
       } 
      }
      }

      var autorise2=true;
    for(i=1;i<=3;i++){
      if(!$("#x"+ (this.posx-i) + "y"+ this.posy).hasClass('blocs')&&(autorise2===true)){
       var zone2 = $("#x"+ (this.posx-i) + "y"+ this.posy).addClass("zone");
      }      
      else{
      autorise2=false;
        }

      for(j=0;j<=1;j++){   
      if($("#x"+ (this.posx-i) + "y"+ this.posy).hasClass("joueur"+j)){
        $("#x"+ (this.posx-i) + "y"+ this.posy).removeClass("zone");
       } 
      }
      }  

      var autorise3=true;
    for(i=1;i<=3;i++){
      if(!$("#x"+ this.posx + "y"+ (this.posy+i)).hasClass('blocs')&&(autorise3===true)){
       var zone3 = $("#x"+ this.posx + "y"+ (this.posy+i)).addClass("zone");
      }      
      else{
      autorise3=false;
        }

      for(j=0;j<=1;j++){   
      if($("#x"+ this.posx + "y"+ (this.posy+i)).hasClass("joueur"+j)){
        $("#x"+ this.posx + "y"+ (this.posy+i)).removeClass("zone");
       } 
      }
      }

       var autorise4=true;
    for(i=1;i<=3;i++){
      if(!$("#x"+ this.posx + "y"+ (this.posy-i)).hasClass('blocs')&&(autorise4===true)){
       var zone4 = $("#x"+ this.posx + "y"+ (this.posy-i)).addClass("zone");
      }      
      else{
      autorise4=false;
        }
      for(j=0;j<=1;j++){   
      if($("#x"+ this.posx + "y"+ (this.posy-i)).hasClass("joueur"+j)){
        $("#x"+ this.posx + "y"+ (this.posy-i)).removeClass("zone");
       } 
      }
      }

      return zone1;
      return zone2;
      return zone3;
      return zone4;
      },
};