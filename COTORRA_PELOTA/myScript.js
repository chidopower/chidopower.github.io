

var QUESTION;
var ANSWER;

var a,b,c,d,e,f; // play_FRAC()

//------------------------------------------------------------------------------
function buttonStart(){

	play();

	document.getElementById("question").innerHTML = QUESTION;
	document.getElementById("answer").innerHTML = ANSWER;

}

//------------------------------------------------------------------------------
function play(){

	var rnd = intRand(1,5);

	//rnd = 5;

	if(rnd === 1) play_SUMA();
	if(rnd === 2) play_RESTA();
	if(rnd === 3) play_MULT();
	if(rnd === 4) play_DIV();
	if(rnd === 5) play_FRAC();

}

//------------------------------------------------------------------------------
function play_SUMA(){

	var A,B,ANS;

	if(coin() === 1){
		A = intRand(9,99);
		B = intRand(9,99);
		ANS = A + B;
	}else{
		A = intRand(2,99)*10;
		B = intRand(2,99);
		ANS = A + B;
	}

	QUESTION = A +  " &plus; " + B;
	ANSWER = ANS;

}

//------------------------------------------------------------------------------
function play_RESTA(){

	var A,B,ANS;

	var rnd = intRand(1,3);

	if( rnd === 1 ){
		while(1){
			A = intRand(2,9)*10;
			B = intRand(2,8);
			ANS = A - B;
			if(ANS > 2) break;
		}
	}

	if( rnd === 2 ){
		while(1){
			A = intRand(2,9)*100;
			B = intRand(2,88);
			ANS = A - B;
			if(ANS > 2) break;
		}
	}

	if( rnd === 3 ){
		while(1){
			A = intRand(2,99);
			B = intRand(2,99);
			ANS = A - B;
			if(ANS > 2) break;
		}
	}

	QUESTION = A +  " &minus; " + B;
	ANSWER = ANS;

}

//------------------------------------------------------------------------------
function play_MULT(){

	var A,B,ANS;
	var rnd = intRand(1,4);

	if( rnd === 1){
		A = intRand(2,20);
		B = intRand(2,20);
	}
	if( rnd === 2){
		A = intRand(2,20)*10;
		B = intRand(2,20);
	}
	if( rnd === 3){
		A = intRand(21,99);
		B = intRand(2,3);
	}
	if( rnd === 4){
		A = intRand(21,99)*10;
		B = intRand(2,3);
	}

	ANS = A * B;

	QUESTION = A +  " &times; " + B;
	ANSWER = ANS;

}

//------------------------------------------------------------------------------
function play_DIV(){

	var A,B,ANS;
	var rnd = intRand(1,3);

	if( rnd === 1 ){
		C = intRand(2,20);
		B = intRand(2,20);
		A = C * B;
	}
	if( rnd === 2 ){
		C = intRand(2,12);
		B = intRand(2,12)*10;
		A = C * B;
	}
	if( rnd === 3 ){
		C = intRand(10,99);
		B = intRand(2,3);
		A = C * B;
	}

	ANS = A / B;
	QUESTION = A +  " &divide; " + B;
	ANSWER = ANS;

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
		if(a === b)
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
			if(a !== b )break;
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
