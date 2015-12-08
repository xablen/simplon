//Initialisation du combat
var q = 0;

function fight() {

    $(".btnattack").click(function(){

    var titulaire0 =  parseInt($('.titulaire0').text());
    var titulaire1 =  parseInt($('.titulaire1').text());

    var degat0 = parseInt($('.degat0').text());
    var degat1 = parseInt($('.degat1').text());


    if (q===0){
     titulaire1-= degat0;
     $(".titulaire1").text(titulaire1);
     if(titulaire1<=0){
     $(".titulaire1").text("0");
     alert('Le Joueur 1 a gagné !!');
     window.location.reload();
     }
    }
    else if (q===1){
    titulaire0-= degat1;
     $(".titulaire0").text(titulaire0);
     if(titulaire0<=0){
     $(".titulaire0").text("0");
     alert('Le Joueur 2 a gagné !!');
     window.location.reload();
     }
    }
    q = q === 0 ? 1 : 0;
    });

    $(".btnattdef").click(function(){

    var titulaire0 =  parseInt($('.titulaire0').text());
    var titulaire1 =  parseInt($('.titulaire1').text());

    var degat0 = parseInt($('.degat0').text());
    var degat1 = parseInt($('.degat1').text());

    if (q===0){
    titulaire1-= (degat0/2);
     $(".titulaire1").text(titulaire1);
     if(titulaire1<=0){
     $(".titulaire1").text("0");
     alert('Le Joueur 1 a gagné !!');
     window.location.reload();
     }
    }
    else if (q===1){
    titulaire0-= (degat1/2);
    $(".titulaire0").text(titulaire0);
    if(titulaire0<=0){
     $(".titulaire0").text("0");
     alert('Le Joueur 2 a gagné !!');
     window.location.reload();
     }
    } 
    q = q === 0 ? 1 : 0;
    });
}
