
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
		rnd = rndi(1,4);
	else
		rnd = rndi(1,5);

	//rnd = 5;

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

	trueAns = rndi(1,5);

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
		if(level==="easy")  {A = rndi(3,20);B = rndi(3,20);}
		if(level==="normal"){A = rndi(3,50);B = rndi(3,50);}
		if(level==="hard")  {A = rndi(9,99);B = rndi(9,99);}
		ans = A + B;
		makeFakes(-4,4);
		makeFakeAns();

	}else{
		if(level==="easy")  {A = 10*rndi(3,20);B = rndi(3,20);}
		if(level==="normal"){A = 10*rndi(3,50);B = rndi(3,50);}
		if(level==="hard")  {A = 10*rndi(9,99);B = rndi(9,99);}
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

	if(level==="easy")   {var rnd = 1;}
	if(level==="normal") {var rnd = rndi(1,2);}
	if(level==="hard")   {var rnd = rndi(2,3);}

	if( rnd === 1 ){
		while(1){
			if(level==="easy")  {A = rndi(2,9)*10; B = rndi(3,12);}
			if(level==="normal"){A = rndi(2,9)*10; B = rndi(3,50);}
			if(level==="hard")  {A = rndi(2,9)*10; B = rndi(2,99);}
			ans = A - B;
			if(ans > 2) break;
		}
		makeFakes(-4,4);
		makeFakeAns();
	}

	if( rnd === 2 ){
		while(1){
			if(level==="easy")  {A = rndi(2,9)*100; B = rndi(3,12);}
			if(level==="normal"){A = rndi(2,9)*100; B = rndi(3,50);}
			if(level==="hard")  {A = rndi(2,9)*100; B = rndi(2,99);}
			ans = A - B;
			if(ans > 2) break;
		}
		makeFakes(-4,4);
		makeFakeAns();
	}

	if( rnd === 3 ){
		while(1){
			if(level==="easy")  {A = rndi(2,20); B = rndi(2,20);}
			if(level==="normal"){A = rndi(2,50); B = rndi(2,50);}
			if(level==="hard")  {A = rndi(2,99); B = rndi(2,99);}
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
	var rnd = rndi(1,4);

	if( rnd === 1){
		if(level==="easy")  {A = rndi(2,10); B = rndi(2,10);}
		if(level==="normal"){A = rndi(2,15); B = rndi(2,15);}
		if(level==="hard")  {A = rndi(2,20); B = rndi(2,20);}
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B;
		makeFakeAns();
	}
	if( rnd === 2){
		if(level==="easy")  {A = 10*rndi(2,10); B = rndi(2,10);}
		if(level==="normal"){A = 10*rndi(2,15); B = rndi(2,15);}
		if(level==="hard")  {A = 10*rndi(2,20); B = rndi(2,20);}
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B*10;
		makeFakeAns();
	}
	if( rnd === 3){
		if(level==="easy")  {A = rndi(11,20); B = rndi(2,3);}
		if(level==="normal"){A = rndi(20,50); B = rndi(2,3);}
		if(level==="hard")  {A = rndi(20,99); B = rndi(2,3);}
		ans = A * B;
		makeFakes(-4,4);
		for(i=0; i<4; i++)fake[i] *= B;
		makeFakeAns();
	}
	if( rnd === 4){
		if(level==="easy")  {A = 10*rndi(11,20); B = rndi(2,3);}
		if(level==="normal"){A = 10*rndi(20,50); B = rndi(2,3);}
		if(level==="hard")  {A = 10*rndi(20,99); B = rndi(2,3);}
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
	var rnd = rndi(1,3);

	//rnd = 3;

	if( rnd === 1 ){
		if(level==="easy")  {C = rndi(2,10); B = rndi(2,10);}
		if(level==="normal"){C = rndi(2,15); B = rndi(2,15);}
		if(level==="hard")  {C = rndi(2,20); B = rndi(2,20);}
		A = C * B;
		ans = A / B;
		makeFakes(-4,4);
		makeFakeAns();
	}
	if( rnd === 2 ){
		if(level==="easy")  {C = rndi(2,10); B = 10*rndi(2,10);}
		if(level==="normal"){C = rndi(2,15); B = 10*rndi(2,15);}
		if(level==="hard")  {C = rndi(2,20); B = 10*rndi(2,20);}
		A = C * B;
		ans = A / B;
		makeFakes(-4,4);
		makeFakeAns();

	}
	if( rnd === 3 ){
		if(level==="easy")  {C = rndi(10,20); B = rndi(2,3);}
		if(level==="normal"){C = rndi(20,50); B = rndi(2,3);}
		if(level==="hard")  {C = rndi(10,99); B = rndi(2,3);}
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


	var rnd = rndi(1,4);

	//rnd = 4;

	// SUMA
	if( rnd === 1 ){
		while(1){
			if(level==="easy")  {a=rndi(1,2); b=rndi(1,3); c=rndi(1,2); d=rndi(1,9);}
			if(level==="normal"){a=rndi(1,2); b=rndi(1,5); c=rndi(1,2); d=rndi(1,5);}
			if(level==="hard")  {a=rndi(1,3); b=rndi(1,9); c=rndi(1,3); d=rndi(1,9);}
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
			if(level==="easy")  {a=rndi(1,2); b=1; c=rndi(1,3); d=rndi(2,3);}
			if(level==="normal"){a=rndi(1,3); b=1; c=rndi(1,5); d=rndi(2,5);}
			if(level==="hard")  {a=rndi(1,4); b=1; c=rndi(1,9); d=rndi(2,9);}
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
			if(level==="easy")  {a=rndi(2,5);  b=rndi(2,5);  c=rndi(2,5);  d=rndi(2,5);}
			if(level==="normal"){a=rndi(2,9);  b=rndi(2,9);  c=rndi(2,9);  d=rndi(2,9);}
			if(level==="hard")  {a=rndi(2,12); b=rndi(2,12); c=rndi(2,12); d=rndi(2,12);}
			a = rndi(2,9);
			b = rndi(2,9);
			c = rndi(2,9);
			d = rndi(2,9);
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
			if(level==="easy")  {a=rndi(2,5);  b=rndi(2,5);  c=rndi(2,5);  d=rndi(2,5);}
			if(level==="normal"){a=rndi(2,9);  b=rndi(2,9);  c=rndi(2,9);  d=rndi(2,9);}
			if(level==="hard")  {a=rndi(2,12); b=rndi(2,12); c=rndi(2,12); d=rndi(2,12);}
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

			rnd = rndi(1,3);

			if(rnd === 1){
				up = e;
				while(1){
					//console.log(rnd, up, down, e, f);
					down = f + rndi(-5,5);
					if(down !== f && down > 0)
						break;
				}
			}else if(rnd === 2){
				down = f;
				while(1){
					//console.log(rnd, up, down);
					up = e + rndi(-5,5);
					if(up !== e && up > 0)
						break;
				}
			}else{
				while(1){
					//console.log(rnd, up, down);
					up = e + rndi(-5,5);
					down = f + rndi0(-5,5);
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

	fake[0] = rndi(fakeMin, fakeMax);

	while(1){
		fake[1] = rndi(fakeMin, fakeMax);
		if(fake[1] !== fake[0])
			break;}

	while(1){
		fake[2] = rndi(fakeMin, fakeMax);
		if(fake[2] !== fake[0] &&
		   fake[2] !== fake[1])
			break;}

	while(1){
		fake[3] = rndi(fakeMin, fakeMax);
		if(fake[3] !== fake[0] &&
		   fake[3] !== fake[1] &&
		   fake[3] !== fake[2])
			break;}

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
