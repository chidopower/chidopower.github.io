
var problema = "TODO";

var laFlashCardMuestraLa = "PREGUNTA";

var QUESTION;
var ANSWER;

var DEBUG;





//------------------------------------------------------------------------------
function start(){

	problema = document.getElementById("problema").value;
	laFlashCardMuestraLa = "PREGUNTA";
	QUESTION = "";
	ANSWER = "";

	flash_card_remove();

	if(problema === "TODO")      	prob_todos();
	if(problema === "repartir")  	prob_repartir();
	if(problema === "suma_naturales")prob_suma_naturales();
	if(problema === "suma_pares")  	prob_suma_pares();
	if(problema === "serie_arit")  	prob_serie_arit();
	if(problema === "patrones")  	prob_patrones();
	if(problema === "factorizar")  	prob_factorizar();
	if(problema === "MCD")  		prob_MCD();
	if(problema === "numeros")  	prob_numeros();
	if(problema === "det2")  		prob_det2x2();
	if(problema === "regla_de_tres")prob_regla3();
	if(problema === "regla_de_tres_c")prob_regla3_comp();
	if(problema === "porcentajes")prob_porcentaje();
	if(problema === "descuentos") prob_descuentos();

	flash_card_show();

}


//------------------------------------------------------------------------------
function prob_todos(){

	var rnd = randi(1,13);

	if(rnd === 1)  	prob_repartir();
	if(rnd === 2)  	prob_suma_naturales();
	if(rnd === 3)  	prob_suma_pares();
	if(rnd === 4)  	prob_serie_arit();
	if(rnd === 5)  	prob_patrones();
	if(rnd === 6)  	prob_factorizar();
	if(rnd === 7)  	prob_MCD();
	if(rnd === 8)  	prob_numeros();
	if(rnd === 9)  	prob_det2x2();
	if(rnd ===10)  	prob_regla3();
	if(rnd ===11)  	prob_regla3_comp();
	if(rnd ===12)  	prob_porcentaje();
	if(rnd ===13)	prob_descuentos();

}

//------------------------------------------------------------------------------
function prob_descuentos()
{
	var rnd = randi(1,3);

	rnd = 3;

	if(rnd=== 1){

		var prec = randi(10,30)/1.0;
		var desc = randi(5,20)/1.0;
		var final = prec - prec*desc/100.0
		var bill = randi(1,2)*100;
		var feria = bill - final;

		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "Una Coca Cola cuesta " +prec+ " pesos,<br>";
		QUESTION += "pero tiene un descuento de " +desc+ "%.<br><br>";
		QUESTION += "Tu pagas con un billete de " +bill+ " pesos.<br>";
		QUESTION += "¿Cuánto te sobra?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += round2(feria)+ " pesos.<br>";
	}

	if(rnd === 2)
	{

		var prec = randi(100,800)/1.0;
		var imp = randi(5,20)/1.0;
		var final = prec + prec*imp/100.0
		var bill = 1000;
		var feria = bill - final;

		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "Unos zapatos cuestan " +prec+ " pesos,<br>";
		QUESTION += "pero tienen un impuesto de " +imp+ "%.<br><br>";
		QUESTION += "Tu pagas con un billete de " +bill+ " pesos.<br>";
		QUESTION += "¿Cuánto te sobra?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += round2(feria)+ " pesos.<br>";
	}

	if(rnd === 3){ //descuentos

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
function prob_porcentaje()
{
	var rnd = randi(1,3);

	//rnd = 3;

	if(rnd=== 1){

		while(1){
			var a = randi(50,400);
			var p = randi(5,95);
			if( (a*p)%100 ===0 && a!==100 )break;
		}

		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";

		if(randi(1,2) ===1){
			var x = a + a*p/100;
			QUESTION += a+ " &plus; " +p+ "%<br>";
		}else{
			var x = a - a*p/100;
			QUESTION += a+ " &minus; " +p+ "%<br>";
		}

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += x+ "<br>";

	}

	if(rnd === 2)
	{

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

	if(rnd === 3)
	{

		while(1){
			var h = randi(10,200); //hombres
			var m = randi(10,200); //mujeres
			var tot = h + m; //total
			if( (h*100)%tot === 0 && tot !==100 && h!==m)break;
		}

		var ph = h*100/tot;
		var pm = m*100/tot;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " +h+ " hombres y " +m+ " mujeres.<br>";
		QUESTION += "¿Cuál es el procentaje de hombres y de mujeres?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Hay " +ph+ "% hombres y<br>";
		ANSWER += "hay " +pm+ "% mujeres<br>";

	}

}

//------------------------------------------------------------------------------
function prob_regla3()
{
	var rnd = randi(1,3);

	//rnd = 6;

	if(rnd === 1){

		while(1){
			var a = randi(2,20);
			var b = randi(2,20);
			var c = randi(2,20);
			if( (c*b)%a ===0 && a!==c && a!==b )break;
		}
		var x = c*b/a;

		if(randi(1,2) === 1){
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
			QUESTION += "<br>";
			QUESTION += "Calcular el valor de x.<br>";
			QUESTION += "<br>";
			QUESTION += a+ " &rarr; " +b+ "<br>";
			QUESTION += c+ " &rarr;  x<br>";
		}else{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
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


	}

	if(rnd === 2){

		while(1){
			var a = randi(2,20);
			var b = randi(2,20);
			var c = randi(2,20);
			if( (c*b)%a ===0 && a!==c && a!==b )break;
		}
		var x = c*b/a;

		if(randi(1,2) === 1)
		{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
			QUESTION += "<br>";
			QUESTION += "Se necesitan " +b+ " botes de pintura para<br>";
			QUESTION += "pintar " +a+ " paredes. ¿Cuántos botes de pintura<br>";
			QUESTION += "se necesitan para pintar " +c+ " paredes?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Se necesitan " +x+ " botes de pintura.<br>";
		}
		else
		{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
			QUESTION += "<br>";
			QUESTION += "Se necesitan " +b+ " botes de pintura para<br>";
			QUESTION += "pintar " +a+ " paredes. ¿Cuántas paredes<br>";
			QUESTION += "se pueden pintar con " +x+ " botes de pintura?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Se pueden pintar " +c+ " paredes.<br>";

		}
	}

	if(rnd === 3){

		while(1){
			var a = randi(2,20);
			var b = randi(2,20);
			var c = randi(2,20);
			if( (c*b)%a ===0 && a!==c && a!==b )break;
		}
		var x = c*b/a;

		if(randi(1,2) === 1)
		{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
			QUESTION += "<br>";
			QUESTION += "Se necesitan " +b+ " zanahorias para alimentar<br>";
			QUESTION += "a " +a+ " conejos. ¿Cuántas zanahorias<br>";
			QUESTION += "se necesitan para alimentar " +c+ " conejos?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Se necesitan " +x+ " zanahorias.<br>";
		}
		else
		{
			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: REGLA DE 3</gray><br>";
			QUESTION += "<br>";
			QUESTION += "Se necesitan " +b+ " zanahorias para alimentar<br>";
			QUESTION += "a " +a+ " conejos. ¿Cuántos conejos<br>";
			QUESTION += "se pueden alimentar con " +x+ " zanahorias?<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "Se pueden alimentar " +c+ " conejos.<br>";

		}
	}

}

//------------------------------------------------------------------------------
function prob_regla3_comp()
{
	var rnd = randi(1,4);

	//rnd = 4;

	if(rnd === 1){ //Regla de 3 Compuesta Directa

		while(1){
			var a = randi(2,30);
			var b = randi(2,8);
			var c = randi(20,60);
			var d = randi(2,30);
			var e = randi(2,8);
			if( (d*e*c)%(a*b) ===0 && a!==d && b!==e )break;
		}
		var x = d*e*c/(a*b);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REGLA DE 3 COMPUESTA</gray><br><br>";
		QUESTION += a+ " botellas de " +b+ " L pesan " +c+ " kg<br>";
		QUESTION += "¿Cuánto pesarán " +d+ " botellas de " +e+ " L?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += x + " kg. ";

	}

	if(rnd === 2){ //Regla de 3 Compuesta Mixta

		while(1){
			var a = randi(2,10);
			var b = randi(20,100);
			var c = randi(2,10);
			var d = randi(2,10);
			var e = randi(20,100);
			if( (a*e*c)%(d*b) ===0 && a!==d && b!==e )break;
		}
		var x = a*e*c/(d*b);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REGLA DE 3 COMPUESTA</gray><br><br>";
		QUESTION += a+ " impresoras imprimen " +b+ " libros en " +c+ " días.<br>";
		QUESTION += "¿Cuántos días son necesarios para imprimir " +e+ " libros<br>" ;
		QUESTION += "si tengo " +d+ " impresoras?";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += x + " días. ";

	}

	if(rnd === 3){ //Regla de 3 Compuesta Inversa

		while(1){
			var a = randi(2,10);
			var b = randi(4,16);
			var c = randi(2,10);
			var d = randi(2,10);
			var e = randi(4,16);
			if( (a*b*c)%(d*e) ===0 && a!==d && b!==e )break;
		}
		var x = a*b*c/(d*e);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REGLA DE 3 COMPUESTA</gray><br><br>";
		QUESTION += a+ " obreros trabajan " +b+ " horas al día durante <br>";
		QUESTION += c+ " días para construir una casita. <br>";
		QUESTION += "¿En cuántos días se puede construir una casita si trabajan<br>"
		QUESTION += d+ " obreros " +e+ " horas diarias?";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += x + " días. ";

	}


	if(rnd === 4){ //Regla de 3 Compuesta Directa

		while(1){
			var a = randi(2,10);
			var b = randi(2,10);
			var c = randi(2,50);
			var d = randi(2,10);
			var e = randi(2,10);
			if( (d*e*c)%(a*b) ===0 && a!==d && b!==e )break;
		}
		var x = d*e*c/(a*b);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REGLA DE 3 COMPUESTA</gray><br><br>";
		QUESTION += a+ " grifos abiertos tiran agua durante " +b+ " horas diarias.<br>";
		QUESTION += "Esto genera un costo de " +c+ " pesos al día.<br>";
		QUESTION += "¿Cuánto costaría " +d+ " grifos abiertos durante " +e+ " horas diarias?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += x + " pesos. ";

	}

}



//------------------------------------------------------------------------------
function prob_det2x2()
{
	var rnd = randi(1,3);

	//rnd = 3;

	if(rnd ===1)
	{

		while(1)
		{
			var a = randi(2,99);
			var b = randi(2,99);
			if(a > b) break;
		}

		var suma  = a + b;
		var resta = a - b;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra dos números que sumados dan " +suma+ " <br><br>";
		QUESTION += "y restados dan " +resta+ ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a + " y " + b;

	}

	if(rnd ===2)
	{

		var a = randi(1,9);
		var b = randi(1,9);
		var c = randi(1,9);
		var d = randi(1,9);

		var det  = a*d - b*c;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Calcula el determinante, <br><br>";
		QUESTION += a + "&nbsp;&nbsp;" +  b + "<br>";
		QUESTION += c + "&nbsp;&nbsp;" +  d + "<br>";

		//QUESTION += "<pre> " + a + " " +  b + "</pre>";
		//QUESTION += "<pre> " + c + " " +  d + "</pre><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += "Determinante: " + det;

	}


	if(rnd === 3)
	{

		while(1)
		{
			var c11 = randi(1,9);
			var c12 = randi(1,9);
			var c21 = randi(1,9);
			var c22 = randi(1,9);
			if(c11 !== c21) break;
		}

		var X = randi(1,49);
		var Y = randi(1,49);

		var L1 = c11*X + c12*Y;
		var L2 = c21*X + c22*Y;

		det  = c11*c22 - c12*c21;

		detX = c12*L2 - c22*L1;
		detY = c11*L2 - c21*L1;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Resuelve con determinantes <br><br>";
		QUESTION += c11+ "X + " +c12+ "Y = "+ L1 +  "<br>";
		QUESTION += c21+ "X + " +c22+ "Y = "+ L2 +  "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += "Det: " + det + "<br><br>";
		ANSWER += "DetX: " + detX + "<br>";
		ANSWER += "DetY: " + detY + "<br><br>";
		ANSWER += "X: " + X + "<br>";
		ANSWER += "Y: " + Y + "<br>";

	}


}



//------------------------------------------------------------------------------
function prob_numeros()
{

	var rnd = randi(1,7);

	//rnd = 7;

	if(rnd ===1)
	{
		var a = randi(5,80);
		var suma = a + (a+1);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 2 números enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a+ " + " +(a+1);

	}

	if(rnd ===2)
	{
		var a = randi(5,80);
		var suma = a + (a+1) + (a+2);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 3 números enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a+ " + " +(a+1)+ " + " +(a+2);

	}

	if(rnd ===3)
	{
		var a = randi(5,80);
		var suma = a + (a+1) + (a+2) + (a+3);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 4 números enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a+ " + " +(a+1)+ " + " +(a+2) + " + " + (a+3);

	}

	if(rnd ===4)
	{
		var a = randi(5,80);
		var suma = 2*a + 2*(a+1);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 2 números pares enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += 2*a+ " + " +2*(a+1);

	}

	if(rnd ===5)
	{
		var a = randi(5,80);
		var suma = 2*a + 2*(a+1) + 2*(a+2);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 3 números pares enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += 2*a+ " + " +2*(a+1) + " + " +2*(a+2);

	}

	if(rnd ===6)
	{
		while(1)
		{
			var a = randi(5,80);
			if(a%2 !== 0) break;
		}

		var suma = a + (a+2);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 2 números impares enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a+ " + " +(a+2);

	}

	if(rnd ===7)
	{
		while(1)
		{
			var a = randi(5,80);
			if(a%2 !== 0) break;
		}

		var suma = a + (a+2) + (a+4);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA:</gray><br><br>";
		QUESTION += "Encuentra 3 números impares enteros consecutivos que suman " +suma+ ". <br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += "<br><br>";
		ANSWER += a+ " + " +(a+2) + " + " + (a+4);

	}

}

//------------------------------------------------------------------------------
function prob_repartir()
{
	var p = randi(100,999);
	var n = randi(5,20);
	var q = Math.floor(p/n);
	var r = p%n;

	var rnd = randi(1,3);

	if(rnd === 1)
	{
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REPARTIR</gray><br>";
		QUESTION += "<br>";
		QUESTION += "Se repartieron algunas pelotas entre " +n+ " niños.<br>";
		QUESTION += "A cada niño le tocaron " +q+ " pelotas<br>";
		QUESTION += "y sobraron " +r+ " pelotas.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas pelotas hay en total?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Hay " + p + " pelotas en total.<br>";
	}
	else if(rnd === 2)
	{
		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REPARTIR</gray><br>";
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
	}
	else
	{
		var cajas = randi(5,10);
		var bolsas = randi(10,30);
		var canicas = randi(10,20);

		var canicas_total = cajas * bolsas * canicas;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: REPARTIR</gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + cajas + " cajas.<br>";
		QUESTION += "En cada caja hay " + bolsas + " bolsas.<br>";
		QUESTION += "En cada bolsa hay " + canicas + " canicas.<br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas canicas hay en total?<br>";


		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Hay " + canicas_total + " canicas en total.<br>";
	}

}

//------------------------------------------------------------------------------
function prob_suma_naturales()
{

	var n = randi(10,100);
	var a = [];
	var suma;

	a[1] = 1;
	a[2] = 2;
	a[3] = 3;
	a[n] = n;

	suma = n*(n + 1)/2;

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: SUMA DE NATURALES</gray><br><br>";
	QUESTION += "Calcula la siguiente suma: <br><br>";
	QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br>";
	ANSWER += suma;

}

//------------------------------------------------------------------------------
function prob_suma_pares()
{

	var rnd = randi(1,2);
	var n = randi(10,100);
	var a = [];
	var suma;

	if(rnd === 1)
	{
		a[1] = 2;
		a[2] = 4;
		a[3] = 6;
		a[n] = 2*n;
		suma = n*(n + 1);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: SUMA DE PARES</gray><br><br>";
		QUESTION += "Calcula la siguiente suma: <br><br>";
		QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br>";
		ANSWER += suma;

	}
	else
	{

		a[1] = 1;
		a[2] = 3;
		a[3] = 5;
		a[n] = 2*n - 1;
		suma = n*n;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: SUMA DE IMPARES</gray><br><br>";
		QUESTION += "Calcula la siguiente suma: <br><br>";
		QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br>";
		ANSWER += suma;

	}

}

//------------------------------------------------------------------------------
function prob_serie_arit()
{

	var rnd = randi(1,4);

	if(rnd === 1)
	{
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
		QUESTION += "<gray>PROBLEMA: SERIE ARITMETICA</gray><br><br>";
		QUESTION += "Calcula la siguiente suma: <br><br>";
		QUESTION += "" + a[1] + " + " + a[2] + " + " + a[3] + " + ... + " + a[n];

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br>";
		ANSWER += suma;

	}
	else if(rnd === 2)
	{

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
		QUESTION += "<gray>PROBLEMA: SERIE ARITMETICA</gray><br><br>";
		QUESTION += "Hay " + n + " números.<br>";
		QUESTION += "Encuentra el último. <br><br>";
		QUESTION += a[1] + ", " + a[2] + ", " + a[3] + ", ... , <red>?</red>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += a[n];

	}
	else if(rnd === 3)
	{

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
		QUESTION += "<gray>PROBLEMA: SERIE ARITMETICA</gray><br><br>";
		QUESTION += "¿Cuántos números hay? <br><br>";
		QUESTION += "" + a[1] + ", " + a[2] + ", " + a[3] + ", ... , " + a[n];

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br>";
		ANSWER += n;

	}
	else
	{

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
		QUESTION += "<gray>PROBLEMA: SERIE ARITMETICA</gray><br><br>";
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
function prob_patrones()
{

	var rnd = randi(1,3);
	var a = [];

	//rnd = 3;

	if(rnd === 1) //fibonacci
	{
		a[0] = randi(1,12);
		a[1] = a[0] + randi(1,12);

		a[2] = a[0] + a[1];
		a[3] = a[1] + a[2];
		a[4] = a[2] + a[3];
	}

	if(rnd === 2) //serie geom
	{
		var n = randi(2,5);
		a[0] = randi(1,12);
		a[1] = a[0]*n;
		a[2] = a[1]*n;
		a[3] = a[2]*n;
		a[4] = a[3]*n;
	}

	if(rnd === 3)
	{
		var n = randi(1,6);
		a[0] = randi(1,12);
		a[1] = a[0] + n*1;
		a[2] = a[1] + n*2;
		a[3] = a[2] + n*3;
		a[4] = a[3] + n*4;
	}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: PATRONES</gray><br><br>";
		QUESTION += "¿Cuál es el siguiente número?<br><br>";
		QUESTION += "" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3];

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += a[4];


}


//------------------------------------------------------------------------------
function prob_factorizar()
{
	while(1)
	{
		var n = randi(20,200);
		if(es_primo(n) === "NO") break;
	}

	var i,j;
	var fact = [];

	console.log("**** ", n, " ****")

	QUESTION  = "";
	QUESTION += "<gray>PROBLEMA: FACTORIZAR</gray><br><br>";
	QUESTION += "Factorizar " + n + " en números primos.<br>";

	j = 0;
	i = 2;
	while(i <= n)
	{
		//console.log("*", i,n);
		if(es_primo(i) === "YES" && n%i === 0)
		{
			n = n/i;
			fact[j] = i;
			j++;
			continue;
		}
		i++;
	}

	ANSWER  = "";
	ANSWER += "<gray>RESPUESTA: </gray><br><br>";
	ANSWER += " <br><br><br>";
	ANSWER += fact;

}

//------------------------------------------------------------------------------
function prob_MCD()
{

	var rnd = randi(1,4);

	//rnd = 4;

	if(rnd === 1)
	{
		while(1)
		{
			var A = randi(6,99);
			var B = randi(6,99);
			if( A!==B &&
				MCD(A,B) >= 3  &&
				MCD(A,B) <= 20 ) break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: MCD & MCM</gray><br><br>";
		QUESTION += "Encontrar el MCD y el MCM de: <br><br>";
		QUESTION += A+ " y " +B+ ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += "MCD = " + MCD(A,B) + "<br>";
		ANSWER += "MCM = " + MCM(A,B);
	}

	if(rnd === 2)
	{

		while(1)
		{
			var A = randi(6,99);
			var B = randi(6,99);
			var C = randi(6,99);
			if( A!==B && A!==C && B !==C &&
				MCD(MCD(A,B),C) >= 3  &&
				MCD(MCD(A,B),C) <= 20 &&
				MCM(MCM(A,B),C) <=1000) break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: MCD & MCM</gray><br><br>";
		QUESTION += "Encontrar el MCD y el MCM de: <br><br>";
		QUESTION += A+ ", " +B+ " y " +C+ ".<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += "MCD = " + MCD(MCD(A,B),C) + "<br>";
		ANSWER += "MCM = " + MCM(MCM(A,B),C);
	}

	if(rnd === 3)
	{

		while(1)
		{
			var A = randi(2,30);
			var B = randi(2,30);
			var C = randi(2,30);
			if( A!==B && A!==B && B!==C &&
			    MCM(MCM(A,B),C) < 1200) break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: MCD & MCM</gray><br><br>";
		QUESTION += "Hugo, Paco y Luis coincidieron hoy en el cine. <br><br>";
		QUESTION += "Hugo va al cine cada " +A+ " días. <br>";
		QUESTION += "Paco va al cine cada " +B+ " días. <br>";
		QUESTION += "Luis va al cine cada " +C+ " días. <br><br>";
		QUESTION += "¿Dentro de cuántos días volveran a encontrarse?<br>";


		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += "Dentro de " + MCM(MCM(A,B),C) + " días.";
	}

	if(rnd === 4)
	{

		while(1)
		{
			var A = randi(2,30);
			var B = randi(2,30);
			var C = randi(2,30);
			var mcd_ = MCD(MCD(A,B),C);
			if( A!==B && A!==B && B!==C &&
			    mcd_ >=3) break;
		}

		var total = A/mcd_ + B/mcd_ + C/mcd_;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: MCD & MCM</gray><br><br>";
		QUESTION += "Hay tres listones. <br><br>";
		QUESTION += "El listón Rojo mide " +A+ " cm. <br>";
		QUESTION += "El listón Azúl mide " +B+ " cm. <br>";
		QUESTION += "El listón Verde mide " +C+ " cm. <br><br>";
		QUESTION += "Se quiere cortar los listones en varios pedazos iguales.<br>";
		QUESTION += "¿Cuál es la máxima longitud de dichos pedazos?<br>";
		QUESTION += "¿Cuántos pedazos habrá en total?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";
		ANSWER += " <br><br><br>";
		ANSWER += "Serán " + total + " pedazos.<br>";
		ANSWER += "Cada pedazo medirá " + mcd_ + " cm.";
	}



}

//------------------------------------------------------------------------------
function es_primo(N)
{
	var ans;
	var i;
	var divs = 0; //divisores

	for(i=1; i<=N; i++)
	{
		if(N%i === 0)
		{
			divs++;
		}
	}

	if(N === 2 || divs === 2)
		ans = "YES";
	else
		ans = "NO"

	//console.log(i,N,ans);

	return ans;
}

//------------------------------------------------------------------------------
function max(a,b)
{
	if(a >= b)
		return a;
	else
		return b;
}

//------------------------------------------------------------------------------
function min(a,b)
{
	if(a <= b)
		return a;
	else
		return b;
}

//------------------------------------------------------------------------------
function MCD(A,B)
{
	var mcd = 0;
	var a = max(A,B);
	var b = min(A,B);

	do
	{
		mcd = b;
		b = a%b;
		a = mcd;
	}
	while(b !== 0);

	return mcd;

}


//------------------------------------------------------------------------------
function MCM(A,B)
{
	var mcm = 0;
	var a = max(A,B);
	var b = min(A,B);

	mcm = (a/MCD(a,b))*b;

	return mcm;

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
				QUESTION += a+ " &plus; " +p+ "%<br>";
			}else{
				var x = a - a*p/100;
				QUESTION += a+ " &minus; " +p+ "%<br>";
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

	var rnd = randi(1,6);
	if(rnd===1) miProblema = "problema_1";
	if(rnd===2) miProblema = "problema_2";
	if(rnd===3) miProblema = "problema_3";
	if(rnd===4) miProblema = "problema_4";
	if(rnd===5) miProblema = "problema_5";
	if(rnd===6) miProblema = "problema_6";

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


