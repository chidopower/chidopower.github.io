//----------------------------------------------------------- Variables Globales
var Mapa=""; 
var Quiz="";
var NT=1; // numeto total de preguntas
var N; // numero de pregunta
var P=[""]; //las preguntas
var R=[""]; //las respuestas
var C=[];  //contar
var i=0;    //contador
var juegoTerminado="no";
var mostrado="no";
var wins=0;
var fails=0;

//------------------------------------------------------------------------------
function rndIntNum1(min, max) {
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
		i++;

	}else{

		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";

	}

}


//------------------------------------------------------------------------------
function preguntarEnOrden(){

	document.getElementById("enLosBotones").innerHTML = "";
	document.getElementById("botonAzul").innerHTML = "...";
	document.getElementById("botonRojo").innerHTML = "...";
	document.getElementById("Respuesta").innerHTML = "";

	if(i<NT){
		document.getElementById("Pregunta").innerHTML =
		"#"+ (i+1) + "<br>" + P[i] + "<br>" + R[i];
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


	if(hayMasPreguntas()==="si"){
		
		document.getElementById("botonGris").innerHTML ="Mostrar";
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("botonAzul").innerHTML = "...";
	    seleccionarPregunta();
	    document.getElementById("Pregunta").innerHTML = "La capital de " + P[N] + " es:";
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
	    document.getElementById("Pregunta").innerHTML = R[N] + " es la Capital de:";
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
function botonGris(){

	mostrado="si";

    if(juegoTerminado==="no" && hayMasPreguntas()==="si"){

		if(Quiz==="En Orden"){
			siguientePregunta();
			document.getElementById("botonAzul").innerHTML = "...";
			document.getElementById("botonRojo").innerHTML = "...";
		}

		if(Quiz==="Quiz1"){
			document.getElementById("botonGris").innerHTML ="Mostrar";
			document.getElementById("Respuesta").innerHTML = R[N];
			document.getElementById("enLosBotones").innerHTML = "¿Acertaste?";
			document.getElementById("botonRojo").innerHTML = "No";
			document.getElementById("botonAzul").innerHTML = "Si";
		}

		if(Quiz==="Quiz2"){
			document.getElementById("botonGris").innerHTML ="Mostrar";
			document.getElementById("Respuesta").innerHTML = P[N];
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

	}

}


//------------------------------------------------------------------------------
// function seleccionarPregunta(){

//     var salir="no"; //para salir del sig ciclo while
//     var k=0; //contador para el sig ciclo while

//     while(salir==="no"){
//         k++;
//         N = rndIntNum1(0,NT);
// 		console.log("rndIntNum1: ", N);
//         if(C[N]>0){
//             salir="si";
//         }else{
//             salir="no";
//         }
//         if(k>=10*NT){
// 			console.log("kmax? ",k);
//             salir="si";
//             document.getElementById("Pregunta").innerHTML = "¡Ya no hay más preguntas!";
// 			document.getElementById("botonGris").innerHTML ="...";
//             juegoTerminado="si";
//             console.log("GAME OVER!");
// 			document.getElementById("botonGris").innerHTML ="...";
// 			document.getElementById("Respuesta").innerHTML ="";
// 			document.getElementById("Pregunta").innerHTML ="";
// 			document.getElementById("enLosBotones").innerHTML = "";
// 			document.getElementById("botonRojo").innerHTML = "...";
// 			document.getElementById("botonAzul").innerHTML = "...";
//         }
//     }   	

//     if(juegoTerminado==="no"){
// 		console.log("seleccionarPregunta() ",C);
// 		console.log(P[N],R[N]);   	
//     }else{
// 		document.getElementById("enLosBotones").innerHTML = "";
// 		document.getElementById("botonAzul").innerHTML = "...";
// 		document.getElementById("botonRojo").innerHTML = "...";
// 		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
// 		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
//     }

//------------------------------------------------------------------------------
function seleccionarPregunta(){

    var salir="no"; //para salir del sig ciclo while
    var k=0; //contador para el sig ciclo while

    while(salir==="no"){
        k++;
        N = rndIntNum1(0,NT);
		console.log("rndIntNum1: ", N);
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
		console.log("seleccionarPregunta() ",C);
		console.log(P[N],R[N]);   	
    }else{
		document.getElementById("enLosBotones").innerHTML = "";
		document.getElementById("botonAzul").innerHTML = "...";
		document.getElementById("botonRojo").innerHTML = "...";
		document.getElementById("Respuesta").innerHTML = "¡Fín del Juego!";
		document.getElementById("Pregunta").innerHTML = "¡Fín del Juego!";
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

	if(Mapa==="Norte America"){
		P[0]="Canadá"; R[0]="Ottawa";
		P[1]="Estados Unidos de America"; R[1]="Washington D. C.";
		P[2]="México"; R[2]="Ciudad de México";		
	}

	if(Mapa==="Centro America"){
		P[0]="Belice"; R[0]="Belmopán";
		P[1]="Costa Rica"; R[1]="San José";
		P[2]="El Salvador"; R[2]="San Salvador";
		P[3]="Guatemala"; R[3]="Ciudad de Guatemala";
		P[4]="Honduras"; R[4]="Tegucigalpa";
		P[5]="Nicaragua"; R[5]="Managua";
		P[6]="Panamá"; R[6]="Panamá	";
	}

	if(Mapa==="Sur America"){
		P[0]="Argentina"; R[0]="Buenos Aires";
		P[1]="Bolivia"; R[1]="Sucre";
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
	}

	if(Mapa==="Caribe America"){
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
	}

	NT=P.length;
    if(i===0){
         C = [];
         for(var j=0;j<NT;j++)
             C[j]=2;
    }

	console.log("cargarPreguntas() ", C);

}


//------------------------------------------------------------------------------
function botonRojo(){

	if(Quiz==="En Orden"){}

	if(hayMasPreguntas()==="si"){

		if(Quiz==="Quiz1" || Quiz==="Quiz2"){
			if(juegoTerminado==="no" && mostrado==="si"){
				C[N] += 1;
			    siguientePregunta();
			    console.log(C);
			}
		}

		if(Quiz==="FV"){

			if(R[N]==="F"){
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
	}



}

//------------------------------------------------------------------------------
function botonAzul(){

	if(Quiz==="En Orden"){}

	if(hayMasPreguntas()==="si"){		

		if(Quiz==="Quiz1"  || Quiz==="Quiz2"){
			if(juegoTerminado==="no" && mostrado==="si"){
				C[N] -= 1;
			    siguientePregunta();
			    console.log(C);
			}
		}

		if(Quiz==="FV"){
			if(R[N]==="V"){
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
	}
}

