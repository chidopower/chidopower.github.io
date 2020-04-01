
var actividad;
var level;

var QUESTION;
var ANSWER;

var userAns;
var trueAns;

var fakeAns = [];

var success;
var mistakes;

var symbols = [];
var names = [];
var PM = [];
var is_molar_mass;
var z=0;
var zmin=1;
var zmax=45;
var zold=0;
var z1,z2,z3,z4 //fakes

var user_name;

var counter=1;
var maxcounter=25; //25 preguntas en 300 segundos
var maxtimeleft = 300;
var timeleft = maxtimeleft;

//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    //clearInterval(downloadTimer);
    document.getElementById("relleno").innerHTML = "Tiempo: 0";
  } else {
    document.getElementById("relleno").innerHTML = "Tiempo: " + timeleft;
  }
  timeleft -= 1;
}, 1000);

//------------------------------------------------------------------------------
function start(){
	
	counter = 1;
	timeleft = maxtimeleft;

	actividad = document.getElementById("actividad").value;
	user_name = document.getElementById("user_name").value;

	document.getElementById("buttons").style.display = "block";
	document.getElementById("answer_").style.display = "none";
	document.getElementById("start_").style.display = "none";
	document.getElementById("next_").style.display = "none";
	document.getElementById("score").style.display = "block";
	
	if(actividad==="actividad_08") 
		loadData();
	else{
		loadDataComp();
		//console.log("compuestos")
	}
	
	resetScore();
		
	play();
	
}

//------------------------------------------------------------------------------
function play(){

	var rnd;
	
	updateScore();
	
	if(actividad==="actividad_08") play_act_08();
	if(actividad==="actividad_09") play_act_09();
	if(actividad==="actividad_10") play_act_10();
		
	document.getElementById("question").innerHTML = QUESTION;
	document.getElementById("answer").innerHTML = ANSWER;

	showAns();

}

//------------------------------------------------------------------------------
function play_act_08(){

	zold = z;
	zmin = 1;
	zmax = 56;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}

	if(rndi(1,2)===1)
	{
		QUESTION = "Masa atómica <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "no";
	}
	else
	{
		QUESTION = "Masa molar <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "ok";
	}

	makeFakeZ();
	
	if(counter>maxcounter){QUESTION="...";}
	if(timeleft <= 0){QUESTION="...";}
	
	//console.log(z1,z2,z3,z4);
	//console.log(PM[z1], PM[z2], PM[z3], PM[z4]);
	
}

//------------------------------------------------------------------------------
function play_act_09(){

	zold = z;
	zmin = 1;
	zmax = 26;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}

	if(rndi(1,2)===1)
	{
		QUESTION = "Masa molecular <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "no";
	}
	else
	{
		QUESTION = "Masa molar <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "ok";
	}

	makeFakeZ();
	
	if(counter>maxcounter){QUESTION="...";}
	if(timeleft <= 0){QUESTION="...";}
	
	//console.log(z1,z2,z3,z4);
	//console.log(PM[z1], PM[z2], PM[z3], PM[z4]);
	
}

//------------------------------------------------------------------------------
function play_act_10(){

	zold = z;
	zmin = 25;
	zmax = 40;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}

	if(rndi(1,2)===1)
	{
		QUESTION = "Masa molecular <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "no";
	}
	else
	{
		QUESTION = "Masa molar <br>de " + symbols[z];
		ANSWER = PM[z];
		is_molar_mass = "ok";
	}

	makeFakeZ();
	
	if(counter>maxcounter){QUESTION="...";}
	if(timeleft <= 0){QUESTION="...";}
	
	//console.log(z1,z2,z3,z4);
	//console.log(PM[z1], PM[z2], PM[z3], PM[z4]);
	
}

//------------------------------------------------------------------------------
function bR()  { start(); start();}
function b1()  { if(timeleft>0) { usrAns = 1; checkAns();} }
function b2()  { if(timeleft>0) { usrAns = 2; checkAns();} }
function b3()  { if(timeleft>0) { usrAns = 3; checkAns();} }
function b4()  { if(timeleft>0) { usrAns = 4; checkAns();} }
function b0()  { if(timeleft>0) { usrAns = 5; checkAns();} }

//------------------------------------------------------------------------------
function checkAns(){
	
	counter +=1 ;

	if(counter <= (maxcounter+1) )
	{
		
		if(usrAns === trueAns)
		{
			success += 4;
			updateScore();
			play();
		}else{
			mistakes += 1;
			updateScore();
		}
		
	}
	else
	{
	
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
			
	}


}



//------------------------------------------------------------------------------
function resetScore(){
	success = 0;
	mistakes = 0;
	updateScore();
}

//------------------------------------------------------------------------------
function updateScore(){

	document.getElementById("mistakes").innerHTML = "Errores: " + mistakes;
	document.getElementById("success").innerHTML = "Calif: "+ success;
	document.getElementById("show_user_name").innerHTML = user_name +"; "+actividad;
	
	if(counter < (maxcounter+1))
	{
		//document.getElementById("relleno").innerHTML = counter + "/" + maxcounter;
	}
	
	


}

//------------------------------------------------------------------------------
function showAns(){
	
	console.log(counter);

	trueAns = rndi(1,5);
	
	var ANS = "";
	
	if(is_molar_mass==="ok")
	{
		if(coin()===1) 
			fakeAns[0] = ANSWER + "<br> uma";
		else
			fakeAns[0] = PM[z1] + "<br> uma";
		fakeAns[1] = PM[z2] + "<br> uma";
		fakeAns[2] = PM[z3] + "<br> g/mol";
		fakeAns[3] = PM[z4] + "<br> g/mol";
		ANS = ANSWER + "*<br> g/mol"; 
	}
	
	if(is_molar_mass==="no")
	{
		if(coin()===1) 
			fakeAns[0] = ANSWER + "<br> g/mol";
		else
			fakeAns[0] = PM[z1] + "<br> g/mol";;		
		fakeAns[1] = PM[z2] + "<br> g/mol";
		fakeAns[2] = PM[z3] + "<br> uma";
		fakeAns[3] = PM[z4] + "<br> uma";
		ANS = ANSWER + "*<br> uma"; 
	}

	if(trueAns === 1){
		document.getElementById("b1").innerHTML = ANS;
		document.getElementById("b2").innerHTML = fakeAns[0];
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 2){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = ANS;
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 3){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = ANS;
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 4){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = ANS;
	}
	if(trueAns === 5){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = fakeAns[3];
	}
	
	if(counter >= maxcounter){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}

	if(timeleft <= 0){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}
	
}





//------------------------------------------------------------------------------
function makeFakeZ(){

	while(1)
	{
		z1 = rndi(zmin,zmax);
		
		if(z1!==z)break;
	}
	
	while(1)
	{
		z2 = rndi(zmin, zmax);
	
		if(z2 !== z1 &&
		   z2 !== z) 
			break;
	}

	while(1)
	{
		z3 = rndi(zmin, zmax);
		
		if(z3 !== z1 &&
		   z3 !== z2 &&
		   z3 !== z)
			break;
	}

	while(1)
	{
		
		z4 = rndi(zmin, zmax);
		
		if(z4 !== z1 &&
		   z4 !== z2 &&
		   z4 !== z3 &&
		   z4 !== z)
			break;
	}

}



//------------------------------------------------------------------------------
function rndi0(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}



//------------------------------------------------------------------------------
function rndi(min, max) { //sin lantanidos
	var R;
	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R <= 57) break;
		if(R >= 72) break;
	}
    return R;
}


//------------------------------------------------------------------------------
function coin(){ return rndi(1,2);}

//------------------------------------------------------------------------------
function loadDataComp()
{

	symbols[1]="H<sub>2</sub>";PM[1]=2.02;
	symbols[2]="H<sub>2</sub>O";PM[10]=18.02;
	symbols[3]="O<sub>2</sub>";PM[3]=32;
	symbols[4]="Cl<sub>2</sub>";PM[4]=70.9;
	symbols[5]="F<sub>2</sub>";PM[5]=38;
	symbols[6]="O<sub>3</sub>";PM[6]=48;
	symbols[7]="CO";PM[7]=28.01;
	symbols[8]="CO<sub>2</sub>";PM[8]=44.01;
	symbols[9]="HCl";PM[9]=36.46;
	symbols[10]="H<sub>2</sub>O";PM[10]=18.02;
	symbols[11]="H<sub>2</sub>O<sub>2</sub>";PM[11]=34.02;
	symbols[12]="NH<sub>3</sub>";PM[12]=17.04;
	symbols[13]="CH<sub>4</sub>";PM[13]=16.05;
	symbols[14]="H<sub>2</sub>O";PM[10]=18.02;
	symbols[15]="NaCl";PM[21]=58.44;
	symbols[16]="C<sub>3</sub>H<sub>6</sub>";PM[16]=42.09;
	symbols[17]="C<sub>2</sub>H<sub>6</sub>";PM[17]=30.08;
	symbols[18]="C<sub>3</sub>H<sub>8</sub>";PM[18]=44.11;
	symbols[19]="CO<sub>2</sub>";PM[8]=44.01;
	symbols[20]="SiO<sub>2</sub>";PM[20]=60.09;
	symbols[21]="NaCl";PM[21]=58.44;
	symbols[22]="LiF";PM[22]=25.94;
	symbols[23]="KBr";PM[23]=119;
	symbols[24]="KCl";PM[24]=74.55;
	symbols[25]="KNO<sub>3</sub>";PM[25]=101.11;
	symbols[26]="NaOH";PM[26]=40.01;

	symbols[27]="CH<sub>3</sub>CH<sub>2</sub>OH";PM[27]=46.08;
	symbols[28]="CH<sub>3</sub>COCH<sub>3</sub>";PM[28]=58.09;
	symbols[29]="CH<sub>3</sub>COOH";PM[29]=60.06;
	symbols[30]="HNO<sub>3</sub>";PM[30]=63.02;
	symbols[31]="NaClO";PM[31]=74.45;
	symbols[32]="NaHCO<sub>3</sub>";PM[32]=84.02;
	symbols[33]="NaNO<sub>3</sub>";PM[33]=85.01;
	symbols[34]="H<sub>2</sub>SO<sub>4</sub>";PM[34]=98.08;
	symbols[35]="C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";PM[35]=180.18;
	symbols[36]="C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>";PM[36]=192.14;
	symbols[37]="C<sub>2</sub>H<sub>2</sub>Cl<sub>2</sub>";PM[37]=217.04;
	symbols[38]="C<sub>17</sub>H<sub>19</sub>NO<sub>3</sub>";PM[38]=285.37;
	symbols[39]="NaC<sub>18</sub>H<sub><sub>35</sub></sub>O2";PM[39]=306.53;
	symbols[40]="C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>";PM[40]=342.34;

	
}

//------------------------------------------------------------------------------
function loadData()
{

	symbols[1]="H"
	symbols[2]="He"
	symbols[3]="Li"
	symbols[4]="Be"
	symbols[5]="B"
	symbols[6]="C"
	symbols[7]="N"
	symbols[8]="O"
	symbols[9]="F"
	symbols[10]="Ne"
	symbols[11]="Na"
	symbols[12]="Mg"
	symbols[13]="Al"
	symbols[14]="Si"
	symbols[15]="P"
	symbols[16]="S"
	symbols[17]="Cl"
	symbols[18]="Ar"
	symbols[19]="K"
	symbols[20]="Ca"
	symbols[21]="Sc"
	symbols[22]="Ti"
	symbols[23]="V"
	symbols[24]="Cr"
	symbols[25]="Mn"
	symbols[26]="Fe"
	symbols[27]="Co"
	symbols[28]="Ni"
	symbols[29]="Cu"
	symbols[30]="Zn"
	symbols[31]="Ga"
	symbols[32]="Ge"
	symbols[33]="As"
	symbols[34]="Se"
	symbols[35]="Br"
	symbols[36]="Kr"
	symbols[37]="Rb"
	symbols[38]="Sr"
	symbols[39]="Y"
	symbols[40]="Zr"
	symbols[41]="Nb"
	symbols[42]="Mo"
	symbols[43]="Tc"
	symbols[44]="Ru"
	symbols[45]="Rh"
	symbols[46]="Pd"
	symbols[47]="Ag"
	symbols[48]="Cd"
	symbols[49]="In"
	symbols[50]="Sn"
	symbols[51]="Sb"
	symbols[52]="Te"
	symbols[53]="I"
	symbols[54]="Xe"
	symbols[55]="Cs"
	symbols[56]="Ba"
	symbols[57]="La"
	symbols[58]="Ce"
	symbols[59]="Pr"
	symbols[60]="Nd"
	symbols[61]="Pm"
	symbols[62]="Sm"
	symbols[63]="Eu"
	symbols[64]="Gd"
	symbols[65]="Tb"
	symbols[66]="Dy"
	symbols[67]="Ho"
	symbols[68]="Er"
	symbols[69]="Tm"
	symbols[70]="Yb"
	symbols[71]="Lu"
	symbols[72]="Hf"
	symbols[73]="Ta"
	symbols[74]="W"
	symbols[75]="Re"
	symbols[76]="Os"
	symbols[77]="Ir"
	symbols[78]="Pt"
	symbols[79]="Au"
	symbols[80]="Hg"
	symbols[81]="Tl"
	symbols[82]="Pb"
	symbols[83]="Bi"
	symbols[84]="Po"
	symbols[85]="At"
	symbols[86]="Rn"
	symbols[87]="Fr"
	symbols[88]="Ra"
	symbols[89]="Ac"
	symbols[90]="Th"
	symbols[91]="Pa"
	symbols[92]="U"
	symbols[93]="Np"
	symbols[94]="Pu"
	symbols[95]="Am"
	symbols[96]="Cm"
	symbols[97]="Bk"
	symbols[98]="Cf"
	symbols[99]="Es"
	symbols[100]="Fm"
	symbols[101]="Md"
	symbols[102]="No"
	symbols[103]="Lr"
	symbols[104]="Rf"
	symbols[105]="Db"
	symbols[106]="Sg"
	symbols[107]="Bh"
	symbols[108]="Hs"
	symbols[109]="Mt"
	symbols[110]="Ds"
	symbols[111]="Rg"
	symbols[112]="Cn"
	symbols[113]="Nh"
	symbols[114]="Fl"
	symbols[115]="Mc"
	symbols[116]="Lv"
	symbols[117]="Ts"
	symbols[118]="Og"

	names[1]="Hidrógeno"
	names[2]="Helio"
	names[3]="Litio"
	names[4]="Berilio"
	names[5]="Boro"
	names[6]="Carbono"
	names[7]="Nitrógeno"
	names[8]="Oxígeno"
	names[9]="Flúor"
	names[10]="Neón"
	names[11]="Sodio"
	names[12]="Magnesio"
	names[13]="Aluminio"
	names[14]="Silicio"
	names[15]="Fósforo"
	names[16]="Azufre"
	names[17]="Cloro"
	names[18]="Argón"
	names[19]="Potasio"
	names[20]="Calcio"
	names[21]="Escandio"
	names[22]="Titanio"
	names[23]="Vanadio"
	names[24]="Cromo"
	names[25]="Manganeso"
	names[26]="Hierro"
	names[27]="Cobalto"
	names[28]="Niquel"
	names[29]="Cobre"
	names[30]="Zinc"
	names[31]="Galio"
	names[32]="Germanio"
	names[33]="Arsénico"
	names[34]="Selenio"
	names[35]="Bromo"
	names[36]="Kriptón"
	names[37]="Rubidio"
	names[38]="Estroncio"
	names[39]="Itrio"
	names[40]="Circonio"
	names[41]="Niobio"
	names[42]="Molibdeno"
	names[43]="Tecnecio"
	names[44]="Rutenio"
	names[45]="Rodio"
	names[46]="Paladio"
	names[47]="Plata"
	names[48]="Cadmio"
	names[49]="Indio"
	names[50]="Estaño"
	names[51]="Antimonio"
	names[52]="Telurio"
	names[53]="Yodo"
	names[54]="Xenón"
	names[55]="Cesio"
	names[56]="Bario"
	names[57]="Lantano"
	names[58]="Cerio"
	names[59]="Praseodimio"
	names[60]="Neodimio"
	names[61]="Prometio"
	names[62]="Samario"
	names[63]="Europio"
	names[64]="Gadolinio"
	names[65]="Terbio"
	names[66]="Disprosio"
	names[67]="Holmio"
	names[68]="Erbio"
	names[69]="Tulio"
	names[70]="Iterbio"
	names[71]="Lutecio"
	names[72]="Hafnio"
	names[73]="Tántalo"
	names[74]="Wolframio"
	names[75]="Renio"
	names[76]="Osmio"
	names[77]="Iridio"
	names[78]="Platino"
	names[79]="Oro"
	names[80]="Mercurio"
	names[81]="Talio"
	names[82]="Plomo"
	names[83]="Bismuto"
	names[84]="Polonio"
	names[85]="Astato"
	names[86]="Radón"
	names[87]="Francio"
	names[88]="Radio"
	names[89]="Actinio"
	names[90]="Torio"
	names[91]="Protactinio"
	names[92]="Uranio"
	names[93]="Neptunio"
	names[94]="Plutonio"
	names[95]="Americio"
	names[96]="Curio"
	names[97]="Berkelio"
	names[98]="Californio"
	names[99]="Einstenio"
	names[100]="Fermio"
	names[101]="Mendelevio"
	names[102]="Nobelio"
	names[103]="Lawrencio"
	names[104]="Rutherfordio"
	names[105]="Dubnio"
	names[106]="Seaborgio"
	names[107]="Bohrio"
	names[108]="Hasio"
	names[109]="Meitnerio"
	names[110]="Darmstatio"
	names[111]="Roentgenio"
	names[112]="Copernicio"
	names[113]="Nihonio"
	names[114]="Flerovio"
	names[115]="Moscovio"
	names[116]="Livermorio"
	names[117]="Teneso"
	names[118]="Oganessón"

	PM[1]=1.01;
	PM[2]=4.00;
	PM[3]=6.94;
	PM[4]=9.01;
	PM[5]=10.81;
	PM[6]=12.01;
	PM[7]=14.01;
	PM[8]=16.00;
	PM[9]=19.00;
	PM[10]=20.18;
	PM[11]=22.99;
	PM[12]=24.31;
	PM[13]=26.98;
	PM[14]=28.09;
	PM[15]=30.97;
	PM[16]=32.07;
	PM[17]=35.45;
	PM[18]=39.10;
	PM[19]=39.95;
	PM[20]=40.08;
	PM[21]=44.96;
	PM[22]=47.87;
	PM[23]=50.94;
	PM[24]=52.00;
	PM[25]=54.94;
	PM[26]=55.85;
	PM[27]=58.69;
	PM[28]=58.93;
	PM[29]=63.55;
	PM[30]=65.39;
	PM[31]=69.72;
	PM[32]=72.64;
	PM[33]=74.92;
	PM[34]=78.96;
	PM[35]=79.90;
	PM[36]=83.80;
	PM[37]=85.47;
	PM[38]=87.62;
	PM[39]=88.91;
	PM[40]=91.22;
	PM[41]=92.91;
	PM[42]=95.94;
	PM[43]=98.00;
	PM[44]=101.07;
	PM[45]=102.91;
	PM[46]=106.42;
	PM[47]=107.87;
	PM[48]=112.41;
	PM[49]=114.82;
	PM[50]=118.71;
	PM[51]=121.76;
	PM[52]=126.90;
	PM[53]=127.60;
	PM[54]=131.29;
	PM[55]=132.91;
	PM[56]=137.33;
	PM[57]=138.91;
	PM[58]=140.12;
	PM[59]=140.91;
	PM[60]=144.24;
	PM[61]=145.00;
	PM[62]=150.36;
	PM[63]=151.96;
	PM[64]=157.25;
	PM[65]=158.93;
	PM[66]=162.50;
	PM[67]=164.93;
	PM[68]=167.26;
	PM[69]=168.93;
	PM[70]=173.04;
	PM[71]=174.97;
	PM[72]=178.49;
	PM[73]=180.95;
	PM[74]=183.84;
	PM[75]=186.21;
	PM[76]=190.23;
	PM[77]=192.22;
	PM[78]=195.08;
	PM[79]=196.97;
	PM[80]=200.59;
	PM[81]=204.38;
	PM[82]=207.20;
	PM[83]=208.98;
	PM[84]=209.00;
	PM[85]=210.00;
	PM[86]=222.00;
	PM[87]=223.00;
	PM[88]=226.00;
	PM[89]=227.00;
	PM[90]=231.04;
	PM[91]=232.04;
	PM[92]=237.00;
	PM[93]=238.03;
	PM[94]=243.00;
	PM[95]=244.00;
	PM[96]=247.00;
	PM[97]=247.00;
	PM[98]=251.00;
	PM[99]=252.00;
	PM[100]=257.00;
	PM[101]=258.00;
	PM[102]=259.00;
	PM[103]=261.00;
	PM[104]=262.00;
	PM[105]=262.00;
	PM[106]=264.00;
	PM[107]=266.00;
	PM[108]=268.00;
	PM[109]=277.00;


/*
	names[1]="Hydrogen"
	names[2]="Helium"
	names[3]="Lithium"
	names[4]="Beryllium"
	names[5]="Boron"
	names[6]="Carbon"
	names[7]="Nitrogen"
	names[8]="Oxygen"
	names[9]="Fluorine"
	names[10]="Neon"
	names[11]="Sodium"
	names[12]="Magnesium"
	names[13]="Aluminium"
	names[14]="Silicon"
	names[15]="Phosphorus"
	names[16]="Sulfur"
	names[17]="Chlorine"
	names[18]="Argon"
	names[19]="Potassium"
	names[20]="Calcium"
	names[21]="Scandium"
	names[22]="Titanium"
	names[23]="Vanadium"
	names[24]="Chromium"
	names[25]="Manganese"
	names[26]="Iron"
	names[27]="Cobalt"
	names[28]="Nickel"
	names[29]="Copper"
	names[30]="Zinc"
	names[31]="Gallium"
	names[32]="Germanium"
	names[33]="Arsenic"
	names[34]="Selenium"
	names[35]="Bromine"
	names[36]="Krypton"
	names[37]="Rubidium"
	names[38]="Strontium"
	names[39]="Yttrium"
	names[40]="Zirconium"
	names[41]="Niobium"
	names[42]="Molybdenum"
	names[43]="Technetium"
	names[44]="Ruthenium"
	names[45]="Rhodium"
	names[46]="Palladium"
	names[47]="Silver"
	names[48]="Cadmium"
	names[49]="Indium"
	names[50]="Tin"
	names[51]="Antimony"
	names[52]="Tellurium"
	names[53]="Iodine"
	names[54]="Xenon"
	names[55]="Caesium"
	names[56]="Barium"
	names[57]="Lanthanum"
	names[58]="Cerium"
	names[59]="Praseodymium"
	names[60]="Neodymium"
	names[61]="Promethium"
	names[62]="Samarium"
	names[63]="Europium"
	names[64]="Gadolinium"
	names[65]="Terbium"
	names[66]="Dysprosium"
	names[67]="Holmium"
	names[68]="Erbium"
	names[69]="Thulium"
	names[70]="Ytterbium"
	names[71]="Lutetium"
	names[72]="Hafnium"
	names[73]="Tantalum"
	names[74]="Tungsten"
	names[75]="Rhenium"
	names[76]="Osmium"
	names[77]="Iridium"
	names[78]="Platinum"
	names[79]="Gold"
	names[80]="Mercury"
	names[81]="Thallium"
	names[82]="Lead"
	names[83]="Bismuth"
	names[84]="Polonium"
	names[85]="Astatine"
	names[86]="Radon"
	names[87]="Francium"
	names[88]="Radium"
	names[89]="Actinium"
	names[90]="Thorium"
	names[91]="Protactinium"
	names[92]="Uranium"
	names[93]="Neptunium"
	names[94]="Plutonium"
	names[95]="Americium"
	names[96]="Curium"
	names[97]="Berkelium"
	names[98]="Californium"
	names[99]="Einsteinium"
	names[100]="Fermium"
	names[101]="Mendelevium"
	names[102]="Nobelium"
	names[103]="Lawrencium"
	names[104]="Rutherfordium"
	names[105]="Dubnium"
	names[106]="Seaborgium"
	names[107]="Bohrium"
	names[108]="Hassium"
	names[109]="Meitnerium"
	names[110]="Darmstadtium"
	names[111]="Roentgenium"
	names[112]="Copernicium"
	names[113]="Nihonium"
	names[114]="Flerovium"
	names[115]="Moscovium"
	names[116]="Livermorium"
	names[117]="Tennessine"
	names[118]="Oganesson"
*/

}