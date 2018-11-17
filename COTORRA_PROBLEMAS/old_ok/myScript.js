
var DEBUG = "YES";
var theCardShow = "PREGUNTA";

var selMainOptions = [];
var iSelMainOptions = 0;
var maxSelMainOptions = 0;
var mainOption = "TODO";

var selSubOptions = [];
var iSelSubOptions = 0;
var maxSelSubOptions = 0;
var subOption = "TODO";

var QUESTION;
var ANSWER;


var fails = 0;
var wins = 0;


//------------------------------------------------------------------------------
function buttonStart(){

	play();

	document.getElementById("start").innerHTML = "NEXT";
}

//------------------------------------------------------------------------------
function play(){

	if(DEBUG==="YES") console.log("play()");

	theCardShow = "PREGUNTA";
	removeFlashCard();

	if(mainOption === "TODO" && subOption === "TODO") play_TODO();

	if(mainOption === "SERIES" && subOption === "TODO")      play_SERIES_TODO();
	if(mainOption === "SERIES" && subOption === "NATURALES") play_SERIES_NATURALES();
	if(mainOption === "SERIES" && subOption === "PARES")     play_SERIES_PARES();
	if(mainOption === "SERIES" && subOption === "IMPARES")   play_SERIES_IMPARES();
	if(mainOption === "SERIES" && subOption === "CUANTOS")   play_SERIES_CUANTOS();
	if(mainOption === "SERIES" && subOption === "ULTIMO")    play_SERIES_ULTIMO();
	if(mainOption === "SERIES" && subOption === "ARITMETICA (EASY)")   play_SERIES_ARITMETICA_EASY();
	if(mainOption === "SERIES" && subOption === "ARITMETICA (HARD)")   play_SERIES_ARITMETICA_HARD();

	if(mainOption === "GEOMETRIA" && subOption === "TODO")         play_GEOM_TODO();
	if(mainOption === "GEOMETRIA" && subOption === "CUADRADOS")    play_GEOM_CUADRADOS();
	if(mainOption === "GEOMETRIA" && subOption === "RECTANGULOS")  play_GEOM_RECTANGULOS();
	if(mainOption === "GEOMETRIA" && subOption === "TRIANGULOS")   play_GEOM_TRIANGULOS();

	showFlashCard();
}



//------------------------------------------------------------------------------
function showFlashCard(){

	if(DEBUG==="YES") console.log("showFlashCard()");

	document.getElementById("flashCard").style.display = "block";
	document.getElementById("flashCardQuestion").style.display = "block";
	document.getElementById("flashCardQuestion").innerHTML = QUESTION;
	document.getElementById("flashCardAnswer").innerHTML = ANSWER;

}

//------------------------------------------------------------------------------
function removeFlashCard(){

	if(DEBUG==="YES") console.log("showFlashCard()");

	document.getElementById("flashCard").style.display = "none";
	document.getElementById("flashCardQuestion").style.display = "none";
	document.getElementById("flashCardAnswer").style.display = "none";

}

//------------------------------------------------------------------------------
function play_TODO(){

	var rnd = intRand(1,2);

	if(rnd === 1) play_SERIES_TODO();
	if(rnd === 2) play_GEOM_TODO();

}

//------------------------------------------------------------------------------
function play_GEOM_TODO(){

	if(DEBUG==="YES") console.log("play_SERIES_TODO");

	var rnd = intRand(1,3);

	if(rnd === 1) play_GEOM_CUADRADOS();
	if(rnd === 2) play_GEOM_RECTANGULOS();
	if(rnd === 3) play_GEOM_TRIANGULOS();

}

//------------------------------------------------------------------------------
function play_GEOM_CUADRADOS(){

	if(DEBUG==="YES") console.log("play_GEOM_CUADRADOS()");

	var L = intRand(1,20);
	var A = L*L;
	var P = 4*L;
	var d = Math.sqrt(L*L + L*L);

	var rnd = intRand(1,3);

	if(rnd === 1){

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área de un<br>";
		QUESTION += "Cuadrado que tiene un <br>";
		QUESTION += "Perímetro igual a " + P + ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += A;
	}

	if(rnd === 2){

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Perímetro de un<br>";
		QUESTION += "Cuadrado que tiene un <br>";
		QUESTION += "área igual a " + A + ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += P;
	}

	if(rnd === 3){

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular la Diagonal de un<br>";
		QUESTION += "Cuadrado que tiene un <br>";
		QUESTION += "área igual a " + A + ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += myRound(d);
	}

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_GEOM_RECTANGULOS(){

	if(DEBUG==="YES") console.log("play_GEOM_RECTANGULOS()");

	var Lmenor = intRand(1,10);
	var Lmayor = Lmenor + intRand(1,10);
	var A = Lmenor * Lmayor;
	var P = 2*Lmenor + 2*Lmayor;
	var d = Math.sqrt(Lmenor*Lmenor + Lmayor*Lmayor);

	var rnd = intRand(1,3);

	if(rnd === 1){

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Perímetro, el Área,<br>";
		QUESTION += "y la Diagonal del siguiente Rectángulo:<br>";
		QUESTION += "<br>";
		QUESTION += "Lado mayor: " + Lmayor + "<br>";
		QUESTION += "Lado menor: " + Lmenor + "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "P = " + P + "<br>";
		ANSWER += "A = " + A + "<br>";
		ANSWER += "D = " + myRound(d);
	}

	if(rnd === 2){

		var i,j,p,a;

		Lmenor = intRand(1,12);
		Lmayor = Lmenor + intRand(1,12);
		P = 2*Lmenor + 2*Lmayor;

		if(DEBUG==="YES") console.log(Lmenor, Lmayor);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Encuentra todos los Rectángulos<br>";
		QUESTION += "que tienen un Perímetro igual a " + P + ".<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuál tiene el Área mayor?.<br>";
		QUESTION += "¿Cuál tiene el Área menor?.<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";

		for(i=1; i<100; i++){
			for(j=1; j<100; j++){
				if(i !==j && i > j){
					p = 2*i + 2*j;
					a = i*j;
					if(p === P){
						ANSWER += "P = " + p + "; A = " + i + " &times; " + j + " = " + a + "<br>";
					}
				}
			}
		}
	}


	if(rnd === 3){

		var i,j,p,a;

		Lmenor = intRand(1,12);
		Lmayor = Lmenor + intRand(1,12);
		A = Lmenor*Lmayor;
		P = 2*Lmenor + 2*Lmayor;

		if(DEBUG==="YES") console.log(Lmenor, Lmayor);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Encuentra todos los Rectángulos<br>";
		QUESTION += "que tienen un Área igual a " + A + ".<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuál tiene el Perímetro más grande?.<br>";
		QUESTION += "¿Cuál tiene el Perímetro más pequeño?.<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";

		for(i=1; i<100; i++){
			for(j=1; j<100; j++){
				if(i !==j && i > j){
					p = 2*i + 2*j;
					a = i*j;
					if(a === A){
						ANSWER += "P = " + p + "; A = " + i + " &times; " + j + " = " + a + "<br>";
					}
				}
			}
		}
	}


	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}


//------------------------------------------------------------------------------
function play_GEOM_TRIANGULOS(){

	if(DEBUG==="YES") console.log("play_GEOM_TRIANGULOS()");

	var b;  // base
	var a;  // altura
	var A;  // area
	var L1; // lado 1
	var L2; // lado 2
	var L3; // lado 3
	var P;  // perimetro
	var h;  // hipotenusa

	var rnd = intRand(1,4);

	if(rnd === 1){

		b = intRand(1,20); // base
		a = intRand(1,20); // altura
		A = b*a/2.0;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área de un Triángulo:<br>";
		QUESTION += "<br>";
		QUESTION += "Base igual a " + b + ".<br>";
		QUESTION += "Altura igual a " + a + ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += A;
	}

	if(rnd === 2){

		L1 = intRand(2,20); //base
		L2 = intRand(2,20); //lado
		L3 = intRand(2,20); //lado

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿Existe el siguiente Triángulo?<br>";
		QUESTION += "<br>";
		QUESTION += "Lado 1 = " + L1 + "<br>";
		QUESTION += "Lado 2 = " + L2 + "<br>";
		QUESTION += "Lado 3 = " + L3 + "<br>";

		var myAns = esteTrianguloExiste(L1, L2, L3);

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += myAns;
	}

	if(rnd === 3){

		while(1){

			L1 = intRand(1,12); //base
			L2 = intRand(1,12); //lado
			L3 = L2;

			var existe = esteTrianguloExiste(L1, L2, L3);
			if(DEBUG === "YES") console.log("existe ", L1,L2,L3, existe);
			if( existe === "SI" && L1 !== L2) break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área, la Altura y el Perímetro:<br>";
		QUESTION += "del siguiente Triángulo Isóceles<br>";
		QUESTION += "<br>";
		QUESTION += "Base igual a " + L1 + ".<br>";
		QUESTION += "Lado igual a " + L2 + ".<br>";

		L1 = L1/1.0;
		L2 = L2/1.0;

		a = Math.sqrt( L2*L2 - (L1/2.0)*(L1/2.0) ); //altura
		A = L1*a/2.0; //area
		P = L1 + 2*L2;

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "a = " + myRound(a) + "<br>";
		ANSWER += "P = " + myRound(P) + "<br>";
		ANSWER += "A = " + myRound(A);
	}

	if(rnd === 4){

		b = intRand(1,12); // base
		a = intRand(1,12); // altura
		h = Math.sqrt( a*a + b*b );

		A = b*a/2.0
		P = a + b + h;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área y el Perímetro:<br>";
		QUESTION += "del siguiente Triángulo Rectángulo<br>";
		QUESTION += "<br>";
		QUESTION += "Base igual a " + b + ".<br>";
		QUESTION += "Altura igual a " + a + ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "hyp = " + myRound(h) + "<br>";
		ANSWER += "P = " + myRound(P) + "<br>";
		ANSWER += "A = " + myRound(A);
	}


	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}


//------------------------------------------------------------------------------
function play_SERIES_TODO(){

	if(DEBUG==="YES") console.log("play_SERIES_TODO");

	var rnd = intRand(1,7);

	if(rnd === 1) play_SERIES_NATURALES();
	if(rnd === 2) play_SERIES_PARES();
	if(rnd === 3) play_SERIES_IMPARES();
	if(rnd === 4) play_SERIES_CUANTOS();
	if(rnd === 5) play_SERIES_ULTIMO();
	if(rnd === 6) play_SERIES_ARITMETICA_EASY();
	if(rnd === 7) play_SERIES_ARITMETICA_HARD();

}

//------------------------------------------------------------------------------
function play_SERIES_NATURALES(){

	if(DEBUG==="YES") console.log("play_SERIES_NATURALES()");

	var n = intRand(10,100);
	var a = [];
	var suma;

	a[1] = 1;
	a[2] = 2;
	a[3] = 3;
	a[n] = n;

	suma = n*(n + 1)/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += suma;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}


//------------------------------------------------------------------------------
function play_SERIES_PARES(){

	if(DEBUG==="YES") console.log("play_SERIES_PARES()");

	var n = intRand(10,100);
	var a = [];
	var suma;

	a[1] = 2;
	a[2] = 4;
	a[3] = 6;
	a[n] = 2*n;

	suma = n*(n + 1);

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += suma;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_SERIES_IMPARES(){

	if(DEBUG==="YES") console.log("play_SERIES_IMPARES()");

	var n = intRand(10,100);
	var a = [];
	var suma;

	a[1] = 1;
	a[2] = 3;
	a[3] = 5;
	a[n] = 2*n - 1;

	suma = n*n;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += suma;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_SERIES_ULTIMO(){

	if(DEBUG==="YES") console.log("play_SERIES_ULTIMO()");

	var n = intRand(10,50);
	var d = intRand(1,8);
	var a = [];
	var suma;

	a[1] = intRand(1,10);
	a[2] = a[1] + d;
	a[3] = a[2] + d;
	a[n] = a[1] + (n - 1)*d;

	suma = n*(a[1] + a[n])/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Hay " + n + " números.<br>";
	QUESTION += "Encuentra el último. <br><br>";
	QUESTION += a[1] + ", " + a[2] + ", " + a[3] + ", ... , <red>?</red>";

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br><br>";
	ANSWER += a[n];

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_SERIES_CUANTOS(){

	if(DEBUG==="YES") console.log("play_SERIES_CUANTOS()");

	var n = intRand(10,50);
	var d = intRand(1,8);
	var a = [];
	var suma;

	a[1] = intRand(1,10);
	a[2] = a[1] + d;
	a[3] = a[2] + d;
	a[n] = a[1] + (n - 1)*d;

	suma = n*(a[1] + a[n])/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "¿Cuántos números hay? <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += n;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_SERIES_ARITMETICA_EASY(){

	if(DEBUG==="YES") console.log("play_SERIES_ARITMETICA_EASY()");

	var n = intRand(10,50);
	var d = intRand(1,8);
	var a = [];
	var suma;

	a[1] = intRand(1,10);
	a[2] = a[1] + d;
	a[3] = a[2] + d;
	a[n] = a[1] + (n - 1)*d;

	suma = n*(a[1] + a[n])/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += suma;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function play_SERIES_ARITMETICA_HARD(){

	if(DEBUG==="YES") console.log("play_SERIES_ARITMETICA_HARD()");

	var n = intRand(10,50);
	var d = intRand(1,8);
	var a = [];
	var suma;

	a[1] = intRand(1,10);
	a[2] = a[1] + d;
	a[3] = a[2] + d;
	a[n] = a[1] + (n - 1)*d;

	suma = n*(a[1] + a[n])/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: </gray><br><br>";
	QUESTION += "Hay " + n + " números.<br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + <red>?</red>";

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br><br>";
	ANSWER += suma;

	if(DEBUG==="YES") console.log("QUESTION", QUESTION);
	if(DEBUG==="YES") console.log("ANSWER", ANSWER);

}

//------------------------------------------------------------------------------
function buttonSubOption(){

	if(DEBUG==="YES")console.log("buttonSubOption()", mainOption);

	document.getElementById("start").innerHTML = "START";

	subOptions = [];

	if(mainOption === "TODO"){
		subOptions[0] = "TODO";
		subOptions[1] = "TODO";
	}

	if(mainOption === "SERIES"){
		subOptions[0] = "TODO";
		subOptions[1] = "NATURALES";
		subOptions[2] = "PARES";
		subOptions[3] = "IMPARES";
		subOptions[4] = "CUANTOS";
		subOptions[5] = "ARITMETICA (EASY)";
		subOptions[6] = "ULTIMO";
		subOptions[7] = "ARITMETICA (HARD)";
	}

	if(mainOption === "GEOMETRIA"){
		subOptions[0] = "TODO";
		subOptions[1] = "CUADRADOS";
		subOptions[2] = "RECTANGULOS";
		subOptions[3] = "TRIANGULOS";
	}

	maxSelSubOptions = subOptions.length - 1;

	if(iSelSubOptions === maxSelSubOptions)
		iSelSubOptions = 0;
	else
		iSelSubOptions +=1;

	subOption = subOptions[iSelSubOptions];

	document.getElementById("subOption").innerHTML = subOption;
}

//------------------------------------------------------------------------------
function buttonMainOption(){

	if(DEBUG==="YES")console.log("buttonMainOption()");

	document.getElementById("start").innerHTML = "START";

	mainOptions = [];

	mainOptions[0] = "TODO";
	mainOptions[1] = "SERIES";
	mainOptions[2] = "GEOMETRIA";

	maxSelMainOptions = mainOptions.length - 1;

	if(iSelMainOptions === maxSelMainOptions)
		iSelMainOptions = 0;
	else
		iSelMainOptions +=1;

	mainOption = mainOptions[iSelMainOptions];

	document.getElementById("mainOption").innerHTML = mainOption;
}

//------------------------------------------------------------------------------
function flipFlashCard(){

	if(DEBUG==="YES") console.log("flipFlashCard");

	if(theCardShow === "PREGUNTA" ){
		theCardShow = "RESPUESTA";
		document.getElementById("flashCardQuestion").style.display = "none";
		document.getElementById("flashCardAnswer").style.display = "block";
	}else{
		theCardShow = "PREGUNTA";
		document.getElementById("flashCardQuestion").style.display = "block";
		document.getElementById("flashCardAnswer").style.display = "none";
	}
}

//------------------------------------------------------------------------------
function intRand0(min, max) {
	var R = Math.floor(Math.random() * (max - min + 1) ) + min;
    return R;
}

//------------------------------------------------------------------------------
function intRand(min, max) {

	var R;

	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R !== 0)
			break;
	}

    return R;
}

//------------------------------------------------------------------------------
function esteTrianguloExiste(a,b,c){

	//Teorema de la Existencia del Triángulo:
			//Un lado de un triángulo siempre debe ser menor
			//que la suma de los otros dos lados


	var ans = "SI";

	if( a > (b+c) ) ans = "NO";
	if( b > (a+c) ) ans = "NO";
	if( c > (a+b) ) ans = "NO";

	return ans;

}

//------------------------------------------------------------------------------
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

function myRound(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}


