
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
	if(problema === "conteo") prob_conteo();
	if(problema === "triangulos") prob_triangulos();
	if(problema === "cuadrilateros") prob_cuadrilateros();
	if(problema === "poligonos") prob_poligonos();
	if(problema === "unidades") prob_unidades();
	if(problema === "velocidad") prob_velocidad();

	flash_card_show();

}


//------------------------------------------------------------------------------
function prob_todos(){

	var rnd = randi(1,17);

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
	if(rnd ===13)	prob_conteo();
	if(rnd ===14)	prob_triangulos();
	if(rnd ===15)	prob_cuadrilateros();
	if(rnd ===16)	prob_poligonos();
	if(rnd ===17)	prob_unidades();
	if(rnd ===18)	prob_velocidad();

}


//------------------------------------------------------------------------------
function prob_velocidad()
{

	var rnd = randi(1,3);

	opt1 = randi(1,6);
	opt2 = randi(1,6);
	opt3 = randi(1,6);

	if(opt1 === 1) name1 = "Jorge el Curioso";
	if(opt1 === 2) name1 = "Un gatito";
	if(opt1 === 3) name1 = "Cuack el Pato";
	if(opt1 === 4) name1 = "Doraemón";
	if(opt1 === 5) name1 = "Caillou";
	if(opt1 === 6) name1 = "Un Pitufo";

	if(opt1 === 1) place1 = "Skyrim";
	if(opt1 === 2) place1 = "su casa";
	if(opt1 === 3) place1 = "su escuela";
	if(opt1 === 4) place1 = "Konoha";
	if(opt1 === 5) place1 = "la Unison";
	if(opt1 === 6) place1 = "la casa de la tía Kris";

	if(opt1 === 1) place2 = "Hyrule";
	if(opt1 === 2) place2 = "la playa";
	if(opt1 === 3) place2 = "la chingada";
	if(opt1 === 4) place2 = "el Walmart";
	if(opt1 === 5) place2 = "el bosque Kokiri";
	if(opt1 === 6) place2 = "el Liceo Tec";	

	if(rnd === 1) //
	{

		var v_km_h = randi(10,300);
		var d_km = randi(25,1000);
		var t_h = d_km / v_km_h;
		var t_m = Math.round(t_h*60);


		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: VELOCIDAD </gray><br>";
		QUESTION += "<br>";
		QUESTION += name1 + " viaja desde " +place1+ " hasta " +place2+ "<br>";
		QUESTION += "a una velocidad de <b>" + v_km_h + "</b> km/h.<br>";
		QUESTION += "<br>";
		QUESTION += "La distancia entre " +place1+ " y " +place2+ " es de <b>" +d_km+ "</b> km.<br>";
		QUESTION += "<br>";
		QUESTION += "Aproximadamente,<br> ¿en cuántos minutos llegará?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Llegará en " + t_m + " minutos.<br>";

	}

	if(rnd === 2) //
	{

		var v_km_h = randi(10,300);
		var t_m = randi(3,12)*30;
		var t_h = t_m/60.0;
		var d_km = v_km_h*t_h; 

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: VELOCIDAD </gray><br>";
		QUESTION += "<br>";
		QUESTION += name1 + " viaja desde " +place1+ " hasta " +place2+ "<br>";
		QUESTION += "a una velocidad de <b>" + v_km_h + "</b> km/h.<br>";
		QUESTION += "<br>";
		QUESTION += "El viaje dura <b>" +t_m+ "</b> minutos.<br>";
		QUESTION += "<br>";
		QUESTION += "Aproximadamente, <br>¿cuál es la distancia entre " +place1+ " y " +place2+" ?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "La distancia es de " + round2(d_km) + " km.<br>";

	}

	if(rnd === 3) //
	{

		while(1){
		var t_m = randi(3,100)*30;
		var t_h = t_m/60.0;
		var d_m = randi(50,300)*1000;
		var d_km = d_m/1000;

		var v_km_h = d_km/t_h;
		if(Number.isInteger(v_km_h)===true)break;
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: VELOCIDAD </gray><br>";
		QUESTION += "<br>";
		QUESTION += name1 + " viaja desde " +place1+ " hasta " +place2+ "<br>";
		QUESTION += "La distancia entre " +place1+ " y " +place2+ " es de <b>" +d_km+ "</b> km.<br>";
		QUESTION += "<br>";
		QUESTION += "El viaje dura <b>" +t_m+ "</b> minutos.<br>";
		QUESTION += "<br>";
		QUESTION += "¿A qué velocidad viaja " +name1+ "?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Viaja a una velocidad de " + round2(v_km_h) + " km/h.<br>";

	}

}

//------------------------------------------------------------------------------
function prob_unidades()
{

	var rnd = randi(1,11);

	if(rnd === 1) // cm & m
	{

		if(randi(1,2)===1)
		{
			var metros = randf(9);
			var centi_metros = metros*100.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + metros + " metros en <b>centi</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += centi_metros + " centimetros<br>";

		}
		else
		{
			var centi_metros = randi(1,300);
			var metros = centi_metros/100.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + centi_metros + " <b>centi</b>metros en metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += metros + " metros<br>";

		}

	}

	if(rnd === 2) // km & m
	{

		if(randi(1,2)===1)
		{
			var metros = randi(1,3000);
			var kilo_metros = metros/1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + metros + " metros en <b>kilo</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += kilo_metros + " <b>kilo</b>metros<br>";

		}
		else
		{
			var kilo_metros = randf(9);
			var metros = kilo_metros*1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + kilo_metros + " <b>kilo</b>metros en metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += metros + " metros<br>";

		}

	}

	if(rnd === 3) // kg & g
	{

		if(randi(1,2)===1)
		{
			var gramos = randi(1,30)*100;
			var kilo_gramos = gramos/1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + gramos + " gramos en <b>kilo</b>gramos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += kilo_gramos + " <b>kilo</b>gramos<br>";

		}
		else
		{
			var kilo_gramos = randf(9);
			var gramos = kilo_gramos*1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + kilo_gramos + " <b>kilo</b>gramos en gramos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += gramos + " gramos<br>";

		}

	}

	if(rnd === 4) // kg & ton
	{

		if(randi(1,2)===1)
		{
			var kilo_gramos = randi(1,50)*100;
			var toneladas = kilo_gramos/1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + kilo_gramos + " <b>kilo</b>gramos en toneladas. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += toneladas + " toneladas";

		}
		else
		{
			var toneladas = randf(9);
			var kilo_gramos = toneladas*1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + toneladas + " toneladas en <b>kilo</b>gramos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += kilo_gramos + " <b>kilo</b>gramos<br>";

		}

	}

	if(rnd === 5) // L & mL
	{

		if(randi(1,2)===1)
		{
			var litros = randf(9);
			var mili_litros = litros*1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + litros + " litros en <b>mili</b>litros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += mili_litros + " <b>mili</b>litros<br>";

		}
		else
		{
			var mili_litros = randi(1,90)*100;
			var litros = mili_litros/1000.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + mili_litros + " <b>mili</b>litros en litros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += litros + " litros<br>";

		}

	}

	if(rnd === 6) // mm & cm
	{

		if(randi(1,2)===1)
		{
			var mili_metros = randi(1,99);
			var centi_metros = mili_metros/10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + mili_metros + " <b>mili</b>metros en <b>centi</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += centi_metros + " <b>centi</b>metros<br>";

		}
		else
		{
			var centi_metros = randi(1,10);
			var mili_metros = centi_metros*10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + centi_metros + " <b>centi</b>metros en <b>mili</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += mili_metros + " <b>mili</b>metros<br>";

		}

	}

	if(rnd === 7) // min & seg
	{

		if(randi(1,2)===1)
		{
			var minutos = randi(1,60);
			var segundos = minutos*60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + minutos + " minutos en segundos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += segundos + " segundos<br>";

		}
		else
		{
			var segundos = randi(1,9)*30;
			var minutos = segundos/60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + segundos + " segundos en minutos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += minutos + " minutos<br>";

		}

	}


	if(rnd === 8) // min & horas
	{

		if(randi(1,2)===1)
		{
			var horas = randi(1,48);
			var minutos = horas*60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + horas + " horas en minutos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += minutos + " minutos<br>";

		}
		else
		{
			var minutos = randi(1,9)*30;
			var horas = minutos/60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + minutos + " minutos en horas. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += horas + " horas<br>";

		}

	}

	if(rnd === 9) // seg & horas
	{

		if(randi(1,2)===1)
		{
			var horas = randi(1,48);
			var segundos = horas*60*60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + horas + " horas en segundos. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += segundos + " segundos<br>";

		}
		else
		{
			var horas = randi(1,48);
			var segundos = horas*60*60.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + segundos + " segundos en horas. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += horas + " horas<br>";

		}

	}

	if(rnd === 10) // dm & m
	{

		if(randi(1,2)===1)
		{
			var metros = randf(9);
			var deci_metros = metros*10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + metros + " metros en <b>deci</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += deci_metros + " <b>deci</b>metros<br>";

		}
		else
		{
			var metros = randf(9);
			var deci_metros = metros*10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + deci_metros + " <b>deci</b>metros en metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += metros + " metros<br>";

		}

	}

	if(rnd === 11) // dm & cm
	{

		if(randi(1,2)===1)
		{
			var deci_metros = randi(1,20);
			var centi_metros = deci_metros*10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + deci_metros + " <b>deci</b>metros en <b>centi</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += centi_metros + " <b>centi</b>metros<br>";

		}
		else
		{
			var deci_metros = randi(1,20);
			var centi_metros = deci_metros*10.0;

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: UNIDADES </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Convertir " + centi_metros + " <b>centi</b>metros  en <b>deci</b>metros. <br>";
			QUESTION += "<br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += deci_metros + " <b>deci</b>metros<br>";

		}

	}

}

//------------------------------------------------------------------------------
function fact(x) 
{
	if (x === 0)
	{
		return 1;
	}
	return x * fact(x-1); 
}

//------------------------------------------------------------------------------
function permut(n,r) //sin repeticion
{
	return fact(n)/( fact(n-r) );
}

//------------------------------------------------------------------------------
function permut_r(n,r) //con repeticion
{
	return Math.pow(n, r);
}

//------------------------------------------------------------------------------
function comb(n,r) //sin repeticion
{
	return fact(n)/( fact(r)*fact(n-r) );
}

//------------------------------------------------------------------------------
function comb_r(n,r) //con repeticion
{
	return  fact(n+r-1)/(  fact(r)*fact(n-1) );
}

//------------------------------------------------------------------------------
function prob_conteo()
{

	var rnd = randi(1,10);

	if(rnd === 1) //permutacion simple, OK
	{

		var objetos = randi(2,10);
		var ans_sin_r = permut(objetos,objetos);
		var ans_con_r = permut_r(objetos,objetos);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + objetos + " objetos en total. <br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuántas formas se pueden ORDENAR (sin repeticion)? <br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuántas formas se pueden ORDENAR (con repeticion)? <br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Sin repeticion: " + ans_sin_r;
		ANSWER += "<br>";
		ANSWER += "Con repeticion: " + ans_con_r;

	}


	if(rnd === 2) //permutaciones y combinaciones OK
	{

		var objetos = randi(3,10);
		while(1)
		{
			var elegidos = randi(2,10);
			if(objetos > elegidos) break;
		}
		
		var per_sin_r = permut(objetos,elegidos);
		var per_con_r = permut_r(objetos,elegidos);
		var com_sin_r = comb(objetos,elegidos);
		var com_con_r = comb_r(objetos,elegidos);		

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + objetos + " objetos en total. <br>";
		QUESTION += "<br>";
		QUESTION += "Tú puedes elegir sólo " + elegidos + " objetos. <br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuántas formas se pueden ORDENAR (sin repeticion)? <br>";
		QUESTION += "¿De cuántas formas se pueden ORDENAR (con repeticion)? <br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuántas formas se pueden COMBINAR (sin repeticion)? <br>";
		QUESTION += "¿De cuántas formas se pueden COMBINAR (con repeticion)? <br>";		

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "Permutaciones (sin repetición): " + per_sin_r;
		ANSWER += "<br>";
		ANSWER += "Permutaciones (con repetición): " + per_con_r;
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Combinaciones (sin repetición): " + com_sin_r;
		ANSWER += "<br>";
		ANSWER += "Combinaciones (con repetición): " + com_con_r;
	}




	if(rnd === 3) //carrera, permutacion
	{

		var objetos = randi(3,10);		
		var permutaciones = permut(objetos,objetos); 

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + objetos + " niños participando en una carrera. <br>";
		QUESTION += "¿Cuántos posibles resultados hay? <br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += permutaciones;

	}


	if(rnd === 4) //carreras, permutacion
	{

		if(randi(1,2) === 1)
		{
			var objetos = randi(4,10);		
			var permutaciones = permut(objetos - 1,objetos - 1); 

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Hay " + objetos + " genins participando en una carrera. <br>";
			QUESTION += "Entre ellos está MINATO y él siempre gana. <br><br>";
			QUESTION += "¿Cuántos posibles resultados hay? <br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "<br>";
			ANSWER += "<br>";
			ANSWER += permutaciones;
		}
		else
		{
			var objetos = randi(4,10);		
			var permutaciones = permut(objetos - 2, objetos - 2); 

			QUESTION  = "";
			QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
			QUESTION += "<br>";
			QUESTION += "Hay " + objetos + " genins participando en una carrera. <br><br>";
			QUESTION += "Entre ellos está KAKASHI y él siempre gana. <br>";
			QUESTION += "OBITO también participa, pero él siempre pierde. <br><br>";
			QUESTION += "¿Cuántos posibles resultados hay? <br>";

			ANSWER  = "";
			ANSWER += "<gray>RESPUESTA: </gray><br>";
			ANSWER += "<br>";
			ANSWER += "<br>";
			ANSWER += "<br>";
			ANSWER += permutaciones;
		}

	}


	if(rnd === 5) //problema, permutacion, OK
	{

		var objetos = randi(2,9);
		while(1)
		{
			var elegidos = randi(2,9);
			if(objetos >= elegidos) break;
		}

		var ans1 = permut(objetos, elegidos);
		var ans2 = permut_r(objetos, elegidos);


		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br><br>";

		if(objetos === 2) QUESTION += "<b> 1, 2 </b>";
		if(objetos === 3) QUESTION += "<b> 1, 2, 3 </b>";
		if(objetos === 4) QUESTION += "<b> 1, 2, 3, 4</b>";
		if(objetos === 5) QUESTION += "<b> 1, 2, 3, 4, 5</b>";
		if(objetos === 6) QUESTION += "<b> 1, 2, 3, 4, 5, 6</b>";
		if(objetos === 7) QUESTION += "<b> 1, 2, 3, 4, 5, 6, 7</b>";
		if(objetos === 8) QUESTION += "<b> 1, 2, 3, 4, 5, 6, 7, 8</b>";
		if(objetos === 9) QUESTION += "<b> 1, 2, 3, 4, 5, 6, 7, 8, 9</b>";

		QUESTION += "<br><br>";
		QUESTION += "Puedes escoger " + elegidos + " cifras de arriba. <br><br>";
		QUESTION += "¿Cuántos números de " + elegidos + " cifras se pueden formar <br> si no debe haber cifras repetidas?<br><br>";
		QUESTION += "¿Cuántos números de " + elegidos + " cifras se pueden formar <br> si las cifras se pueden repetir?<br><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Sin repeticiones: " + ans1 + "<br>";
		ANSWER += "Con repeticiones: " + ans2 + "<br>";

	}


	if(rnd === 6) //problema combinaciones OK
	{

		var objetos = randi(3,10);
		while(1)
		{
			var elegidos = randi(2,10);
			if(objetos > elegidos) break;
		}
		
		var com_sin_r = comb(objetos,elegidos);	

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Hay " + objetos + " chunins en total. <br>";
		QUESTION += "<br>";
		QUESTION += "Tú eres el HOKAGE y debes formar un equipo de " + elegidos + " chunins. <br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas posibilidades hay para ése equipo? <br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Hay " + com_sin_r + " posibilidades. <br>";
		ANSWER += "<br>";

	}


	if(rnd === 7) //problema combinaciones OK
	{

		var objetos = randi(4,10);
		while(1)
		{
			var elegidos = randi(4,10);
			if(objetos >= elegidos) break;
		}
		
		var com_sin_r = comb(objetos,elegidos);	
		var com_con_r = comb_r(objetos,elegidos);	

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un chef dispone de " + objetos + " ingredientes para elaborar una ensalada. <br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas posibilidades hay para para elaborar una <br> ensalada de " + elegidos + " ingredientes? <br><br>";
		QUESTION += "A) Todos los ingredientes seleccionados deben ser distintos.<br>";
		QUESTION += "B) Los ingredientes seleccionados pueden repetirse.<br>";
		QUESTION += "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Sin repeticion: " + com_sin_r + " posibilidades. <br>";
		ANSWER += "Con repeticion: " + com_con_r + " posibilidades. <br>";
		ANSWER += "<br>";

	}

	if(rnd === 8) //problema combinaciones OK
	{

		var ops = randi(1,9);

		if(ops === 1)
		{
			var word = "ANA";
			var n = word.length;
			var n1 = 2; //A
			var words = fact(n)/fact(n1);
		}

		if(ops === 2)
		{
			var word = "JOSE";
			var n = word.length;
			var words = fact(n);
		}

		if(ops === 3)
		{
			var word = "LEONARDO";
			var n = word.length;
			var n1 = 2; //O
			var words = fact(n)/fact(n1);
		}

		if(ops === 4)
		{
			var word = "ANASTASIA";
			var n = word.length;
			var n1 = 4; //A
			var n2 = 2; //S
			var words = fact(n)/( fact(n1)*fact(n2) );
		}

		if(ops === 5)
		{
			var word = "HERMEREJILDO";
			var n = word.length;
			var n1 = 3; //E
			var n2 = 2; //R
			var words = fact(n)/( fact(n1)*fact(n2) );
		}

		if(ops === 6)
		{
			var word = "OROCHIMARU";
			var n = word.length;
			var n1 = 2; //O
			var n2 = 2; //R
			var words = fact(n)/( fact(n1)*fact(n2) );
		}

		if(ops === 7)
		{
			var word = "HASHIRAMA";
			var n = word.length;
			var n1 = 2; //H
			var n2 = 3; //A
			var words = fact(n)/( fact(n1)*fact(n2) );
		}

		if(ops === 8)
		{
			var word = "VALENTINA";
			var n = word.length;
			var n1 = 2; //A
			var n2 = 2; //N
			var words = fact(n)/( fact(n1)*fact(n2) );
		}

		if(ops === 9)
		{
			var word = "ESTERNOCLEIDOMASTOIDEO";
			var n = word.length;
			var n1 = 4; //E
			var n2 = 2; //S
			var n3 = 2; //T
			var n4 = 4; //O
			var n5 = 2; //I
			var n6 = 2; //D
			var words = fact(n)/( fact(n1)*fact(n2)*fact(n3)*fact(n4)*fact(n5)*fact(n6) );
		}

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuantas palabras se pueden escribir usando: <br>";
		QUESTION += "<br>";
		QUESTION += word + "<br>";
		QUESTION += "<br>";
		QUESTION += "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += words + " palabras. <br>";
		ANSWER += "<br>";

	}

	if(rnd === 9) //permutacion circular
	{

		var objetos = randi(3,10);		
		var permutaciones = fact(objetos - 1); 

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuántas formas se pueden sentar <br>"
		QUESTION += objetos + " personas en una mesa circular? <br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += permutaciones;

	}

	if(rnd === 10) //problema de ropa
	{

		var camisetas = randi(2,6);		
		var pantalones = randi(2,6);		
		var gorras = randi(2,6);		
		var tennis = randi(2,6);		
		var permutaciones = camisetas*pantalones*gorras*tennis; 

		var name1;
		var name2;

		opt1 = randi(1,6);
		opt2 = randi(1,6);

		if(opt1 === 1) name1 = "Edgardo";
		if(opt1 === 2) name1 = "Edmundo";
		if(opt1 === 3) name1 = "Tizóc";
		if(opt1 === 4) name1 = "Elióstanes";
		if(opt1 === 5) name1 = "Wilfredo";
		if(opt1 === 6) name1 = "Justino";

		if(opt2 === 1) name2 = "Gato";
		if(opt2 === 2) name2 = "Rata";
		if(opt2 === 3) name2 = "Chapulín";
		if(opt2 === 4) name2 = "Ricachón";
		if(opt2 === 5) name2 = "Justo";
		if(opt2 === 6) name2 = "Mancebo";

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: CONTEO </gray><br>";
		QUESTION += "<br>";
		QUESTION += name1 + " el " + name2 + " tiene: <br><br>"
		QUESTION += camisetas + " camisetas diferentes. <br>";
		QUESTION += pantalones + " pantalones diferentes. <br>";
		QUESTION += gorras + " gorras diferentes. <br>";
		QUESTION += tennis + " pares de tennis diferentes. <br>";
		QUESTION += "<br>";
		QUESTION += "¿De cuantas formas diferentes se puede vestir " + name1 + "? <br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += permutaciones;

	}

}

//------------------------------------------------------------------------------
function prob_triangulos()
{

	var rnd = randi(1,11);

	if(rnd === 1)
	{
		var L1 = randi(2,20); //base
		var L2 = randi(2,20); //lado
		var L3 = randi(2,20); //lado

		var myAns = triang(L1, L2, L3);

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿Existe el siguiente Triángulo?<br>";
		QUESTION += "<br>";
		QUESTION += "Lado 1 = <b>" + L1 + "</b><br>";
		QUESTION += "Lado 2 = <b>" + L2 + "</b><br>";
		QUESTION += "Lado 3 = <b>" + L3 + "</b><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += myAns;
	}

	if(rnd === 2)
	{

		var b = randi(2,14); // base
		var a = randi(2,14); // altura
		var A = b*a/2.0; // area

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área de un Triángulo:<br>";
		QUESTION += "<br>";
		QUESTION += "Base: <b>" + b + "</b><br>";
		QUESTION += "Altura: <b>" + a + "</b><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += A;
	}


	if(rnd === 3)
	{ // triang isóceles

		while(1){

			var L1 = randi(1,30); 
			var L2 = randi(1,30); 
			var L3 = randi(1,30); 

			var existe = triang_rect(L1,L2,L3);
			if( existe === "SI" ) break;
		}

		if( L1 > L2 && L1 > L3)	
		{
			var hyp = L1;
			var C1 = L2;
			var C2 = L3;
		}
			
		if( L2 > L1 && L2 > L3)
		{
			var hyp = L2;
			var C1 = L1;
			var C2 = L3;
		}

		if( L3 > L1 && L3 > L2)
		{
			var hyp = L3;
			var C1 = L1;
			var C2 = L2;
		}

		var BASE = 2*C1;
		var ALTURA = C2;
		var LADO = hyp;
		var AREA = BASE*ALTURA/2.0;
		var PERIMETRO = 2*LADO + BASE;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área, el Perímetro y la Hipotenusa <br>";
		QUESTION += "del siguiente Triángulo Isóceles:<br>";
		QUESTION += "<br>";
		QUESTION += "Base: <b> " + BASE + "</b><br>";
		QUESTION += "Lado: <b> " + LADO + "</b><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Área: <b>" + round2(AREA) + "</b><br>";
		ANSWER += "Perímetro: <b>" + round2(PERIMETRO) + "</b><br>";
		ANSWER += "Altura: <b>" + round2(ALTURA) + "</b><br>";

	}

	if(rnd === 4)
	{ // triang equilatero

		while(1)
		{
			var hyp = randi(1,20);
			if( hyp%2 === 0) break;	
		}
		
		var ALTURA = Math.sqrt( hyp*hyp - (hyp/2.0)*(hyp/2.0) );
		var LADO = hyp;
		var AREA = LADO*ALTURA/2.0;
		var PERIMETRO = 3*LADO;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área, el Perímetro y la Altura <br>";
		QUESTION += "del siguiente Triángulo Equilatero:<br>";
		QUESTION += "<br>";
		QUESTION += "Lado: <b> " + LADO + "</b><br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Área: <b>" + round2(AREA) + "</b><br>";
		ANSWER += "Perímetro: <b>" + round2(PERIMETRO) + "</b><br>";
		ANSWER += "Altura: <b>" + round2(ALTURA) + "</b><br>";

	}

	if(rnd === 5)
	{ // triang escaleno

		while(1){

			var L1 = randi(1,12); 
			var L2 = randi(1,12); 
			var L3 = randi(1,12); 

			var existe = triang(L1,L2,L3);
			if( existe === "SI" && L1 !== L2 && L1 !== L3 && L2 !== L3) break;
		}

		var P = L1 + L2 + L3;
		var s = P/2.0;
		var A = Math.sqrt( s*(s-L1)*(s-L2)*(s-L3) ); // formula Heron

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área y el Perímetro <br>";
		QUESTION += "del siguiente Triángulo Escaleno:<br>";
		QUESTION += "<br>";
		QUESTION += "Lado 1 = <b>" + L1 + "</b><br>";
		QUESTION += "Lado 2 = <b>" + L2 + "</b><br>";
		QUESTION += "Lado 3 = <b>" + L3 + "</b><br>";


		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Área: <b>" + round2(A) + "</b><br>";
		ANSWER += "Perímetro: <b>" + round2(P) + "</b><br>";

	}


	if(rnd === 6)
	{ // triang rect

		while(1){

			var L1 = randi(1,30); 
			var L2 = randi(1,30); 
			var L3 = randi(1,30); 

			var existe = triang_rect(L1,L2,L3);
			if( existe === "SI" ) break;
		}

		if( L1 > L2 && L1 > L3)	
		{
			var hyp = L1;
			var C1 = L2;
			var C2 = L3;
		}
			
		if( L2 > L1 && L2 > L3)
		{
			var hyp = L2;
			var C1 = L1;
			var C2 = L3;
		}

		if( L3 > L1 && L3 > L2)
		{
			var hyp = L3;
			var C1 = L1;
			var C2 = L2;
		}

		var P = L1 + L2 + L3;
		var A = C1*C2/2.0;

		var alt_hyp = C1*C2/hyp;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Área, el Perímetro y la Hipotenusa <br>";
		QUESTION += "del siguiente Triángulo Rectángulo:<br>";
		QUESTION += "<br>";
		QUESTION += "Cateto 1 = <b>" + C1 + "</b><br>";
		QUESTION += "Cateto 2 = <b>" + C2 + "</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuál es la altura de la hipotenusa?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "Área: <b>" + round2(A) + "</b><br>";
		ANSWER += "Perímetro: <b>" + round2(P) + "</b><br>";
		ANSWER += "Hipotenusa: <b>" + round2(hyp) + "</b><br>";
		ANSWER += "<br>";
		ANSWER += "Altura de la Hipotenusa: <b>" + round2(alt_hyp) + "</b><br>";

	}

	if(rnd === 7)
	{
		while(1)
		{
			var A1_i = randi(5,180); 
			var A2_i = randi(5,180); 
			if( (A1_i + A2_i) < 180) break;
		}

		var A3_i = 180 - (A1_i + A2_i);

		var A1_e = 180 - A1_i;			
		var A2_e = 180 - A2_i;
		var A3_e = 180 - A3_i;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un Triángulo tiene los siguientes ángulos <b>internos</b>:<br>";
		QUESTION += "<br>";
		QUESTION += "primero: <b>" + A1_i + "°</b><br>";
		QUESTION += "segundo: <b>" + A2_i + "°</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el tercer Ángulo interno?<br>";
		QUESTION += "¿Cuánto mide el tercer Ángulo externo?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "interno: <b>" + A3_i + "°</b><br>";
		ANSWER += "externo: <b>" + A3_e + "°</b><br>";
	}

	if(rnd === 8) 
	{
		while(1)
		{
			var A1_i = randi(5,180); 
			var A2_i = randi(5,180); 
			if( (A1_i + A2_i) < 180) break;
		}

		var A3_i = 180 - (A1_i + A2_i);

		var A1_e = 180 - A1_i;			
		var A2_e = 180 - A2_i;
		var A3_e = 180 - A3_i;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un Triángulo tiene los siguientes ángulos <b>externos</b>:<br>";
		QUESTION += "<br>";
		QUESTION += "primero: <b>" + A1_e + "°</b><br>";
		QUESTION += "segundo: <b>" + A2_e + "°</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el tercer Ángulo interno?<br>";
		QUESTION += "¿Cuánto mide el tercer Ángulo externo?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "interno: <b>" + A3_i + "°</b><br>";
		ANSWER += "externo: <b>" + A3_e + "°</b><br>";
	}

	if(rnd === 9)
	{

		var A1 = randi(5,180); 

		var A2 = 180 - A1;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "El ángulo interno de un Triángulo es:<br>";
		QUESTION += "<br>";
		QUESTION += "<b>" + A1 + "°</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el ángulo externo correspondiente?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<b>" + A2 + "°</b><br>";
	}


	if(rnd === 10)
	{

		while(1){

			var L1 = randi(1,30); 
			var L2 = randi(1,30); 
			var L3 = randi(1,30); 

			var existe = triang_rect(L1,L2,L3);
			if( existe === "SI" ) break;
		}

		if( L1 > L2 && L1 > L3)	
		{
			var hyp_a = L1;
			var base_a = L2;
			var alt_a = L3;
		}
			
		if( L2 > L1 && L2 > L3)
		{
			var hyp_a = L2;
			var base_a = L1;
			var alt_a = L3;
		}

		if( L3 > L1 && L3 > L2)
		{
			var hyp_a = L3;
			var base_a = L1;
			var alt_a = L2;
		}

		while(1)
		{
			var factor = randi(3,9);
			if( factor%2 !== 0) break;
		}
		
		if(randi(1,2) === 1){ factor = factor/2.0; }

		var hyp_b = hyp_a*factor;
		var base_b = base_a*factor;
		var alt_b = alt_a*factor;

		a_poste = alt_a;
		s_poste = base_a;
		a_edificio = alt_b;
		s_edificio = base_b;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: triángulos semejantes</gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un poste de " + a_poste + " m de altura <br>proyecta una sombra de " + s_poste + " m de longitud.<br><br>";
		QUESTION += "Al mismo tiempo, <br>un edificio proyecta una sombra de " + s_edificio + " m de longitud. <br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide la altura del edificio?<br>";


		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += a_edificio + " m de altura.<br>";
	}


	if(rnd === 11)
	{

		while(1)
		{

			var L1 = randi(1,30); 
			var L2 = randi(1,30); 
			var L3 = randi(1,30); 

			var existe = triang_rect(L1,L2,L3);
			if( existe === "SI" ) break;
		}

		if( L1 > L2 && L1 > L3)	
		{
			var hyp_a = L1;
			var base_a = L2;
			var alt_a = L3;
		}
			
		if( L2 > L1 && L2 > L3)
		{
			var hyp_a = L2;
			var base_a = L1;
			var alt_a = L3;
		}

		if( L3 > L1 && L3 > L2)
		{
			var hyp_a = L3;
			var base_a = L1;
			var alt_a = L2;
		}

		var factor = randi(2,9);

		var hyp_b = hyp_a*factor;
		var base_b = base_a*factor;
		var alt_b = alt_a*factor;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: triángulos semejantes</gray><br>";
		QUESTION += "<br>";
		QUESTION += "Triángulo A:<br>";
		QUESTION += "Altura: <b>" + alt_a + "</b><br>";
		QUESTION += "Base: <b>" + base_a + "</b><br>";
		QUESTION += "Hipotenusa: <b>?</b><br>";
		QUESTION += "<br>";
		QUESTION += "Triángulo B:<br>";
		QUESTION += "Altura: <b>?</b><br>";
		QUESTION += "Base: <b>?</b><br>";
		QUESTION += "Hipotenusa: <b>" + hyp_b + "</b><br>";


		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br><br>";		
		ANSWER += "Triángulo A:<br>";
		ANSWER += "Altura: <b>" + alt_a + "</b><br>";
		ANSWER += "Base: <b>" + base_a + "</b><br>";
		ANSWER += "Hipotenusa: <b>" + round2(hyp_a) + "</b><br>";
		ANSWER += "<br>";
		ANSWER += "Triángulo B:<br>";
		ANSWER += "Altura: <b>" + round2(alt_b) + "</b><br>";
		ANSWER += "Base: <b>" + round2(base_b) + "</b><br>";
		ANSWER += "Hipotenusa: <b>" + hyp_b + "</b><br><br>";

	}



}

//------------------------------------------------------------------------------
function prob_cuadrilateros()
{

	var rnd = randi(1,10);

	if(rnd === 1){

		var L = randi(1,20);
		var A = L*L;
		var P = 4*L;
		var d = Math.sqrt(L*L + L*L);

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

		var L = randi(1,20);
		var A = L*L;
		var P = 4*L;
		var d = Math.sqrt(L*L + L*L);

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

		var L = randi(1,20);
		var A = L*L;
		var P = 4*L;
		var d = Math.sqrt(L*L + L*L);

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
		ANSWER += round2(d);
	}

	if(rnd === 4){

		// var Lmenor = randi(1,10);
		// var Lmayor = Lmenor + randi(1,10);
		// var A = Lmenor * Lmayor;
		// var P = 2*Lmenor + 2*Lmayor;
		// var d = Math.sqrt(Lmenor*Lmenor + Lmayor*Lmayor);

		while(1){

			var L1 = randi(1,40); 
			var L2 = randi(1,40); 
			var L3 = randi(1,40); 

			var existe = triang_rect(L1,L2,L3);
			if( existe === "SI" ) break;
		}

		if( L1 > L2 && L1 > L3)	
		{
			var hyp = L1;
			var C1 = L2;
			var C2 = L3;
		}
			
		if( L2 > L1 && L2 > L3)
		{
			var hyp = L2;
			var C1 = L1;
			var C2 = L3;
		}

		if( L3 > L1 && L3 > L2)
		{
			var hyp = L3;
			var C1 = L1;
			var C2 = L2;
		}

		var P = 2*C1 + 2*C2;
		var A = C1*C2;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Calcular el Perímetro, el Área,<br>";
		QUESTION += "y la Diagonal del siguiente Rectángulo:<br>";
		QUESTION += "<br>";
		QUESTION += "Base: " + C1 + "<br>";
		QUESTION += "Altura: " + C2 + "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "P = " + P + "<br>";
		ANSWER += "A = " + A + "<br>";
		ANSWER += "D = " + round2(hyp);

	}

	if(rnd === 5){

		var Lmenor = randi(1,10);
		var Lmayor = Lmenor + randi(1,10);
		var A = Lmenor * Lmayor;
		var P = 2*Lmenor + 2*Lmayor;
		var d = Math.sqrt(Lmenor*Lmenor + Lmayor*Lmayor);
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

	if(rnd === 6){

		var Lmenor = randi(1,10);
		var Lmayor = Lmenor + randi(1,10);
		var A = Lmenor * Lmayor;
		var P = 2*Lmenor + 2*Lmayor;
		var d = Math.sqrt(Lmenor*Lmenor + Lmayor*Lmayor);
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

	if(rnd === 7){

		while(1)
		{
			var A1 = randi(5,360);
			var A2 = randi(5,360);
			var A3 = randi(5,360);
			if( (A1+A2+A3) < 360 ) break;
		}
		var A4 = 360 - (A1+A2+A3); 

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un cuadrilatero tiene los siguientes ángulos:<br>";
		QUESTION += "<br>";
		QUESTION += "Primero: <b> " + A1 + "°</b><br>";
		QUESTION += "Segundo: <b> " + A2 + "°</b><br>";
		QUESTION += "Tercero: <b> " + A3 + "°</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el Cuarto?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += A4 + "°<br>";;

	}

	if(rnd === 8){

		var Base = randi(4,12);
		var Altura = randi(4,12);
		var Area = Base*Altura;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un Paralelogramo tiene las siguientes medidas:<br>";
		QUESTION += "<br>";
		QUESTION += "Base: <b> " + Base + "</b><br>";
		QUESTION += "Altura: <b> " + Altura + "</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el Área del Paralelogramo?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += Area + "<br>";;

	}

	if(rnd === 9){

		while(1)
		{
			var Diag_mayor = randi(4,12);
			var Diag_menor = randi(4,12);
			if( Diag_mayor > Diag_menor) break;
		}

		var Area = Diag_mayor*Diag_mayor/2.0;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un Rombo tiene las siguientes medidas:<br>";
		QUESTION += "<br>";
		QUESTION += "Diagonal mayor: <b> " + Diag_mayor + "</b><br>";
		QUESTION += "Diagonal menor: <b> " + Diag_menor + "</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el Área del Rombo?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += Area + "<br>";;

	}

	if(rnd === 10){

		while(1)
		{
			var base_mayor = randi(4,12);
			var base_menor = randi(4,12);
			if( base_mayor > base_menor) break;
		}

		var alt = randi(2,12);

		var Area = alt*(base_mayor + base_menor)/2.0;

		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "Un Trapecio tiene las siguientes medidas:<br>";
		QUESTION += "<br>";
		QUESTION += "Base mayor: <b> " + base_mayor + "</b><br>";
		QUESTION += "Base menor: <b> " + base_menor + "</b><br>";
		QUESTION += "Altura: <b> " + alt + "</b><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuánto mide el Área del Trapecio?<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += Area + "<br>";;

	}

}


//------------------------------------------------------------------------------
function prob_poligonos()
{

	rnd = randi(1,2);

	//rnd = 2;

	if(rnd === 1)
	{

		var lados = randi(3,12);

		if( lados === 3 ) var name = "TRIÁNGULO";
		if( lados === 4 ) var name = "CUADRILATERO";
		if( lados === 5 ) var name = "PENTÁGONO";
		if( lados === 6 ) var name = "HEXÁGONO";
		if( lados === 7 ) var name = "HEPTÁGONO";
		if( lados === 8 ) var name = "OCTÁGONO";
		if( lados === 9 ) var name = "NONÁGONO";
		if( lados === 10 ) var name = "DECÁGONO";
		if( lados === 11 ) var name = "UNDECÁGONO";
		if( lados === 12 ) var name = "DODECÁGONO";


		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cómo se llama el polígono de <b>" + lados + "</b> lados?<br>";
		QUESTION += "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += name + "<br>";

	}

	if(rnd === 2)
	{

		var lados = randi(3,12);

		if( lados === 3 ) var name = "TRIÁNGULO";
		if( lados === 4 ) var name = "CUADRILATERO";
		if( lados === 5 ) var name = "PENTÁGONO";
		if( lados === 6 ) var name = "HEXÁGONO";
		if( lados === 7 ) var name = "HEPTÁGONO";
		if( lados === 8 ) var name = "OCTÁGONO";
		if( lados === 9 ) var name = "NONÁGONO";
		if( lados === 10 ) var name = "DECÁGONO";
		if( lados === 11 ) var name = "UNDECÁGONO";
		if( lados === 12 ) var name = "DODECÁGONO";

		var diagonales = lados*(lados - 3)/2;


		QUESTION  = "";
		QUESTION += "<gray>PROBLEMA: </gray><br>";
		QUESTION += "<br>";
		QUESTION += "¿Cuántas diagonales tiene un <b>" + name + "</b>?<br>";
		QUESTION += "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA: </gray><br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += "<br>";
		ANSWER += diagonales + "<br>";;

	}


}

//------------------------------------------------------------------------------
function prob_otros()
{
}


//------------------------------------------------------------------------------
function prob_porcentaje()
{
	var rnd = randi(1,6);

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


	if(rnd=== 4){

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

	if(rnd === 5)
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

	if(rnd === 6){ //descuentos

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
			ANSWER += round2(d);
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
			ANSWER += "D = " + round2(d);
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
			ANSWER += "a = " + round2(a) + "<br>";
			ANSWER += "P = " + round2(P) + "<br>";
			ANSWER += "A = " + round2(A);
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
			ANSWER += "hyp = " + round2(h) + "<br>";
			ANSWER += "P = " + round2(P) + "<br>";
			ANSWER += "A = " + round2(A);
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
	//La suma de dos lados siempre debe ser mayor que el lado restante.


	if( (b+c)>a && (a+c)>b && (a+b)>c )
		var ans = "SI";
	else
		var ans = "NO";

	return ans;

}

//------------------------------------------------------------------------------
function triang_rect(a,b,c){

	var ans = "NO";

	if( a*a === (b*b + c*c) ) 
	{ 
		ans = "SI"; 
		return ans;
	}
	else
	{
		ans = "NO";
	}

	if( b*b === (a*a + c*c) ) 
	{ 
		ans = "SI"; 
		return ans;
	}
	else
	{
		ans = "NO";
	}		

	if( c*c === (b*b + a*a) ) 
	{ 
		ans = "SI"; 
		return ans;
	}
	else
	{
		ans = "NO";
	}

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
function randf(max) 
{

	var R;
	var entero;
	var decimal;

	entero = randi0(0,max);
	decimal = randi(0,9);

	R = entero + decimal/10.0;

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



