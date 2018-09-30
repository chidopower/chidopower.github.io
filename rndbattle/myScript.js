//---------------------------------------------------------- globalVars

var redPkm = new Poke();
var bluePkm = new Poke();
var step=0;
var terrain="";

//---------------------------------------------------------------- Poke
function Poke(){

   this.name = "";
   this.type1 = "";
   this.type2 = "";
   this.attack1="";
   this.attack2="";
   this.attack3="";
   this.hiddenPower="";

   this.HP=0;
   this.HPmax=0;
   this.AT=0;
   this.DF=0;
   this.CR=0;
   this.HPextra=0;
   this.DFextra=0;
   this.ATextra=0;
   this.luckyNumber=0;
   this.ATplus=0;//contador
   this.DFplus=0;//contador
   this.AngryPlus=0;//contador
   this.ScaredPlus=0;//contador
   this.lost=0; //contar turnos perdidos

   this.status="ok"; // "sleeping","paralyzed"

   //-------------------------------------------------------- Poke.show
   this.show = function(){
      var myStr = this.name + " is " + this.type1 + " " + this.type2 + ".";
      return myStr;}

   //------------------------------------------------ Poke.chooseAttack
   this.chooseAttack = function() {
       var myRnd = D6();
       var myAttack;

       if(myRnd===1 || myRnd===2 || myRnd===3) myAttack=this.attack1;
       if(myRnd===4 || myRnd===5) myAttack=this.attack2;
       if(myRnd===6) myAttack=this.attack3;

       console.log(this.name, "chooseAttack ", myAttack);

       return myAttack;}

   //--------------------------------------------- Poke.didIHitMyAttack
   this.didIHitMyAttack = function(myAttack,myCR) {

       var myRnd=D6();
       var answer="No";

       if(myRnd===myCR || myRnd===this.luckyNumber){
           answer="Yes";}
       else{
           if(myAttack==="Tackle" && myRnd>1)answer="Yes";//ok
           if(myAttack==="Hidden Power" && myRnd>1)answer="Yes";//ok
           if(myAttack==="Weak Special Attack" && myRnd>1)answer="Yes";//ok
           if(myAttack==="Special Attack" && myRnd>2)answer="Yes";//ok
           if(myAttack==="Strong Special Attack" && myRnd>3)answer="Yes";//ok
           if(myAttack==="Absorb" && myRnd>4)answer="Yes";//ok
           if(myAttack==="Paralysis" && myRnd>4)answer="Yes"; //ok, hasta 3 turnos paralizado (no a wevo)
           if(myAttack==="Health" && myRnd>3)answer="Yes";//ok
           if(myAttack==="Lucky" && myRnd>3)answer="Yes";
           if(myAttack==="Increase My Defense" && myRnd>2)answer="Yes";//ok
           if(myAttack==="Increase My Attack" && myRnd>2)answer="Yes";//ok
           if(myAttack==="Scared" && myRnd>5)answer="Yes";//ok
           if(myAttack==="Angry" && myRnd>1)answer="Yes";//ok
           if(myAttack==="Decrease Opponent's Attack" && myRnd>2)answer="Yes";//ok
           if(myAttack==="Decrease Opponent's Defense" && myRnd>2)answer="Yes";//ok
           if(myAttack==="Somniferous" && myRnd>4)answer="Yes"; //ok, solo un turno dormido a wevo
           if(myAttack==="Double Edge" && myRnd>2)answer="Yes";}//ok

           console.log(this.name, "didIHitMyAttack ", answer);

       return answer; }

   //--------------------------------------------------------- Poke.attack
    this.attack = function(rival) {

        console.log(step,"----------");
        var myAttack=this.chooseAttack();
        var myRnd;
        var AT;
        var DF;

        if(this.status==="sleeping"){
            myRnd=D6();
            if(this.lost===1 || myRnd===this.luckyNumber){
                this.status="ok";
                this.lost=0;
                console.log(this.name," woke up");}
            else{
                document.getElementById("infoAttack").innerHTML =
                this.name + " is sleeping.";
                this.lost++;
                console.log(this.name," is sleeping", "lost ",this.lost);}}

        if(this.status==="paralyzed"){
            myRnd=D6();
            if(myRnd>=5 || myRnd===this.CR || this.lost===3 || myRnd===this.luckyNumber){
                this.status="ok";
                this.lost=0;
                console.log(this.name," woke up");}
            else{
                document.getElementById("infoAttack").innerHTML =
                this.name + " is paralyzed.";
                this.lost++;
                console.log(this.name," is paralyzed", "lost ",this.lost);}}


        if(this.status==="ok"){

            if(this.didIHitMyAttack(myAttack,this.CR)==="Yes"){
                if(myAttack==="Tackle" ||
                   myAttack==="Hidden Power" ||
                   myAttack==="Weak Special Attack" ||
                   myAttack==="Special Attack" ||
                   myAttack==="Strong Special Attack"){
                        AT=this.hitIt(myAttack,this.type1,rival.type2);
                        DF=rival.defend();
                        if(AT>DF){
                            rival.HP--;
                            document.getElementById("infoAttack").innerHTML =
                            this.name+" use "+myAttack+".";
                        }else{
                            document.getElementById("infoAttack").innerHTML =
                            this.name+" use "+myAttack+" but "+rival.name+" blocked it";;}}

                if(myAttack==="Paralysis"){
                    document.getElementById("infoAttack").innerHTML =
                    this.name+" use "+myAttack+".";
                    rival.status="paralyzed";}

                if(myAttack==="Somniferous"){
                    document.getElementById("infoAttack").innerHTML =
                    this.name+" use "+myAttack+".";
                    rival.status="sleeping";}

                if(myAttack==="Absorb"){
                    if(this.HP<this.HPmax){
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";
                        this.HP++;
                        rival.HP--;}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but he can not absorb anymore.";}}

                if(myAttack==="Health"){
                    if(this.HP<this.HPmax){
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";
                        this.HP++;}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but he can not health anymore.";}}

                if(myAttack==="Increase My Defense"){
                    if(this.DFplus<3){
                        this.DFplus++;
                        this.DFextra++;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not increase anymore.";}}

                if(myAttack==="Increase My Attack"){
                    if(this.ATplus<3){
                        this.ATplus++;
                        this.ATextra++;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not increase anymore.";}}

                if(myAttack=="Decrease Opponent's Attack"){
                    if(rival.ATplus>-3){
                        rival.ATplus--;
                        rival.ATextra--;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not decrease anymore.";}}

                if(myAttack=="Decrease Opponent's Defense"){
                    if(rival.DFplus>-3){
                        rival.DFplus--;
                        rival.DFextra--;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not decrease anymore.";}}

                if(myAttack==="Double Edge"){
                    this.HP--;
                    rival.HP--;
                    document.getElementById("infoAttack").innerHTML =
                    this.name+" use "+myAttack+".";
                }


                if(myAttack==="Angry"){
                    if(this.AngryPlus<3){
                        this.AngryPlus++;
                        this.ATextra +=2;
                        this.DFextra -=2;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not increase anymore.";}}

                if(myAttack==="Scared"){
                    if(this.ScaredPlus<3){
                        this.ScaredPlus++;
                        this.ATextra -=2;
                        this.DFextra +=2;
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+".";}
                    else{
                        document.getElementById("infoAttack").innerHTML =
                        this.name+" use "+myAttack+", but it can not increase anymore.";}}

                if(myAttack==="Lucky"){
                    var again="Yes";
                    while(again==="Yes"){
                        this.luckyNumber=D6();
                        if(this.luckyNumber===this.CR)
                            again="Yes";
                        else
                            again="No";
                    }
                    document.getElementById("infoAttack").innerHTML =
                    this.name+" use "+myAttack+".";
                    console.log(this.name, "CR num ", this.CR, "Lucky num", this.luckyNumber);
                }

            }else{
                document.getElementById("infoAttack").innerHTML =
                this.name+" use "+myAttack+" but failed.";}}

    }

    //------------------------------------------------- Poke.hitIt
    this.hitIt = function(myAttack,myType,rivalType){
        var myRnd=D6();
        var AT=0;

        if(myAttack==="Tackle"){AT=0;}
        if(myAttack==="Hidden Power"){
            myType=this.chooseHiddenPower();
            AT=0;
            if(this.compare(myType,rivalType)==="is Strong")       AT=AT+2;
            if(this.compare(myType,rivalType)==="is Weak")         AT=AT-2;
            if(this.compare(myType,rivalType)==="does not Affect") AT=AT-100;}
        if(myAttack==="Weak Special Attack"){
            AT=0;
            if(this.compare(myType,rivalType)==="is Strong")       AT=AT+2;
            if(this.compare(myType,rivalType)==="is Weak")         AT=AT-2;
            if(this.compare(myType,rivalType)==="does not Affect") AT=AT-100;}
        if(myAttack==="Special Attack"){
            AT=1;
            if(this.compare(myType,rivalType)==="is Strong")       AT=AT+2;
            if(this.compare(myType,rivalType)==="is Weak")         AT=AT-2;
            if(this.compare(myType,rivalType)==="does not Affect") AT=AT-100;}
        if(myAttack==="Strong Special Attack"){
            AT=3;
            if(this.compare(myType,rivalType)==="is Strong")       AT=AT+2;
            if(this.compare(myType,rivalType)==="is Weak")         AT=AT-2;
            if(this.compare(myType,rivalType)==="does not Affect") AT=AT-100;}

        if(myRnd===this.CR || myRnd===this.luckyNumber)
            {AT = AT + this.ATextra + this.ATplus + 2*D6();}
        else
            {AT = AT + this.ATextra + this.ATplus + D6();}

        console.log(this.name, "hitIt ", AT);

        return AT;}

    //------------------------------------------ Poke.chooseHiddenPower
    this.chooseHiddenPower = function(){
        var answer;
        var myRnd=getRndInteger(1,18);

        if(myRnd===1) answer="Normal";
        if(myRnd===2) answer="Fire";
        if(myRnd===3) answer="Water";
        if(myRnd===4) answer="Electric";
        if(myRnd===5) answer="Grass";
        if(myRnd===6) answer="Ice";
        if(myRnd===7) answer="Fight";
        if(myRnd===8) answer="Poison";
        if(myRnd===9) answer="Ground";
        if(myRnd===10) answer="Fly";
        if(myRnd===11) answer="Psychic";
        if(myRnd===12) answer="Bug";
        if(myRnd===13) answer="Rock";
        if(myRnd===14) answer="Ghost";
        if(myRnd===15) answer="Dragon";
        if(myRnd===16) answer="Dark";
        if(myRnd===17) answer="Steel";
        if(myRnd===18) answer="Fairy";

        this.hiddenPower=answer;

        console.log(this.name, "chooseHiddenPower ", answer);

        return answer;}

    //------------------------------------------------- Poke.hitIt
    this.defend = function(){
        var myRnd=D6();
        var DF;

        if(this.status==="ok"){
            if(myRnd===this.CR){DF = this.DFextra + this.DFplus + 2*D6();}
            else{DF = this.DFextra + this.DFplus + D6();}}

        if(this.status==="sleeping" || this.status==="paralyzed"){DF=-1;}

        console.log(this.name, "defend ", DF);

        return DF;}

   //---------------------------------------------------------- Poke.compare
   this.compare = function(myType,rivalType) {

    var answer;

    var i=0;
   	var j=0;
   	var rivalType;
   	var answer="does not matter";
   	var itsStrongAgainst="";
   	var itsWeakAgainst="";
   	var doesNotAffect="";

   	if(myType==="Steel"){
         itsStrongAgainst=["Fairy", "Ice", "Rock"];
         itsWeakAgainst=["Steel", "Water", "Electric", "Fire"];
         doesNotAffect=[""];
   	}

      if(myType==="Water"){
         itsStrongAgainst=["Fire","Ground","Rock"];
         itsWeakAgainst=["Water","Grass","Dragon"];
      }



      if(myType==="Bug"){
            itsStrongAgainst=["Grass","Psychic","Dark"];
            itsWeakAgainst=["Steel","Ghost","Fire","Fairy","Fight","Poison","Fly"];
       }

      if(myType==="Dragon"){
            itsStrongAgainst=["Dragon"];
            itsWeakAgainst=["Steel"];
            doesNotAffect=["Fairy"];
        }

      if(myType==="Electric"){
            itsStrongAgainst=["Water","Fly"];
            itsWeakAgainst=["Dragon","Electric","Grass"];
            doesNotAffect=["Ground"];
       }


      if(myType==="Ghost"){
            itsStrongAgainst=["Ghost","Psychic"];
            itsWeakAgainst=["Dark"];
            doesNotAffect=["Normal"];
       }

      if(myType==="Fire"){
            itsStrongAgainst=["Grass", "Ice", "Bug", "Steel"];
            itsWeakAgainst=["Fire", "Water", "Rock", "Dragon"];
      }

      if(myType==="Fairy"){
            itsStrongAgainst=["Dragon", "Fight", "Dark"];
            itsWeakAgainst=["Steel", "Fire", "Poison"];
       }

      if(myType==="Ice"){
            itsStrongAgainst=["Dragon", "Dragon", "Grass","Ground"];
            itsWeakAgainst=["Steel", "Water", "Fire", "Ice"];
      }

      if(myType==="Fight"){
            itsStrongAgainst=["Steel","Ice","Normal","Rock","Dark"];
            itsWeakAgainst=["Bug","Fairy","Psychic","Poison","Fly"];
            doesNotAffect=["Ghost"];
       }

      if(myType==="Normal"){
         itsWeakAgainst=["Rock", "Steel"];
         doesNotAffect=["Ghost"];
      }

      if(myType==="Grass"){
         itsStrongAgainst=["Water", "Rock", "Ground"];
         itsWeakAgainst=["Steel", "Bug", "Dragon","Fire", "Grass","Poison","Fly"];
      }


      if(myType==="Psychic"){
            itsStrongAgainst=["Fight","Poison"];
            itsWeakAgainst=["Steel","Psychic"];
            doesNotAffect=["Dark"];
      }

      if(myType==="Rock"){
            itsStrongAgainst=["Bug","Fire","Ice","Fly"];
            itsWeakAgainst=["Steel","Fight","Ground"];
      }


      if(myType==="Dark"){
            itsStrongAgainst=["Ghost","Psychic"];
            itsWeakAgainst=["Fairy","Fight","Dark"];
      }


      if(myType==="Ground"){
            itsStrongAgainst=["Steel","Electric","Fire","Rock","Poison"];
            itsWeakAgainst=["Bug","Grass"];
            doesNotAffect=["Fly"];
      }


      if(myType==="Poison"){
            itsStrongAgainst=["Fairy","Grass"];
            itsWeakAgainst=["Ghost","Rock","Ground","Poison"];
            doesNotAffect=["Steel"];
      }

      if(myType==="Fly"){
            itsStrongAgainst=["Bug","Fight","Grass"];
            itsWeakAgainst=["Steel","Electric","Rock"];
     }

   	//------

       for(j=0;j<itsStrongAgainst.length;j++){
       	if(rivalType===itsStrongAgainst[j]){
       		answer="is Strong";
       	}
       }

       for(j=0;j<itsWeakAgainst.length;j++){
       	if(rivalType===itsWeakAgainst[j]){
       		answer="is Weak";
       	}
       }

       for(j=0;j<doesNotAffect.length;j++){
       	if(rivalType===doesNotAffect[j]){
       		answer="does not Affect";
       	}
       }

       console.log(this.name, "compare ", answer);

       return answer;
   }

}


//---------------------------------------------------------- attack
function attack(){

   var AT;
   var DF;

   if(step%2===0){
     bluePkm.attack(redPkm);
   }else{
     redPkm.attack(bluePkm);
   }

   step++;
   showInfo();
}


//---------------------------------------------------------------- D6()
function D6() {
   return getRndInteger(1,6);
}

//---------------------------------------------------------------- getRndInteger
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



//---------------------------------------------------------- start
function start(){

   redPkm.name = "";
   redPkm.type1 = "";
   redPkm.type2 = "";
   redPkm.attack1="";
   redPkm.attack2="";
   redPkm.attack3="";
   redPkm.HP=3;
   redPkm.AT=0;
   redPkm.DF=0;
   redPkm.CR=0;
   redPkm.HPextra=0;
   redPkm.DFextra=0;
   redPkm.ATextra=0;
   redPkm.ATplus=0;
   redPkm.DFplus=0;
   redPkm.AngryPlus=0;
   redPkm.ScaredPlus=0;
   redPkm.lost=0;
   redPkm.luckyNumber=0;
   redPkm.status="ok";

   bluePkm.name = "";
   bluePkm.type1 = "";
   bluePkm.type2 = "";
   bluePkm.attack1="";
   bluePkm.attack2="";
   bluePkm.attack3="";
   bluePkm.HP=3;
   bluePkm.AT=0;
   bluePkm.DF=0;
   bluePkm.CR=0;
   bluePkm.HPextra=0;
   bluePkm.DFextra=0;
   bluePkm.ATextra=0;
   bluePkm.ATplus=0;
   bluePkm.DFplus=0;
   bluePkm.AngryPlus=0;
   bluePkm.ScaredPlus=0;
   bluePkm.lost=0;
   bluePkm.luckyNumber=0;
   bluePkm.status="ok";

   redPkm.name=document.getElementById("redPkmName").value;
   //redPkm.name="redPkm";
   redPkm.type1=document.getElementById("redPkmType1").value;
   redPkm.type2=document.getElementById("redPkmType2").value;
   redPkm.attack1=document.getElementById("redPkmAttack1").value;
   redPkm.attack2=document.getElementById("redPkmAttack2").value;
   redPkm.attack3=document.getElementById("redPkmAttack3").value;
   redPkm.HPextra=parseInt(document.getElementById("redPkmHPextra").value);
   redPkm.DFextra=parseInt(document.getElementById("redPkmDFextra").value);
   redPkm.ATextra=parseInt(document.getElementById("redPkmATextra").value);
   redPkm.CR=parseInt(document.getElementById("redPkmCR").value);
   redPkm.HP += redPkm.HPextra;
   redPkm.HPmax=redPkm.HP;

   bluePkm.name=document.getElementById("bluePkmName").value;
   //bluePkm.name="bluePkm";
   bluePkm.type1=document.getElementById("bluePkmType1").value;
   bluePkm.type2=document.getElementById("bluePkmType2").value;
   bluePkm.attack1=document.getElementById("bluePkmAttack1").value;
   bluePkm.attack2=document.getElementById("bluePkmAttack2").value;
   bluePkm.attack3=document.getElementById("bluePkmAttack3").value;
   bluePkm.HPextra=parseInt(document.getElementById("bluePkmHPextra").value);
   bluePkm.DFextra=parseInt(document.getElementById("bluePkmDFextra").value);
   bluePkm.ATextra=parseInt(document.getElementById("bluePkmATextra").value);
   bluePkm.CR=parseInt(document.getElementById("bluePkmCR").value);
   bluePkm.HP += bluePkm.HPextra;
   bluePkm.HPmax=bluePkm.HP;

   step=1;

   showInfo();
   document.getElementById("infoAttack").innerHTML = "The Battle Begins!!";
}


//---------------------------------------------------------------- showInfo
function showInfo(){

   document.getElementById("tabRedPkmName").innerHTML = redPkm.name;
   document.getElementById("tabRedPkmState").innerHTML = redPkm.status;
   document.getElementById("tabRedPkmHP").innerHTML = redPkm.HP;
   if(redPkm.DFextra>=0)
        document.getElementById("tabRedPkmDF").innerHTML = "+"+redPkm.DFextra;
   else
        document.getElementById("tabRedPkmDF").innerHTML = ""+redPkm.DFextra;

    if(redPkm.ATextra>=0)
         document.getElementById("tabRedPkmAT").innerHTML = "+"+redPkm.ATextra;
    else
         document.getElementById("tabRedPkmAT").innerHTML = ""+redPkm.ATextra;

   document.getElementById("tabBluePkmName").innerHTML = bluePkm.name;
   document.getElementById("tabBluePkmState").innerHTML = bluePkm.status;
   document.getElementById("tabBluePkmHP").innerHTML = bluePkm.HP;

   if(bluePkm.DFextra>=0)
        document.getElementById("tabBluePkmDF").innerHTML = "+"+bluePkm.DFextra;
   else
        document.getElementById("tabBluePkmDF").innerHTML = ""+bluePkm.DFextra;

    if(bluePkm.ATextra>=0)
         document.getElementById("tabBluePkmAT").innerHTML = "+"+bluePkm.ATextra;
    else
         document.getElementById("tabBluePkmAT").innerHTML = ""+bluePkm.ATextra;



   if(step%2===0){
      document.getElementById("infoNext").innerHTML = "Next: "+bluePkm.name+".";
   }else{
      document.getElementById("infoNext").innerHTML = "Next: "+redPkm.name+".";
   }

}
