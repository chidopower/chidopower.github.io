
var turno=1;

var pkm1Name="";
var pkm2Name="";

var pkm1ATesp;
var pkm1DFesp;
var pkm2ATesp;
var pkm2DFesp;

var pkm1ATpri;
var pkm1ATsec;
var pkm1ATter;
var pkm2ATpri;
var pkm2ATsec;
var pkm2ATter;


var pkm1HP;
var pkm1HPmax;
var pkm1HPextra;
var pkm1SP;
var pkm1AT;
var pkm1ATextra;
var pkm1DF;
var pkm1DFextra;
var pkm1IQ;
var pkm1CR;

var pkm2HP;
var pkm2HPmax;
var pkm2HPextra;
var pkm2SP;
var pkm2AT;
var pkm2ATextra;
var pkm2DF;
var pkm2DFextra;
var pkm2IQ;
var pkm2CR;

var myStr1="";
var myStr2="";
var infoStr="";



////////////////////////////////////////////////////////////
function atack() {
   
   var myRnd=0;

   infoStr="";
   document.getElementById("infoStr").innerHTML = "";
   
   if(turno%2==0){
      
      myRnd=D6();
      
      if(myRnd==1 || myRnd==2 || myRnd==3){
         
         if(pkm2ATpri==="Poder Oculto")          usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Debil") usarAtEspDebil(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Medio") usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Fuerte")usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Absorber")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Paralisis")             usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Curacion")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Cambio")                usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Subir mi Defensa")      usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Subir mi Ataque")       usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Explotar")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Modificar Terreno")     usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Bajar Ataque del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Bajar Defensa del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Dormir")                usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Doble Filo")            usarPlacaje(pkm1Name);
         
      }
      
      if(myRnd==4 || myRnd==5){
         if(pkm2ATsec==="Poder Oculto")          usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Debil") usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Medio") usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Fuerte")usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Absorber")              usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Paralisis")             usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Curacion")              usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Cambio")                usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Subir mi Defensa")      usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Subir mi Ataque")       usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Explotar")              usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Modificar Terreno")     usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Bajar Ataque del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Bajar Defensa del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Dormir")                usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Doble Filo")            usarPlacaje(pkm1Name);
      }

      if(myRnd==6){
         if(pkm2ATter==="Poder Oculto")          usarPlacaje(pkm1Name);
         if(pkm2ATter==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATter==="Ataque Especial Debil") usarPlacaje(pkm1Name);
         if(pkm2ATter==="Ataque Especial Medio") usarPlacaje(pkm1Name);
         if(pkm2ATter==="Ataque Especial Fuerte")usarPlacaje(pkm1Name);
         if(pkm2ATter==="Absorber")              usarPlacaje(pkm1Name);
         if(pkm2ATter==="Paralisis")             usarPlacaje(pkm1Name);
         if(pkm2ATter==="Curacion")              usarPlacaje(pkm1Name);
         if(pkm2ATter==="Cambio")                usarPlacaje(pkm1Name);
         if(pkm2ATter==="Subir mi Defensa")      usarPlacaje(pkm1Name);
         if(pkm2ATter==="Subir mi Ataque")       usarPlacaje(pkm1Name);
         if(pkm2ATter==="Explotar")              usarPlacaje(pkm1Name);
         if(pkm2ATter==="Modificar Terreno")     usarPlacaje(pkm1Name);
         if(pkm2ATter==="Bajar Ataque del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATter==="Bajar Defensa del Rival")usarPlacaje(pkm1Name);
         if(pkm2ATter==="Dormir")                usarPlacaje(pkm1Name);
         if(pkm2ATter==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATter==="Doble Filo")            usarPlacaje(pkm1Name);
      }
         
   }else{
      
      pkmAtacante = pkm1Name;
      pkmDefensor = pkm2Name;
      
      myRnd=D6();
      
      if(myRnd==1 || myRnd==2 || myRnd==3){
         
         if(pkm1ATpri==="Poder Oculto")          usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Debil") usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Medio") usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Fuerte")usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Absorber")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Paralisis")             usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Curacion")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Cambio")                usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Subir mi Defensa")      usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Subir mi Ataque")       usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Explotar")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Modificar Terreno")     usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Bajar Ataque del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Bajar Defensa del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Dormir")                usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Doble Filo")            usarPlacaje(pkm2Name);
         
      }
      
      if(myRnd==4 || myRnd==5){
         if(pkm1ATsec==="Poder Oculto")          usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Debil") usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Medio") usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Fuerte")usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Absorber")              usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Paralisis")             usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Curacion")              usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Cambio")                usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Subir mi Defensa")      usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Subir mi Ataque")       usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Explotar")              usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Modificar Terreno")     usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Bajar Ataque del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Bajar Defensa del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Dormir")                usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Doble Filo")            usarPlacaje(pkm2Name);
      }

      if(myRnd==6){
         if(pkm1ATter==="Poder Oculto")          usarPlacaje(pkm2Name);
         if(pkm1ATter==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATter==="Ataque Especial Debil") usarPlacaje(pkm2Name);
         if(pkm1ATter==="Ataque Especial Medio") usarPlacaje(pkm2Name);
         if(pkm1ATter==="Ataque Especial Fuerte")usarPlacaje(pkm2Name);
         if(pkm1ATter==="Absorber")              usarPlacaje(pkm2Name);
         if(pkm1ATter==="Paralisis")             usarPlacaje(pkm2Name);
         if(pkm1ATter==="Curacion")              usarPlacaje(pkm2Name);
         if(pkm1ATter==="Cambio")                usarPlacaje(pkm2Name);
         if(pkm1ATter==="Subir mi Defensa")      usarPlacaje(pkm2Name);
         if(pkm1ATter==="Subir mi Ataque")       usarPlacaje(pkm2Name);
         if(pkm1ATter==="Explotar")              usarPlacaje(pkm2Name);
         if(pkm1ATter==="Modificar Terreno")     usarPlacaje(pkm2Name);
         if(pkm1ATter==="Bajar Ataque del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATter==="Bajar Defensa del Rival")usarPlacaje(pkm2Name);
         if(pkm1ATter==="Dormir")                usarPlacaje(pkm2Name);
         if(pkm1ATter==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATter==="Doble Filo")            usarPlacaje(pkm2Name);
      }
      
   }
   

   document.getElementById("infoBlue").innerHTML = pkm1Name + ", HP: "+pkm1HP;
   document.getElementById("infoRed").innerHTML = pkm2Name + ", HP: "+pkm2HP;   
   turno++;
   if(turno%2==0){
      document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm2Name; 
   }else{
      document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm1Name; 
   }   


}

//----------------------------------------------------------------
function usarPlacaje(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
   }
   
   myRnd=D6();
   
   if(myRnd==1){
      myStr += pkmAtacante + " usó Placaje, pero falló. <br>"
   }else{
      
      if(pkmAtacante===pkm1Name){
         pkm1AT = pkm1ATextra + D6();
         pkm2DF = pkm2DFextra + D6();
         if(pkm1AT>pkm2DF){
            pkm2HP--;
            myStr += pkmAtacante + " usó Placaje. <br>"
         }else{
            myStr += pkmAtacante + " usó Placaje, pero "+pkmDefensor+" lo bloqueó.<br>"
         }
      }
      
      if(pkmAtacante===pkm2Name){
         pkm2AT = pkm2ATextra + D6();
         pkm1DF = pkm1DFextra + D6();
         if(pkm2AT>pkm1DF){
            pkm1HP--;
            myStr += pkmAtacante + " usó Placaje. <br>"
         }else{
            myStr += pkmAtacante + " usó Placaje, pero "+pkmDefensor+" lo bloqueó.<br>"
         }
      }
      
   }

   document.getElementById("infoGreen").innerHTML = myStr;
}

//-----------------------------------------------------------------
function usarAtEspDebil(pkmDefensor) {

   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
   }

}


//----------------------------------------------------------------
function startBattle() {

   //location.reload();

   var myStr="";
   
   turno=1;

   pkm1Name = document.getElementById("pkm1Name").value;
   pkm2Name = document.getElementById("pkm2Name").value;
   
   pkm1ATesp = document.getElementById("pkm1ATesp").value;
   pkm1DFesp = document.getElementById("pkm1DFesp").value;
   pkm2ATesp = document.getElementById("pkm2ATesp").value;
   pkm2DFesp = document.getElementById("pkm2DFesp").value;
   
   pkm1ATpri = document.getElementById("pkm1ATpri").value;
   pkm1ATsec = document.getElementById("pkm1ATsec").value;
   pkm1ATter = document.getElementById("pkm1ATter").value;

   pkm2ATpri = document.getElementById("pkm2ATpri").value;
   pkm2ATsec = document.getElementById("pkm2ATsec").value;
   pkm2ATter = document.getElementById("pkm2ATter").value;
   
   pkm1HPextra = parseInt( document.getElementById("pkm1HP").value );
   pkm1SP = parseInt( document.getElementById("pkm1SP").value );
   pkm1ATextra = parseInt( document.getElementById("pkm1AT").value );
   pkm1DFextra = parseInt( document.getElementById("pkm1DF").value );
   pkm1IQ = parseInt( document.getElementById("pkm1IQ").value );
   pkm1CR = parseInt( document.getElementById("pkm1CR").value );

   pkm2HPextra = parseInt( document.getElementById("pkm2HP").value );
   pkm2SP = parseInt( document.getElementById("pkm2SP").value );
   pkm2ATextra = parseInt( document.getElementById("pkm2AT").value );
   pkm2DFextra = parseInt( document.getElementById("pkm2DF").value );
   pkm2IQ = parseInt( document.getElementById("pkm2IQ").value );
   pkm2CR = parseInt( document.getElementById("pkm2CR").value );

   pkm1HP = 3 + pkm1HPextra;
   pkm1HPmax = pkm1HP;

   pkm2HP = 3 + pkm2HPextra;
   pkm2HPmax = pkm2HP;

   chekarVentaja(pkm1ATesp,pkm2DFesp);

   myStr = chekarVentaja(pkm1ATesp,pkm2DFesp);
   if(myStr==="es fuerte")document.getElementById("info1").innerHTML = pkm1ATesp + " es fuerte sobre " + pkm2DFesp;
   if(myStr==="es debil")document.getElementById("info1").innerHTML = pkm1ATesp + " es debil sobre " + pkm2DFesp;
   if(myStr==="no afecta")document.getElementById("info1").innerHTML = pkm1ATesp + " no afecta sobre " + pkm2DFesp;

   myStr = chekarVentaja(pkm2ATesp,pkm1DFesp);
   if(myStr==="es fuerte")document.getElementById("info2").innerHTML = pkm2ATesp + " es fuerte sobre " + pkm1DFesp;
   if(myStr==="es debil")document.getElementById("info2").innerHTML = pkm2ATesp + " es debil sobre " + pkm1DFesp;
   if(myStr==="no afecta")document.getElementById("info2").innerHTML = pkm2ATesp + " no afecta sobre " + pkm1DFesp;
   
   document.getElementById("info1").innerHTML = myStr;
   //document.getElementById("info2").innerHTML = myStr2;


   // infoStr = "";
   // document.getElementById("infoStr").innerHTML = infoStr;
   // infoStr += "¡Comienza la batalla! <br><br>";
   // infoStr += "Es el turno de "+pkm1Name+" <br>";
   // document.getElementById("infoStr").innerHTML = infoStr;


   document.getElementById("infoGreen").innerHTML = "¡Comienza la batalla!";
   document.getElementById("infoBlue").innerHTML = pkm1Name + ", HP: "+pkm1HP;
   document.getElementById("infoRed").innerHTML = pkm2Name + ", HP: "+pkm2HP;   
   document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm1Name;

}



//////////////////////////////////////////////////////////////////////
function D6() {
   return getRndInteger(1,6);
}

/////////////////////////////////////////////////////////////////////
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//-----------------------------------------------------------------
function chekarVentaja(tipoDeAtaque,tipoDeDefensa){
	//posibles respuestas:
		//no importa
		//es fuerte
		//es debil
		//no afecta

	var i=0;
	var j=0;
	var tipoDeAtaque;
	var tipoDeDefensa;
	var answer="no importa"; 
	var esFuerte="";
	var esDebil="";
	var noAfecta="";

	document.write(tipoDeAtaque, tipoDeDefensa, answer);


   // tipos = 
   //         ["Normal",
   //         "Fuego",
   //         "Agua",
   //         "Electrico",
   //         "Planta",
   //         "Hielo",
   //         "Lucha",
   //         "Veneno",
   //         "Tierra",
   //         "Volador",
   //         "Psiquico",
   //         "Bicho",
   //         "Roca",
   //         "Fantasma",
   //         "Dragon",
   //         "Siniestro",
   //         "Acero",
   //         "Hada"] 


	if(tipoDeAtaque==="Acero"){
		esFuerte=["Hada", "Hielo", "Roca"];
        esDebil=["Acero", "Agua", "Electrico", "Fuego"];
        noAfecta=[""]
	}

   if(tipoDeAtaque==="Agua"){
   		esFuerte=["Fuego","Tierra","Roca"];
        esDebil=["Agua","Planta","Dragon"];
   } 
   


   if(tipoDeAtaque==="Bicho"){
   		esFuerte=["Planta","Psiquico","Siniestro"];
        esDebil=["Acero","Fantasma","Fuego","Hada","Lucha","Veneno","Volador"];
    }
   
   if(tipoDeAtaque==="Dragon"){
   		esFuerte=["Dragon"];
        esDebil=["Acero"];
        noAfecta=["Hada"];

   if(tipoDeAtaque==="Electrico"){
   		esFuerte=["Agua","Volador"];
        esDebil=["Dragon","Electrico","Planta"];
        noAfecta=["Tierra"];
    }
   

   if(tipoDeAtaque==="Fantasma"){
   		esFuerte=["Fantasma","Psiquico"];
        esDebil=["Siniestro"];
        noAfecta=["Normal"];
    } 
     
   if(tipoDeAtaque==="Fuego"){
   		esFuerte=["Planta", "Hielo", "Bicho", "Acero"];
        esDebil=["Fuego", "Agua", "Roca", "Dragon"];
   }

   if(tipoDeAtaque==="Hada"){
   		esFuerte=["Dragon", "Lucha", "Siniestro"];
        esDebil=["Acero", "Fuego", "Veneno"];
    }

   if(tipoDeAtaque==="Hielo"){
   		esFuerte=["Dragon", "Dragon", "Planta","Tierra"];
        esDebil=["Acero", "Agua", "Fuego", "Hielo"];
   }

   if(tipoDeAtaque==="Lucha"){
   		esFuerte=["Acero","Hielo","Normal","Roca","Siniestro"];
        esDebil=["Bicho","Hada","Psiquico","Veneno","Volador"];
        noAfecta=["Fantasma"];
    }
   
   if(tipoDeAtaque==="Normal"){
   		esDebil=["Roca", "Acero"];
        noAfecta=["Fantasma"];
   }

   if(tipoDeAtaque==="Planta"){
   		esFuerte=["Agua", "Roca", "Tierra"];
        esDebil=["Acero", "Bicho", "Dragon","Fuego", "Planta","Veneno","Volador"];
   }


   if(tipoDeAtaque==="Psiquico"){
   		esFuerte=["Lucha","Veneno"];
        esDebil=["Acero","Psiquico"];
        noAfecta=["Siniestro"];
   }

   if(tipoDeAtaque==="Roca"){
   		esFuerte=["Bicho","Fuego","Hielo","Volador"];
        esDebil=["Acero","Lucha","Tierra"];
   }


   if(tipoDeAtaque==="Siniestro"){
   		esFuerte=["Fantasma","Psiquico"];
        esDebil=["Hada","Lucha","Siniestro"];
   }


   if(tipoDeAtaque==="Tierra"){
   		esFuerte=["Acero","Electrico","Fuego","Roca","Veneno"];
        esDebil=["Bicho","Planta"];
        noAfecta=["Volador"];
   }


   if(tipoDeAtaque==="Veneno"){
   		esFuerte=["Hada","Planta"];
        esDebil=["Fantasma","Roca","Tierra","Veneno"];
        noAfecta=["Acero"];
   }

   if(tipoDeAtaque==="Volador"){
   		esFuerte=["Bicho","Lucha","Planta"];
        esDebil=["Acero","Electrico","Roca"];
  }

	//------

    for(j=0;j<esFuerte.length;j++){
    	if(tipoDeDefensa===esFuerte[j]){
    		answer="es fuerte";
    	}
    }   

    for(j=0;j<esDebil.length;j++){
    	if(tipoDeDefensa===esDebil[j]){
    		answer="es debil";
    	}
    }    

    for(j=0;j<noAfecta.length;j++){
    	if(tipoDeDefensa===noAfecta[j]){
    		answer="no afecta";
    	}
    }

    return "vergas";

}



//////////////////////////////////////////////////////////////////////
function chekarVentajas(){
   var i=0;
var esFuerte="";
var esDebil="";
var noAfecta="";
var myType="";   

   myType="Acero"; esFuerte=["Hada", "Hielo", "Roca"];
                   esDebil=["Acero", "Agua", "Electrico", "Fuego"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   }  

   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Agua"; esFuerte=["Fuego","Tierra","Roca"];
                  esDebil=["Agua","Planta","Dragon"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }   

   myType="Bicho"; esFuerte=["Planta","Psiquico","Siniestro"];
                   esDebil=["Acero","Fantasma","Fuego","Hada","Lucha","Veneno","Volador"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }   

   myType="Dragon"; esFuerte=["Dragon"];
                    esDebil=["Acero"];
                    noAfecta=["Hada"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   }   

   myType="Electrico"; esFuerte=["Agua","Volador"];
                    esDebil=["Dragon","Electrico","Planta"];
                    noAfecta=["Tierra"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   } 

   myType="Fantasma"; esFuerte=["Fantasma","Psiquico"];
                    esDebil=["Siniestro"];
                    noAfecta=["Normal"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   } 
     
   myType="Fuego"; esFuerte=["Planta", "Hielo", "Bicho", "Acero"];
                   esDebil=["Fuego", "Agua", "Roca", "Dragon"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Hada"; esFuerte=["Dragon", "Lucha", "Siniestro"];
                   esDebil=["Acero", "Fuego", "Veneno"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Hielo"; esFuerte=["Dragon", "Dragon", "Planta","Tierra"];
                   esDebil=["Acero", "Agua", "Fuego", "Hielo"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }   


   myType="Lucha"; esFuerte=["Acero","Hielo","Normal","Roca","Siniestro"];
                    esDebil=["Bicho","Hada","Psiquico","Veneno","Volador"];
                    noAfecta=["Fantasma"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   }

   myType="Normal"; esDebil=["Roca", "Acero"];
                    noAfecta=["Fantasma"];
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }  

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   } 

   myType="Planta"; esFuerte=["Agua", "Roca", "Tierra"];
                   esDebil=["Acero", "Bicho", "Dragon","Fuego", "Planta","Veneno","Volador"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Psiquico"; esFuerte=["Lucha","Veneno"];
                    esDebil=["Acero","Psiquico"];
                    noAfecta=["Siniestro"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   }
   

   myType="Roca"; esFuerte=["Bicho","Fuego","Hielo","Volador"];
                   esDebil=["Acero","Lucha","Tierra"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Siniestro"; esFuerte=["Fantasma","Psiquico"];
                   esDebil=["Hada","Lucha","Siniestro"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }

   myType="Tierra"; esFuerte=["Acero","Electrico","Fuego","Roca","Veneno"];
                    esDebil=["Bicho","Planta"];
                    noAfecta=["Volador"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   }

   myType="Veneno"; esFuerte=["Hada","Planta"];
                    esDebil=["Fantasma","Roca","Tierra","Veneno"];
                    noAfecta=["Acero"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   } 

   for(i=0;i<noAfecta.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===noAfecta[i]){
         myStr1=myType+" no afecta sobre "+noAfecta[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===noAfecta[i]){
         myStr2=myType+" no afecta sobre "+noAfecta[i];
      }      
   }

   myType="Volador"; esFuerte=["Bicho","Lucha","Planta"];
                   esDebil=["Acero","Electrico","Roca"];
   
   for(i=0;i<esFuerte.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esFuerte[i]){
         myStr1=myType+" es fuerte sobre "+esFuerte[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esFuerte[i]){
         myStr2=myType+" es fuerte sobre "+esFuerte[i];
      }      
   } 
   
   for(i=0;i<esDebil.length;i++){
      if(pkm1ATesp===myType && pkm2DFesp===esDebil[i]){
         myStr1=myType+" es debil sobre "+esDebil[i];
      }
      if(pkm2ATesp===myType && pkm1DFesp===esDebil[i]){
         myStr2=myType+" es debil sobre "+esDebil[i];
      }      
   }   
   
}
