
var tema = "TODO";
var problema = "TODO";

var laFlashCardMuestraLa = "PREGUNTA";

var QUESTION;
var ANSWER;

var DEBUG;





//------------------------------------------------------------------------------
function start(){

	tema = document.getElementById("tema").value;
	problema = document.getElementById("problema").value;
	laFlashCardMuestraLa = "PREGUNTA";
	QUESTION = "";
	ANSWER = "";

	flash_card_remove();

	if(tema === "TODO")      problemas_todos();
	if(tema === "series")    problemas_series();
	if(tema === "geometria") problemas_geometria();


	flash_card_show();

}




//------------------------------------------------------------------------------
function problemas_cargar(){

	var miProblema = [];

	tema = document.getElementById("tema").value;

	if(tema==="TODO"){
		miProblema[0] = "";
		miProblema[1] = "";
		miProblema[2] = "";
		miProblema[3] = "";
		miProblema[4] = "";
		miProblema[5] = "";
		miProblema[6] = "";
	}

	if(tema==="series"){
		miProblema[0] = "TODO";
		miProblema[1] = "Números Naturales";
		miProblema[2] = "Números Pares e Impares";
		miProblema[3] = "Serie Aritmética (fácil)";
		miProblema[4] = "Último Número"
		miProblema[5] = "Contar Números";
		miProblema[6] = "Serie Aritmética (dificil)";
	}

	if(tema==="geometria"){
		miProblema[0] = "TODO";
		miProblema[1] = "Cuadrados";
		miProblema[2] = "Rectángulos";
		miProblema[3] = "Triángulos (fácil)";
		miProblema[4] = "Triángulos (dificil)";
		miProblema[5] = "";
		miProblema[6] = "";

	}

	document.getElementById("problema_0").innerHTML = miProblema[0];
	document.getElementById("problema_1").innerHTML = miProblema[1];
	document.getElementById("problema_2").innerHTML = miProblema[2];
	document.getElementById("problema_3").innerHTML = miProblema[3];
	document.getElementById("problema_4").innerHTML = miProblema[4];
	document.getElementById("problema_5").innerHTML = miProblema[5];
	document.getElementById("problema_6").innerHTML = miProblema[6];


}

//------------------------------------------------------------------------------
function problemas_todos(){

	var rnd = randi(1,2);

	problema = "problema_0";

	if(rnd === 1) problemas_series();
	if(rnd === 2) problemas_geometria();

}

//------------------------------------------------------------------------------
function problemas_geometria(){

	var miProblema;

	if(problema === "problema_0"){
		var rnd = randi(1,6);
		if(rnd===1) miProblema = "problema_1";
		if(rnd===2) miProblema = "problema_2";
		if(rnd===3) miProblema = "problema_3";
		if(rnd===4) miProblema = "problema_4";
		if(rnd===5) miProblema = "problema_5";
		if(rnd===6) miProblema = "problema_6";
	}else{
		miProblema = problema;
	}

	if(miProblema === "problema_1"){

		var L = randi(1,20);
		var A = L*L;
		var P = 4*L;
		var d = Math.sqrt(L*L + L*L);

		var rnd = randi(1,3);

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
			ANSWER += round4(d);
		}


	}//problema_1

	if(miProblema === "problema_2"){

		var Lmenor = randi(1,10);
		var Lmayor = Lmenor + randi(1,10);
		var A = Lmenor * Lmayor;
		var P = 2*Lmenor + 2*Lmayor;
		var d = Math.sqrt(Lmenor*Lmenor + Lmayor*Lmayor);

		var rnd = randi(1,3);

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
			ANSWER += "D = " + round4(d);
		}

		if(rnd === 2){

			var i,j,p,a;

			Lmenor = randi(1,12);
			Lmayor = Lmenor + randi(1,12);
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

			Lmenor = randi(1,12);
			Lmayor = Lmenor + randi(1,12);
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

	}//problema_2


	if(miProblema === "problema_3"){

		var b;  // base
		var a;  // altura
		var A;  // area
		var L1; // lado 1
		var L2; // lado 2
		var L3; // lado 3
		var P;  // perimetro
		var h;  // hipotenusa

		var rnd = randi(1,4);

		if(rnd === 1){

			b = randi(1,20); // base
			a = randi(1,20); // altura
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

			L1 = randi(2,20); //base
			L2 = randi(2,20); //lado
			L3 = randi(2,20); //lado

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "¿Existe el siguiente Triángulo?<br>";
			QUESTION += "<br>";
			QUESTION += "Lado 1 = " + L1 + "<br>";
			QUESTION += "Lado 2 = " + L2 + "<br>";
			QUESTION += "Lado 3 = " + L3 + "<br>";

			var myAns = triang(L1, L2, L3);

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

				L1 = randi(1,12); //base
				L2 = randi(1,12); //lado
				L3 = L2;

				var existe = triang(L1, L2, L3);
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
			ANSWER += "a = " + round4(a) + "<br>";
			ANSWER += "P = " + round4(P) + "<br>";
			ANSWER += "A = " + round4(A);
		}

		if(rnd === 4){

			b = randi(1,12); // base
			a = randi(1,12); // altura
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
			ANSWER += "hyp = " + round4(h) + "<br>";
			ANSWER += "P = " + round4(P) + "<br>";
			ANSWER += "A = " + round4(A);
		}

	}

}

//------------------------------------------------------------------------------
function problemas_series(){

	var miProblema;

	if(problema === "problema_0"){
		var rnd = randi(1,6);
		if(rnd===1) miProblema = "problema_1";
		if(rnd===2) miProblema = "problema_2";
		if(rnd===3) miProblema = "problema_3";
		if(rnd===4) miProblema = "problema_4";
		if(rnd===5) miProblema = "problema_5";
		if(rnd===6) miProblema = "problema_6";
	}else{
		miProblema = problema;
	}

	if(miProblema === "problema_1"){

		var n = randi(10,100);
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

	}

	if(miProblema === "problema_2"){

		var rnd = randi(1,2);
		var n = randi(10,100);
		var a = [];
		var suma;

		if(rnd === 1){

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

		}else{

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

		}
	}

	if(miProblema === "problema_3"){

		var n = randi(10,50);
		var d = randi(1,8);
		var a = [];
		var suma;

		a[1] = randi(1,10);
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

	}

	if(miProblema === "problema_4"){

		var n = randi(10,50);
		var d = randi(1,8);
		var a = [];
		var suma;

		a[1] = randi(1,10);
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

	}

	if(miProblema === "problema_5"){

		var n = randi(10,50);
		var d = randi(1,8);
		var a = [];
		var suma;

		a[1] = randi(1,10);
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

	}

	if(miProblema === "problema_6"){

		var n = randi(10,50);
		var d = randi(1,8);
		var a = [];
		var suma;

		a[1] = randi(1,10);
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

	}


}







//------------------------------------------------------------------------------
function flash_card_remove(){

	if(DEBUG==="YES") console.log("flash_card_show()");

	document.getElementById("flashCard").style.display = "none";
	document.getElementById("flashCardQuestion").style.display = "none";
	document.getElementById("flashCardAnswer").style.display = "none";

}

//------------------------------------------------------------------------------
function flash_card_flip(){

	if(laFlashCardMuestraLa === "PREGUNTA" ){
		laFlashCardMuestraLa = "RESPUESTA";
		document.getElementById("flashCardQuestion").style.display = "none";
		document.getElementById("flashCardAnswer").style.display = "block";
	}else{
		laFlashCardMuestraLa = "PREGUNTA";
		document.getElementById("flashCardQuestion").style.display = "block";
		document.getElementById("flashCardAnswer").style.display = "none";
	}
}

//------------------------------------------------------------------------------
function flash_card_show(){

	if(DEBUG==="YES") console.log("flash_card_show()");

	document.getElementById("flashCard").style.display = "block";
	document.getElementById("flashCardQuestion").style.display = "block";
	document.getElementById("flashCardQuestion").innerHTML = QUESTION;
	document.getElementById("flashCardAnswer").innerHTML = ANSWER;

}

//------------------------------------------------------------------------------
function triang(a,b,c){

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
function randi0(min, max) {
	var R = Math.floor(Math.random() * (max - min + 1) ) + min;
    return R;
}

//------------------------------------------------------------------------------
function randi(min, max) {

	var R;

	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R !== 0)
			break;
	}

    return R;
}

//------------------------------------------------------------------------------
function round(num, scale) {
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

function round4(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}


