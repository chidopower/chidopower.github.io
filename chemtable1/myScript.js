
var option;
var level;

var QUESTION;
var ANSWER;
var ans;

var userAns;
var trueAns;

var fakeAns = [];

var success;
var mistakes;

var symbols = [];
var names = [];
var z=0;
var zmin=1;
var zmax=45;
var zold=0;
var z1,z2,z3,z4 //fakes

//------------------------------------------------------------------------------
function start(){

	option = document.getElementById("option").value;
	level = document.getElementById("level").value;

	document.getElementById("buttons").style.display = "block";
	document.getElementById("answer_").style.display = "none";
	document.getElementById("start_").style.display = "none";
	document.getElementById("next_").style.display = "none";
	document.getElementById("score").style.display = "block";

	loadData();
	resetScore();

	if(level==="1_10") { zmin=1; zmax=10;  }
	if(level==="1_20") { zmin=1; zmax=20;  }
	if(level==="1_30") { zmin=1; zmax=30;  }
	if(level==="1_40") { zmin=1; zmax=40;  }
	if(level==="1_50") { zmin=1; zmax=50;  }
	if(level==="1_60") { zmin=1; zmax=60;  }
	if(level==="1_70") { zmin=1; zmax=70;  }
	if(level==="1_80") { zmin=1; zmax=80;  }
	if(level==="1_90") { zmin=1; zmax=90;  }
	if(level==="1_100") { zmin=1; zmax=100;  }
	if(level==="11_20") { zmin=11; zmax=20;  }
	if(level==="21_30") { zmin=21; zmax=30;  }
	if(level==="31_40") { zmin=31; zmax=40;  }
	if(level==="41_50") { zmin=41; zmax=50;  }
	if(level==="51_60") { zmin=51; zmax=60;  }
	if(level==="61_70") { zmin=61; zmax=70;  }
	if(level==="71_80") { zmin=71; zmax=80;  }
	if(level==="81_90") { zmin=81; zmax=90;  }
	if(level==="91_100") { zmin=91; zmax=100;  }
	
	play();

}

//------------------------------------------------------------------------------
function next(){ start(); }
function bR()  { start(); }
function b1(){usrAns = 1; checkAns();}
function b2(){usrAns = 2; checkAns();}
function b3(){usrAns = 3; checkAns();}
function b4(){usrAns = 4; checkAns();}
function b0(){usrAns = 5; checkAns();}


//------------------------------------------------------------------------------
function checkAns(){

	if(usrAns === trueAns)
	{
		success += 1;
		updateScore();
		play();
	}else{
		mistakes += 1;
		updateScore();
	}

}

//------------------------------------------------------------------------------
function play(){

	var rnd;
	
	option = document.getElementById("option").value;
	
	updateScore();

	if(option === "AtomicNumbers") play_guess_atomic_number();
	if(option === "AtomicSymbols") play_guess_atomic_symbol();
	if(option === "AtomicNames") play_guess_atomic_names();
	
	if(option === "All")
	{		
		rnd = rndi(1,5);
		
		if(rnd === 1 || rnd === 2) {play_guess_atomic_number(); option="AtomicNumbers";}
		if(rnd === 3 || rnd === 4) {play_guess_atomic_symbol(); option="AtomicSymbols";}
		if(rnd === 5             ) {play_guess_atomic_names();	option="AtomicNames";}
		
	}
	
	document.getElementById("question").innerHTML = QUESTION;
	document.getElementById("answer").innerHTML = ANSWER;

	showAns();

}

//------------------------------------------------------------------------------
function resetScore(){
	success = 0;
	mistakes = 0;
}

//------------------------------------------------------------------------------
function updateScore(){

	document.getElementById("mistakes").innerHTML = "Fails: " + mistakes;
	document.getElementById("success").innerHTML = "Wins: "+ success;

}

//------------------------------------------------------------------------------
function showAns(){

	trueAns = rndi(1,5);
	
	if(option==="AtomicNumbers")
	{
		fakeAns[0] = z1;
		fakeAns[1] = z2;
		fakeAns[2] = z3;
		fakeAns[3] = z4;		
	}

	if(option==="AtomicSymbols")
	{
		fakeAns[0] = symbols[z1];
		fakeAns[1] = symbols[z2];
		fakeAns[2] = symbols[z3];
		fakeAns[3] = symbols[z4];		
	}

	if(option==="AtomicNames")
	{
		fakeAns[0] = names[z1];
		fakeAns[1] = names[z2];
		fakeAns[2] = names[z3];
		fakeAns[3] = names[z4];		
	}

	if(trueAns === 1){
		document.getElementById("b1").innerHTML = ANSWER;
		document.getElementById("b2").innerHTML = fakeAns[0];
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 2){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = ANSWER;
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 3){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = ANSWER;
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 4){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = ANSWER;
	}
	if(trueAns === 5){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = fakeAns[3];
	}
}

//------------------------------------------------------------------------------
function play_guess_atomic_number(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}

	makeFakeZ();
	
	QUESTION = names[z] + ", " + symbols[z];
	ANSWER = z;

}

//------------------------------------------------------------------------------
function play_guess_atomic_symbol(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}
	
	makeFakeZ();
	
	QUESTION = z;
	ANSWER = symbols[z];

}

//------------------------------------------------------------------------------
function play_guess_atomic_names(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}
	
	makeFakeZ();
	
	QUESTION = symbols[z];
	ANSWER = names[z];

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
function rndi(min, max) {
	var R;
	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R !== 0)
			break;
	}
    return R;
}

//------------------------------------------------------------------------------
function coin(){ return rndi(1,2);}

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

}