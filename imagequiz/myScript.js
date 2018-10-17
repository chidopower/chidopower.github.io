var Q = [];
var X = [];
var Y = [];
var C = [];
var L = []
var NT;
var N;
var x = 0;
var y = 0;
var theImg;
var fails;
var myLocation = "";
var gameOver = "no";

//cursor: pointer;


function myMouseMove(e) {

	x = event.offsetX?(event.offsetX):event.pageX //-document.getElementById("pointer_div").offsetLeft;
	y = event.offsetY?(event.offsetY):event.pageY //-document.getElementById("pointer_div").offsetTop;	

	var xx;

	if(getLocation()===""){
		xx = document.getElementById("theImage");
		xx.style.cursor = "default";
	}else{
		xx = document.getElementById("theImage");
		xx.style.cursor = "pointer";
	}

	//console.log(x,y)
}



function myMouseClick(e) {

	x = event.offsetX?(event.offsetX):event.pageX //-document.getElementById("pointer_div").offsetLeft;
	y = event.offsetY?(event.offsetY):event.pageY //-document.getElementById("pointer_div").offsetTop;	

	if(gameOver==="yes"){
		document.getElementById("theQuestion").innerHTML = "Game Over!";
		document.getElementById("myLocation").innerHTML = "";
	}else{
		if( getLocation() === Q[N]){
			C[N]--;
			console.log(C);
			showQuest();
			document.getElementById("myLocation").innerHTML = ""
		}else{
			document.getElementById("myLocation").innerHTML = getLocation();
			if(getLocation()===""){
			}else{
				fails++;
				if(C[N]<3)
					C[N]++;
				console.log(C);
				document.getElementById("myFails").innerHTML = "Fails: " + fails;
			}
		}
	}
}

// function clearCoord() {
// 	document.getElementById("xy").innerHTML = "";
// }


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function theButton(){

	x = 0;
	y = 0;

	Q = [];
	X = [];
	Y = [];
	C = [];
	NT = 0;
	N = 0;
	fails = 0;
	gameOver = "no";

	document.getElementById("myLocation").innerHTML = ""
	document.getElementById("myFails").innerHTML = ""

	theImg = document.getElementById("selectImage").value;

	loadQuest();
	showQuest();
	showImg();

	var xx;

	if(theImg==="america_centro"){
		xx = document.getElementById("myLocation");
		xx.style.top = "78%";
		xx = document.getElementById("myLocation");
		xx.style.left = "30%";
		xx = document.getElementById("myFails");
		xx.style.top = "86%";
		xx = document.getElementById("myFails");
		xx.style.left = "30%";
	}

	if(theImg==="america_sur"){
		xx = document.getElementById("myLocation");
		xx.style.top = "78%";
		xx = document.getElementById("myLocation");
		xx.style.left = "70%";
		xx = document.getElementById("myFails");
		xx.style.top = "86%";
		xx = document.getElementById("myFails");
		xx.style.left = "70%";
	}

}

function showImg(){

	var xx;

	if(theImg == "america_centro"){

		xx = document.getElementById("america_centro");
		xx.style.display = "block";

		xx = document.getElementById("america_sur");
		xx.style.display = "none";

	}

	if(theImg == "america_sur"){

		xx = document.getElementById("america_centro");
		xx.style.display = "none";

		xx = document.getElementById("america_sur");
		xx.style.display = "block";

	}

}


function showQuest(){

	var k=0

	while(1){

		N = aleatorio(0,NT-1);

		if(C[N]>0){
			document.getElementById("theQuestion").innerHTML = "¿" + Q[N] + "?";
			gameOver = "no";
			break;
		}else{
			k++;
			if(k>=10*NT){
				gameOver = "yes";
				break;
			}
		}
	}

	console.log(C);
}


function getLocation(){

	var L = "";

	if(theImg === "america_centro"){
		if(x>114&&x<131&&y>212&&y<229){L="Guatemala";}
		if(x>179&&x<196&&y>143&&y<160){L="Belice";}
		if(x>255&&x<272&&y>259&&y<276){L="Honduras";}
		if(x>170&&x<187&&y>300&&y<317){L="El Salvador";}
		if(x>338&&x<355&&y>350&&y<367){L="Nicaragua";}
		if(x>392&&x<409&&y>474&&y<491){L="Costa Rica";}
		if(x>535&&x<552&&y>544&&y<561){L="Panamá";}
	}

	if(theImg === "america_sur"){
		if(x>271&&x<288&&y>55&&y<72){L="Venezuela";}
		if(x>346&&x<363&&y>95&&y<112){L="Guyana";}
		if(x>374&&x<391&&y>85&&y<102){L="Surinam";}
		if(x>407&&x<424&&y>89&&y<106){L="Guyana Francesa";}
		if(x>187&&x<204&&y>85&&y<102){L="Colombia";}
		if(x>122&&x<139&&y>147&&y<164){L="Ecuador";}
		if(x>162&&x<179&&y>232&&y<249){L="Perú";}
		if(x>387&&x<404&&y>217&&y<234){L="Brasil";}
		if(x>279&&x<296&&y>305&&y<322){L="Bolivia";}
		if(x>233&&x<250&&y>371&&y<388){L="Chile";}
		if(x>340&&x<357&&y>371&&y<388){L="Paraguay";}
		if(x>358&&x<375&&y>471&&y<488){L="Uruguay";}
		if(x>283&&x<300&&y>464&&y<481){L="Argentina";}
	}

	return L;

}

function loadQuest(){

	if(theImg == "america_centro"){

		Q.push("Guatemala");
		Q.push("Belice"); 
		Q.push("El Salvador");
		Q.push("Honduras");
		Q.push("Nicaragua");
		Q.push("Costa Rica");
		Q.push("Panamá");
	}

	if(theImg == "america_sur"){

		Q.push("Venezuela");
		Q.push("Colombia");
		Q.push("Ecuador");
		Q.push("Perú"); 
		Q.push("Bolivia"); 
		Q.push("Brasil"); 
		Q.push("Argentina"); 
		Q.push("Uruguay"); 
		Q.push("Paraguay");
		Q.push("Guyana"); 
		Q.push("Surinam"); 
		Q.push("Guyana Francesa");
		Q.push("Chile");

	}


	//------------
	NT=Q.length;
	C = [];
	for(var j=0;j<NT;j++)
		C[j]=2;

}

