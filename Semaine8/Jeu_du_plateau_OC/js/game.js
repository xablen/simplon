//Chargement des éléments//
window.addEventListener('load', function () {
    map();
    blocs();

     //Initialise le joueur1
     var joueur1 = Object.create(Joueur);
     joueur1.initJoueur("joueur0");
     joueur1.placerJoueur();
     joueur1.zoneJoueur();
     //Initialise le joueur2
     var joueur2 = Object.create(Joueur);
     joueur2.initJoueur("joueur1");
     do{   
     joueur2.posx = Math.floor(Math.random()*10);
     joueur2.posy = Math.floor(Math.random()*10); 
     }while((Math.abs(joueur2.posx-joueur1.posx)<2)||(Math.abs(joueur2.posy-joueur1.posy)<2));
     joueur2.placerJoueur();

     //Initialise les armes
     var arme0= Object.create(Arme);
     arme0.initArme("Magie_Verte",10);
     arme0.nom;
     arme0.placerArme();

     var arme1= Object.create(Arme);
     arme1.initArme("Magie_Bleue",15);
     arme1.nom;
     arme1.placerArme();

     var arme2= Object.create(Arme);
     arme2.initArme("Magie_Rouge",20);
     arme2.nom;
     arme2.placerArme();

     var arme3= Object.create(Arme);
     arme3.initArme("Magie_Noire",25);
     arme3.nom;
     arme3.placerArme();

     //Création de tableaux pour gérer plus facilement les joueurs et les armes
     var joueurs = [];
     joueurs.push(joueur1);
     joueurs.push(joueur2);

     var armes = [];
     armes.push(arme0);
     armes.push(arme1);
     armes.push(arme2);
     armes.push(arme3);

    //Création de la zone basse d'informations sur les joueurs en utilisant jQuery
    $('.player-weapon-icon_0').addClass("Magie_Verte");
    $('.player-weapon-icon_1').addClass(armes[0].nom);

    $('.player-weapon-specs_0').append("Magie_Verte" + '</br><span class="degat0">'+ armes[0].force +'</span> pts magie');
    $('.player-weapon-specs_1').append("Magie_Verte" + '</br><span class="degat1">'+ armes[0].force +'</span> pts magie');

    $('.player-hp_0').append('<span class="titulaire0">' +joueurs[0].pv + '</span>/100 PV');
    $('.player-hp_1').append('<span class="titulaire1">' +joueurs[1].pv + '</span>/100 PV');

    // Déplacer le joueur
    var k = 0;
    var move = true;

    $(document).on("mousedown",".zone", function(e) {
    
    if (move===true){
    var elementId= (e.target).id;
    joueurs[k].posx = parseInt(elementId[1]);
    joueurs[k].posy = parseInt(elementId[3]);
    $("div").removeClass(joueurs[k].nom);
    $("div").removeClass("zone");
    $("#x"+joueurs[k].posx+"y"+joueurs[k].posy).addClass(joueurs[k].nom);

    for(m=0;m<=3;m++){
    if((joueurs[k].posx===armes[m].posx)&&(joueurs[k].posy===armes[m].posy)){
    var classe =  $('.player-weapon-icon_'+k).attr("class").substring(21);
    var classe2 = $("#x"+joueurs[k].posx+"y"+joueurs[k].posy).attr("class");
    classe2 = classe2.replace(' joueur'+ k, '');
    $('.player-weapon-icon_'+k).removeClass(classe).addClass(classe2);
    $("#x"+joueurs[k].posx+"y"+joueurs[k].posy).removeClass(classe2).addClass(classe);
       }
     }
    
    if($('.player-weapon-icon_'+k).hasClass(armes[0].nom)){
         $('.player-weapon-specs_'+k).html($(this).children());
         $('.player-weapon-specs_'+k).append(armes[0].nom + '</br><span class="degat'+k+'">'+ armes[0].force +'</span> pts magie');
    }
    else if ($('.player-weapon-icon_'+k).hasClass(armes[1].nom)){
         $('.player-weapon-specs_'+k).html($(this).children());
         $('.player-weapon-specs_'+k).append(armes[1].nom + '</br><span class="degat'+k+'">'+ armes[1].force +'</span> pts magie');
    }
    else if ($('.player-weapon-icon_'+k).hasClass(armes[2].nom)){
         $('.player-weapon-specs_'+k).html($(this).children());
         $('.player-weapon-specs_'+k).append(armes[2].nom + '</br><span class="degat'+k+'">'+ armes[2].force +'</span> pts magie');
    }
    else if ($('.player-weapon-icon_'+k).hasClass(armes[3].nom)){
         $('.player-weapon-specs_'+k).html($(this).children());
         $('.player-weapon-specs_'+k).append(armes[3].nom + '</br><span class="degat'+k+'">'+ armes[3].force +'</span> pts magie');
    }
    else if ($('.player-weapon-icon_'+k).hasClass(joueurs[k].nom)){
        $('.player-weapon-specs_'+k).removeClass(joueurs[k].nom);
      }
    }

    // Engagement du combat quand les conditions sont remplies

          for(p=0;p<2;p++){
                if (((joueurs[k].posx+1)===joueurs[p].posx)&&(joueurs[k].posy===joueurs[p].posy)){
                move=false;
                $("div").removeClass("zone");
                alert("Le combat à mort est engagé, utilisez les boutons (Attaquer) ou (Défendre) !!");
                fight();
                }
                else if (((joueurs[k].posx)===(joueurs[p].posx+1))&&(joueurs[k].posy===joueurs[p].posy)){
                move=false;
                $("div").removeClass("zone");
                alert("Le combat à mort est engagé, utilisez les boutons (Attaquer) ou (Défendre) !!");
                fight();
                }
                else if (((joueurs[k].posx)===(joueurs[p].posx))&&((joueurs[k].posy+1)===joueurs[p].posy)){
                move=false;
                $("div").removeClass("zone");
                alert("Le combat à mort est engagé, utilisez les boutons (Attaquer) ou (Défendre) !!");
                fight();
                }
                else if (((joueurs[k].posx)===(joueurs[p].posx))&&((joueurs[k].posy)===joueurs[p].posy+1)){
                move=false;
                $("div").removeClass("zone");
                alert("Le combat à mort est engagé, utilisez les boutons (Attaquer) ou (Défendre) !!");
                fight();
                } 
          }    
    
    //Gestion du tour par tour
    if (move===true){
    var l = 0;
    for(l=0;l<=1;l++){
        if(l!=k){
     joueurs[l].zoneJoueur(); 
        }
    } 
    k = k === 0 ? 1 : 0;
   }
     })

  }, false);








