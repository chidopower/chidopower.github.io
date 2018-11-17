
var option;
var level;

var QUESTION;
var ANSWER;
var ans;

var userAns;
var trueAns;

var fake = [];
var fakeAns = [];

var frac = "NO";
var a,b,c,d,e,f; // play_FRAC()

var success;
var mistakes;

//------------------------------------------------------------------------------
function start(){

	option = document.getElementById("option").value;
	level = document.getElementById("level").value;

	if(option === "quiz"){
		document.getElementById("buttons").style.display = "block";
		document.getElementById("answer_").style.display = "none";
		document.getElementById("start_").style.display = "none";
		document.getElementById("next_").style.display = "none";
		document.getElementById("score").style.display = "block";
	}

	if(option === "answer"){
		document.getElementById("buttons").style.display = "none";
		document.getElementById("answer_").style.display = "block";
		document.getElementById("next_").style.display = "block";
		document.getElementById("start_").style.display = "none";
		document.getElementById("score").style.display = "none";
	}

	resetScore();

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

	if(usrAns === trueAns){
		success += 1;
		updateScore();
		play();
	}else{
		mistakes += 1;
		updateScore();
	}

}

//------------------------------------------------------------------------------
function updateScreen(){

	if(option === "quiz"){
		document.getElementById("buttons").style.display = "block";
		document.getElementById("answer_").style.display = "none";
		document.getElementById("start_").style.display = "none";
		document.getElementById("next_").style.display = "none";
	}

	if(option === "answer"){
		document.getElementById("buttons").style.display = "none";
		document.getElementById("answer_").style.display = "block";
		document.getElementById("next_").style.display = "block";
		document.getElementById("start_").style.display = "none";
	}

}



//------------------------------------------------------------------------------
function play(){

	var rnd;

	updateScore();

	if(option === "quiz")
		rnd = intRand(1,4);
	else
		rnd = intRand(1,5);

	//rnd = 4;

	if(rnd === 1) play_SUMA();
	if(rnd === 2) play_RESTA();
	if(rnd === 3) play_MULT();
	if(rnd === 4) play_DIV();
	if(rnd === 5) play_FRAC();

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

	console.log("MISTAKES & SUCCES", mistakes, success);

	document.getElementById("mistakes").innerHTML = "Fails: " + mistakes;
	document.getElementById("success").innerHTML = "Wins: "+ success;

}

//------------------------------------------------------------------------------
function showAns(){

	trueAns = intRand(1,5);

	console.log("answer: ", ans);

	if(trueAns === 1){
		document.getElementById("b1").innerHTML = ans;
		document.getElementById("b2").innerHTML = fakeAns[0];
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 2){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = ans;
		document.getElementById("b3").innerHTML = fakeAns[1];
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 3){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = ans;
		document.getElementById("b4").innerHTML = fakeAns[2];
	}
	if(trueAns === 4){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = ans;
	}
	if(trueAns === 5){
		document.getElementById("b1").innerHTML = fakeAns[0];
		document.getElementById("b2").innerHTML = fakeAns[1];
		document.getElementById("b3").innerHTML = fakeAns[2];
		document.getElementById("b4").innerHTML = fakeAns[3];
	}
}

//------------------------------------------------------------------------------
function play_SUMA(){

	var A,B;

	if(coin() === 1){
		A = intRand(9,99);
		B = intRand(9,99);
		ans = A + B;
		makeFakes(-4,4);
		makeFakeAns();
	}else{
		A = intRand(2,99)*10;
		B = intRand(2,99);
		ans = A + B;
		makeFakes(-4,4);
		for(i=0; i<6; i++)fake[i] *= 10;
		makeFakeAns();
	}

	QUESTION = A +  " &plus; " + B;
	ANSWER = ans;

}

//------------------------------------------------------------------------------
function play_RESTA(){

	var A,B;

	var rnd = intRand(1,3);

	if( rnd === 1 ){
		while(1){
			A = intRand(2,9)*10;
			B = intRand(2,8);
			ans = A - B;
			if(ans > 2) break;
		}
		makeFakes(-4,4);
		makeFakeAns();
	}

	if( rnd === 2 ){
		while(1){
			A = intRand(2,9)*100;
			B = intRand(2,88);
			ans = A - B;
			if(ans > 2) break;
		}
		makeFakes(-4,4);
		makeFakeAns();
	}

	if( rnd === 3 ){
		while(1){
			A = intRand(2,99);
			B = intRand(2,99);
			ans = A - B;
			if(ans > 2) break;
		}
		makeFakes(-4,4);
		makeFakeAns();
	}

	QUESTION = A +  " &minus; " + B;
	ANSWER = ans;

}

//------------------------------------------------------------------------------
function play_MULT(){

	var A,B;
	var rnd = intRand(1,4);

	if( rnd === 1){
		A = intRand(2,20);
		B = intRand(2,20);
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B;
		makeFakeAns();
	}
	if( rnd === 2){
		A = intRand(2,20)*10;
		B = intRand(2,20);
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B*10;
		makeFakeAns();
	}
	if( rnd === 3){
		A = intRand(21,99);
		B = intRand(2,3);
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B;
		makeFakeAns();
	}
	if( rnd === 4){
		A = intRand(21,99)*10;
		B = intRand(2,3);
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B*10;
		makeFakeAns();
	}


	console.log(ans);

	QUESTION = A +  " &times; " + B;
	ANSWER = ans;

}

//------------------------------------------------------------------------------
function play_DIV(){

	var A,B;
	var rnd = intRand(1,3);

	//rnd = 3;

	if( rnd === 1 ){
		C = intRand(2,20);
		B = intRand(2,20);
		A = C * B;
		ans = A / B;
		makeFakes(-4,4);
		makeFakeAns();
	}
	if( rnd === 2 ){
		C = intRand(2,12);
		B = intRand(2,12)*10;
		A = C * B;
		ans = A / B;
		makeFakes(-4,4);
		makeFakeAns();

	}
	if( rnd === 3 ){
		C = intRand(10,99);
		B = intRand(2,3);
		A = C * B;
		ans = A / B;
		makeFakes(-4,4);
		makeFakeAns();

	}


	QUESTION = A +  " &divide; " + B;
	ANSWER = ans;

}

//------------------------------------------------------------------------------
function play_FRAC(){


	var rnd = intRand(1,4);

	//rnd = 4;

	// SUMA
	if( rnd === 1 ){
		while(1){
			a = intRand(1,3);
			b = intRand(1,9);
			c = intRand(1,3);
			d = intRand(1,9);
			e = a*d + c*b;
			f = b*d;
			simplificar();
			if(d > c)break;
		}
		if(b === 1)
			QUESTION = a + " &plus; " + c + "/" + d;
		else
			QUESTION = a + "/" + b + " &plus; " + c + "/" + d;
		ANSWER = e + "/" + f
	}

	// RESTA
	if( rnd === 2 ){
		while(1){
			a = intRand(1,4);
			b = 1;
			c = intRand(1,9);
			d = intRand(2,9);
			if(d > c)break;}
		e = a*d - c*b;
		f = b*d;
		simplificar();
		QUESTION = a + " &minus; " + c + "/" + d;
		ANSWER = e + "/" + f
	}

	// MULT
	if( rnd === 3 ){
		while(1){
			a = intRand(2,9);
			b = intRand(2,9);
			c = intRand(2,9);
			d = intRand(2,9);
			e = a*c;
			f = b*d;
			simplificar();
			if(a !== b && c !== d)break;
		}
		QUESTION = a + "/" + b +  " &times; " + c + "/" + d;
		ANSWER = e + "/" + f
	}

	// DIV
	if( rnd === 4 ){
		while(1){
			a = intRand(2,9);
			b = intRand(2,9);
			c = intRand(2,9);
			d = intRand(2,9);
			e = a*d;
			f = b*c;
			simplificar();
			if(a !== b && c !== d)break;
		}
		QUESTION = a + "/" + b +  " &divide; " + c + "/" + d;
		ANSWER = e + "/" + f
	}

}



//------------------------------------------------------------------------------
function simplificar(){
	var k;
	for(k=0; k<3; k++)
		simplificando();
}

//------------------------------------------------------------------------------
function simplificando(){

	var i, imax, e_, f_;

	e_ = e;
	f_ = f;

	if(e_ > f_)
		imax = e_ - 1;
	else
		imax = f_ - 1;

	console.log(e_ + "/" + f_);

	for(i=2; i<=imax; i++){
		if(e_%i === 0 && f_%i ===0){
			e_ = e_/i;
			f_ = f_/i;
			if(e_ > f_)
				imax = e_ - 1;
			else
				imax = f_ - 1;
			console.log(e_ + "/" + f_);
		}
	}

	e = e_;
	f = f_;

}

//------------------------------------------------------------------------------
function makeFakeAns(){

	var i, rnd;

	frac = "NO";

	fakeAns = [];

	if(frac === "YES"){

		var up, down;

		for(i=0; i<5; i++){

			rnd = intRand(1,3);

			if(rnd === 1){
				up = e;
				while(1){
					//console.log(rnd, up, down, e, f);
					down = f + intRand(-5,5);
					if(down !== f && down > 0)
						break;
				}
			}else if(rnd === 2){
				down = f;
				while(1){
					//console.log(rnd, up, down);
					up = e + intRand(-5,5);
					if(up !== e && up > 0)
						break;
				}
			}else{
				while(1){
					//console.log(rnd, up, down);
					up = e + intRand(-5,5);
					down = f + intRand0(-5,5);
					if(up !== e && down !== f && up > 0 && down > 0)
						break;
				}
			}

			fakeAns[i] = up + " / " + down;
		}

	}else{

		for(i=0; i<4; i++)
			fakeAns[i] = ans + fake[i];

	}

	console.log(ans, fakeAns);

}


//------------------------------------------------------------------------------
function makeFakes(fakeMin, fakeMax){

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

}



//------------------------------------------------------------------------------
function intRand0(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}

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
function coin(){ return intRand(1,2);}
