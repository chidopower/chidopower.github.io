
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

var pkm1paralizado="";
var pkm2paralizado="";

var pkm1SubirDF=0;
var pkm2SubirDF=0;
var pkm1SubirAT=0;
var pkm2SubirAT=0;

var pkm1BajarDF=0;
var pkm2BajarDF=0;
var pkm1BajarAT=0;
var pkm2BajarAT=0;

var terreno="";

//----------------------------------------------------------------
function startBattle() {

   var myStr="";
   
   turno=1;
   
   terreno= document.getElementById("terreno").value;

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
   
   myStr = chekarVentaja(pkm1ATesp,pkm2DFesp);
   document.getElementById("info1").innerHTML = "";
   if(myStr==="es fuerte")document.getElementById("info1").innerHTML = pkm1ATesp + " es fuerte sobre " + pkm2DFesp+".";
   if(myStr==="es debil")document.getElementById("info1").innerHTML = pkm1ATesp + " es debil sobre " + pkm2DFesp+".";
   if(myStr==="no afecta")document.getElementById("info1").innerHTML = pkm1ATesp + " no afecta sobre " + pkm2DFesp+".";

   myStr = chekarVentaja(pkm2ATesp,pkm1DFesp);
   document.getElementById("info2").innerHTML = "";
   if(myStr==="es fuerte")document.getElementById("info2").innerHTML = pkm2ATesp + " es fuerte sobre " + pkm1DFesp+".";
   if(myStr==="es debil")document.getElementById("info2").innerHTML = pkm2ATesp + " es debil sobre " + pkm1DFesp+".";
   if(myStr==="no afecta")document.getElementById("info2").innerHTML = pkm2ATesp + " no afecta sobre " + pkm1DFesp+".";
   
   pkm1SubirDF=0;
   pkm2SubirDF=0;
   pkm1SubirAT=0;
   pkm2SubirAT=0;

   pkm1BajarDF=0;
   pkm2BajarDF=0;
   pkm1BajarAT=0;
   pkm2BajarAT=0;
   
   //chekarTerreno();
   
   document.getElementById("infoYellow").innerHTML = "Tipo de terreno: "+terreno+".";
   document.getElementById("infoGreen").innerHTML = "¡Comienza la batalla!";
   document.getElementById("infoBlue").innerHTML = pkm1Name + "; HP: "+pkm1HP+"; DF+: "+pkm1DFextra+"; AT+: "+pkm1ATextra;
   document.getElementById("infoRed").innerHTML = pkm2Name + "; HP: "+pkm2HP+"; DF+: "+pkm2DFextra+"; AT+: "+pkm2ATextra;
   document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm1Name+".";
   
   pkm1paralizado="no";
   pkm2paralizado="no";

}



//---------------------------------------------------
function atack() {
   
   var myRnd=0;

   infoStr="";
   document.getElementById("infoStr").innerHTML = "";
   
   if(turno%2==0){
      //Pokemon #2 ataca!!
      
      myRnd=D6();
      
      if(myRnd==1 || myRnd==2 || myRnd==3){
         
         if(pkm2ATpri==="Poder Oculto")          usarPoderOculto(pkm1Name);
         if(pkm2ATpri==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Debil") usarAtEspDebil(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Medio") usarAtEspMedio(pkm1Name);
         if(pkm2ATpri==="Ataque Especial Fuerte")usarAtEspFuerte(pkm1Name);
         if(pkm2ATpri==="Absorber")              usarAbsorber(pkm1Name);
         if(pkm2ATpri==="Paralisis")             usarParalisis(pkm1Name);
         if(pkm2ATpri==="Curacion")              usarCuracion(pkm1Name);
         if(pkm2ATpri==="Cambio")                usarCambio(pkm1Name);
         if(pkm2ATpri==="Subir mi Defensa")      usarSubirMiDefensa(pkm1Name);
         if(pkm2ATpri==="Subir mi Ataque")       usarSubirMiAtaque(pkm1Name);
         if(pkm2ATpri==="Explotar")              usarExplotar(pkm1Name);
         if(pkm2ATpri==="Modificar Terreno")     usarModificaTerreno(pkm1Name);
         if(pkm2ATpri==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm1Name);
         if(pkm2ATpri==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm1Name);
         //if(pkm2ATpri==="Dormir")                usarPlacaje(pkm1Name);
         //if(pkm2ATpri==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Doble Filo")            usarDobleFilo(pkm1Name);
         
      }
      
      if(myRnd==4 || myRnd==5){
         if(pkm2ATsec==="Poder Oculto")          usarPoderOculto(pkm1Name);
         if(pkm2ATsec==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Debil") usarAtEspDebil(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Medio") usarAtEspMedio(pkm1Name);
         if(pkm2ATsec==="Ataque Especial Fuerte")usarAtEspFuerte(pkm1Name);
         if(pkm2ATsec==="Absorber")              usarAbsorber(pkm1Name);
         if(pkm2ATsec==="Paralisis")             usarParalisis(pkm1Name);
         if(pkm2ATsec==="Curacion")              usarCuracion(pkm1Name);
         if(pkm2ATsec==="Cambio")                usarCambio(pkm1Name);
         if(pkm2ATsec==="Subir mi Defensa")      usarSubirMiDefensa(pkm1Name);
         if(pkm2ATsec==="Subir mi Ataque")       usarSubirMiAtaque(pkm1Name);
         if(pkm2ATsec==="Explotar")              usarExplotar(pkm1Name);
         if(pkm2ATsec==="Modificar Terreno")     usarModificaTerreno(pkm1Name);
         if(pkm2ATsec==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm1Name);
         if(pkm2ATsec==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm1Name);
         //if(pkm2ATpri==="Dormir")                usarPlacaje(pkm1Name);
         //if(pkm2ATpri==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Doble Filo")            usarDobleFilo(pkm1Name);
      }

      if(myRnd==6){
         if(pkm2ATter==="Poder Oculto")          usarPoderOculto(pkm1Name);
         if(pkm2ATter==="Placaje")               usarPlacaje(pkm1Name);
         if(pkm2ATter==="Ataque Especial Debil") usarAtEspDebil(pkm1Name);
         if(pkm2ATter==="Ataque Especial Medio") usarAtEspMedio(pkm1Name);
         if(pkm2ATter==="Ataque Especial Fuerte")usarAtEspFuerte(pkm1Name);
         if(pkm2ATter==="Absorber")              usarAbsorber(pkm1Name);
         if(pkm2ATter==="Paralisis")             usarParalisis(pkm1Name);
         if(pkm2ATter==="Curacion")              usarCuracion(pkm1Name);
         if(pkm2ATter==="Cambio")                usarCambio(pkm1Name);
         if(pkm2ATter==="Subir mi Defensa")      usarSubirMiDefensa(pkm1Name);
         if(pkm2ATter==="Subir mi Ataque")       usarSubirMiAtaque(pkm1Name);
         if(pkm2ATter==="Explotar")              usarExplotar(pkm1Name);
         if(pkm2ATter==="Modificar Terreno")     usarModificaTerreno(pkm1Name);
         if(pkm2ATter==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm1Name);
         if(pkm2ATter==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm1Name);
         //if(pkm2ATpri==="Dormir")                usarPlacaje(pkm1Name);
         //if(pkm2ATpri==="Otra Vez")              usarPlacaje(pkm1Name);
         if(pkm2ATpri==="Doble Filo")            usarDobleFilo(pkm1Name);
      }
         
   }else{
      
      pkmAtacante = pkm1Name;
      pkmDefensor = pkm2Name;
      
      myRnd=D6();
      
      if(myRnd==1 || myRnd==2 || myRnd==3){
         
         if(pkm1ATpri==="Poder Oculto")          usarPoderOculto(pkm2Name);
         if(pkm1ATpri==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Debil") usarAtEspDebil(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Medio") usarAtEspMedio(pkm2Name);
         if(pkm1ATpri==="Ataque Especial Fuerte")usarAtEspFuerte(pkm2Name);
         if(pkm1ATpri==="Absorber")              usarAbsorber(pkm2Name);
         if(pkm1ATpri==="Paralisis")             usarParalisis(pkm2Name);
         if(pkm1ATpri==="Curacion")              usarCuracion(pkm2Name);
         if(pkm1ATpri==="Cambio")                usarCambio(pkm2Name);
         if(pkm1ATpri==="Subir mi Defensa")      usarSubirMiDefensa(pkm2Name);
         if(pkm1ATpri==="Subir mi Ataque")       usarSubirMiAtaque(pkm2Name);
         if(pkm1ATpri==="Explotar")              usarExplotar(pkm2Name);
         if(pkm1ATpri==="Modificar Terreno")     usarModificaTerreno(pkm2Name);
         if(pkm1ATpri==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm2Name);
         if(pkm1ATpri==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm2Name);
         //if(pkm1ATpri==="Dormir")                usarPlacaje(pkm2Name);
         //if(pkm1ATpri==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Doble Filo")            usarDobleFilo(pkm2Name);
         
      }
      
      if(myRnd==4 || myRnd==5){
         if(pkm1ATsec==="Poder Oculto")          usarPoderOculto(pkm2Name);
         if(pkm1ATsec==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Debil") usarAtEspDebil(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Medio") usarAtEspMedio(pkm2Name);
         if(pkm1ATsec==="Ataque Especial Fuerte")usarAtEspFuerte(pkm2Name);
         if(pkm1ATsec==="Absorber")              usarAbsorber(pkm2Name);
         if(pkm1ATsec==="Paralisis")             usarParalisis(pkm2Name);
         if(pkm1ATsec==="Curacion")              usarCuracion(pkm2Name);
         if(pkm1ATsec==="Cambio")                usarCambio(pkm2Name);
         if(pkm1ATsec==="Subir mi Defensa")      usarSubirMiDefensa(pkm2Name);
         if(pkm1ATsec==="Subir mi Ataque")       usarSubirMiAtaque(pkm2Name);
         if(pkm1ATsec==="Explotar")              usarExplotar(pkm2Name);
         if(pkm1ATsec==="Modificar Terreno")     usarModificaTerreno(pkm2Name);
         if(pkm1ATsec==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm2Name);
         if(pkm1ATsec==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm2Name);
         //if(pkm1ATpri==="Dormir")                usarPlacaje(pkm2Name);
         //if(pkm1ATpri==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Doble Filo")            usarDobleFilo(pkm2Name);
      }

      if(myRnd==6){
         if(pkm1ATter==="Poder Oculto")          usarPoderOculto(pkm2Name);
         if(pkm1ATter==="Placaje")               usarPlacaje(pkm2Name);
         if(pkm1ATter==="Ataque Especial Debil") usarAtEspDebil(pkm2Name);
         if(pkm1ATter==="Ataque Especial Medio") usarAtEspMedio(pkm2Name);
         if(pkm1ATter==="Ataque Especial Fuerte")usarAtEspFuerte(pkm2Name);
         if(pkm1ATter==="Absorber")              usarAbsorber(pkm2Name);
         if(pkm1ATter==="Paralisis")             usarParalisis(pkm2Name);
         if(pkm1ATter==="Curacion")              usarCuracion(pkm2Name);
         if(pkm1ATter==="Cambio")                usarCambio(pkm2Name);
         if(pkm1ATter==="Subir mi Defensa")      usarSubirMiDefensa(pkm2Name);
         if(pkm1ATter==="Subir mi Ataque")       usarSubirMiAtaque(pkm2Name);
         if(pkm1ATter==="Explotar")              usarExplotar(pkm2Name);
         if(pkm1ATter==="Modificar Terreno")     usarModificaTerreno(pkm2Name);
         if(pkm1ATter==="Bajar Ataque del Rival")usarBajarAtaqueDelRival(pkm2Name);
         if(pkm1ATter==="Bajar Defensa del Rival")usarBajarDefensaDelRival(pkm2Name);
         //if(pkm1ATpri==="Dormir")                usarPlacaje(pkm2Name);
         //if(pkm1ATpri==="Otra Vez")              usarPlacaje(pkm2Name);
         if(pkm1ATpri==="Doble Filo")            usarDobleFilo(pkm2Name);
      }
      
   }
   

   if(pkm1paralizado==="si"){
      document.getElementById("infoBlue").innerHTML = pkm1Name + " (paralizado); HP: "+pkm1HP+"; DF+: "+pkm1DFextra+"; AT+: "+pkm1ATextra;
   }else{
      document.getElementById("infoBlue").innerHTML = pkm1Name + "; HP: "+pkm1HP+"; DF+: "+pkm1DFextra+"; AT+: "+pkm1ATextra;
   }
   if(pkm2paralizado==="si"){
      document.getElementById("infoRed").innerHTML = pkm2Name + " (paralizado); HP: "+pkm2HP+"; DF+: "+pkm2DFextra+"; AT+: "+pkm2ATextra;
   }else{
      document.getElementById("infoRed").innerHTML = pkm2Name + "; HP: "+pkm2HP+"; DF+: "+pkm2DFextra+"; AT+: "+pkm2ATextra;
   }
   turno++;
   if(turno%2==0){
      document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm2Name+"."; 
   }else{
      document.getElementById("infoStr").innerHTML = "Sigue el turno de "+pkm1Name+"."; 
   }   
   document.getElementById("infoYellow").innerHTML = "Tipo de terreno: "+terreno+".";

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
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Placaje, pero falló.";
         }else{
            if(pkm1paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Placaje.";
               pkm1HP--;
            }else{
               pkm2AT = pkm2ATextra + D6();
               pkm1DF = pkm1DFextra + D6();
               if(pkm2AT>pkm1DF){
                  pkm1HP--;
                  document.getElementById("infoGreen").innerHTML= 
                  pkmAtacante + " usó Placaje.";
               }else{
                  document.getElementById("infoGreen").innerHTML=
                  pkmAtacante + " usó Placaje, pero "+pkmDefensor+" lo bloqueó.";
               }
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Placaje, pero falló.";
         }else{
            if(pkm2paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Placaje. ";
               pkm2HP--;
            }else{
               pkm1AT = pkm1ATextra + D6();
               pkm2DF = pkm2DFextra + D6();
               if(pkm1AT>pkm2DF){
                  pkm2HP--;
                  document.getElementById("infoGreen").innerHTML= 
                  pkmAtacante + " usó Placaje.";
               }else{
                  document.getElementById("infoGreen").innerHTML=
                  pkmAtacante + " usó Placaje, pero "+pkmDefensor+" lo bloqueó.";
               }
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarAtEspDebil(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Debil, pero falló.";
         }else{
            if(pkm1paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Debil. ";
               pkm1HP--;
            }else{
               myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
               if(myStr2==="es fuerte")  pkm2AT = pkm2ATextra + D6() + 2 + chekarTerreno(pkm2ATesp);
               if(myStr2==="es debil")   pkm2AT = pkm2ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil, pero no afecta.";
               if(myStr2==="no importa") pkm2AT = pkm2ATextra + D6();
               pkm1DF = pkm1DFextra + D6();
               if(pkm2AT>pkm1DF) {pkm1HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil.";}
               if(pkm2AT<=pkm1DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil, pero "+pkmDefensor+" lo bloqueó.";}
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Debil, pero falló.";
         }else{
            if(pkm2paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Debil. ";
               pkm2HP--;
            }else{
               myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
               if(myStr2==="es fuerte")  pkm1AT = pkm1ATextra + D6() + 2 + chekarTerreno(pkm1ATesp);
               if(myStr2==="es debil")   pkm1AT = pkm1ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil, pero no afecta.";
               if(myStr2==="no importa") pkm1AT = pkm1ATextra + D6();
               pkm2DF = pkm2DFextra + D6();
               if(pkm1AT>pkm2DF) {pkm2HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil.";}
               if(pkm1AT<=pkm2DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Debil, pero "+pkmDefensor+" lo bloqueó.<br>";}
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarAtEspMedio(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Medio, pero falló.";
         }else{
            if(pkm1paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Medio. ";
               pkm1HP--;
            }else{
               myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
               if(myStr2==="es fuerte")  pkm2AT = 1 + pkm2ATextra + D6() + 2 + chekarTerreno(pkm2ATesp);
               if(myStr2==="es debil")   pkm2AT = pkm2ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio, pero no afecta.";
               if(myStr2==="no importa") pkm2AT = pkm2ATextra + D6();
               pkm1DF = pkm1DFextra + D6();
               if(pkm2AT>pkm1DF) {pkm1HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio.";}
               if(pkm2AT<=pkm1DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio, pero "+pkmDefensor+" lo bloqueó.";}
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Medio, pero falló.";
         }else{
            if(pkm2paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Medio. ";
               pkm2HP--;
            }else{
               myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
               if(myStr2==="es fuerte")  pkm1AT = 1 + pkm1ATextra + D6() + 2 + chekarTerreno(pkm1ATesp);
               if(myStr2==="es debil")   pkm1AT = pkm1ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio, pero no afecta.";
               if(myStr2==="no importa") pkm1AT = pkm1ATextra + D6();
               pkm2DF = pkm2DFextra + D6();
               if(pkm1AT>pkm2DF) {pkm2HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio.";}
               if(pkm1AT<=pkm2DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Medio, pero "+pkmDefensor+" lo bloqueó.<br>";}
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarAtEspFuerte(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=3){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Fuerte, pero falló.";
         }else{
            if(pkm1paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Fuerte. ";
               pkm1HP--;
            }else{
               myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
               if(myStr2==="es fuerte")  pkm2AT = 2 + pkm2ATextra + D6() + 2 + chekarTerreno(pkm2ATesp);
               if(myStr2==="es debil")   pkm2AT = pkm2ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte, pero no afecta.";
               if(myStr2==="no importa") pkm2AT = pkm2ATextra + D6();
               pkm1DF = pkm1DFextra + D6();
               if(pkm2AT>pkm1DF) {pkm1HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte.";}
               if(pkm2AT<=pkm1DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte, pero "+pkmDefensor+" lo bloqueó.";}
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=3){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Ataque Especial Fuerte, pero falló.";
         }else{
            if(pkm2paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Ataque Especial Fuerte. ";
               pkm2HP--;
            }else{
               myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
               if(myStr2==="es fuerte")  pkm1AT = 2 + pkm1ATextra + D6() + 2 + chekarTerreno(pkm1ATesp);
               if(myStr2==="es debil")   pkm1AT = pkm1ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte, pero no afecta.";
               if(myStr2==="no importa") pkm1AT = pkm1ATextra + D6();
               pkm2DF = pkm2DFextra + D6();
               if(pkm1AT>pkm2DF) {pkm2HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte.";}
               if(pkm1AT<=pkm2DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Ataque Especial Fuerte, pero "+pkmDefensor+" lo bloqueó.<br>";}
            }
         }
      }
   }
}


//----------------------------------------------------------------
function usarAbsorber(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Absorber, pero falló.";
         }else{ 
            if(pkm2HP===pkm2HPmax){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Absorber, pero ya no puede absorber más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Absorber.";
               pkm1HP--;
               pkm2HP++;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Absorber, pero falló.";
         }else{
            if(pkm1HP===pkm1HPmax){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Absorber, pero ya no puede absorber más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Absorber.";
               pkm2HP--;
               pkm1HP++;
            }
         }
      }
   }
}



//----------------------------------------------------------------
function usarParalisis(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML = 
            pkmAtacante + " usó Paralisis, pero falló. <br>";
         }else{
            document.getElementById("infoGreen").innerHTML = 
            pkmAtacante + " usó Paralisis, "+pkm1Name +" está paralizado. <br>";
            pkm1paralizado="si";
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML = 
            pkmAtacante + " usó Paralisis, pero falló. <br>";
         }else{
            document.getElementById("infoGreen").innerHTML = 
            pkmAtacante + " usó Paralisis, "+pkm2Name +" está paralizado. <br>";
            pkm2paralizado="si";
         }
      }
   }
  
}

//----------------------------------------------------------------
function usarCuracion(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Curacion, pero falló.";
         }else{ 
            if(pkm2HP===pkm2HPmax){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Curacion, pero ya no puede curar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Curacion.";
               pkm2HP++;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Curacion, pero falló.";
         }else{
            if(pkm1HP===pkm1HPmax){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Curacion, pero ya no puede curar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Curacion.";
               pkm1HP++;
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarCambio(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=3){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Cambio, pero falló.";
         }else{ 
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Cambio, el combate terminó.";
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Cambio, pero falló.";
         }else{ 
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Cambio, el combate terminó.";
         }
      }
   }
}


//----------------------------------------------------------------
function usarSubirMiDefensa(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Subir mi Defensa, pero falló.";
         }else{          
            if(pkm2SubirDF>=3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Defensa, pero ya no puede subir más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Defensa.";
               pkm2DFextra += 1;
               pkm2SubirDF++;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Subir mi Defensa, pero falló.";
         }else{          
            if(pkm1SubirDF>=3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Defensa, pero ya no puede subir más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Defensa.";
               pkm1DFextra += 1;
               pkm1SubirDF++;
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarSubirMiAtaque(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Subir mi Ataque, pero falló.";
         }else{          
            if(pkm2SubirAT>=3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Ataque, pero ya no puede subir más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Ataque.";
               pkm2ATextra += 1;
               pkm2SubirAT++;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Subir mi Ataque, pero falló.";
         }else{          
            if(pkm1SubirAT>=3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Ataque, pero ya no puede subir más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Subir mi Ataque.";
               pkm1ATextra += 1;
               pkm1SubirAT++;
            }
         }
      }
   }
}


//----------------------------------------------------------------
function usarModificaTerreno(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Modificar Terreno, pero falló.";
         }else{          
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Modificar Terreno.";
            terreno=pkm2ATesp;
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Modificar Terreno, pero falló.";
         }else{          
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Modificar Terreno.";
            terreno=pkm1ATesp;
         }
      }
   }
}


//----------------------------------------------------------------
function usarBajarAtaqueDelRival(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Bajar Ataque del Rival, pero falló.";
         }else{          
            if(pkm1BajarAT<=-3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Ataque del Rival, pero ya no puede bajar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Ataque del Rival.";
               pkm1ATextra -= 1;
               pkm1BajarAT--;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Bajar Ataque del Rival, pero falló.";
         }else{          
            if(pkm2BajarAT<=-3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Ataque del Rival, pero ya no puede bajar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Ataque del Rival.";
               pkm2ATextra -= 1;
               pkm2BajarAT--;
            }
         }
      }
   }
}


//----------------------------------------------------------------
function usarBajarDefensaDelRival(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Bajar Defensa del Rival, pero falló.";
         }else{          
            if(pkm1BajarDF<=-3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Defensa del Rival, pero ya no puede bajar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Defensa del Rival.";
               pkm1DFextra -= 1;
               pkm1BajarDF--;
            }
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=2){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Bajar Defensa del Rival, pero falló.";
         }else{          
            if(pkm2BajarDF<=-3){
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Defensa del Rival, pero ya no puede bajar más.";
            }else{
               document.getElementById("infoGreen").innerHTML=
               pkmAtacante + " usó Bajar Defensa del Rival.";
               pkm2DFextra -= 1;
               pkm2BajarDF--;
            }
         }
      }
   }
}

//----------------------------------------------------------------
function usarDobleFilo(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=3){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Doble Filo, pero falló.";
         }else{
            document.getElementById("infoGreen").innerHTML= 
            pkmAtacante + " usó Doble Filo. ";
            pkm2HP--;
            pkm1HP--;
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=3){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Doble Filo, pero falló.";
         }else{
            document.getElementById("infoGreen").innerHTML= 
            pkmAtacante + " usó Doble Filo. ";
            pkm2HP--;
            pkm1HP--;
         }
      }
   }
}


//---------------------------------------------------------------------------
function chekarTerreno(myType){
   
   var myType;
   
   if(myType==="terreno"){
      return 1;
   }else{
      return 0;
   }
   
}

//----------------------------------------------------------------
function usarExplotar(pkmDefensor){
   
   var pkmAtacante;
   var pkmDefensor;
   
   var myRnd;
   var myStr="";

   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      pkmDefensor=pkm1Name;
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " ya no está paralizado.";
         }
      }
      if(pkm2paralizado==="no"){
         if(D6()<=5){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Explotar, pero falló.";
         }else{ 
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Explotar, el combate terminó.";
            pkm1HP=0;
            pkm2HP=0;
         }
      }
   }else{
      pkmAtacante=pkm1Name;
      pkmDefensor=pkm2Name;
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm1Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }
      if(pkm1paralizado==="no"){
         if(D6()<=5){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Explotar, pero falló.";
         }else{ 
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Explotar, el combate terminó.";
            pkm1HP=0;
            pkm2HP=0;
         }
      }
   }
}

function usarPoderOculto(pkmDefensor){
   
   var pkmDefensor;
   var pkmAtacante;
   var myRnd=1;

   
   if(pkmDefensor===pkm1Name){
      pkmAtacante=pkm2Name;
      
      if(pkm2paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm2paralizado="no";
         }
      }      
      
      if(pkm2paralizado==="no"){
         
         myRnd=getRndInteger(1,18);
         if(myRnd===1)pkm2PoderOculto="Normal";
         if(myRnd===2)pkm2PoderOculto="Fuego";
         if(myRnd===3)pkm2PoderOculto="Agua";
         if(myRnd===4)pkm2PoderOculto="Electrico";
         if(myRnd===5)pkm2PoderOculto="Planta";
         if(myRnd===6)pkm2PoderOculto="Hielo";
         if(myRnd===7)pkm2PoderOculto="Lucha";
         if(myRnd===8)pkm2PoderOculto="Veneno";
         if(myRnd===9)pkm2PoderOculto="Tierra";
         if(myRnd===10)pkm2PoderOculto="Volador";
         if(myRnd===11)pkm2PoderOculto="Psiquico";
         if(myRnd===12)pkm2PoderOculto="Bicho";
         if(myRnd===13)pkm2PoderOculto="Roca";
         if(myRnd===14)pkm2PoderOculto="Fantasma";
         if(myRnd===15)pkm2PoderOculto="Dragon";
         if(myRnd===16)pkm2PoderOculto="Siniestro";
         if(myRnd===17)pkm2PoderOculto="Acero";
         if(myRnd===18)pkm2PoderOculto="Hada";
         
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Poder Oculto ("+pkm2PoderOculto+"), pero falló.";
         }else{
            if(pkm1paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Poder Oculto ("+pkm2PoderOculto+").";
               pkm1HP--;
            }else{
               myStr2=chekarVentaja(pkm2PoderOculto,pkm1DFesp);
               if(myStr2==="es fuerte")  pkm2AT = pkm2ATextra + D6() + 2 + chekarTerreno(pkm2PoderOculto);
               if(myStr2==="es debil")   pkm2AT = pkm2ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm2PoderOculto+"), pero no afecta.";
               if(myStr2==="no importa") pkm2AT = pkm2ATextra + D6();
               pkm1DF = pkm1DFextra + D6();
               if(pkm2AT>pkm1DF) {pkm1HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm2PoderOculto+").";}
               if(pkm2AT<=pkm1DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm2PoderOculto+"), pero "+pkmDefensor+" lo bloqueó.";}
            }
         }
      }        
   }
   
   if(pkmDefensor===pkm2Name){
      pkmAtacante=pkm1Name;
      
      if(pkm1paralizado==="si"){
         if(D6()<=4){
            document.getElementById("infoGreen").innerHTML= 
            pkm2Name + " está paralizado, no puede atacar.";
         }else{
            pkm1paralizado="no";
         }
      }      
      
      if(pkm1paralizado==="no"){
         
         myRnd=getRndInteger(1,18);
         if(myRnd===1)pkm1PoderOculto="Normal";
         if(myRnd===2)pkm1PoderOculto="Fuego";
         if(myRnd===3)pkm1PoderOculto="Agua";
         if(myRnd===4)pkm1PoderOculto="Electrico";
         if(myRnd===5)pkm1PoderOculto="Planta";
         if(myRnd===6)pkm1PoderOculto="Hielo";
         if(myRnd===7)pkm1PoderOculto="Lucha";
         if(myRnd===8)pkm1PoderOculto="Veneno";
         if(myRnd===9)pkm1PoderOculto="Tierra";
         if(myRnd===10)pkm1PoderOculto="Volador";
         if(myRnd===11)pkm1PoderOculto="Psiquico";
         if(myRnd===12)pkm1PoderOculto="Bicho";
         if(myRnd===13)pkm1PoderOculto="Roca";
         if(myRnd===14)pkm1PoderOculto="Fantasma";
         if(myRnd===15)pkm1PoderOculto="Dragon";
         if(myRnd===16)pkm1PoderOculto="Siniestro";
         if(myRnd===17)pkm1PoderOculto="Acero";
         if(myRnd===18)pkm1PoderOculto="Hada";
         
         if(D6()==1){
            document.getElementById("infoGreen").innerHTML=
            pkmAtacante + " usó Poder Oculto ("+pkm1PoderOculto+"), pero falló.";
         }else{
            if(pkm2paralizado==="si"){
               document.getElementById("infoGreen").innerHTML= 
               pkmAtacante + " usó Poder Oculto ("+pkm1PoderOculto+").";
               pkm2HP--;
            }else{
               myStr2=chekarVentaja(pkm1PoderOculto,pkm2DFesp);
               if(myStr2==="es fuerte")  pkm1AT = pkm1ATextra + D6() + 2 + chekarTerreno(pkm1PoderOculto);
               if(myStr2==="es debil")   pkm1AT = pkm1ATextra + D6() - 2;
               if(myStr2==="no afecta")  document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm1PoderOculto+"), pero no afecta.";
               if(myStr2==="no importa") pkm1AT = pkm1ATextra + D6();
               pkm2DF = pkm2DFextra + D6();
               if(pkm1AT>pkm2DF) {pkm2HP--;document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm1PoderOculto+").";}
               if(pkm1AT<=pkm2DF){         document.getElementById("infoGreen").innerHTML= pkmAtacante + " usó Poder Oculto ("+pkm1PoderOculto+"), pero "+pkmDefensor+" lo bloqueó.";}
            }
         }
      }        
   }
   
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

	//document.write(tipoDeAtaque, tipoDeDefensa, answer);


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
        noAfecta=[""];
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
     }

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

    return answer;

}





// //-----------------------------------------------------------------
// function usarAtEspDebil(pkmDefensor) {

   // var pkmAtacante;
   // var pkmDefensor;
   
   // var myRnd;
   // var myStr="";
   // var myStr2="";

   // if(pkmDefensor===pkm1Name){
      // pkmAtacante=pkm2Name;
      // pkmDefensor=pkm1Name;
   // }else{
      // pkmAtacante=pkm1Name;
      // pkmDefensor=pkm2Name;
   // }

   // myRnd=D6();
   
   // if(myRnd==1){
      // myStr += pkmAtacante + " usó Ataque Especial Debil, pero falló. <br>"
   // }else{
      // if(pkmAtacante===pkm1Name){
         // myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
         // if(myStr2==="es fuerte")  pkm1AT = pkm1ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm1AT = pkm1ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Debil, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm1AT = pkm1ATextra + D6();
         // pkm2DF = pkm2DFextra + D6();
         // if(pkm1AT>pkm2DF) {pkm2HP--;myStr += pkmAtacante + " usó Ataque Especial Debil. <br>";}
         // if(pkm1AT<=pkm2DF){         myStr += pkmAtacante + " usó Ataque Especial Debil, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
      // if(pkmAtacante===pkm2Name){
         // myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
         // if(myStr2==="es fuerte")  pkm2AT = pkm2ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm2AT = pkm2ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Debil, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm2AT = pkm2ATextra + D6();
         // pkm1DF = pkm1DFextra + D6();
         // if(pkm2AT>pkm1DF) {pkm1HP--;myStr += pkmAtacante + " usó Ataque Especial Debil. <br>";}
         // if(pkm2AT<=pkm1DF){         myStr += pkmAtacante + " usó Ataque Especial Debil, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
   // }

   // document.getElementById("infoGreen").innerHTML = myStr;
// }

//-----------------------------------------------------------------
// function usarAtEspMedio(pkmDefensor) {

   // var pkmAtacante;
   // var pkmDefensor;
   
   // var myRnd;
   // var myStr="";
   // var myStr2="";

   // if(pkmDefensor===pkm1Name){
      // pkmAtacante=pkm2Name;
      // pkmDefensor=pkm1Name;
   // }else{
      // pkmAtacante=pkm1Name;
      // pkmDefensor=pkm2Name;
   // }

   // myRnd=D6();
   
   // if(myRnd<=2){
      // myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero falló. <br>"
   // }else{
      // if(pkmAtacante===pkm1Name){
         // myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
         // if(myStr2==="es fuerte")  pkm1AT = 1 + pkm1ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm1AT = 1 + pkm1ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm1AT = 1 + pkm1ATextra + D6();
         // pkm2DF = pkm2DFextra + D6();
         // if(pkm1AT>pkm2DF) {pkm2HP--;myStr += pkmAtacante + " usó Ataque Especial Medio. <br>";}
         // if(pkm1AT<=pkm2DF){         myStr += pkmAtacante + " usó Ataque Especial Medio, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
      // if(pkmAtacante===pkm2Name){
         // myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
         // if(myStr2==="es fuerte")  pkm2AT = 1 + pkm2ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm2AT = 1 + pkm2ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Medio, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm2AT = 1 + pkm2ATextra + D6();
         // pkm1DF = pkm1DFextra + D6();
         // if(pkm2AT>pkm1DF) {pkm1HP--;myStr += pkmAtacante + " usó Ataque Especial Medio. <br>";}
         // if(pkm2AT<=pkm1DF){         myStr += pkmAtacante + " usó Ataque Especial Medio, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
   // }

   // document.getElementById("infoGreen").innerHTML = myStr;
// }

//-----------------------------------------------------------------
// function usarAtEspFuerte(pkmDefensor) {

   // var pkmAtacante;
   // var pkmDefensor;
   
   // var myRnd;
   // var myStr="";
   // var myStr2="";

   // if(pkmDefensor===pkm1Name){
      // pkmAtacante=pkm2Name;
      // pkmDefensor=pkm1Name;
   // }else{
      // pkmAtacante=pkm1Name;
      // pkmDefensor=pkm2Name;
   // }

   // myRnd=D6();
   
   // if(myRnd<=2){
      // myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero falló. <br>"
   // }else{
      // if(pkmAtacante===pkm1Name){
         // myStr2=chekarVentaja(pkm1ATesp,pkm2DFesp);
         // if(myStr2==="es fuerte")  pkm1AT = 2 + pkm1ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm1AT = 2 + pkm1ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm1AT = 2 + pkm1ATextra + D6();
         // pkm2DF = pkm2DFextra + D6();
         // if(pkm1AT>pkm2DF) {pkm2HP--;myStr += pkmAtacante + " usó Ataque Especial Fuerte. <br>";}
         // if(pkm1AT<=pkm2DF){         myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
      // if(pkmAtacante===pkm2Name){
         // myStr2=chekarVentaja(pkm2ATesp,pkm1DFesp);
         // if(myStr2==="es fuerte")  pkm2AT = 2 + pkm2ATextra + D6() + 2;
         // if(myStr2==="es debil")   pkm2AT = 2 + pkm2ATextra + D6() - 2;
         // if(myStr2==="no afecta")  myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero no afecta.<br>";
         // if(myStr2==="no importa") pkm2AT = 2 + pkm2ATextra + D6();
         // pkm1DF = pkm1DFextra + D6();
         // if(pkm2AT>pkm1DF) {pkm1HP--;myStr += pkmAtacante + " usó Ataque Especial Fuerte. <br>";}
         // if(pkm2AT<=pkm1DF){         myStr += pkmAtacante + " usó Ataque Especial Fuerte, pero "+pkmDefensor+" lo bloqueó.<br>";}
      // }
   // }

   // document.getElementById("infoGreen").innerHTML = myStr;
// }


//----------------------------------------------------------------
// function usarAbsorber(pkmDefensor){
   
   // var pkmAtacante;
   // var pkmDefensor;
   
   // var myRnd;
   // var myStr="";

   // if(pkmDefensor===pkm1Name){
      // pkmAtacante=pkm2Name;
      // pkmDefensor=pkm1Name;
   // }else{
      // pkmAtacante=pkm1Name;
      // pkmDefensor=pkm2Name;
   // }
   
   // myRnd=D6();
   
   // if(myRnd<=4){
      // myStr += pkmAtacante + " usó Absorber, pero falló. <br>"
   // }else{
      
      // if(pkmAtacante===pkm1Name){
         // if(pkm1HP>0 && pkm1HP<pkm1HPmax){
            // myStr += pkmAtacante + " usó Absorber. <br>"
            // pkm1HP++;
            // pkm2HP--;
         // }else{
            // myStr += pkmAtacante + " usó Absorber, pero ya no puede absorber más. <br>"
         // }
      // }
      
      // if(pkmAtacante===pkm2Name){
         // if(pkm2HP>0 && pkm2HP<pkm2HPmax){
            // myStr += pkmAtacante + " usó Absorber. <br>"
            // pkm2HP++;
            // pkm1HP--;
         // }else{
            // myStr += pkmAtacante + " usó Absorber, pero ya no puede absorber más. <br>"
         // }
      // }
   // }

   // document.getElementById("infoGreen").innerHTML = myStr;
// }
