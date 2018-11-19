
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

	if(tema === "TODO")          problemas_todos();
	if(tema === "series")        problemas_series();
	if(tema === "geometria")     problemas_geometria();
	if(tema === "num_grandes")   problemas_num_grandes();
	if(tema === "regla_de_tres") problemas_regla_de_tres();


	flash_card_show();

}




//------------------------------------------------------------------------------
function problemas_cargar(){

	var miProblema = [];

	tema = document.getElementById("tema").value;

	if(tema === "TODO"){
		miProblema[0] = "";
		miProblema[1] = "";
		miProblema[2] = "";
		miProblema[3] = "";
		miProblema[4] = "";
		miProblema[5] = "";
		miProblema[6] = "";
	}

	if(tema === "series"){
		miProblema[0] = "TODO";
		miProblema[1] = "Números Naturales";
		miProblema[2] = "Números Pares e Impares";
		miProblema[3] = "Serie Aritmética (fácil)";
		miProblema[4] = "Último Número"
		miProblema[5] = "Contar Números";
		miProblema[6] = "Serie Aritmética (dificil)";
	}

	if(tema === "geometria"){
		miProblema[0] = "TODO";
		miProblema[1] = "Cuadrados";
		miProblema[2] = "Rectángulos";
		miProblema[3] = "Triángulos (fácil)";
		miProblema[4] = "Triángulos (dificil)";
		miProblema[5] = "";
		miProblema[6] = "";
	}
	
	if(tema === "1_incognita"){
		miProblema[0] = "TODO";
		miProblema[1] = "Sustituir valores";
		miProblema[2] = "Despejar x (fácil)";
		miProblema[3] = "Problemas (fácil)";
		miProblema[4] = "";
		miProblema[5] = "";
		miProblema[6] = "";
	}

	if(tema === "num_grandes"){
		miProblema[0] = "TODO";
		miProblema[1] = "Sumar";
		miProblema[2] = "Restar";
		miProblema[3] = "Multiplicar";
		miProblema[4] = "Dividir";
		miProblema[5] = "Problema";
		miProblema[6] = "Problema";
	}

	if(tema === "regla_de_tres"){
		miProblema[0] = "TODO";
		miProblema[1] = "La regla";
		miProblema[2] = "Porcentajes";
		miProblema[3] = "Conversión de Unidades";
		miProblema[4] = "Problemas, simples";
		miProblema[5] = "Problemas, compuestos";
		miProblema[6] = "Descuentos";
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

	var rnd = randi(1,4);

	problema = "problema_0";

	if(rnd === 1) problemas_series();
	if(rnd === 2) problemas_geometria();
	if(rnd === 3) problemas_num_grandes();
	if(rnd === 4) problemas_regla_de_tres();

	//	if(rnd === 3) problemas_1_incognita();


}


//------------------------------------------------------------------------------
function problemas_regla_de_tres(){

	var miProblema;

	if(problema === "problema_0"){
		var rnd = randi(1,6);
		if(rnd===1) miProblema = "problema_1"; //reglade tres
		if(rnd===2) miProblema = "problema_2"; //porcentajes
		if(rnd===3) miProblema = "problema_3";
		if(rnd===4) miProblema = "problema_4";
		if(rnd===5) miProblema = "problema_5";
		if(rnd===6) miProblema = "problema_6"; //descuentos
	}else{
		miProblema = problema;
	}

	if(miProblema === "problema_1"){ //regla de tres

		while(1){
			var a = randi(2,20);
			var b = randi(2,20);
			var c = randi(2,20);
			if( (c*b)%a ===0 && a!==c && a!==b )break;
		}
		var x = c*b/a;

		if(randi(1,2) === 1){
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Calcular el valor de x.<br>";
			QUESTION += "<br>";
			QUESTION += a+ " &rarr; " +b+ "<br>";
			QUESTION += c+ " &rarr;  x<br>";		
		}else{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Calcular el valor de x.<br>";
			QUESTION += "<br>";
			QUESTION += b+ " &rarr; " +a+ "<br>";
			QUESTION +=   "x &rarr; " +c+ "<br>";		
		}
		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "x = " +x+ "<br>";

		
	}//problema_1

	if(miProblema === "problema_2"){ //porcentajes

		if(randi(1,2)===1){

			while(1){
				var a = randi(50,400);
				var p = randi(5,95);
				if( (a*p)%100 ===0 && a!==100 )break;
			}

			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			
			if(randi(1,2) ===1){
				var x = a + a*p/100;
				QUESTION += a+ " &plus; " +p+ "<br>";
			}else{
				var x = a - a*p/100;
				QUESTION += a+ " &minus; " +p+ "<br>";
			}
			
			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x+ "<br>";
		
		}else{

			while(1){
				var a = randi(50,400);
				var p = randi(5,95);
				if( (a*p)%100 ===0 && a!==100 )break;
			}
			var x = a*p/100;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Calcular el " +p+ "% de " +a+ ".<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x+ "<br>";

		}
		
	}//problema_2

	if(miProblema === "problema_6"){ //descuentos
			
			var coca_pr = randi(10,20);
			var chetos_pr = randi(10,20);
			var oreos_pr = randi(10,20);
			
			var coca_dsc = randi(5,25);
			var chetos_dsc = randi(5,25);
			var oreos_dsc = randi(5,25);
			
			var cocas = randi(2,5);
			var chetos = randi(2,5);
			var oreos = randi(2,5);
			
			var total = 0.0;
			
			total += cocas *(coca_pr   - coca_pr  *coca_dsc/100.0);
			total += chetos*(chetos_pr - chetos_pr*chetos_dsc/100.0);
			total += oreos *(oreos_pr  - oreos_pr *oreos_dsc/100.0);
			
			var billete = 500.0;
			
			if( total <= 500.0 ) billete = 500.0;
			if( total <= 200.0 ) billete = 200.0;
			if( total <= 100.0 ) billete = 100.0;
			if( total <=  50.0 ) billete =  50.0;
			
			var feria = billete - total;

			QUESTION  = "";
			QUESTION += "<gray>PRECIOS & DESCUENTOS: </gray><br>";
			QUESTION += "soda &emsp; $" +coca_pr+ "&emsp;&emsp;" +coca_dsc+ "%<br>";
			QUESTION += "sabritas &emsp; $" +chetos_pr+ "&emsp;&emsp;" +chetos_dsc+ "%<br>";
			QUESTION += "galletas &emsp; $" +oreos_pr+ "&emsp;&emsp;" +oreos_dsc+ "%<br>";
			QUESTION += "<br>";
			QUESTION += "<gray>TU COMPRAS: </gray><br>";
			QUESTION += cocas+ " sodas<br>";
			QUESTION += chetos+ " sabritas<br>";
			QUESTION += oreos+ " galletas<br>";
			QUESTION += "<br>";
			QUESTION += "Tu pagas con un billete de $" +billete+ ".<br>";
			QUESTION += "¿Cuánto te sobra?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Pagas $" +round2(total)+ " en total.<br>";
			ANSWER += "Te sobra $" +round2(feria)+ ".<br>";
		
	}//problema_6


}

//------------------------------------------------------------------------------
function problemas_num_grandes(){

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
			
		var a = randi(10000,99999);
		var b = randi(1000 ,9999);
		var c = randi(100  ,999);
		var d = randi(10000,99999);
		
		var total = a + b + c + d;
		

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "En una canasta hay " + a + " manzanas.<br>";
		QUESTION += "En otra canasta hay " + b + " naranjas.<br>";
		QUESTION += "En otra canasta hay " + c + " peras.<br>";
		QUESTION += "En otra canasta hay " + d + " platanos.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas frutas hay en total?<br>";
		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += total + " frutas.<br>";

		
	}//problema_1

	if(miProblema === "problema_2"){
		
		while(1){
			var a = randi(10000 ,99999);
			var b = randi(10000 ,99999);		
			var resta = a - b;
			if(resta > 0)break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "En una caja hay " + a + " pelotas.<br>";
		QUESTION += "Si quitamos " + b + " pelotas.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas pelotas quedan?<br>";
		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += resta + " pelotas.<br>";

		
	}//problema_2

	if(miProblema === "problema_3"){
			
		var a = randi(100 , 999);
		var b = randi(1000, 9999);
		
		var A = b*a;
		
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un rectángulo tiene " + a + " metros de altura<br>";
		QUESTION += "y " + b + " metros de base.<br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el área del rectángulo.<br>";		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += A + " metros cuadrados.<br>";
		
	}//problema_3

	if(miProblema === "problema_4"){
			
		var p = randi(1000,9999);
		var n = randi(5,20);
		var q = Math.floor(p/n);
		var r = p%n;
		
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + p + " pelotas y " + n + " niños.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas pelotas le tocan a cada niño?<br>";
		QUESTION += "¿Cuántas pelotas sobran?<br>";
		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Le toca " + q + " pelotas a cada niño.<br>";
		ANSWER += "Sobran " + r + " pelotas.<br>";
		
	}//problema_4

	if(miProblema === "problema_5"){
			
		var paquetes_ch = randi(100,999);
		var paquetes_va = randi(100,999);
		var paquetes_fr = randi(100,999);
		var ch_en_paquete = randi(10,99);
		var va_en_paquete = randi(10,99);
		var fr_en_paquete = randi(10,99);
		
		var total_paquetes = paquetes_ch + paquetes_va + paquetes_fr;
		
		var total_dulces_ch = paquetes_ch * ch_en_paquete;
		var total_dulces_va = paquetes_va * va_en_paquete;
		var total_dulces_fr = paquetes_fr * fr_en_paquete;
		
		var total_dulces = total_dulces_ch + total_dulces_va + total_dulces_fr;
		
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un paquete de dulces de chocolate tiene " + ch_en_paquete + " dulces.<br>";
		QUESTION += "Un paquete de dulces de vainilla tiene " + va_en_paquete + " dulces.<br>";
		QUESTION += "Un paquete de dulces de fresa tiene " + fr_en_paquete + " dulces.<br>";
		QUESTION += "<br>";
		QUESTION += "Hay " +paquetes_ch+ " paquetes de dulces de chocolate.<br>";
		QUESTION += "Hay " +paquetes_va+ " paquetes de dulces de vainilla.<br>";
		QUESTION += "Hay " +paquetes_fr+ " paquetes de dulces de fresa.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántos paquetes hay en total?<br>";
		QUESTION += "¿Cuántos dulces hay en total?<br>";
		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Hay " + total_paquetes + " paquetes en total.<br>";
		ANSWER += "Hay " + total_dulces + " dulces en total.<br>";
		
	}//problema_5

	if(miProblema === "problema_6"){
			
		var cajas = randi(10,50);
		var cajitas = randi(10,50);
 		var bolsas = randi(10,20);
		var canicas = randi(10,20);
		
		var canicas_total = cajas * cajitas * bolsas * canicas;
				
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + cajas + " cajas grandes.<br>";
		QUESTION += "En cada caja grande hay " + cajitas + " cajas pequeñas.<br>";
		QUESTION += "En cada caja pequeña hay " + bolsas + " bolsas.<br>";
		QUESTION += "En cada bolsa hay " + canicas + " canicas.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas canicas hay en total?<br>";
		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Hay " + canicas_total + " canicas en total.<br>";
		
	}//problema_6


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
function problemas_1_incognita(){

	var miProblema;

	if(problema === "problema_0"){
		var rnd = randi(1,6);
		if(rnd===1) miProblema = "problema_1"; //sustituir valores
		if(rnd===2) miProblema = "problema_2"; //despejar x, fácil
		if(rnd===3) miProblema = "problema_3"; //problemas, fácil
		if(rnd===4) miProblema = "problema_4";
		if(rnd===5) miProblema = "problema_5";
		if(rnd===6) miProblema = "problema_6";
	}else{
		miProblema = problema;
	}

	if(miProblema === "problema_1"){ //sustituir valores
		
		var rnd = randi(1,13);
		var x,a,b,c,d,e,f,g,h,ans;
		
		//rnd = 6;
		
		if(rnd === 1){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);
			
			ans = x + a;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "x + a = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 2){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);
			
			ans = x * a;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "ax = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 3){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a*x + b;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "ax + b = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 4){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a + b) * x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "(a + b)x = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 5){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a*x + b)*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "(ax + b)c = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 6){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a*x - b)*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "(ax - b)c = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 7){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = ( b - a*x )*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "(b - ax)c = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 8){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = b - a*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "b - ax = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 9){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a - b)*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "(a - b)x = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 10){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a*x - b;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "ax - b = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 11){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = -a*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "-ax = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 12){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a - x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "a - x = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		if(rnd === 13){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = -(a - x);

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = " + x + "<br>";
			QUESTION += "<br>";
			QUESTION += "-(a - x) = ?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += ans;
		}

		
	} //problema_1

	if(miProblema === "problema_2"){ //despejar x (fácil)
		
		var rnd = randi(1,13);
		var x,a,b,c,d,e,f,g,h,ans;
		
		if(rnd === 1){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);
			
			ans = x + a;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "x + a = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
				
		}

		if(rnd === 2){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);
			
			ans = x * a;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "ax = " + ans + "<br>";;

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 3){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a*x + b;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "ax + b = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 4){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a + b) * x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "(a + b)x = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 5){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a*x + b)*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "(ax + b)c = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 6){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a*x - b)*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "(ax - b)c = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 7){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = ( b - a*x )*c;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "c = " + c + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "(b - ax)c = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 8){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = b - a*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "b - ax = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 9){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = (a - b)*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "(a - b)x = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 10){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a*x - b;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "b = " + b + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "ax - b = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 11){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = -a*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "-ax = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 12){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = a - x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "a - x = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		if(rnd === 13){

			a = randi0(-10,10);
			b = randi0(-10,10);
			c = randi0(-10,10);
			x = randi0(-10,10);

			
			ans = -(a - x);

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "a = " + a + "<br>";
			QUESTION += "x = ?<br>";
			QUESTION += "<br>";
			QUESTION += "-(a - x) = " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "x = " + x;
		}

		
	} //problema_2

	if(miProblema === "problema_3"){ //problemas x (fácil)
		
		var rnd = randi(1,8);
		var x,a,b,c,d,e,f,g,h,ans;
		
		//rnd = 8;
		
		if(rnd === 1){

			x = randi0(1,20);
			
			ans = x + (x + 1);

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Encuentra dos números consecutivos<br>";
			QUESTION += "que sumen " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x + " y " + (x+1);
				
		}

		if(rnd === 2){

			x = randi0(1,20);
			
			ans = x + (x + 1) + (x + 2);

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Encuentra tres números consecutivos<br>";
			QUESTION += "que sumen " + ans + "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x + ", " + (x+1) + " y " + (x+2);
				
		}

		if(rnd === 3){

			x = randi0(2,20);
			a = randi0(2,12);
			
			ans = x + (x + a);

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Alcaráz tiene " + a + " años más<br>";
			QUESTION += "que Becky y sus edades suman " + ans + "<br>";
			QUESTION += "¿Cuál es la edad de Becky?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x + " años.";
				
		}

		if(rnd === 4){

			x = randi0(2,20);
			a = x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Un número más " + a + " es igual<br>";
			QUESTION += "al doble de dicho número.<br>";
			QUESTION += "¿Cuál número es?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x ;
				
		}
		
		if(rnd === 5){

			x = randi0(2,20);
			a = 2*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Un número más " + a + " es igual<br>";
			QUESTION += "al triple de dicho número.<br>";
			QUESTION += "¿Cuál número es?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x ;
				
		}
		
		if(rnd === 6){

			x = randi0(2,20);
			a = 2*x;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Calcular la edad de Becky si<br>";
			QUESTION += "dentro de " + a + " años tendrá el <br>"
			QUESTION += "triple de años de los que tiene ahora.<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x + " años";
				
		}

		if(rnd === 7){

			a = randi0(2,20);
			x = 3*a;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Becky es " + a + " años mayor<br>";
			QUESTION += "que Alcaráz. Y el doble de la edad<br>"
			QUESTION += "de Becky es el triple de la de Alcaráz<br>"
			QUESTION += "¿Cuál es la edad de Becky?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += x + " años.";
				
		}	

		if(rnd === 8){

			while(1){
				b = randi0(2,20);
				a = b + randi0(2,20);
				x = a - 2*b;
				if(x > 0)break;
			}

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Alcarás tiene " + a + " años.<br>";
			QUESTION += "Becky tiene " + b + " años.<br>";
			QUESTION += "¿Dentro de cuántos años la edad<br>"
			QUESTION += "de Alcaráz será el doble que la de Becky?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Dentro de " + x + " años.";
				
		}
				
	} //problema_3
	
	


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
		QUESTION += "" + a[1] + ", " + a[2] + ", " + a[3] + ", ... , " + a[n];

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

function round2(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function round4(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}


