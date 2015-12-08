//Initialisation de la grille//
function map() {
var x=9;
var y=9;
var map = document.getElementById('map');
for (i=0; i<=y; i++){
    var newLigne = map.appendChild(document.createElement("p"));
    for (j=0; j<=x; j++){
    var newCase = newLigne.appendChild(document.createElement("div"));
        newCase.id = 'x'+ i + 'y' + j;
    }
  }  
}

//Initialisation des blocs//
function blocs() {
	for(i=0; i<=9;i++){
		var x = Math.floor(Math.random()*10);
        var y = Math.floor(Math.random()*10);
		$("#x"+ x + "y"+ y).addClass("blocs");
	}
}



