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
var E=[]; //Ejercicios

//------------------------------------------------------------------------------
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//------------------------------------------------------------------------------
function aleatorioReal(min, max) {
    return Math.random() * (max - min) + min;
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
   E=[];
   console.log("inicio() ",C);
   Examen="<br><br>";

   Tema=document.getElementById("Tema").value;
   Quiz=document.getElementById("Quiz").value;
   
   console.log("Quiz: ", Quiz);

   cargarPreguntas();
   siguientePregunta();

}

//------------------------------------------------------------------------------
function cargarPreguntas(){
   
   if(Quiz==="Falso & Verdadero")
      cargarFalsoVerdadero();

   if(Quiz==="Ejercicios")
      cargarEjercicios();
   
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

      PFV.push("Si un gas se expande: el gas realiza trabajo sobre los alrededores.");
      RFV.push("V");

      PFV.push("Si un gas se comprime: los alrededores realizan trabajo sobre el gas.");
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

      PFV.push("Si un gas se comprime: el gas realiza trabajo sobre los alrededores.");
      RFV.push("F");

      PFV.push("Si un gas se expande: los alrededores realizan trabajo sobre el gas.");
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

      PFV.push("La entalpía estándar de formación de cualquier elemento en su forma más estable es cero.");
      RFV.push("V");

      PFV.push("En una reacción química a volumen constante, el calor es igual al cambio en la energía interna.");
      RFV.push("V");

      PFV.push("En una reacción química a presión constante, el calor es igual al cambio en la entalpía.");
      RFV.push("V");

      PFV.push("No es recomendable diluir el ácido sulfúrico agregando agua al ácido.");
      RFV.push("V");

      PFV.push("En general, las reacciones de descomposición son endotérmicas.");
      RFV.push("V");

      PFV.push("En general, las reacciones de combinación son exotérmicas.");
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

      PFV.push("La entalpía estándar de formación de cualquier elemento en su forma más estable mayor a cero.");
      RFV.push("F");

      PFV.push("En una reacción química a volumen constante, el calor es igual al cambio en la entalpía.");
      RFV.push("F");

      PFV.push("En una reacción química a presión constante, el calor es igual al cambio en la energía interna.");
      RFV.push("F");

      PFV.push("Es totalmente seguro diluir el ácido sulfúrico agregando agua al ácido.");
      RFV.push("F");

      PFV.push("En general, las reacciones de descomposición son exotérmicas.");
      RFV.push("F");

      PFV.push("En general, las reacciones de combinación son endotérmicas.");
      RFV.push("F");

   }
   
   if(Tema==="Tema 3"){}
   
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


//-----------------------------
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//------------------------------------------------------------------------------
function cargarEjercicios(){
   
   var A="";
   var P,P1,P2;
   var T,T1,T2;
   var V,V1,V2;
   var n,n1,n2;
   var m;
   var deltaH,deltaU;
   var deltaV,deltaT;
   var q,w;
   var cp,cv,Cp,Cv;
   var R;
   var salir="";
   var a; //num aleatorio

   if(Tema==="Tema 2"){
      
      //------------------------------------------Ejercicio w = -p(V2 - V1)
      
      a = aleatorio(1,4);

      if(a===1){
         if(aleatorio(0,1)===0){
            V1 = aleatorio(1,10); //L
            V2 = aleatorio(11,20);
         }else{
            V1 = aleatorio(11,20); //L
            V2 = aleatorio(1,10);
         }
         P = aleatorio(1,10); //atm
         w = - P * (V2 - V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A =   "Un gas cambia (isotérmicamente) su volumen desde " + V1 + " L hasta " + V2 + " L. "
             + "Calcular el trabajo efectuado contra una presión constante de " + P + " atm."
             + "<br><br>"
             + "w = " + round(w,2) + " kJ";         
         E.push(A);
      }else if(a===2){
         V1 = aleatorio(1,10); //L
         V2 = aleatorio(11,20);
         P = aleatorio(1,10); //atm
         w = - P * (V2 - V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A =   "Un gas se somete a un proceso isotérmico contra una presión constante de " + P + " atm."
             + " Como resultado se obtiene " + round(-w,2) + " kJ de trabajo sobre los alrededores."
             + " Si el volumen final del gas es de " + V2 + " L, calcular el volumen inicial."
             + "<br><br>"
             + "V<sub>1</sub> = " + V1 + " L";         
         E.push(A);
      }else if(a===3){
         V1 = aleatorio(1,10); //L
         V2 = aleatorio(11,20);
         P = aleatorio(1,10); //atm
         w = - P * (V2 - V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A =   "Calcular el cambio de volumen necesario para que un gas produzca " + round(-w,2) + " kJ de trabajo sobre sus alrededores"
             + " contra una presión constante de " + P + " atm a temperatura constante."
             + "<br><br>"
             + "&Delta;V = " + (V2-V1) + " L";         
         E.push(A);
      }else{
         V2 = aleatorio(1,10); //L
         V1 = aleatorio(11,20);
         P = aleatorio(1,10); //atm
         w = - P * (V2 - V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A =   "Calcular el cambio de volumen necesario para que un gas absorba " + round(w,2) + " kJ de trabajo de sus alrededores"
             + " contra una presión constante de " + P + " atm a temperatura constante."
             + "<br><br>"
             + "&Delta;V = " + (V2-V1) + " L";         
         E.push(A);
      }

      //------------------------------------------Ejercicio w = -nRTln(V2/V1)

      a = aleatorio(1,3);

      if(a===1){
         R = 0.08206 //atm L / mol K
         m = aleatorio(10,100); //g
         n = m * (1.0/4.0); // mol  
         T = aleatorio(25,50);
         if(aleatorio(0,1)===0){
            V1 = aleatorio(1,10); //L
            V2 = aleatorio(11,20);
         }else{
            V1 = aleatorio(11,20); //L
            V2 = aleatorio(1,10);
         }      
         w = - n * R * (T+273.15) * Math.log(V2/V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ            
         A =   m + " gramos de He cambian su volumen desde " + V1 + " L hasta " + V2 + " L. "
             + "Considera que el He se comporta como gas ideal y calcula el trabajo"
             + " isotérmico reversible a " + T + " °C."
             + "<br><br>"
             + "w = " + round(w,2) + " kJ";
         E.push(A);
      }else if(a===2){
         R = 0.08206 //atm L / mol K
         n = aleatorio(2,5); // mol  
         T = aleatorio(25,50);
         V1 = aleatorio(11,20); //L
         V2 = aleatorio(1,10);
         w = - n * R * (T+273.15) * Math.log(V2/V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A = "Durante un proceso reversible isotérmico (" + T + " °C) " + n
           + " moles de gas ideal absorben " + round(w,2) + " kJ en forma de trabajo."
           + " Si el volumen final fue de " + V2 + " L, calcular el volumen inicial."
           + "<br><br>"
           + "V<sub>2</sub> = " + V1 + " L";         
         E.push(A);
      }else{
         R = 0.08206 //atm L / mol K
         n = aleatorio(2,5); // mol  
         T = aleatorio(25,50);
         V2 = aleatorio(11,20); //L
         V1 = aleatorio(1,10);
         w = - n * R * (T+273.15) * Math.log(V2/V1); //atm L
         w = w * (101.325/1.0); // J
         w = w/1000.0; //kJ               
         A = "Mediante un proceso reversible isotérmico (" + T + " °C)"
           + " se desea producir " + round(-w,2) + " kJ de trabajo a partir de " + n +" moles de gas ideal."
           + " Calcular el cambio de volumen requerido si el volumen inicial es de " + V1 + " L."
           + "<br><br>"
           + "&Delta;V = " + (V2-V1) + " L";         
         E.push(A); 
      }

      //------------------------------------------Ejercicio DeltaU = q + w

      if(aleatorio(1,2)===1){
         w =  aleatorio(100,500); //J
         q =  aleatorio(100,500); //J
         deltaU = q - w;            
         A = "Un gas se expande y realiza un trabajo de " + w +" J sobre los alrededores"
           + " mientras absorbe " + q + " J de calor."
           + " Calcular el cambio en la energía interna del gas."
           + "<br><br>"
           + "&Delta;U = " + deltaU + " J";      
         E.push(A);
      }else{
         w =  aleatorio(100,500); //J
         q =  aleatorio(100,500); //J
         deltaU = w - q;            
         A = "Un gas se comprime y libera " + q +" J de calor hacia los alrededores;"
           + " el trabajo resultante es de " + w + " J."
           + " Calcular el cambio en la energía interna del gas."
           + "<br><br>"
           + "&Delta;U = " + deltaU + " J";      
         E.push(A);
      }
      
      //------------------------------------------Ejercicio 2SO + O2 --> 2SO3

      var m_SO2,m_SO3,m_O2,m_C; //g
      var n_SO2,n_SO3,n_O2,n_C; //mol
      var M_O = 16.0; //g/mol
      var M_S = 32.0; //g/mol
      var M_C = 12.0; //g/mol
      a = aleatorio(1,3);

      if(a===1){
         deltaH = -198.2; // kJ/mol      
         m_SO2 = 1.0*aleatorio(10,100); //gramos
         n_SO2 = m_SO2/(M_S + 2.0*M_O); //mol
         q = n_SO2 * (deltaH/2.0); //kJ            
         A = "2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g) &emsp;&Delta;H = -198.2 kJ <br>"
           + "Calcular el calor emitido cuando se consumen " + m_SO2 + " gramos de  SO<sub>2</sub>. <br>"
           + "M<sub>O</sub> = 16 g/mol; M<sub>S</sub> = 32 g/mol."
           + "<br><br>"
           + "Calor emitido: " + round(q,2) + " kJ";      
         E.push(A);
      }else if(a===2){
         deltaH = -198.2; // kJ/mol      
         m_O2 = 1.0*aleatorio(10,100); //gramos
         n_O2 = m_O2/(2.0*M_O); //mol
         q = n_O2 * (deltaH/1.0); //kJ            
         A = "2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g) &emsp;&Delta;H = -198.2 kJ <br>"
           + "Calcular el calor emitido cuando se consumen " + m_O2 + " gramos de O<sub>2</sub>. <br>"
           + "M<sub>O</sub> = 16 g/mol; M<sub>S</sub> = 32 g/mol."
           + "<br><br>"
           + "Calor emitido: " + round(q,2) + " kJ";      
         E.push(A);
      }else{
         deltaH = -198.2; // kJ/mol      
         m_SO3 = 1.0*aleatorio(10,150); //gramos
         n_SO3 = m_SO3/(M_S+3.0*M_O); //mol
         q = n_SO3 * (deltaH/2.0); //kJ            
         A = "2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g) &emsp;&Delta;H = -198.2 kJ <br>"
           + "Calcular el calor emitido cuando se producen " + m_SO3 + " gramos de SO<sub>3</sub>. <br>"
           + "M<sub>O</sub> = 16 g/mol; M<sub>S</sub> = 32 g/mol."
           + "<br><br>"
           + "Calor emitido: " + round(q,2) + " kJ";      
         E.push(A);
      }

      //------------------------------------------Ejercicio 2C + O2 --> 2CO

      if(aleatorio(1,2)===1){
         deltaH = -2.0*110.5; // kJ/mol      
         m_C = 1.0*aleatorio(20,200); //gramos
         n_C = m_C/(M_C); //mol
         q = n_C * (deltaH/2.0); //kJ            
         A = "2C(s) + O<sub>2</sub>(g) &rarr; 2CO(g) &emsp;&Delta;H = " + round(deltaH,2) + " kJ <br>"
           + "¿Cuántos gramos de C se requieren para producir " + round(q,2) + " kJ de calor? <br>"
           + "M<sub>O</sub> = 16 g/mol; M<sub>C</sub> = 12 g/mol."
           + "<br><br>"
           + "Masa de C: " + m_C + " g";      
         E.push(A);
      }else{
         var V_O2;
         deltaH = -2.0*110.5; // kJ/mol      
         m_O = 1.0*aleatorio(20,200); //gramos
         n_O = m_O/(2.0*M_O); //mol
         q = n_O * (deltaH/1.0); //kJ
         V_O2 = m_O /1.429; //L de O2
         A = "2C(s) + O<sub>2</sub>(g) &rarr; 2CO(g) &emsp;&Delta;H = " + round(deltaH,2) + " kJ <br>"
           + "¿Cuántos litros de O<sub>2</sub> se requieren para producir " + round(q,2) + " kJ de calor? <br>"
           + "M<sub>O</sub> = 16 g/mol; M<sub>C</sub> = 12 g/mol; &rho;<sub>O2</sub> = 1.429 g / L"
           + "<br><br>"
           + "V<sub>O2</sub> =  " + round(V_O2,2) + " L";      
         E.push(A);
      }

      //------------------------------------------Ejercicio q = mc(T2 - T1)

      a = aleatorio(1,3);

      if(a===1){

         if(aleatorio(1,2)===1){
            m = 1.0*aleatorio(200,500); //gramos H2O
            T1 = 1.0*aleatorio(15,30); //°C
            T2 = 1.0*aleatorio(40,90); //°C
            q = m * 4.184 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = "Una muestra de " + m + " gramos de agua se calienta desde " + T1 + " hasta " + T2 + " °C."
              + " Calcular la cantidad de calor absorbido por el agua considerando que"
              + " c<sub>H2O</sub> = 4.184 J / g °C."
              + "<br><br>"
              + "Calor: " + round(q,2) + " kJ";
            E.push(A);
         }else{
             m = 1.0*aleatorio(200,500); //gramos H2O
            T2 = 1.0*aleatorio(15,30); //°C
            T1 = 1.0*aleatorio(40,90); //°C
            q = m * 4.184 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = "Una muestra de " + m + " gramos de agua se enfría desde " + T1 + " hasta " + T2 + " °C."
              + " Calcular la cantidad de calor perdido por el agua considerando que"
              + " c<sub>H2O</sub> = 4.184 J / g °C."
              + "<br><br>"
              + "Calor: " + round(q,2) + " kJ";
            E.push(A);
         }


      }else if(a===2){

             V = 1.0*aleatorio(1,8); // L de AGUA
             m = V*1000.0; //gramos AGUA, rho = 1g/mL
            T2 = 1.0*aleatorio(15,30); //°C
            T1 = 1.0*aleatorio(40,90); //°C
            q = m * 4.184 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = V + " litros de agua pierden " + round(-q,2) + " kJ de calor."
              + " Calcular el cambio en la temperatura del agua considerando que <br>"
              + " c<sub>H2O</sub> = 4.184 J / g °C; &rho;<sub>agua</sub> = 1 g / mL"
              + "<br><br>"
              + "&Delta;T = " + (T2-T1) + " °C";
            E.push(A);

      }else{
		  
             V = 1.0*aleatorio(1,8); // L de AGUA
             m = V*1000.0; //gramos AGUA, rho = 1g/mL
            T2 = 1.0*aleatorio(15,30); //°C
            T1 = 1.0*aleatorio(40,90); //°C
            q = m * 4.184 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = "Calcular la temperatura final de " + V + " litros de agua (inicialmente a "
              + T1 + " °C), después de perder " + round(-q,2) + " kJ de calor. <br>"
              + " c<sub>H2O</sub> = 4.184 J / g °C; &rho;<sub>agua</sub> = 1 g / mL"
              + "<br><br>"
              + "T<sub>2</sub> = " + T2 + " °C";
            E.push(A);
            
      }
      
      //------------------------------------ Ejercicio: calorímetro vol cte, q_cal        + q_rx = 0
      //                                                                     C_cal(T2-T1) + q_rx = 0
      
      a = aleatorio(1,2);
      
      var m_C10H8;
      var n_C10H8;
      var M_C10H8=128.2; // g/mol
      //var C_cal = 10.17; // kJ/°C
      var C_cal = aleatorioReal(9.0,11,0); // kJ/°C
      var q_cal;
      var q_rx;
      var q_molar;
      
		a = aleatorio(1,3);
		
		if(a===1){		
		  
			  m_C10H8 = 1.0*aleatorioReal(1.0,5.0); //gramos 
			  n_C10H8 = m_C10H8/M_C10H8; // mol
			  T1 = 1.0*aleatorioReal(15.0,25.0); //°C
			  T2 = T1 + 1.0*aleatorioReal(4.0,6.0); //°C
			  q_cal = 1.0 * C_cal * (T2 - T1); //kJ
			  q_rx = -q_cal;
			  q_molar = q_rx/n_C10H8;
			  
				A = "Una muestra de " + round(m_C10H8,2) + " gramos de C<sub>10</sub>H<sub>8</sub> se quema en un calorímetro a volumen constante."
				  + " La temperatura se eleva desde " + round(T1,2) + " hasta " + round(T2,2) + " °C. Calcular el calor de combustión molar"
				  + " considerando que la capacidad calorífica del calorímetro es de " + round(C_cal,2) + " kJ/°C"
				  + "<br><br>"
				  + "Calor de combustión molar = " + round(q_molar,2) + " kJ/mol";
				E.push(A);
				
		}else if(a===2){
			
			  m_C10H8 = 1.0*aleatorioReal(1.0,5.0); //gramos 
			  n_C10H8 = m_C10H8/M_C10H8; // mol
			  T1 = 1.0*aleatorioReal(15.0,25.0); //°C
			  T2 = T1 + 1.0*aleatorioReal(4.0,6.0); //°C
			  q_cal = 1.0 * C_cal * (T2 - T1); //kJ
			  q_rx = -q_cal;
			  q_molar = q_rx/n_C10H8;
			  
				A = "Una muestra de " + round(m_C10H8,2) + " gramos de C<sub>10</sub>H<sub>8</sub> se quema en un calorímetro a volumen constante."
				  + " Se liberan " + round(-q_molar,2) + " kJ por cada mol consumido. Si la temperatura final dentro del calorímetro fue de " + round(T2,2) + " °C"
				  + " calcular la temperatura inicial considerando que la capacidad calorífica del calorímetro es de " + round(C_cal,2) + " kJ/°C"
				  + "<br><br>"
				  + "T<sub>1</sub> = " + round(T1,2) + " °C";
				E.push(A);
			
			}else{

			  m_C10H8 = 1.0*aleatorioReal(1.0,5.0); //gramos 
			  n_C10H8 = m_C10H8/M_C10H8; // mol
			  T1 = 1.0*aleatorioReal(15.0,25.0); //°C
			  T2 = T1 + 1.0*aleatorioReal(4.0,6.0); //°C
			  q_cal = 1.0 * C_cal * (T2 - T1); //kJ
			  q_rx = -q_cal;
			  q_molar = q_rx/n_C10H8;
			  var DeltaT = T2-T1;
			  
				A = "Una muestra de " + round(m_C10H8,2) + " gramos de C<sub>10</sub>H<sub>8</sub> se quema en un calorímetro a volumen constante."
				  + " Se liberan " + round(-q_molar,2) + " kJ por cada mol consumido. Calcular el aumento de temperatura dentro del calorímetro "
				  + " considerando que la capacidad calorífica del calorímetro es de " + round(C_cal,2) + " kJ/°C"
				  + "<br><br>"
				  + "&Delta;T = " + round(DeltaT,2) + " °C";
				E.push(A);
				
			}

      //------------------------------------ Ejercicio: calorímetro pres cte, q_material + q_agua = 0
      
      a = aleatorio(1,2);
      
      var m_x; //g
      var m_agua; //g
      var V_agua; //mL
      var c_agua = 4.184; // J/g°C
      var c_x // J/g°C
      var q_x;
      var q_agua;
      var T1_x,T2_x,T1_agua,T2_agua;
      
      a = aleatorio(1,2);
      
      if(a===1){     
        
         m_x = aleatorioReal(15.0,25.0); //g
         V_agua = aleatorio(100,200)/1.0 //mL
         m_agua = V_agua; //g
         T1_x = aleatorioReal(85.0,95.0); //°C
         T1_agua = aleatorioReal(20.0,25.0); //°C
         T2_agua = T1_agua + aleatorioReal(1.0,2.0); //°C
         T2_x = T2_agua; //°C
         q_agua = m_agua * c_agua * (T2_agua - T1_agua); //J
         q_x = -q_agua; //J
         c_x = q_x/(m_x * (T2_x - T1_x));//J/g°C
           
            A = "Una esfera metálica de " + round(m_x,2) + " gramos a " + round(T1_x,2) + " °C se introduce en un"
              + " calorímetro con " + V_agua + " mL de agua a presión constante."
              + " La temperatura del agua aumenta desde " + round(T1_agua,2) + " hasta " + round(T2_agua,2) + " °C."
              + " Calcular el calor específico de la esfera metálica. <br>"
              + " c<sub>H2O</sub> = 4.184 J / g °C; &rho;<sub>agua</sub> = 1 g / mL"
              + "<br><br>"
              + "Calor específico de la esfera: " + round(c_x,2) + " J / g °C";
            E.push(A);

      }else{

         m_x = aleatorioReal(15.0,25.0); //g
         V_agua = aleatorio(100,200)/1.0 //mL
         m_agua = V_agua; //g
         T1_x = aleatorioReal(85.0,95.0); //°C
         T1_agua = aleatorioReal(20.0,25.0); //°C
         T2_agua = T1_agua + aleatorioReal(1.0,2.0); //°C
         T2_x = T2_agua; //°C
         q_agua = m_agua * c_agua * (T2_agua - T1_agua); //J
         q_x = -q_agua; //J
         c_x = q_x/(m_x * (T2_x - T1_x));//J/g°C
           
            A = "Una esfera metálica de " + round(m_x,2) + " gramos a " + round(T1_x,2) + " °C"
              + " tiene un calor específico de " + round(c_x,2) + " J / g °C."
              + " La esfera se introduce dentro de un calorímetro a presión constante que"
              + " contiene " + V_agua + " mL de agua a " + round(T1_agua,2) + " °C."
              + " Debido a este proceso el agua absorbe " + round(q_agua,2) + " J de calor."
              + " Calcular la temperatura final del agua. <br>"
              + " c<sub>H2O</sub> = 4.184 J / g °C; &rho;<sub>agua</sub> = 1 g / mL"
              + "<br><br>"
              + "Temperatura final: " + round(T2_agua,2) + " °C";
            E.push(A);

      }


   }//if(tema 2)

   NT=E.length;
   
}

//------------------------------------------------------------------------------
function siguientePregunta(){

   if(Quiz==="Ejercicios")
      preguntarEjercicios();

	if(juegoTerminado==="no" && hayMasPreguntas()==="si"){

		if(Quiz==="Falso & Verdadero")
			preguntarFalsoVerdadero();        
           
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
function preguntarEjercicios(){

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

   
   cargarEjercicios();
   N = aleatorio(0,NT-1);
   
   document.getElementById("Pregunta").innerHTML = E[N];
   document.getElementById("botonGris").innerHTML = "Siguiente";

   console.log("preguntarEjercicios(), ", N,E[N]);
   
}

//------------------------------------------------------------------------------
function botonGris(){

  	mostrado="si";

   if(Quiz==="Ejercicios")
      siguientePregunta();

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

/*
         if(aleatorio(1,2)===1){
            m = 1.0*aleatorio(200,500); //gramos Fe
            T1 = 1.0*aleatorio(15,30); //°C
            T2 = 1.0*aleatorio(40,90); //°C
            q = m * 0.444 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = "Una barra de hierro de " + m + " gramos se calienta desde " + T1 + " hasta " + T2 + " °C."
              + " Calcular la cantidad de calor absorbido por la barra considerando que"
              + " c<sub>Fe</sub> = 0.444 J / g °C."
              + "<br><br>"
              + "Calor: " + round(q,2) + " kJ";
            E.push(A);
         }else{
            m = 1.0*aleatorio(200,500); //gramos Fe
            T2 = 1.0*aleatorio(15,30); //°C
            T1 = 1.0*aleatorio(40,90); //°C
            q = m * 0.444 * (T2 - T1); //J
            q = q/1000.0 //kJ
            A = "Una barra de hierro de " + m + " gramos se enfría desde " + T1 + " hasta " + T2 + " °C."
              + " Calcular la cantidad de calor perdido por la barra considerando que <br>"
              + " c<sub>H2O</sub> = 4.184 J / g °C "
              + "<br><br>"
              + "Calor: " + round(q,2) + " kJ";
            E.push(A);
         }
         */
