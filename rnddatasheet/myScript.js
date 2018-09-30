function generateXYZ() {
   
   var myRnd=1;
   var myString="";
   var At1="";
   
   var DF=1;
   var HP=1;
   var SP=1;
   var IQ=1;
   var CR=1;
   var AT=1;
   
   while(true){

      //Ataque Primario
      
      myRnd=getRndInteger(1,6);
      if(myRnd==1) At1="Hidde Power";
      if(myRnd==2) At1="Tackle";
      if(myRnd==3) At1="Weak Special Attack";
      if(myRnd==4) At1="Special Attack";
      if(myRnd==5) At1="Strong Special Attack";
      if(myRnd==6) At1="Absorb";
    
      //Ataque Secundario
      
      myRnd=getRndInteger(1,17);
      if(myRnd==1) At2="Hidde Power";
      if(myRnd==2) At2="Tackle";
      if(myRnd==3) At2="Weak Special Attack";
      if(myRnd==4) At2="Special Attack";
      if(myRnd==5) At2="Strong Special Attack";
      if(myRnd==6) At2="Absorb";
      if(myRnd==7) At2="Paralysis";
      if(myRnd==8) At2="Health";
      if(myRnd==9) At2="Lucky";
      if(myRnd==10) At2="Increase My Defense";
      if(myRnd==11) At2="Increase My Attack";
      if(myRnd==12) At2="Scared";
      if(myRnd==13) At2="Angry";
      if(myRnd==14) At2="Decrease Opponent's Attack";
      if(myRnd==15) At2="Decrease Opponent's Defense";
      if(myRnd==16) At2="Somniferous";
      if(myRnd==17) At2="Double Edge";

      //Ataque Secundario
      
      myRnd=getRndInteger(1,17);
      if(myRnd==1) At3="Hidde Power";
      if(myRnd==2) At3="Tackle";
      if(myRnd==3) At3="Weak Special Attack";
      if(myRnd==4) At3="Special Attack";
      if(myRnd==5) At3="Strong Special Attack";
      if(myRnd==6) At3="Absorb";
      if(myRnd==7) At3="Paralysis";
      if(myRnd==8) At3="Health";
      if(myRnd==9) At3="Lucky";
      if(myRnd==10) At3="Increase My Defense";
      if(myRnd==11) At3="Increase My Attack";
      if(myRnd==12) At3="Scared";
      if(myRnd==13) At3="Angry";
      if(myRnd==14) At3="Decrease Opponent's Attack";
      if(myRnd==15) At3="Decrease Opponent's Defense";
      if(myRnd==17) At3="Somniferous";
      if(myRnd==18) At3="Double Edge";
      
      if(At1!==At2 && At1!==At3 && At2!==At3){
         console.log("fail!");
         break;
      }
      
   }//while
   
   //Estadisticas

   while(true){
      
      HP=getRndInteger(1,6);
      SP=getRndInteger(1,6);
      DF=getRndInteger(1,6);
      AT=getRndInteger(1,6);
      IQ=getRndInteger(1,6);
      CR=getRndInteger(1,6);
      
      if(
      HP!=SP && HP!=DF && HP!=AT && HP!=IQ && HP!=CR &&
      SP!=DF && SP!=AT && SP!=IQ && SP!=CR &&
      DF!=AT && DF!=IQ && DF!=CR &&
      AT!=IQ && AT!=CR &&
      IQ!=CR
      )break;
      
   }//while
   
   
   document.getElementById("At1").innerHTML = At1;
   document.getElementById("At2").innerHTML = At2;
   document.getElementById("At3").innerHTML = At3;
   
   document.getElementById("HP").innerHTML = HP;
   document.getElementById("SP").innerHTML = SP;
   document.getElementById("DF").innerHTML = DF;
   document.getElementById("IQ").innerHTML = IQ;
   document.getElementById("CR").innerHTML = CR;
   document.getElementById("AT").innerHTML = AT;
 
}

function D6() {
   return getRndInteger(1,6);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

