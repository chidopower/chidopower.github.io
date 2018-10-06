//----------------------------------------------------------- Variables Globales
var Mapa=""; 
var Quiz="";
var NT=1; // numeto total de preguntas
var N; // numero de pregunta actual
var P=[""]; //las preguntas
var R=[""]; //las respuestas
var C=[];  //contar preguntas
var PFV=[""]; //las preguntas Falso-Verdadero
var RFV=[""]; //las respuestas Falso-Verdadero
var i=0;    //contador de preguntas
var juegoTerminado="no";
var mostrado="no";
var wins=0;
var fails=0;
var opcionQuiz3;//utilidad para Quiz==="Quiz3"

//------------------------------------------------------------------------------
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//------------------------------------------------------------------------------
function iniciar(){

   i=0; //contador
	fails=0;
	wins=0;

   C=[];
   P=[];
   R=[];
   console.log("inicio() ",C);

   Mapa=document.getElementById("Mapa").value;
   Quiz=document.getElementById("Quiz").value;

   juegoTerminado="no";

   cargarPreguntas();
   if(Quiz==="QuizFV")
      cargarPreguntasFV();
   siguientePregunta();

}


//------------------------------------------------------------------------------
function siguientePregunta(){

	if(juegoTerminado==="no"){

		if(Quiz==="En Orden")
			preguntarEnOrden();
		if(Quiz==="Quiz1")
			preguntarQuiz1();
		if(Quiz==="Quiz2")
			preguntarQuiz2();
      if(Quiz==="Quiz3")
         preguntarQuiz3();
      if(Quiz==="QuizFV")
         preguntarQuizFV();
	
      i++;

	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;

	}

}


//------------------------------------------------------------------------------
function preguntarEnOrden(){

   var x;

   x = document.getElementById("Pregunta");
   x.style.display = "block";

   x = document.getElementById("botonGris");
   x.style.display = "block";

   x = document.getElementById("Respuesta");
   x.style.display = "none";

   x = document.getElementById("enLosBotones");
   x.style.display = "none";

   x = document.getElementById("botonRojo");
   x.style.display = "none";

   x = document.getElementById("botonAzul");
   x.style.display = "none";
   
	document.getElementById("enLosBotones").innerHTML = "";
	document.getElementById("botonAzul").innerHTML = "...";
	document.getElementById("botonRojo").innerHTML = "...";
	document.getElementById("Respuesta").innerHTML = "";

	if(i<NT){
		document.getElementById("Pregunta").innerHTML =
		"<red>"+ R[i] +"</red>, <blue>" + P[i]+"</blue>";
		document.getElementById("botonGris").innerHTML =
		"Siguiente";

	}else{
		document.getElementById("Pregunta").innerHTML =
		"¡Se terminó!";
		document.getElementById("botonGris").innerHTML =
		"...";
		juegoTerminado="si";
	}

}

//------------------------------------------------------------------------------
function preguntarQuiz1(){


   x = document.getElementById("Pregunta");
   x.style.display = "block";

   x = document.getElementById("botonGris");
   x.style.display = "block";

   x = document.getElementById("Respuesta");
   x.style.display = "none";

   x = document.getElementById("enLosBotones");
   x.style.display = "none";

   x = document.getElementById("botonRojo");
   x.style.display = "none";

   x = document.getElementById("botonAzul");
   x.style.display = "none";


	if(hayMasPreguntas()==="si"){
		
		document.getElementById("botonGris").innerHTML ="Mostrar";
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonAzul").innerHTML = "...";
	   seleccionarPregunta();
	   document.getElementById("Pregunta").innerHTML = 
      "La capital de <blue>" + P[N] + "</blue> es:";
	   document.getElementById("Respuesta").innerHTML = "";
		mostrado="no";


	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";

	}

}

//------------------------------------------------------------------------------
function preguntarQuiz2(){


	if(hayMasPreguntas()==="si"){
		
		document.getElementById("botonGris").innerHTML ="Mostrar";
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonAzul").innerHTML = "...";
	    seleccionarPregunta();
	    document.getElementById("Pregunta").innerHTML = "<red>"+R[N] + "</red>  es la Capital de:";
	    document.getElementById("Respuesta").innerHTML = "";
		mostrado="no";


	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";

	}

}

//------------------------------------------------------------------------------
function preguntarQuizFV(){


	if(hayMasPreguntas()==="si"){
		
		document.getElementById("botonGris").innerHTML ="...";
		document.getElementById("enLosBotones").innerHTML = "Errores: "+fails;
		document.getElementById("botonRojo").innerHTML = "F";
		document.getElementById("botonAzul").innerHTML = "V";
	   seleccionarPregunta();
	   document.getElementById("Pregunta").innerHTML = "¿Falso o Verdadero?";
	   document.getElementById("Respuesta").innerHTML = PFV[N];
		mostrado="no";


	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;

	}

}


//------------------------------------------------------------------------------
function preguntarQuiz3(){
   
   opcionQuiz3=aleatorio(1,2);
   
   if(opcionQuiz3===1)
      preguntarQuiz1();
   else
      preguntarQuiz2();
}

//------------------------------------------------------------------------------
function cargarPreguntasFV(){
   
   var myRnd;
   var salirDelWhile;
   var PFV_falso;
   var PFV_verdadero;

  
   for(var k=0; k<NT; k++){
      
      salirDelWhile="no";
      while(salirDelWhile==="no"){//obj: obtener pregunta FALSA
         myRnd = aleatorio(0,NT-1);
         if(myRnd===k){
            salirDelWhile="no";
         }else{
            if(aleatorio(1,2)===1)
               PFV_falso = "<red>" + R[k] + "</red> es la Capital de <blue>" + P[myRnd] + "</blue>.";
            else
               PFV_falso = "La Capital de <blue>" + P[myRnd] + "</blue> es <red>" + R[k] + "</red>.";
            salirDelWhile="si";
         }         
      }//while
      
      if(aleatorio(1,2)===1)
         PFV_verdadero = "La Capital de <blue>" + P[k]+"</blue> es <red>"+R[k]+"</red>.";
      else
         PFV_verdadero = "<red>"+R[k] + "</red> es la Capital de <blue>" + P[k]+"</blue>.";
   
      if(aleatorio(1,2)===1){
         PFV[k] = PFV_falso;
         RFV[k] = "F";
      }else{
         PFV[k] = PFV_verdadero;
         RFV[k] = "V";         
      }
      
   }//for
   
   for(var k=0; k<NT; k++)
      console.log(k,PFV[k],RFV[k]);
   
}


//------------------------------------------------------------------------------
function botonGris(){

	mostrado="si";

    if(juegoTerminado==="no" && hayMasPreguntas()==="si"){

		if(Quiz==="En Orden"){
			siguientePregunta();
			document.getElementById("botonAzul").innerHTML = "...";
			document.getElementById("botonRojo").innerHTML = "...";
		}

		if(Quiz==="Quiz1"){
         
         var x;

         x = document.getElementById("Respuesta");
         x.style.display = "block";
         x = document.getElementById("enLosBotones");
         x.style.display = "block";
         x = document.getElementById("botonRojo");
         x.style.display = "inline";
         x = document.getElementById("botonAzul");
         x.style.display = "inline";
         
			document.getElementById("botonGris").innerHTML ="Mostrar";
			document.getElementById("Respuesta").innerHTML = "<red>"+R[N]+"</red>.";
			document.getElementById("enLosBotones").innerHTML = "¿Acertaste?";
			document.getElementById("botonRojo").innerHTML = "No";
			document.getElementById("botonAzul").innerHTML = "Si";
		}

		if(Quiz==="Quiz2"){
			document.getElementById("botonGris").innerHTML ="Mostrar";
			document.getElementById("Respuesta").innerHTML = "<blue>"+ P[N] + "</blue>.";
			document.getElementById("enLosBotones").innerHTML = "¿Acertaste?";
			document.getElementById("botonRojo").innerHTML = "No";
			document.getElementById("botonAzul").innerHTML = "Si";
		}
      
      if(Quiz==="Quiz3"){
			document.getElementById("botonGris").innerHTML ="Mostrar";
         if(opcionQuiz3===1)
            document.getElementById("Respuesta").innerHTML = "<red>"+R[N]+"</red>.";
         else
            document.getElementById("Respuesta").innerHTML = "<blue>"+P[N]+"</blue>.";
			document.getElementById("enLosBotones").innerHTML = "¿Acertaste?";
			document.getElementById("botonRojo").innerHTML = "No";
			document.getElementById("botonAzul").innerHTML = "Si";
      }

	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonGris").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;

	}

}


//------------------------------------------------------------------------------
function seleccionarPregunta(){

    var salir="no"; //para salir del ciclo while
    var k=0; //contador para el ciclo while

    while(salir==="no"){
        k++;
        N = aleatorio(0,NT-1);
		  console.log("aleatorio: ", N);
        if(C[N]>0){
            salir="si";
        }else{
            salir="no";
        }
        if(k>=10*NT){
			console.log("kmax? ",k);
         salir="si";
         document.getElementById("Pregunta").innerHTML = "¡Ya no hay más preguntas!";
			document.getElementById("botonGris").innerHTML ="...";
         juegoTerminado="si";
         console.log("GAME OVER!");
			document.getElementById("botonGris").innerHTML ="...";
			document.getElementById("Respuesta").innerHTML ="";
			document.getElementById("Pregunta").innerHTML ="";
			document.getElementById("enLosBotones").innerHTML = "";
			document.getElementById("botonRojo").innerHTML = "...";
			document.getElementById("botonAzul").innerHTML = "...";
        }
    }   	

    if(juegoTerminado==="no"){
		console.log("seleccionarPregunta() ",N);
    }else{
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;
      
    }

}

//----------------------------------------------------------
function hayMasPreguntas(){

	var answer;
	var k;
	var suma=0;

	for(k=0; k<C.length; k++)
		suma += C[k];

	if(suma>0)
		answer="si";

	if(suma<=0)
		answer="no";

	console.log("hayMasPreguntas() ", suma, answer);

	return answer;


}

//------------------------------------------------------------------------------
function cargarPreguntas(){
   
   var TP=[]; //Mapa==="Todo America"
   var TR=[]; //Mapa==="Todo America"

	if(Mapa==="Norte America" || Mapa==="Todo America"){
		
      P[0]="Canadá"; R[0]="Ottawa";
		P[1]="Estados Unidos de America"; R[1]="Washington D. C.";
		P[2]="México"; R[2]="Ciudad de México";		
      
      for(var k=0;k<P.length;k++){
         TP.push(P[k]);
         TR.push(R[k]);
      }
	}

	if(Mapa==="Centro America" || Mapa==="Todo America"){

		P[0]="Belice"; R[0]="Belmopán";
		P[1]="Costa Rica"; R[1]="San José";
		P[2]="El Salvador"; R[2]="San Salvador";
		P[3]="Guatemala"; R[3]="Ciudad de Guatemala";
		P[4]="Honduras"; R[4]="Tegucigalpa";
		P[5]="Nicaragua"; R[5]="Managua";
		P[6]="Panamá"; R[6]="Panama";

      for(var k=0;k<P.length;k++){
         TP.push(P[k]);
         TR.push(R[k]);
      }
      
	}

	if(Mapa==="Sur America" || Mapa==="Todo America"){

      P[0]="Argentina"; R[0]="Buenos Aires";
		P[1]="Bolivia"; R[1]="Sucre y La Paz";
		P[2]="Brasil"; R[2]="Brasilia";
		P[3]="Chile"; R[3]="Santiago de Chile";
		P[4]="Colombia"; R[4]="Bogotá";
		P[5]="Ecuador"; R[5]="Quito";
		P[6]="Guyana"; R[6]="Georgetown";
		P[7]="Paraguay"; R[7]="Asunción";
		P[8]="Perú"; R[8]="Lima";
		P[9]="Surinam"; R[9]="Paramaribo";
		P[10]="Uruguay"; R[10]="Montevideo";
		P[11]="Venezuela"; R[11]="Caracas";

      for(var k=0;k<P.length;k++){
         TP.push(P[k]);
         TR.push(R[k]);
      }

   }

	if(Mapa==="Caribe America" || Mapa==="Todo America"){
		
      P[0]="Antigua y Barbuda"; R[0]="Saint John’s";
		P[1]="Bahamas"; R[1]="Nasáu";
		P[2]="Barbados"; R[2]="Bridgetown";
		P[3]="Cuba"; R[3]="La Habana";
		P[4]="Dominica"; R[4]="Roseau";
		P[5]="Granada"; R[5]="Saint George";
		P[6]="Haití"; R[6]="Puerto Príncipe";
		P[7]="Jamaica"; R[7]="Kingston";
		P[8]="República Dominicana"; R[8]="Santo Domingo";
		P[9]="San Cristóbal y Nieves"; R[9]="Basseterre";
		P[10]="San Vicente y las Granadinas"; R[10]="Kingstown";
		P[11]="Santa Lucía"; R[11]="Castries";
		P[12]="Trinidad y Tobago"; R[12]="Puerto España";

      for(var k=0;k<P.length;k++){
         TP.push(P[k]);
         TR.push(R[k]);
      }

   }

   if(Mapa==="Mexico"){
      P[0]="Aguascalientes";R[0]="Aguascalientes";
      P[1]="Baja California";R[1]="Mexicali";
      P[2]="Baja California Sur";R[2]="La Paz";
      P[3]="Campeche";R[3]="Campeche";
      P[4]="Coahuila";R[4]="Saltillo";
      P[5]="Colima";R[5]="Colima";
      P[6]="Chiapas";R[6]="Tuxtla Gutiérrez";
      P[7]="Chihuahua";R[7]="Chihuahua";
      P[8]="Distrito Federal";R[8]="Ciudad de México";
      P[9]="Durango";R[9]="Durango";
      P[10]="Guanajuato";R[10]="Guanajuato";
      P[11]="Guerrero";R[11]="Chilpancingo";
      P[12]="Hidalgo";R[12]="Pachuca";
      P[13]="Jalisco";R[13]="Guadalajara";
      P[14]="México";R[14]="Toluca";
      P[15]="Michoacán";R[15]="Morelia";
      P[16]="Morelos";R[16]="Cuernavaca";
      P[17]="Nayarit";R[17]="Tepic";
      P[18]="Nuevo León";R[18]="Monterrey";
      P[19]="Oaxaca";R[19]="Oaxaca";
      P[20]="Puebla";R[20]="Puebla";
      P[21]="Querétaro";R[21]="Querétaro";
      P[22]="Quintana Roo";R[22]="Chetumal";
      P[23]="San Luis Potosí";R[23]="San Luis Potosí";
      P[24]="Sinaloa";R[24]="Culiacán";
      P[25]="Sonora";R[25]="Hermosillo";
      P[26]="Tabasco";R[26]="Villahermosa";
      P[27]="Tamaulipas";R[27]="Ciudad Victoria";
      P[28]="Tlaxcala";R[28]="Tlaxcala";
      P[29]="Veracruz";R[29]="Xalapa";
      P[30]="Yucatán";R[30]="Mérida";
      P[31]="Zacatecas";R[31]="Zacatecas";

   }
    

   if(Mapa==="Todo America"){
      NT=TP.length;
      P=TP;
      R=TR;
      console.log(P);
      if(i===0){
         C = [];
         for(var j=0;j<NT;j++)
             C[j]=2;
      }            
   }else{
      NT=P.length;
      if(i===0){
         C = [];
         for(var j=0;j<NT;j++)
             C[j]=2;
      }      
   }
    

	console.log("cargarPreguntas(), NT: ", NT, C);

}


//------------------------------------------------------------------------------
function botonRojo(){

	if(Quiz==="En Orden"){}

	if(hayMasPreguntas()==="si"){

		if(Quiz==="Quiz1" || Quiz==="Quiz2"  || Quiz==="Quiz3"){
			if(juegoTerminado==="no" && mostrado==="si"){
				C[N] += 1;
			    siguientePregunta();
			    console.log(C);
			}
		}

		if(Quiz==="QuizFV"){

			if(RFV[N]==="F"){
				C[N] -= 1;
				wins++;
			}else{
				C[N] += 1;
				fails++;
			}

			siguientePregunta();
			console.log(C);
		}		
	}else{
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonGris").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;

   }



}

//------------------------------------------------------------------------------
function botonAzul(){

	if(Quiz==="En Orden"){}

	if(hayMasPreguntas()==="si"){		

		if(Quiz==="Quiz1"  || Quiz==="Quiz2" || Quiz==="Quiz3"){
			if(juegoTerminado==="no" && mostrado==="si"){
				C[N] -= 1;
			    siguientePregunta();
			    console.log(C);
			}
		}

		if(Quiz==="QuizFV"){
			if(RFV[N]==="V"){
				C[N] -= 1;
				wins++;
			}else{
				C[N] += 1;
				fails++;
			}
			siguientePregunta();
			console.log(C);
		}
	}else{
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonGris").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;

	}
}

