var i = 1;

function div(){

var x = event.target.id;
var y = $(event.target).attr('class');

	if((i==1)&&(x!="jeu")&&(y!='player1')&&(y!='player2')){
		$("#"+ x).addClass("player1");
		i = i === 1 ? 2 : 1;
	}
	else if ((i==2)&&(x!="jeu")&&(y!='player1')&&(y!='player2')){
		$("#"+ x).addClass("player2");
		i = i === 1 ? 2 : 1;
	}
	else if (x == "jeu"){
		alert("Vous n'avez pas cliqué sur la grille");
	}

	for(j=1;j<3;j++){
		if(($("#x1y1").hasClass('player'+j))&&($("#x1y2").hasClass('player'+j))&&($("#x1y3").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x2y1").hasClass('player'+j))&&($("#x2y2").hasClass('player'+j))&&($("#x2y3").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x3y1").hasClass('player'+j))&&($("#x3y2").hasClass('player'+j))&&($("#x3y3").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x1y1").hasClass('player'+j))&&($("#x2y1").hasClass('player'+j))&&($("#x3y1").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x1y2").hasClass('player'+j))&&($("#x2y2").hasClass('player'+j))&&($("#x3y2").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x1y3").hasClass('player'+j))&&($("#x2y3").hasClass('player'+j))&&($("#x3y3").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x1y1").hasClass('player'+j))&&($("#x2y2").hasClass('player'+j))&&($("#x3y3").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
		else if (($("#x1y3").hasClass('player'+j))&&($("#x2y2").hasClass('player'+j))&&($("#x3y1").hasClass('player'+j))){
			alert('Le joueur ' + j + " a gagné !");
			window.location.reload()
		}
	}


}