var DEBUG = "NO";
var iAmIn = "menu";
var quiz = "";
var OP = "";
var selQuiz = [];
var iSelQuiz = 0;
var selLevel = [];
var iSelLevel = 0;
var fake = [];
var fakeANS = [];
var fakeANSMustAreGEzero = "NO";

var A,B,C,D,E,R,ANS;

var usrAns;
var rightAns;

//------------------------------------------------------------------------------
function intRand(min, max) {

	var R;

	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R !== 0)
			break;
	}

    return R;
}

//------------------------------------------------------------------------------
function selQuizButton(){

	if(iSelQuiz === 5)
		iSelQuiz = 0;
	else
		iSelQuiz +=1;

	document.getElementById("selQuizButton").innerHTML = selQuiz[iSelQuiz];

	resetScore();
	showScore();
	play();

}

//------------------------------------------------------------------------------
function selLevelButton(){

	if(iSelLevel === 2)
		iSelLevel = 0;
	else
		iSelLevel +=1;

	document.getElementById("selLevelButton").innerHTML = selLevel[iSelLevel];
	
	resetScore();
	showScore();
	play();

}

//------------------------------------------------------------------------------
function buttonARITMETICA(){

	selQuiz[0] = "TODO";
	selQuiz[1] = "SUMAR";
	selQuiz[2] = "RESTAR";
	selQuiz[3] = "MULTIPLICAR";
	selQuiz[4] = "DIVIDIR";
	selQuiz[5] = "RESIDUO";

	selLevel[0] = "FACIL";
	selLevel[1] = "NORMAL";
	selLevel[2] = "DIFICIL";

	if(DEBUG==="YES")console.log("buttonARITMETICA()");
	iAmIn = "ARIT";
	clearScreen();
	iSelLevel = 0;
	iSelQuiz = 0;
	setTitle();
	resetScore();
	showScore();
	play();

}

//------------------------------------------------------------------------------
function reStartButton(){

	resetScore();
	showScore();
	play();

}

//------------------------------------------------------------------------------
function play(){

	if(DEBUG==="YES")
		console.log("play()", selQuiz[iSelQuiz], selLevel[iSelLevel]);
		
	showScore();

	if(iAmIn === "ARIT")
		playARITMETICA();

}



//------------------------------------------------------------------------------
function resetScore(){

	success = 0;
	mistakes = 0;

}

//------------------------------------------------------------------------------
function showScore(){
	
	document.getElementById("mistakes").innerHTML = "&#10008; " + mistakes;
	document.getElementById("success").innerHTML = "&#10004; "+ success;
	
}

//------------------------------------------------------------------------------
function checkAns(){

	if(usrAns === rightAns){
		success += 1;
		showScore();
		play();
	}else{
		mistakes += 1;
		showScore();
	}
	
}

//------------------------------------------------------------------------------
function ansButton1(){usrAns = 1; checkAns();}
function ansButton2(){usrAns = 2; checkAns();}
function ansButton3(){usrAns = 3; checkAns();}
function ansButton4(){usrAns = 4; checkAns();}
function ansButton5(){usrAns = 5; checkAns();}
function ansButton6(){usrAns = 6; checkAns();}




//------------------------------------------------------------------------------
function playARITMETICA(){
	
	var showButtons = "NO";
	var rnd;

	if(DEBUG==="YES")console.log("playARITMETICA()");

	if(selQuiz[iSelQuiz] === "TODO"){
		rnd = intRand(1,5);
		if(rnd === 1) playSUMAR();
		if(rnd === 2) playRESTAR();
		if(rnd === 3) playMULTIPLICAR();
		if(rnd === 4) playDIVIDIR();
		if(rnd === 5) playRESIDUO();
		showButtons = "YES";
	}
	

	if(selQuiz[iSelQuiz] === "SUMAR"){
		playSUMAR();
		showButtons = "YES";
	}

	if(selQuiz[iSelQuiz] === "RESTAR"){
		playRESTAR();
		showButtons = "YES";
	}	

	if(selQuiz[iSelQuiz] === "MULTIPLICAR"){
		playMULTIPLICAR();
		showButtons = "YES";
	}

	if(selQuiz[iSelQuiz] === "DIVIDIR"){
		playDIVIDIR();
		showButtons = "YES";
	}

	if(selQuiz[iSelQuiz] === "RESIDUO"){
		playRESIDUO();
		showButtons = "YES";
	}


	if(showButtons === "YES"){
		
		document.getElementById("aritQuiz").style.display = "block";

		document.getElementById("theQuestion").innerHTML = A + " " + OP + " "+ B;

		rightAns = intRand(1,6);

		if(rightAns === 1){
			if(DEBUG==="YES") console.log("ANS:",ANS);
			document.getElementById("ansButton1").innerHTML = ANS;
			document.getElementById("ansButton2").innerHTML = fakeANS[0];
			document.getElementById("ansButton3").innerHTML = fakeANS[1];
			document.getElementById("ansButton4").innerHTML = fakeANS[2];
			document.getElementById("ansButton5").innerHTML = fakeANS[3];
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}

		if(rightAns === 2){
			if(DEBUG==="YES") console.log("ANS:",ANS);
			document.getElementById("ansButton1").innerHTML = fakeANS[0];
			document.getElementById("ansButton2").innerHTML = ANS;
			document.getElementById("ansButton3").innerHTML = fakeANS[1];
			document.getElementById("ansButton4").innerHTML = fakeANS[2];
			document.getElementById("ansButton5").innerHTML = fakeANS[3];
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}

		if(rightAns === 3){
			if(DEBUG==="YES") console.log("ANS:",ANS);
			document.getElementById("ansButton1").innerHTML = fakeANS[0];
			document.getElementById("ansButton2").innerHTML = fakeANS[1];
			document.getElementById("ansButton3").innerHTML = ANS;
			document.getElementById("ansButton4").innerHTML = fakeANS[2];
			document.getElementById("ansButton5").innerHTML = fakeANS[3];
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}

		if(rightAns === 4){
			if(DEBUG==="YES") console.log("ANS:",ANS);
			document.getElementById("ansButton1").innerHTML = fakeANS[0];
			document.getElementById("ansButton2").innerHTML = fakeANS[1];
			document.getElementById("ansButton3").innerHTML = fakeANS[2];
			document.getElementById("ansButton4").innerHTML = ANS;
			document.getElementById("ansButton5").innerHTML = fakeANS[3];
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}

		if(rightAns === 5){
			if(DEBUG==="YES") console.log("ANS:",ANS);
			document.getElementById("ansButton1").innerHTML = fakeANS[0];
			document.getElementById("ansButton2").innerHTML = fakeANS[1];
			document.getElementById("ansButton3").innerHTML = fakeANS[2];
			document.getElementById("ansButton4").innerHTML = fakeANS[3];
			document.getElementById("ansButton5").innerHTML = ANS;
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}

		if(rightAns === 6){
			if(DEBUG==="YES") console.log("ANS: NINGUNA", ANS);
			document.getElementById("ansButton1").innerHTML = fakeANS[0];
			document.getElementById("ansButton2").innerHTML = fakeANS[1];
			document.getElementById("ansButton3").innerHTML = fakeANS[2];
			document.getElementById("ansButton4").innerHTML = fakeANS[3];
			document.getElementById("ansButton5").innerHTML = fakeANS[4];
			document.getElementById("ansButton6").innerHTML = "NINGUNA";}
	}
}

//------------------------------------------------------------------------------
function makeFakeANS(){

	var i;
	
	fakeANSMustAreGEzero = "NO";

	if(fakeANSMustAreGEzero === "NO"){
		makeFakes();
		for(i=0; i<5; i++)
			fakeANS[i] = ANS + fake[i];
	}
	
	//if(fakeANSMustAreGEzero === "YES"){
		//var ok = "YES";
		//while(1){
			//if(DEBUG === "YES") console.log(fakeANS);
			//makeFakes();
			//for(i=0; i<5; i++)
				//fakeANS[i] = ANS + fake[i];
			//for(i=0; i<5; i++){
				//if(fakeANS[i] < 0)
					//ok = "NO";}					
			//if(ok === "YES")
				//break;
		//}//while
	//}
	//fakeANSMustAreGEzero = "NO";

}


//------------------------------------------------------------------------------
function makeFakes(){

	fake[0] = intRand(fakeMin, fakeMax);

	while(1){
		fake[1] = intRand(fakeMin, fakeMax);
		if(fake[1] !== fake[0])
			break;}

	while(1){
		fake[2] = intRand(fakeMin, fakeMax);
		if(fake[2] !== fake[0] &&
		   fake[2] !== fake[1])
			break;}

	while(1){
		fake[3] = intRand(fakeMin, fakeMax);
		if(fake[3] !== fake[0] &&
		   fake[3] !== fake[1] &&
		   fake[3] !== fake[2])
			break;}

	while(1){
		fake[4] = intRand(fakeMin, fakeMax);
		if(fake[4] !== fake[0] &&
		   fake[4] !== fake[1] &&
		   fake[4] !== fake[2] &&
		   fake[4] !== fake[3])
			break;}

	while(1){
		fake[5] = intRand(fakeMin, fakeMax);
		if(fake[5] !== fake[0] &&
		   fake[5] !== fake[1] &&
		   fake[5] !== fake[2] &&
		   fake[5] !== fake[3] &&
		   fake[5] !== fake[4])
			break;}

}

//------------------------------------------------------------------------------
function playDIVIDIR(){

	var rnd;

	OP = "&divide;";

	if(selLevel[iSelLevel] === "FACIL"){
		
		rnd = intRand(1,2);
		//rnd = 2;
		
		if(rnd === 1){
			C = intRand(2,12);
			D = intRand(2,12);
			A = C * D;
			B = D;
			ANS = A/B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			C = intRand(2,12);
			D = intRand(2,12)*10;
			A = C * D;
			B = D;
			ANS = A/B;			
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
				
	}// if FACIL

	if(selLevel[iSelLevel] === "NORMAL"){
		
		rnd = intRand(1,2);
		//rnd = 2;
		
		if(rnd === 1){
			C = intRand(2,20);
			D = intRand(2,20);
			A = C * D;
			B = D;
			ANS = A/B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			C = intRand(2,20);
			D = intRand(2,20)*10;
			A = C * D;
			B = D;
			ANS = A/B;			
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
		
	}//if NORMAL

	if(selLevel[iSelLevel] === "DIFICIL"){
		
		rnd = intRand(1,3);
		//rnd = 2;
				
		if(rnd === 1){
			C = intRand(2,99);
			D = intRand(2,10);
			A = C * D;
			B = D;
			ANS = A/B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			C = intRand(2,99);
			D = intRand(2,10)*10;
			A = C * D;
			B = D;
			ANS = A/B;			
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
	}	
}

//------------------------------------------------------------------------------
function playMULTIPLICAR(){
	
	var rnd;

	OP = "&times;";

	if(selLevel[iSelLevel] === "FACIL"){
		
		rnd = intRand(1,3);
		//rnd = 1;
		
		if(rnd === 1){
			A = intRand(2,12);
			B = intRand(2,12);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(2,12)*10;
			B = intRand(2,12);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}

		if(rnd === 3){
			A = intRand(2,12)*10;
			B = intRand(2,12)*10;
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
				
	}// if FACIL

	if(selLevel[iSelLevel] === "NORMAL"){
		
		rnd = intRand(1,3);
		//rnd = 1;
		
		if(rnd === 1){
			A = intRand(2,20);
			B = intRand(2,20);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(2,20)*10;
			B = intRand(2,20);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}

		if(rnd === 3){
			A = intRand(2,20)*10;
			B = intRand(2,20)*10;
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
		
	}//if NORMAL

	if(selLevel[iSelLevel] === "DIFICIL"){
		
		rnd = intRand(1,3);
		//rnd = 1;
		
		if(rnd === 1){
			A = intRand(2,99);
			B = intRand(2,9);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(2,99)*10;
			B = intRand(2,9);
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}

		if(rnd === 3){
			A = intRand(2,99)*10;
			B = intRand(2,9)*10;
			ANS = A * B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
		
	}//if DIFICIL
}


//------------------------------------------------------------------------------
function playRESIDUO(){
	
	var rnd;

	OP = "mod";

	if(selLevel[iSelLevel] === "FACIL"){
		
		while(1){
			A = intRand(2,144);
			B = intRand(2,12);
			if(A >= B) break;}
		ANS = A % B;
		fakeMin = -4;
		fakeMax = 4;
		makeFakes();
		makeFakeANS();
				
	}//FACIL

	if(selLevel[iSelLevel] === "NORMAL"){
		
		while(1){
			A = intRand(2,400);
			B = intRand(2,12);
			if(A >= B) break;}
		ANS = A % B;
		fakeMin = -4;
		fakeMax = 4;
		makeFakes();
		makeFakeANS();
		
	}//NORMAL

	if(selLevel[iSelLevel] === "DIFICIL"){
		
		while(1){
			A = intRand(2,8100);
			B = intRand(2,12);
			if(A >= B) break;}
		ANS = A % B;
		fakeMin = -4;
		fakeMax = 4;
		makeFakes();
		makeFakeANS();
		
	}//DIFICIL


}

//------------------------------------------------------------------------------
function playSUMAR(){
	
	var rnd;

	OP = "&plus;";

	if(selLevel[iSelLevel] === "FACIL"){
		
		rnd = intRand(1,2);
		//rnd = 2;
		
		if(rnd === 1){
			while(1){
				A = intRand(2,99);
				B = intRand(2,12);
				ANS = A + B;
				if( ANS <= 99 )
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(2,99)*10;
			B = intRand(2,12)*10;
			ANS = A + B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
				
	}

	if(selLevel[iSelLevel] === "NORMAL"){
		
		rnd = intRand(1,2);
		
		if(rnd === 1){
			A = intRand(11,99);
			B = intRand(11,99);
			ANS = A + B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(11,99)*10;
			B = intRand(11,99)*10;
			ANS = A + B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
		
	}

	if(selLevel[iSelLevel] === "DIFICIL"){
		
		rnd = intRand(1,2);
		
		if(rnd === 1){
			A = intRand(99,999);
			B = intRand(99,999);
			ANS = A + B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}

		if(rnd === 2){
			A = intRand(99,999)*10;
			B = intRand(99,999)*10;
			ANS = A + B;
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
	}
}

//------------------------------------------------------------------------------
function playRESTAR(){
	
	var rnd;

	OP = "&minus;";

	if(selLevel[iSelLevel] === "FACIL"){
		
		rnd = intRand(1,2);
		//rnd = 2;
		
		if(rnd === 1){
			while(1){
				A = intRand(2,99);
				B = intRand(2,99);
				ANS = A - B;
				if(ANS >= 2 && ANS <=9)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
		
		if(rnd === 2){
			while(1){
				A = intRand(2,99)*10;
				B = intRand(2,99)*10;
				ANS = A - B;
				if(ANS >= 20 && ANS <=90)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;

		}
				
	}//if FACIL

	if(selLevel[iSelLevel] === "NORMAL"){
		
		rnd = intRand(1,2);
		//rnd = 2;

		if(rnd === 1){
			while(1){
				A = intRand(11,99);
				B = intRand(11,99);
				ANS = A - B;
				if(ANS >= 2)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
		
		if(rnd === 2){
			while(1){
				A = intRand(11,99)*10;
				B = intRand(11,99)*10;
				ANS = A - B;
				if(ANS >= 20)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;

		}
	}//if NORMAL


	if(selLevel[iSelLevel] === "DIFICIL"){
		
		rnd = intRand(1,3);
		//rnd = 3;

		if(rnd === 1){
			while(1){
				A = intRand(11,99);
				B = intRand(11,99);
				ANS = A - B;
				if(ANS !== 0 && ANS !== 1)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}
		
		if(rnd === 2){
			while(1){
				A = intRand(11,99)*10;
				B = intRand(11,99)*10;
				ANS = A - B;
				if(ANS !== 0 && ANS !== 10)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
			for(i=0; i<6; i++)
				fake[i] *= 10;
		}
		
		if(rnd === 3){
			while(1){
				A = intRand(99,999);
				B = intRand(99,999);
				ANS = A - B;
				if(ANS >= 11)
					break;
			}
			fakeMin = -4;
			fakeMax = 4;
			makeFakeANS();
		}


	}//if DIFICIL


}


//------------------------------------------------------------------------------
function backButton(){

	if(DEBUG==="YES")console.log("backButton()");

	if(iAmIn === "ARIT"){
		iAmIn = "menu";
		clearScreen();
		setTitle();
		showMenu();
	}
}

//------------------------------------------------------------------------------
function setTitle(){

	if(iAmIn === "menu"){
		document.getElementById("titleApp").innerHTML = "COTORRA QUIZ";
		document.getElementById("backButton").innerHTML = "&nbsp;";
		document.getElementById("reStartButton").innerHTML = "&nbsp;";
	}

	if(iAmIn === "ARIT"){
		document.getElementById("titleApp").innerHTML = "ARITMETICA QUIZ";
		document.getElementById("backButton").innerHTML = "&larrhk;";
		document.getElementById("reStartButton").innerHTML = "&olarr;";
		document.getElementById("subTitleBar").style.display = "block";
		document.getElementById("selQuizButton").innerHTML = selQuiz[iSelQuiz];
		document.getElementById("selLevelButton").innerHTML = selLevel[iSelLevel];
	}

}

//------------------------------------------------------------------------------
function showMenu(){
	document.getElementById("menuButtons").style.display = "block";
}

//------------------------------------------------------------------------------
function clearScreen(){
	document.getElementById("menuButtons").style.display = "none";
	document.getElementById("subTitleBar").style.display = "none";
	document.getElementById("aritQuiz").style.display = "none";
}



/*

//------------------------------------------------------------------------------
function reStartButton(){

	clearScreen();

	continent = document.getElementById("continentSelect").value;
	activity = document.getElementById("activitySelect").value;
	level = parseInt(document.getElementById("levelSelect").value);

	console.log("reStartButton()", continent, level);

	questionNumberIs = 0;
	totalCountries = 0;
	quest = [];
	answer = [];
	success = 0;
	mistakes = 0;

	if(continent === "america")
		loadAmericaCountries();

	if(continent === "mexico")
		loadMexico();

	play();

}

//------------------------------------------------------------------------------
function play(){

	console.log("play()");

	if(activity === "learn")
		playLearn();

	if(activity === "quiz"){
		document.getElementById("infoTab_").style.display = "block";
		playQuiz();
	}
}

//------------------------------------------------------------------------------
function clearScreen(){

	console.log("clearScreen()");

	document.getElementById("quizFalseOrTrueTab").style.display = "none";
	document.getElementById("quizFindTheTrueTab").style.display = "none";
	document.getElementById("quizFindTheFalseTab").style.display = "none";
	document.getElementById("quizCorrectTheTab").style.display = "none";
	document.getElementById("quiz5Tab").style.display = "none";
	document.getElementById("learnTab").style.display = "none";
	document.getElementById("infoTab_").style.display = "none";

}

//------------------------------------------------------------------------------
function updateInfoTab(){

	console.log("updateInfoTab()");
	console.log("success:",success,"mistakes: ", mistakes);

	document.getElementById("infoTabSuccess").innerHTML = success;
	document.getElementById("infoTabMistakes").innerHTML = mistakes;

}

//------------------------------------------------------------------------------
function playQuiz(){

	clearScreen();

	console.log("playQuiz()");

	document.getElementById("infoTab_").style.display = "block";
	updateInfoTab();

	// choose a quiz

	var rnd = intRand(1,5);

	//rnd = 5;

	if( rnd === 1)
		playQuizFalseOrTrue();
	else if(rnd === 2)
		playQuizFindTheTrue();
	else if(rnd === 3)
		playQuizFindTheFalse();
	else if(rnd === 4)
		playCorrectTheTable();
	else
		playQuiz5();

}


//------------------------------------------------------------------------------
function playCorrectTheTable(){

	console.log("playCorrectTheTable()");

	document.getElementById("quizCorrectTheTab").style.display = "block";

	// choose 4 different random numbers

	var rnd1 = intRand(0, totalCountries - 1);
	var rnd2, rnd3, rnd4

	while(true){
		rnd2 = intRand(0, totalCountries - 1);
		if( rnd2 !== rnd1)
			break;}

	while(true){
		rnd3 = intRand(0, totalCountries - 1);
		if( rnd3 !== rnd1 &&
			rnd3 !== rnd2)
			break;}

	while(true){
		rnd4 = intRand(0, totalCountries - 1);
		if( rnd4 !== rnd1 &&
			rnd4 !== rnd2 &&
			rnd4 !== rnd3)
			break;}

	quest = [];
	answer = [];

	quest[0] = countries[rnd1];
	answer[0] = capitals[rnd1];
	quest[1] = countries[rnd2];
	answer[1] = capitals[rnd2];
	quest[2] = countries[rnd3];
	answer[2] = capitals[rnd3];
	quest[3] = countries[rnd4];
	answer[3] = capitals[rnd4];

	for(i=0; i<3; i++){
		correctTabsi[i] = intRand(0, 3 - 1);
		correctTabsj[i] = intRand(0, 3 - 1);
	}

	//document.getElementById("quizCorrectTheTab10").innerHTML = quest[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab20").innerHTML = quest[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab30").innerHTML = quest[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab40").innerHTML = quest[intRand(0,3)];

	//document.getElementById("quizCorrectTheTab11").innerHTML = answer[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab21").innerHTML = answer[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab31").innerHTML = answer[intRand(0,3)];
	//document.getElementById("quizCorrectTheTab41").innerHTML = answer[intRand(0,3)];

	//erase button's face
	for(i=1;i<4;i++){
		for(j=0;j<2;j++){
			s = "quizCorrectTheTab"+i+j;
			document.getElementById(s).innerHTML = "?";
		}
	}

}




//------------------------------------------------------------------------------
function playQuizFindTheFalse(){

	console.log("playQuizFindTheFalse()");

	document.getElementById("quizFindTheFalseTab").style.display = "block";


	// choose 8 different random numbers

	var rnd1 = intRand(0, totalCountries - 1);
	var rnd2, rnd3, rnd4, rnd5;

	while(true){
		rnd2 = intRand(0, totalCountries - 1);
		if( rnd2 !== rnd1)
			break;}

	while(true){
		rnd3 = intRand(0, totalCountries - 1);
		if( rnd3 !== rnd1 &&
			rnd3 !== rnd2)
			break;}

	while(true){
		rnd4 = intRand(0, totalCountries - 1);
		if( rnd4 !== rnd1 &&
			rnd4 !== rnd2 &&
			rnd4 !== rnd3)
			break;}

	while(true){
		rnd5 = intRand(0, totalCountries - 1);
		if( rnd5 !== rnd1 &&
			rnd5 !== rnd2 &&
			rnd5 !== rnd3 &&
			rnd5 !== rnd4)
			break;}

	console.log(rnd1,rnd2,rnd3,rnd4,rnd5);

	// make the Table

	var rndTable = intRand(1,4);

	if(rndTable === 1){

		console.log("row 1 is false");

		falseRow = 1;

		document.getElementById("quizFindTheFalseTab10").innerHTML = countries[rnd1]; // the false
		document.getElementById("quizFindTheFalseTab11").innerHTML = capitals[rnd2]; // the false
		document.getElementById("quizFindTheFalseTab20").innerHTML = countries[rnd3];
		document.getElementById("quizFindTheFalseTab21").innerHTML = capitals[rnd3];
		document.getElementById("quizFindTheFalseTab30").innerHTML = countries[rnd4];
		document.getElementById("quizFindTheFalseTab31").innerHTML = capitals[rnd4];
		document.getElementById("quizFindTheFalseTab40").innerHTML = countries[rnd5];
		document.getElementById("quizFindTheFalseTab41").innerHTML = capitals[rnd5];

	}else if(rndTable === 2){

		console.log("row 2 is false");

		falseRow = 2;

		document.getElementById("quizFindTheFalseTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheFalseTab11").innerHTML = capitals[rnd1];
		document.getElementById("quizFindTheFalseTab20").innerHTML = countries[rnd2]; // the false
		document.getElementById("quizFindTheFalseTab21").innerHTML = capitals[rnd3]; // the false
		document.getElementById("quizFindTheFalseTab30").innerHTML = countries[rnd4];
		document.getElementById("quizFindTheFalseTab31").innerHTML = capitals[rnd4];
		document.getElementById("quizFindTheFalseTab40").innerHTML = countries[rnd5];
		document.getElementById("quizFindTheFalseTab41").innerHTML = capitals[rnd5];

	}else if(rndTable === 3){

		console.log("row 3 is false");

		falseRow = 3;

		document.getElementById("quizFindTheFalseTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheFalseTab11").innerHTML = capitals[rnd1];
		document.getElementById("quizFindTheFalseTab20").innerHTML = countries[rnd2];
		document.getElementById("quizFindTheFalseTab21").innerHTML = capitals[rnd2];
		document.getElementById("quizFindTheFalseTab30").innerHTML = countries[rnd3]; // the false
		document.getElementById("quizFindTheFalseTab31").innerHTML = capitals[rnd4]; // the false
		document.getElementById("quizFindTheFalseTab40").innerHTML = countries[rnd5];
		document.getElementById("quizFindTheFalseTab41").innerHTML = capitals[rnd5];

	}else{

		console.log("row 4 is false");

		falseRow = 4;

		document.getElementById("quizFindTheFalseTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheFalseTab11").innerHTML = capitals[rnd1];
		document.getElementById("quizFindTheFalseTab20").innerHTML = countries[rnd2];
		document.getElementById("quizFindTheFalseTab21").innerHTML = capitals[rnd2];
		document.getElementById("quizFindTheFalseTab30").innerHTML = countries[rnd3];
		document.getElementById("quizFindTheFalseTab31").innerHTML = capitals[rnd3];
		document.getElementById("quizFindTheFalseTab40").innerHTML = countries[rnd4]; // the false
		document.getElementById("quizFindTheFalseTab41").innerHTML = capitals[rnd5]; // the false

	}

}


//------------------------------------------------------------------------------
function playQuizFindTheTrue(){

	console.log("playQuizFindTheTrue()");

	document.getElementById("quizFindTheTrueTab").style.display = "block";


	// choose 8 different random numbers

	var rnd1 = intRand(0, totalCountries - 1);
	var rnd2, rnd3, rnd4, rnd5, rnd6, rnd7, rnd8;

	while(true){
		rnd2 = intRand(0, totalCountries - 1);
		if( rnd2 !== rnd1)
			break;}

	while(true){
		rnd3 = intRand(0, totalCountries - 1);
		if( rnd3 !== rnd1 &&
			rnd3 !== rnd2)
			break;}

	while(true){
		rnd4 = intRand(0, totalCountries - 1);
		if( rnd4 !== rnd1 &&
			rnd4 !== rnd2 &&
			rnd4 !== rnd3)
			break;}

	while(true){
		rnd5 = intRand(0, totalCountries - 1);
		if( rnd5 !== rnd1 &&
			rnd5 !== rnd2 &&
			rnd5 !== rnd3 &&
			rnd5 !== rnd4)
			break;}

	while(true){
		rnd6 = intRand(0, totalCountries - 1);
		if( rnd6 !== rnd1 &&
			rnd6 !== rnd2 &&
			rnd6 !== rnd3 &&
			rnd6 !== rnd4 &&
			rnd6 !== rnd5)
			break;}

	while(true){
		rnd7 = intRand(0, totalCountries - 1);
		if( rnd7 !== rnd1 &&
			rnd7 !== rnd2 &&
			rnd7 !== rnd3 &&
			rnd7 !== rnd4 &&
			rnd7 !== rnd5 &&
			rnd7 !== rnd6)
			break;}

	while(true){
		rnd8 = intRand(0, totalCountries - 1);
		if( rnd8 !== rnd1 &&
			rnd8 !== rnd2 &&
			rnd8 !== rnd3 &&
			rnd8 !== rnd4 &&
			rnd8 !== rnd5 &&
			rnd8 !== rnd6 &&
			rnd8 !== rnd7)
			break;}

	// make the Table

	var rndTable = intRand(1,4);

	if(rndTable === 1){

		console.log("row 1 is true");

		trueRow = 1;

		document.getElementById("quizFindTheTrueTab10").innerHTML = countries[rnd1]; // the true
		document.getElementById("quizFindTheTrueTab11").innerHTML = capitals[rnd1]; // the true
		document.getElementById("quizFindTheTrueTab20").innerHTML = countries[rnd3];
		document.getElementById("quizFindTheTrueTab21").innerHTML = capitals[rnd4];
		document.getElementById("quizFindTheTrueTab30").innerHTML = countries[rnd5];
		document.getElementById("quizFindTheTrueTab31").innerHTML = capitals[rnd6];
		document.getElementById("quizFindTheTrueTab40").innerHTML = countries[rnd7];
		document.getElementById("quizFindTheTrueTab41").innerHTML = capitals[rnd8];

	}else if(rndTable === 2){

		console.log("row 2 is true");

		trueRow = 2;

		document.getElementById("quizFindTheTrueTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheTrueTab11").innerHTML = capitals[rnd2];
		document.getElementById("quizFindTheTrueTab20").innerHTML = countries[rnd3]; // the true
		document.getElementById("quizFindTheTrueTab21").innerHTML = capitals[rnd3]; // the true
		document.getElementById("quizFindTheTrueTab30").innerHTML = countries[rnd4];
		document.getElementById("quizFindTheTrueTab31").innerHTML = capitals[rnd5];
		document.getElementById("quizFindTheTrueTab40").innerHTML = countries[rnd6];
		document.getElementById("quizFindTheTrueTab41").innerHTML = capitals[rnd7];

	}else if(rndTable === 3){

		console.log("row 3 is true");

		trueRow = 3;

		document.getElementById("quizFindTheTrueTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheTrueTab11").innerHTML = capitals[rnd2];
		document.getElementById("quizFindTheTrueTab20").innerHTML = countries[rnd3];
		document.getElementById("quizFindTheTrueTab21").innerHTML = capitals[rnd4];
		document.getElementById("quizFindTheTrueTab30").innerHTML = countries[rnd5]; // the true
		document.getElementById("quizFindTheTrueTab31").innerHTML = capitals[rnd5]; // the true
		document.getElementById("quizFindTheTrueTab40").innerHTML = countries[rnd6];
		document.getElementById("quizFindTheTrueTab41").innerHTML = capitals[rnd7];

	}else{

		console.log("row 4 is true");

		trueRow = 4;

		document.getElementById("quizFindTheTrueTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFindTheTrueTab11").innerHTML = capitals[rnd2];
		document.getElementById("quizFindTheTrueTab20").innerHTML = countries[rnd3];
		document.getElementById("quizFindTheTrueTab21").innerHTML = capitals[rnd4];
		document.getElementById("quizFindTheTrueTab30").innerHTML = countries[rnd5];
		document.getElementById("quizFindTheTrueTab31").innerHTML = capitals[rnd6];
		document.getElementById("quizFindTheTrueTab40").innerHTML = countries[rnd7]; // the true
		document.getElementById("quizFindTheTrueTab41").innerHTML = capitals[rnd7]; // the true

	}

}

//------------------------------------------------------------------------------
function playQuiz5(){

	console.log("playQuiz5()");

	document.getElementById("quiz5Tab").style.display = "block";

	// choose 6 different random numbers

	var rnd1 = intRand(0, totalCountries - 1);
	var rnd2, rnd3, rnd4, rnd5, rnd6;

	while(true){
		rnd2 = intRand(0, totalCountries - 1);
		if( rnd2 !== rnd1)
			break;}

	while(true){
		rnd3 = intRand(0, totalCountries - 1);
		if( rnd3 !== rnd1 &&
			rnd3 !== rnd2)
			break;}

	while(true){
		rnd4 = intRand(0, totalCountries - 1);
		if( rnd4 !== rnd1 &&
			rnd4 !== rnd2 &&
			rnd4 !== rnd3)
			break;}

	while(true){
		rnd5 = intRand(0, totalCountries - 1);
		if( rnd5 !== rnd1 &&
			rnd5 !== rnd2 &&
			rnd5 !== rnd3 &&
			rnd5 !== rnd4)
			break;}

	while(true){
		rnd6 = intRand(0, totalCountries - 1);
		if( rnd6 !== rnd1 &&
			rnd6 !== rnd2 &&
			rnd6 !== rnd3 &&
			rnd6 !== rnd4 &&
			rnd6 !== rnd5)
			break;}

	document.getElementById("quiz5TabQuestion").innerHTML = "La capital de " + countries[rnd1] + ":";

	// make the Table 3x2=6

	var rndTable = intRand(1,6);

	if(rndTable === 1){

		quiz5RightAns = 1;
		console.log("right answer: ", capitals[rnd1]);

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd1];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}else if(rndTable === 2){

		quiz5RightAns = 2;
		console.log("right answer: ", capitals[rnd1]);

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd1];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}else if(rndTable === 3){

		quiz5RightAns = 3;
		console.log("right answer: ", capitals[rnd1]);

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd1];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}else if(rndTable === 4){

		quiz5RightAns = 4;
		console.log("right answer: ", capitals[rnd1]);

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd1];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}else if(rndTable === 5){

		quiz5RightAns = 5;
		console.log("right answer: ", capitals[rnd1]);

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd1];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}else{

		quiz5RightAns = 6;
		console.log("right answer: ", "NEITHER");

		document.getElementById("quiz5Tab00").innerHTML = capitals[rnd6];
		document.getElementById("quiz5Tab10").innerHTML = capitals[rnd2];
		document.getElementById("quiz5Tab20").innerHTML = capitals[rnd3];
		document.getElementById("quiz5Tab01").innerHTML = capitals[rnd4];
		document.getElementById("quiz5Tab11").innerHTML = capitals[rnd5];
		document.getElementById("quiz5Tab21").innerHTML = "NINGUNA";

	}

}

//------------------------------------------------------------------------------
function quiz5Tab00(){
	quiz5userAns = 1;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quiz5Tab10(){
	quiz5userAns = 2;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quiz5Tab20(){
	quiz5userAns = 3;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quiz5Tab01(){
	quiz5userAns = 4;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quiz5Tab11(){
	quiz5userAns = 5;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quiz5Tab21(){
	quiz5userAns = 6;
	if(quiz5userAns === quiz5RightAns){success +=1;}else{mistakes +=1}
	playQuiz();
}

//------------------------------------------------------------------------------
function quizFindTheTrueTabRow1(){
	userRow = 1;
	if(userRow === trueRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheTrueTabRow2(){
	userRow = 2;
	if(userRow === trueRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheTrueTabRow3(){
	userRow = 3;
	if(userRow === trueRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheTrueTabRow4(){
	userRow = 4;
	if(userRow === trueRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

//------------------------------------------------------------------------------
function quizFindTheFalseTabRow1(){
	userRow = 1;
	if(userRow === falseRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheFalseTabRow2(){
	userRow = 2;
	if(userRow === falseRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheFalseTabRow3(){
	userRow = 3;
	if(userRow === falseRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

function quizFindTheFalseTabRow4(){
	userRow = 4;
	if(userRow === falseRow){success += 1;}else{mistakes += 1;}
	playQuiz();
}

//------------------------------------------------------------------------------
function playQuizFalseOrTrue(){

	console.log("playQuizFalseOrTrue()");

	document.getElementById("quizFalseOrTrueTab").style.display = "block";

	// choose 5 different random numbers

	var rnd1 = intRand(0, totalCountries - 1);
	var rnd2, rnd3, rnd4, rnd5;

	while(true){
		rnd2 = intRand(0, totalCountries - 1);
		if( rnd2 !== rnd1)
			break;}

	while(true){
		rnd3 = intRand(0, totalCountries - 1);
		if( rnd3 !== rnd1 &&
			rnd3 !== rnd2)
			break;}

	while(true){
		rnd4 = intRand(0, totalCountries - 1);
		if( rnd4 !== rnd1 &&
			rnd4 !== rnd2 &&
			rnd4 !== rnd3)
			break;}

	while(true){
		rnd5 = intRand(0, totalCountries - 1);
		if( rnd5 !== rnd1 &&
			rnd5 !== rnd2 &&
			rnd5 !== rnd3 &&
			rnd5 !== rnd4)
			break;}

	// choose or trueTable or falseTable

	if( intRand(1,2) === 1){ // a trueTable

		console.log("This is a true table.")

		theFalseOrTrueTableIs = "true";

		document.getElementById("quizFalseOrTrueTab10").innerHTML = countries[rnd1];
		document.getElementById("quizFalseOrTrueTab11").innerHTML = capitals[rnd1];
		document.getElementById("quizFalseOrTrueTab20").innerHTML = countries[rnd2];
		document.getElementById("quizFalseOrTrueTab21").innerHTML = capitals[rnd2];
		document.getElementById("quizFalseOrTrueTab30").innerHTML = countries[rnd3];
		document.getElementById("quizFalseOrTrueTab31").innerHTML = capitals[rnd3];
		document.getElementById("quizFalseOrTrueTab40").innerHTML = countries[rnd4];
		document.getElementById("quizFalseOrTrueTab41").innerHTML = capitals[rnd4];

	}else{ // a falseTable

		console.log("This is a false table.")

		theFalseOrTrueTableIs = "false";

		var rndTable = intRand(1,4);

		if(rndTable === 1){

			document.getElementById("quizFalseOrTrueTab10").innerHTML = countries[rnd1];
			document.getElementById("quizFalseOrTrueTab11").innerHTML = capitals[rnd5]; // the false
			document.getElementById("quizFalseOrTrueTab20").innerHTML = countries[rnd2];
			document.getElementById("quizFalseOrTrueTab21").innerHTML = capitals[rnd2];
			document.getElementById("quizFalseOrTrueTab30").innerHTML = countries[rnd3];
			document.getElementById("quizFalseOrTrueTab31").innerHTML = capitals[rnd3];
			document.getElementById("quizFalseOrTrueTab40").innerHTML = countries[rnd4];
			document.getElementById("quizFalseOrTrueTab41").innerHTML = capitals[rnd4];

		}else if(rndTable === 2){

			document.getElementById("quizFalseOrTrueTab10").innerHTML = countries[rnd1];
			document.getElementById("quizFalseOrTrueTab11").innerHTML = capitals[rnd1];
			document.getElementById("quizFalseOrTrueTab20").innerHTML = countries[rnd2];
			document.getElementById("quizFalseOrTrueTab21").innerHTML = capitals[rnd5]; // the false
			document.getElementById("quizFalseOrTrueTab30").innerHTML = countries[rnd3];
			document.getElementById("quizFalseOrTrueTab31").innerHTML = capitals[rnd3];
			document.getElementById("quizFalseOrTrueTab40").innerHTML = countries[rnd4];
			document.getElementById("quizFalseOrTrueTab41").innerHTML = capitals[rnd4];

		}else if(rndTable === 3){

			document.getElementById("quizFalseOrTrueTab10").innerHTML = countries[rnd1];
			document.getElementById("quizFalseOrTrueTab11").innerHTML = capitals[rnd1];
			document.getElementById("quizFalseOrTrueTab20").innerHTML = countries[rnd2];
			document.getElementById("quizFalseOrTrueTab21").innerHTML = capitals[rnd2];
			document.getElementById("quizFalseOrTrueTab30").innerHTML = countries[rnd3];
			document.getElementById("quizFalseOrTrueTab31").innerHTML = capitals[rnd5]; // the false
			document.getElementById("quizFalseOrTrueTab40").innerHTML = countries[rnd4];
			document.getElementById("quizFalseOrTrueTab41").innerHTML = capitals[rnd4];

		}else{

			document.getElementById("quizFalseOrTrueTab10").innerHTML = countries[rnd1];
			document.getElementById("quizFalseOrTrueTab11").innerHTML = capitals[rnd1];
			document.getElementById("quizFalseOrTrueTab20").innerHTML = countries[rnd2];
			document.getElementById("quizFalseOrTrueTab21").innerHTML = capitals[rnd2];
			document.getElementById("quizFalseOrTrueTab30").innerHTML = countries[rnd3];
			document.getElementById("quizFalseOrTrueTab31").innerHTML = capitals[rnd3];
			document.getElementById("quizFalseOrTrueTab40").innerHTML = countries[rnd4];
			document.getElementById("quizFalseOrTrueTab41").innerHTML = capitals[rnd5]; // the false

		}

	}

}

//------------------------------------------------------------------------------
function falseButton(){

	console.log("falseButton()");

	if(theFalseOrTrueTableIs === "false")
		success += 1;
	else
		mistakes += 1;

	playQuiz();
}

//------------------------------------------------------------------------------
function trueButton(){

	console.log("trueButton()");

	if(theFalseOrTrueTableIs === "true")
		success += 1;
	else
		mistakes += 1;

	playQuiz();
}

//------------------------------------------------------------------------------
function playLearn(){

	console.log("playLearn");

	if( questionNumberIs === 0){ //choose two countries

		showLearnTab();

		itemsToShowInTab = 2;

		for(i=0; i<2; i++){
			while(true){
				N = intRand(0,totalCountries - 1);
				if(C[N]>0){
					C[N] = 0;
					break;
				}
			}
			quest.push(countries[N]);
			answer.push(capitals[N]);
		}

	}else if( questionNumberIs === 1){ //add one country

		itemsToShowInTab = 3;

		var tmp;;
		while(true){
			tmp = intRand(0, totalCountries - 1)
			if( countries[tmp] !== quest[0] &&
				countries[tmp] !== quest[1] )
				break;
		}
		quest.push(countries[tmp]);
		answer.push(capitals[tmp]); //now there are 3 countries

	}else if( questionNumberIs === 2){ //add one country

		itemsToShowInTab = 4;

		var tmp;;
		while(true){
			tmp = intRand(0, totalCountries - 1)
			if( countries[tmp] !== quest[0] &&
				countries[tmp] !== quest[1] &&
				countries[tmp] !== quest[2] )
				break;
		}
		quest.push(countries[tmp]);
		answer.push(capitals[tmp]); //now there are 4 countries

	}else{ //replace one country

		itemsToShowInTab = 4;

		var tmp1 = intRand(0,3);
		var tmp2;
		while(true){
			tmp2 = intRand(0, totalCountries - 1);
			if( countries[tmp2] !== quest[0] &&
				countries[tmp2] !== quest[1] &&
				countries[tmp2] !== quest[2] &&
				countries[tmp2] !== quest[3] ) break;
		}
		quest[tmp1] = countries[tmp2];
		answer[tmp1] = capitals[tmp2];

	}

	for(i=0; i<itemsToShowInTab; i++){
		learnTabsi[i] = intRand(0, itemsToShowInTab - 1);
		learnTabsj[i] = intRand(0, itemsToShowInTab - 1);
	}

	//erase button's face
	for(i=1;i<5;i++){
		for(j=0;j<2;j++){
			s = "learnTab"+i+j;
			document.getElementById(s).innerHTML = "?";
		}
	}

}

//quizCorrectTheTab

//------------------------------------------------------------------------------
function     quizCorrectTheTab10(){
	var s = "quizCorrectTheTab10";
	var i =  correctTabsi[0];

	if(i < 2){i += 1;}else{i = 0;}
	document.getElementById(s).innerHTML = quest[i];
		   correctTabsi[0] = i;
	console.log("quizCorrectTheTab10: ", i, quest[i]);
	console.log(correctTabsi);
	console.log(correctTabsj);
}

//------------------------------------------------------------------------------
function     quizCorrectTheTab20(){
	var s = "quizCorrectTheTab20";
	var i =  correctTabsi[1];

	if(i < 2){i += 1;}else{i = 0;}
	document.getElementById(s).innerHTML = quest[i];
		   correctTabsi[1] = i;
	console.log("quizCorrectTheTab20: ", i, quest[i]);
	console.log(correctTabsi);
	console.log(correctTabsj);

}

//------------------------------------------------------------------------------
function     quizCorrectTheTab30(){
	var s = "quizCorrectTheTab30";
	var i =  correctTabsi[2];

	//if( questionNumberIs >= 1){

		if(i < 2){i += 1;}else{i = 0;}
		document.getElementById(s).innerHTML = quest[i];
			   correctTabsi[2] = i;
		console.log("quizCorrectTheTab30: ", i, quest[i]);
	console.log(correctTabsi);
	console.log(correctTabsj);

	//}
}



//------------------------------------------------------------------------------
function     quizCorrectTheTab11(){
	var s = "quizCorrectTheTab11";
	var j =  correctTabsj[0];

	if(j < 2){j += 1;}else{j = 0;}
	document.getElementById(s).innerHTML = answer[j];
		   correctTabsj[0] = j;
	console.log("quizCorrectTheTab11: ", j, answer[j]);
	console.log(correctTabsi);
	console.log(correctTabsj);

}

//------------------------------------------------------------------------------
function     quizCorrectTheTab21(){
	var s = "quizCorrectTheTab21";
	var j =  correctTabsj[1];

	if(j < 2){j += 1;}else{j = 0;}
	document.getElementById(s).innerHTML = answer[j];
		   correctTabsj[1] = j;
	console.log("quizCorrectTheTab21: ", j, answer[j]);
	console.log(correctTabsi);
	console.log(correctTabsj);

}

//------------------------------------------------------------------------------
function     quizCorrectTheTab31(){
	var s = "quizCorrectTheTab31";
	var j =  correctTabsj[2];

	//if( questionNumberIs >= 1){

		if(j < 2){j += 1;}else{j = 0;}
		document.getElementById(s).innerHTML = answer[j];
			   correctTabsj[2] = j;
		console.log("quizCorrectTheTab31: ", j, answer[j]);
	console.log(correctTabsi);
	console.log(correctTabsj);

	//}
}




//----

//------------------------------------------------------------------------------
function     learnTab10(){
	var s = "learnTab10";
	var i =  learnTabsi[0];

	if(i < itemsToShowInTab - 1){i += 1;}else{i = 0;}
	document.getElementById(s).innerHTML = quest[i];
		   learnTabsi[0] = i;
	console.log("learnTab10: ", i, quest[i]);
}

//------------------------------------------------------------------------------
function     learnTab20(){
	var s = "learnTab20";
	var i =  learnTabsi[1];

	if(i < itemsToShowInTab - 1){i += 1;}else{i = 0;}
	document.getElementById(s).innerHTML = quest[i];
		   learnTabsi[1] = i;
	console.log("learnTab20: ", i, quest[i]);
}

//------------------------------------------------------------------------------
function     learnTab30(){
	var s = "learnTab30";
	var i =  learnTabsi[2];

	if( questionNumberIs >= 1){

		if(i < itemsToShowInTab - 1){i += 1;}else{i = 0;}
		document.getElementById(s).innerHTML = quest[i];
			   learnTabsi[2] = i;
		console.log("learnTab30: ", i, quest[i]);
	}
}

//------------------------------------------------------------------------------
function     learnTab40(){
	var s = "learnTab40";
	var i =  learnTabsi[3];

	if( questionNumberIs >= 2){

		if(i < itemsToShowInTab - 1){i += 1;}else{i = 0;}
		document.getElementById(s).innerHTML = quest[i];
			   learnTabsi[3] = i;
		console.log("learnTab40: ", i, quest[i]);
	}
}

//------------------------------------------------------------------------------
function     learnTab11(){
	var s = "learnTab11";
	var j =  learnTabsj[0];

	if(j < itemsToShowInTab - 1){j += 1;}else{j = 0;}
	document.getElementById(s).innerHTML = answer[j];
		   learnTabsj[0] = j;
	console.log("learnTab11: ", j, answer[j]);
}

//------------------------------------------------------------------------------
function     learnTab21(){
	var s = "learnTab21";
	var j =  learnTabsj[1];

	if(j < itemsToShowInTab - 1){j += 1;}else{j = 0;}
	document.getElementById(s).innerHTML = answer[j];
		   learnTabsj[1] = j;
	console.log("learnTab21: ", j, answer[j]);
}

//------------------------------------------------------------------------------
function     learnTab31(){
	var s = "learnTab31";
	var j =  learnTabsj[2];

	if( questionNumberIs >= 1){

		if(j < itemsToShowInTab - 1){j += 1;}else{j = 0;}
		document.getElementById(s).innerHTML = answer[j];
			   learnTabsj[2] = j;
		console.log("learnTab31: ", j, answer[j]);
	}
}

//------------------------------------------------------------------------------
function     learnTab41(){
	var s = "learnTab41";
	var j =  learnTabsj[3];

	if( questionNumberIs >= 2){

		if(j < itemsToShowInTab - 1){j += 1;}else{j = 0;}
		document.getElementById(s).innerHTML = answer[j];
			   learnTabsj[3] = j;
		console.log("learnTab41: ", j, answer[j]);
	}
}

//------------------------------------------------------------------------------
function showLearnTab(){

	console.log("showLearnTab");

	if(continent === "mexico")
		document.getElementById("learnTab00").innerHTML = "Estado";
	else
		document.getElementById("learnTab00").innerHTML = "País";

	document.getElementById("learnTab").style.display = "block";

}




//------------------------------------------------------------------------------
function learnNextButton(){

	var i,j;
	var check1;
	var check2;

	console.log("learnNextButton()");

	check1="ok"; // check the Columns
	loop1:
	for(i=0;i<itemsToShowInTab;i++){
		loop2:
		for(j=0;j<itemsToShowInTab;j++){
			if(i!==j){
				if(learnTabsi[i] === learnTabsi[j]){
					check1 ="bad";
					break loop1;
				}
			}//if i!==j
		}//for j
	}//for i

	check2="ok"; // check the Rows
	loop3:
	for(i=0;i<itemsToShowInTab;i++){
		if(learnTabsi[i] !== learnTabsj[i]){
			check2 ="bad";
			break loop3;
		}
	}

	if(check1==="ok" && check2==="ok"){
		questionNumberIs += 1;
		playLearn();
		console.log("ok");
	}else{
		console.log("bad");
	}

}


//------------------------------------------------------------------------------
function correctTheTabNextButton(){

	var i,j;
	var check1;
	var check2;

	console.log("correctTheTabNextButton()");

	itemsToShowInTab = 3;

	check1="ok"; // check the Columns
	loop1:
	for(i=0;i<itemsToShowInTab;i++){
		loop2:
		for(j=0;j<itemsToShowInTab;j++){
			if(i!==j){
				if(correctTabsi[i] === correctTabsi[j]){
					check1 ="bad";
					break loop1;
				}
			}//if i!==j
		}//for j
	}//for i

	check2="ok"; // check the Rows
	loop3:
	for(i=0;i<itemsToShowInTab;i++){
		if(correctTabsi[i] !== correctTabsj[i]){
			check2 ="bad";
			break loop3;
		}
	}
	console.log("check",check1,check2);
	console.log(correctTabsi);
	console.log(correctTabsj);

	if(check1==="ok" && check2==="ok"){
		console.log("ok");
		success += 1;
	}else{
		console.log("bad");
		mistakes += 1;
	}

	playQuiz();

}


//------------------------------------------------------------------------------
function loadAmericaCountries(){

	console.log("loadAmericaCountries");

	countries = [];
	capitals = [];

	if(level === EASY_LEVEL){
		countries[0]="Canadá"; 		capitals[0]="Ottawa";
		countries[1]="Estados Unidos"; capitals[1]="Washington D. C.";
		countries[2]="México"; 		capitals[2]="Ciudad de México";
		countries[3]="Belice"; 		capitals[3]="Belmopán";
		countries[4]="Costa Rica"; 	capitals[4]="San José";
		countries[5]="El Salvador"; 	capitals[5]="San Salvador";
		countries[6]="Guatemala"; 		capitals[6]="Ciudad de Guatemala";
		countries[7]="Honduras"; 		capitals[7]="Tegucigalpa";
		countries[8]="Nicaragua"; 		capitals[8]="Managua";
		countries[9]="Panamá"; 		capitals[9]="Panamá";
	}

	if(level === NORMAL_LEVEL){
		countries[0]="Canadá"; 		capitals[0]="Ottawa";
		countries[1]="Estados Unidos"; capitals[1]="Washington D. C.";
		countries[2]="México"; 		capitals[2]="Ciudad de México";
		countries[3]="Belice"; 		capitals[3]="Belmopán";
		countries[4]="Costa Rica"; 	capitals[4]="San José";
		countries[5]="El Salvador"; 	capitals[5]="San Salvador";
		countries[6]="Guatemala"; 		capitals[6]="Ciudad de Guatemala";
		countries[7]="Honduras"; 		capitals[7]="Tegucigalpa";
		countries[8]="Nicaragua"; 		capitals[8]="Managua";
		countries[9]="Panamá"; 		capitals[9]="Panamá";
		countries[10]="Argentina"; 	capitals[10]="Buenos Aires";
		countries[11]="Bolivia"; 		capitals[11]="Sucre";
		countries[12]="Brasil"; 		capitals[12]="Brasilia";
		countries[13]="Chile"; 		capitals[13]="Santiago de Chile";
		countries[14]="Colombia"; 		capitals[14]="Bogotá";
		countries[15]="Ecuador"; 		capitals[15]="Quito";
		countries[16]="Guyana"; 		capitals[16]="Georgetown";
		countries[17]="Paraguay"; 		capitals[17]="Asunción";
		countries[18]="Perú"; 			capitals[18]="Lima";
		countries[19]="Surinam"; 		capitals[19]="Paramaribo";
		countries[20]="Uruguay"; 		capitals[20]="Montevideo";
		countries[21]="Venezuela"; 	capitals[21]="Caracas";
	}

	if(level === HARD_LEVEL){
		countries[0]="Canadá"; 		capitals[0]="Ottawa";
		countries[1]="Estados Unidos"; capitals[1]="Washington D. C.";
		countries[2]="México"; 		capitals[2]="Ciudad de México";
		countries[3]="Belice"; 		capitals[3]="Belmopán";
		countries[4]="Costa Rica"; 	capitals[4]="San José";
		countries[5]="El Salvador"; 	capitals[5]="San Salvador";
		countries[6]="Guatemala"; 		capitals[6]="Ciudad de Guatemala";
		countries[7]="Honduras"; 		capitals[7]="Tegucigalpa";
		countries[8]="Nicaragua"; 		capitals[8]="Managua";
		countries[9]="Panamá"; 		capitals[9]="Panamá";
		countries[10]="Argentina"; 	capitals[10]="Buenos Aires";
		countries[11]="Bolivia"; 		capitals[11]="Sucre";
		countries[12]="Brasil"; 		capitals[12]="Brasilia";
		countries[13]="Chile"; 		capitals[13]="Santiago de Chile";
		countries[14]="Colombia"; 		capitals[14]="Bogotá";
		countries[15]="Ecuador"; 		capitals[15]="Quito";
		countries[16]="Guyana"; 		capitals[16]="Georgetown";
		countries[17]="Paraguay"; 		capitals[17]="Asunción";
		countries[18]="Perú"; 			capitals[18]="Lima";
		countries[19]="Surinam"; 		capitals[19]="Paramaribo";
		countries[20]="Uruguay"; 		capitals[20]="Montevideo";
		countries[21]="Venezuela"; 	capitals[21]="Caracas";
		countries[22]="Antigua y Barbuda"; capitals[22]="Saint John’s";
		countries[23]="Bahamas"; 		capitals[23]="Nasáu";
		countries[24]="Barbados"; 		capitals[24]="Bridgetown";
		countries[25]="Cuba"; 			capitals[25]="La Habana";
		countries[26]="Dominica";	 	capitals[26]="Roseau";
		countries[27]="Granada"; 		capitals[27]="Saint George";
		countries[28]="Haití"; 		capitals[28]="Puerto Príncipe";
		countries[29]="Jamaica"; 		capitals[29]="Kingston";
		countries[30]="República Dominicana"; 			capitals[30]="Santo Domingo";
		countries[31]="San Cristóbal y Nieves"; 		capitals[31]="Basseterre";
		countries[32]="San Vicente y las Granadinas"; 	capitals[32]="Kingstown";
		countries[33]="Santa Lucía"; 					capitals[33]="Castries";
		countries[34]="Trinidad y Tobago"; 			capitals[34]="Puerto España";
	}


	totalCountries = countries.length;

	C = [];
	for(var j=0;j<totalCountries;j++)
		C[j]=1;
}

function loadMexico(){

	console.log("loadMexico");

	countries = [];
	capitals = [];

	countries[0]="Aguascalientes";capitals[0]="Aguascalientes";
	countries[1]="Baja California";capitals[1]="Mexicali";
	countries[2]="Baja California Sur";capitals[2]="La Paz";
	countries[3]="Campeche";capitals[3]="Campeche";
	countries[4]="Coahuila";capitals[4]="Saltillo";
	countries[5]="Colima";capitals[5]="Colima";
	countries[6]="Chiapas";capitals[6]="Tuxtla Gutiérrez";
	countries[7]="Chihuahua";capitals[7]="Chihuahua";
	countries[8]="Distrito Federal";capitals[8]="Ciudad de México";
	countries[9]="Durango";capitals[9]="Durango";
	countries[10]="Guanajuato";capitals[10]="Guanajuato";
	countries[11]="Guerrero";capitals[11]="Chilpancingo";
	countries[12]="Hidalgo";capitals[12]="Pachuca";
	countries[13]="Jalisco";capitals[13]="Guadalajara";
	countries[14]="México";capitals[14]="Toluca";
	countries[15]="Michoacán";capitals[15]="Morelia";
	countries[16]="Morelos";capitals[16]="Cuernavaca";
	countries[17]="Nayarit";capitals[17]="Tepic";
	countries[18]="Nuevo León";capitals[18]="Monterrey";
	countries[19]="Oaxaca";capitals[19]="Oaxaca";
	countries[20]="Puebla";capitals[20]="Puebla";
	countries[21]="Querétaro";capitals[21]="Querétaro";
	countries[22]="Quintana Roo";capitals[22]="Chetumal";
	countries[23]="San Luis Potosí";capitals[23]="San Luis Potosí";
	countries[24]="Sinaloa";capitals[24]="Culiacán";
	countries[25]="Sonora";capitals[25]="Hermosillo";
	countries[26]="Tabasco";capitals[26]="Villahermosa";
	countries[27]="Tamaulipas";capitals[27]="Ciudad Victoria";
	countries[28]="Tlaxcala";capitals[28]="Tlaxcala";
	countries[29]="Veracruz";capitals[29]="Xalapa";
	countries[30]="Yucatán";capitals[30]="Mérida";
	countries[31]="Zacatecas";capitals[31]="Zacatecas";

	totalCountries = countries.length;

	C = [];
	for(var j=0;j<totalCountries;j++)
		C[j]=1;

}


//------------------------------------------------------------------------------
function intRand(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

    // return a random number, interval: [min,max]
}


//function redButton(){

	//if(quiz === "flashCards"){

		//if(C[N]<=2)
			//C[N] += 1;
		//chooseFlashCard();
		//cardIsFlip = "no";
		//showFlashCard();
	//}

//}

//function blueButton(){

	//if(quiz === "flashCards"){
		//C[N] -= 1;
		//chooseFlashCard();
		//cardIsFlip = "no";
		//showFlashCard();
	//}

//}

/*

var Mapa="";
var Quiz="";
var totalCountries=1; // numeto total de preguntas
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
function intRand(min, max) {
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

	if(i<totalCountries){
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

   opcionQuiz3=intRand(1,2);

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


   for(var k=0; k<totalCountries; k++){

      salirDelWhile="no";
      while(salirDelWhile==="no"){//obj: obtener pregunta FALSA
         myRnd = intRand(0,totalCountries-1);
         if(myRnd===k){
            salirDelWhile="no";
         }else{
            if(intRand(1,2)===1)
               PFV_falso = "<red>" + R[k] + "</red> es la capital de <blue>" + P[myRnd] + "</blue>.";
            else
               PFV_falso = "La capital de <blue>" + P[myRnd] + "</blue> es <br><red>" + R[k] + "</red>.";
            salirDelWhile="si";
         }
      }//while

      if(intRand(1,2)===1)
         PFV_verdadero = "La capital de <blue>" + P[k]+"</blue> es <br><red>"+R[k]+"</red>.";
      else
         PFV_verdadero = "<red>"+R[k] + "</red> es la capital de <blue>" + P[k]+"</blue>.";

      if(intRand(1,2)===1){
         PFV[k] = PFV_falso;
         RFV[k] = "F";
      }else{
         PFV[k] = PFV_verdadero;
         RFV[k] = "V";
      }

   }//for

   for(var k=0; k<totalCountries; k++)
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

    while(salir==="no"){
        k++;
        N = intRand(0,totalCountries-1);
		  console.log("intRand: ", N);
        if(C[N]>0){
            salir="si";
        }else{
            salir="no";
        }
        if(k>=10*totalCountries){
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
      P[26]="learnTabasco";R[26]="Villahermosa";
      P[27]="Tamaulipas";R[27]="Ciudad Victoria";
      P[28]="Tlaxcala";R[28]="Tlaxcala";
      P[29]="Veracruz";R[29]="Xalapa";
      P[30]="Yucatán";R[30]="Mérida";
      P[31]="Zacatecas";R[31]="Zacatecas";

   }


   if(Mapa==="Todo America"){
      totalCountries=TP.length;
      P=TP;
      R=TR;
      console.log(P);
      if(i===0){
         C = [];
         for(var j=0;j<totalCountries;j++)
             C[j]=2;
      }
   }else{
      totalCountries=P.length;
      if(i===0){
         C = [];
         for(var j=0;j<totalCountries;j++)
             C[j]=2;
      }
   }


	console.log("cargarPreguntas(), totalCountries: ", totalCountries, C);

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

*/


