//----------------------------------------------------------- Variables Globales
var Tema=""; // "Tema 1", "Tema 2", "Tema 3"
var Quiz=""; // "Falso & Verdadero", "Ejercicios"
var NT=1; // numeto total de preguntas
var N; // numero de pregunta actual
var N10=[]; // seleccionar 10 preguntas
var P=[""]; //las preguntas
var R=[""]; //las respuestas
var C=[];  //contar preguntas
var PFV=[""]; //las preguntas Falso-Verdadero
var RFV=[""]; //las respuestas Falso-Verdadero
var i=0;    //contador de preguntas
var iextra=0; //contar pregunta extra
var juegoTerminado="no";
var mostrado="no"; //ya se mostró la respuesta?
var wins=0;
var fails=0;
var Examen="";

//------------------------------------------------------------------------------
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//------------------------------------------------------------------------------
function iniciar(){

   i=0; //contador
	fails=0;
	wins=0;
   juegoTerminado="no";

   C=[];
   P=[];
   R=[];
   PFV=[];
   RFV=[];
   N10=[];
   console.log("inicio() ",C);
   Examen="<br><br>";

   Tema=document.getElementById("Tema").value;
   Quiz=document.getElementById("Quiz").value;

   cargarPreguntas();
   siguientePregunta();

}

//------------------------------------------------------------------------------
function cargarPreguntas(){
   
   if(Quiz==="Falso & Verdadero")
      cargarFalsoVerdadero();

  console.log("NT: ",NT);
      
}
   
//******************************************************************************
function cargarFalsoVerdadero(){
   
   
   if(Tema==="Tema 1"){}
   
   if(Tema==="Tema 2"){

      //--- Sistemas, Verdadero

      PFV.push("Es posible intercambiar materia entre un sistema abierto y su entorno.");
      RFV.push("V");

      PFV.push("Es posible intercambiar materia entre un sistema abierto y su entorno.");
      RFV.push("V");

      PFV.push("Es posible intercambiar energía entre un sistema abierto y su entorno.");
      RFV.push("V");

      PFV.push("Es imposible intercambiar materia entre un sistema cerrado y su entorno.");
      RFV.push("V");
      
      PFV.push("Es imposible intercambiar energía entre un sistema aislado y su entorno.");
      RFV.push("V");

      PFV.push("Es imposible intercambiar materia entre un sistema aislado y su entorno.");
      RFV.push("V");
   
      //--- Sistemas, Falso

      PFV.push("Es imposible intercambiar materia entre un sistema abierto y su entorno.");
      RFV.push("F");

      PFV.push("Es imposible intercambiar materia entre un sistema abierto y su entorno.");
      RFV.push("F");

      PFV.push("Es imposible intercambiar energía entre un sistema abierto y su entorno.");
      RFV.push("F");

      PFV.push("Es posible intercambiar materia entre un sistema cerrado y su entorno.");
      RFV.push("F");
      
      PFV.push("Es posible intercambiar energía entre un sistema aislado y su entorno.");
      RFV.push("F");

      PFV.push("Es posible intercambiar materia entre un sistema aislado y su entorno.");
      RFV.push("F");
      
      //--- Fronteras, Verdadero

      PFV.push("Es posible la transferencia de calor a través de una frontera diatérmica.");
      RFV.push("V");

      PFV.push("Es imposible la transferencia de calor a través de una frontera adiabática.");
      RFV.push("V");

      PFV.push("El calor se puede transferir a través de una frontera diatérmica.");
      RFV.push("V");

      PFV.push("El calor no se puede transferir a través de una frontera adiabática.");
      RFV.push("V");
      
      //--- Fronteras, Falso

      PFV.push("Es imposible la transferencia de calor a través de una frontera diatérmica.");
      RFV.push("F");

      PFV.push("Es posible la transferencia de calor a través de una frontera adiabática.");
      RFV.push("F");

      PFV.push("El calor se puede transferir a través de una frontera adiabática.");
      RFV.push("F");

      PFV.push("El calor no se puede transferir a través de una frontera diatérmica.");
      RFV.push("F");
      
      //--- Unidades, Verdadero

      PFV.push("&emsp; R = 0.08206 <i>atm L / mol K</i>.");
      RFV.push("V");

      PFV.push("&emsp; R = 8.314 <i>J / mol K</i>.");
      RFV.push("V");

      PFV.push("&emsp; R = 1.987 <i>cal / mol K</i>.");
      RFV.push("V");

      PFV.push("La energía se puede medir en <i>atm L</i>.");
      RFV.push("V");

      PFV.push("La energía se puede medir en <i>Pa m<sup>3</sup></i>.");
      RFV.push("V");  

      PFV.push("La energía se puede medir en <i>J</i>.");
      RFV.push("V");

      PFV.push("La energía se puede medir en <i>cal</i>.");
      RFV.push("V");

      PFV.push("&emsp; 1 <i>cal</i> = 4.184 <i>J</i>.");
      RFV.push("V");      

      PFV.push("&emsp; 1 <i>atm L</i> = 101.325 <i>J</i>.");
      RFV.push("V"); 

      PFV.push("La capacidad calorífica se puede medir en <i>J / °C</i>.");
      RFV.push("V");

      PFV.push("El calor específico se puede medir en <i>J / g °C</i>.");
      RFV.push("V");

      //--- Unidades, Falso

      PFV.push("&emsp; R = 0.08206 <i>J / mol K</i>.");
      RFV.push("F");

      PFV.push("&emsp; R = 8.314 <i>atm L / mol K</i>.");
      RFV.push("F");

      PFV.push("&emsp; R = 0.8206 <i>atm L / mol K</i>.");
      RFV.push("F");

      PFV.push("La energía se puede medir en <i>atm L<sup>3</sup></i>.");
      RFV.push("F");

      PFV.push("La energía se puede medir en <i>Pa m<sup>2</sup></i>.");
      RFV.push("F");  

      PFV.push("La energía se puede medir en <i>J m<sup>3</sup></i>.");
      RFV.push("F");

      PFV.push("La energía se puede medir en <i>cal m<sup>3</sup></i>.");
      RFV.push("F");

      PFV.push("&emsp; 1 <i>cal</i> = 4184 <i>J</i>.");
      RFV.push("F");      

      PFV.push("&emsp; 1 <i>atm L</i> = 101325 <i>J</i>.");
      RFV.push("F");           

      PFV.push("El calor específico se puede medir en <i>J / °C</i>.");
      RFV.push("F");

      PFV.push("La capacidad calorífica se puede medir en <i>J / g °C</i>.");
      RFV.push("F");

      //--- Energía, Verdadero

      PFV.push("El trabajo se puede interpretar como el cambio directo de energía que resulta de un proceso.");
      RFV.push("V");

      PFV.push("El calor es la transferencia de energía entre dos cuerpos que están a diferente temperatura.");
      RFV.push("V");
      
      PFV.push("La energía de un sistema se puede interpretar como su capacidad para realizar un trabajo.");
      RFV.push("V");     

      //--- Energía, Falso

      PFV.push("Sólo existen dos formas de energía: la cinética y la potencial.");
      RFV.push("F"); 

      PFV.push("El calor es la transferencia de energía entre dos cuerpos que están a la misma temperatura.");
      RFV.push("F");

      PFV.push("La energía interna de un sistema es diferente a la energía total de dicho sistema.");
      RFV.push("F"); 

      //--- 1a Ley, Verdadero

      PFV.push("La energía total del universo permanece constante.");
      RFV.push("V"); 

      PFV.push("Es posible convertir una forma de energía en otra.");
      RFV.push("V"); 

      PFV.push("La energía no se puede crear.");
      RFV.push("V"); 

      PFV.push("En un sistema aislado, la energía interna permanece constante.");
      RFV.push("V");

      PFV.push("En un sistema aislado, el cambio en la energía interna es cero.");
      RFV.push("V");

      //--- 1a Ley, Falso

      PFV.push("La energía total del universo no es constante, siempre esta cambiando.");
      RFV.push("F"); 

      PFV.push("Es imposible convertir una forma de energía en otra.");
      RFV.push("F"); 

      PFV.push("Es posible crear energía mediante el calor.");
      RFV.push("F"); 

      PFV.push("En un sistema aislado, la energía interna no permanece constante.");
      RFV.push("F");

      PFV.push("En un sistema aislado, el cambio en la energía interna es diferente de cero.");
      RFV.push("F");   

      //--- Funciones de Estado y de Trayectoria, Verdadero

      PFV.push("La energía interna es una función de estado.");
      RFV.push("V"); 

      PFV.push("La entalpía es una función de estado.");
      RFV.push("V"); 

      PFV.push("El trabajo es una función de trayectoria.");
      RFV.push("V");

      PFV.push("El calor es una función de trayectoria.");
      RFV.push("V");

      //--- Funciones de Estado y de Trayectoria, Falso

      PFV.push("La energía interna es una función de trayectoria.");
      RFV.push("F");

      PFV.push("La entalpía es una función de trayectoria.");
      RFV.push("F");

      PFV.push("El trabajo es una función de estado.");
      RFV.push("F");

      PFV.push("El calor es una función de estado.");
      RFV.push("F");     

      //--- Procesos, Verdadero

      PFV.push("Un proceso isocórico es un proceso a volumen constante.");
      RFV.push("V"); 

      PFV.push("Un proceso isobárico es un proceso a presión constante.");
      RFV.push("V"); 

      PFV.push("Un proceso endotérmico absorbe energía.");
      RFV.push("V"); 

      PFV.push("Un proceso exotérmico libera energía.");
      RFV.push("V"); 

      PFV.push("Todos los procesos naturales son irreversibles.");
      RFV.push("V"); 

      PFV.push("Un proceso a volumen constante no efectúa trabajo de expansión.");
      RFV.push("V"); 

      PFV.push("La energía interna de un gas ideal permanece constante cuando es sometido a un proceso isotérmico.");
      RFV.push("V"); 

      PFV.push("La entalpía de un gas ideal permanece constante cuando es sometido a un proceso isotérmico.");
      RFV.push("V"); 

      PFV.push("La energía interna de un gas ideal depende sólo de la temperatura.");
      RFV.push("V"); 

      PFV.push("La entalpía de un gas ideal depende sólo de la temperatura.");
      RFV.push("V"); 

      //--- Procesos, Falso

      PFV.push("Un proceso isocórico es un proceso a presión constante.");
      RFV.push("F"); 

      PFV.push("Un proceso isobárico es un proceso a volumen constante.");
      RFV.push("F"); 

      PFV.push("Un proceso endotérmico libera energía.");
      RFV.push("F"); 

      PFV.push("Un proceso exotérmico absorbe energía.");
      RFV.push("F"); 

      PFV.push("Todos los procesos naturales son reversibles.");
      RFV.push("F"); 

      PFV.push("Un proceso a volumen constante efectúa trabajo de expansión.");
      RFV.push("F");

      PFV.push("La energía interna de un gas ideal cambia cuando es sometido a un proceso isotérmico.");
      RFV.push("F"); 

      PFV.push("La entalpía de un gas ideal cambia cuando es sometido a un proceso isotérmico.");
      RFV.push("F"); 

      PFV.push("La energía interna de un gas ideal depende de al menos 2 variables.");
      RFV.push("F"); 

      PFV.push("La entalpía de un gas ideal depende de al menos 2 variables.");
      RFV.push("F");  


      //--- Convenio de signos, Verdadero

      PFV.push("Si el trabajo es positivo: el trabajo se realizó sobre el sistema.");
      RFV.push("V");

      PFV.push("Si el trabajo es negativo: el trabajo se realizó sobre los alrededores.");
      RFV.push("V");

      PFV.push("Si el calor es positivo: el proceso es endotérmico.");
      RFV.push("V");

      PFV.push("Si el calor es negativo: el proceso es exotérmico.");
      RFV.push("V");




      //--- Convenio de signos, Falso

      PFV.push("Si el trabajo es negativo: el trabajo se realizó sobre el sistema.");
      RFV.push("F");

      PFV.push("Si el trabajo es positivo: el trabajo se realizó sobre los alrededores.");
      RFV.push("F");

      PFV.push("Si el calor es negativo: el proceso es endotérmico.");
      RFV.push("F");

      PFV.push("Si el calor es positivo: el proceso es exotérmico.");
      RFV.push("F");



      //--- calorimetría, Verdadero

      PFV.push("El calor específico es un propiedad intensiva.");
      RFV.push("V");

      PFV.push("La capacidad calorífica es un propiedad extensiva.");
      RFV.push("V");

      //--- calorimetría, Falso

      PFV.push("El calor específico es un propiedad extensiva.");
      RFV.push("F");

      PFV.push("La capacidad calorífica es un propiedad intensiva.");
      RFV.push("F");


      //--- Reacciones Químicas, Verdadero

      PFV.push("Si el cambio de entalpía es positivo: la reacción química absorbe energía.");
      RFV.push("V");

      PFV.push("Si el cambio de entalpía es negativo: la reacción química libera energía.");
      RFV.push("V");

      PFV.push("Si el cambio de entalpía es positivo: la reacción química es endotérmica.");
      RFV.push("V");

      PFV.push("Si el cambio de entalpía es negativo: la reacción química es exotérmica.");
      RFV.push("V");

	  //--- Reacciones Químicas, Falso

      PFV.push("Si el cambio de entalpía es negativo: la reacción química absorbe energía.");
      RFV.push("F");

      PFV.push("Si el cambio de entalpía es positivo: la reacción química libera energía.");
      RFV.push("F");

      PFV.push("Si el cambio de entalpía es negativo: la reacción química es endotérmica.");
      RFV.push("F");

      PFV.push("Si el cambio de entalpía es positivo: la reacción química es exotérmica.");
      RFV.push("F");

   }
   
   if(Tema==="Tema 3"){}
   
   
/*   
   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();

   PFV.push();
   RFV.push();
*/

   NT=PFV.length;
   C = [];
   for(var j=0;j<NT;j++)
       C[j]=1;

   if(Quiz==="Falso & Verdadero")
      seleccionar10preguntas();
   
}

//------------------------------------------------------------
function seleccionar10preguntas(){
   
   console.log("");
   
   for(var j=0; j<10; j++){
      console.log("N10 ",j,N10);
      var myRnd;
      var salir="no";
      while(salir==="no"){
         if(j===0){
            myRnd = aleatorio(0,NT-1);
            salir="si";
         }else{
            myRnd = aleatorio(0,NT-1);
            if(N10.includes(myRnd)===false)
               salir="si";            
         }
      }//while
      N10[j] = myRnd;
   }//for j
   console.log("N10 ",N10);
}


//------------------------------------------------------------------------------
function siguientePregunta(){

	if(juegoTerminado==="no" && hayMasPreguntas()==="si"){

		if(Quiz==="Falso & Verdadero")
			preguntarFalsoVerdadero();
		if(Quiz==="Ejercicios"){}
           
      if(i===0)
         document.getElementById("Examen").innerHTML = "";
      else
         document.getElementById("Examen").innerHTML = Examen;
      
      i++;
      
	}else{

      if(Quiz==="Falso & Verdadero"){      
         x = document.getElementById("Pregunta");
         x.style.display = "block";
         x = document.getElementById("botonGris");
         x.style.display = "none";
         x = document.getElementById("Respuesta");
         x.style.display = "block";
         x = document.getElementById("enLosBotones");
         x.style.display = "block";
         x = document.getElementById("botonRojo");
         x.style.display = "none";
         x = document.getElementById("botonAzul");
         x.style.display = "none";
         document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;
         document.getElementById("Examen").innerHTML = Examen;
      }

	}

}


//------------------------------------------------------------------------------
function preguntarFalsoVerdadero(){

   var x;

   x = document.getElementById("Pregunta");
   x.style.display = "block";
   x = document.getElementById("botonGris");
   x.style.display = "none";
   x = document.getElementById("Respuesta");
   x.style.display = "block";
   x = document.getElementById("enLosBotones");
   x.style.display = "block";
   x = document.getElementById("botonRojo");
   x.style.display = "inline";
   x = document.getElementById("botonAzul");
   x.style.display = "inline";

		
   seleccionarPregunta();
   document.getElementById("Pregunta").innerHTML = "¿<red>Falso</red> o <blue>Verdadero</blue>?";
   document.getElementById("Respuesta").innerHTML = (i+1)+". "+PFV[N];
   document.getElementById("enLosBotones").innerHTML = "Errores: "+fails;
   document.getElementById("botonRojo").innerHTML = "F";
   document.getElementById("botonAzul").innerHTML = "V";
   
   Examen += (i+1)+". "+PFV[N];
	   
   mostrado="no";


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
			document.getElementById("Respuesta").innerHTML = "<blue>"+ P[N] + "</blue>.";
			document.getElementById("enLosBotones").innerHTML = "¿Acertaste?";
			document.getElementById("botonRojo").innerHTML = "No";
			document.getElementById("botonAzul").innerHTML = "Si";

      }
      
      if(Quiz==="Quiz3"){

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

    
   if(Quiz==="Falso & Verdadero")
      N = N10[i];
    
   if(Quiz==="Ejercicios"){}
    
    
/*    while(salir==="no"){
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
    }*/   	


/*    if(juegoTerminado==="no"){
		console.log("seleccionarPregunta() ",N);
    }else{
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
      if(Quiz==="QuizFV")
         document.getElementById("enLosBotones").innerHTML = "Errores: "+ fails;
      
    }*/

}

//----------------------------------------------------------
function hayMasPreguntas(){

	var answer;

   if(Quiz==="Falso & Verdadero"){
      if(i<10){
         answer="si";
      }else{
         answer="no";
         juegoTerminado="si";
      }
   }else{
      var suma=0;
      for(var k=0; k<C.length; k++)
         suma += C[k];

      if(suma>0){
         answer="si";
      }else{
         answer="no";
         juegoTerminado="si";
      }
   }
   
	return answer;

}

   
   

//------------------------------------------------------------------------------
function botonRojo(){

		if(Quiz==="Falso & Verdadero"){

			if(RFV[N]==="F"){
				C[N] -= 1;
				wins++;
            Examen += " [F] &check;<br>";
			}else{
				C[N] += 1;
				fails++;
            Examen += " [F] &#10008;<br>";
			}

			siguientePregunta();
			console.log(C);
		}		
}

//------------------------------------------------------------------------------
function botonAzul(){

   if(Quiz==="Falso & Verdadero"){
      if(RFV[N]==="V"){
         C[N] -= 1;
         wins++;
         Examen += " [V] &check;<br>";
      }else{
         C[N] += 1;
         fails++;
         Examen += " [V] &#10008;<br>";
      }
      siguientePregunta();
      console.log(C);
   }
}


