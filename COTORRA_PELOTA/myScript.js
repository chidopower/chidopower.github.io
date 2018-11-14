

var QUESTION;
var ANSWER;


//------------------------------------------------------------------------------
function buttonStart(){

	play();

	document.getElementById("question").innerHTML = QUESTION;
	document.getElementById("answer").innerHTML = ANSWER;

}

//------------------------------------------------------------------------------
function play(){

	var rnd = intRand(1,4);

	if(rnd === 1) play_SUMA();
	if(rnd === 2) play_RESTA();
	if(rnd === 3) play_MULT();
	if(rnd === 4) play_DIV();

}

//------------------------------------------------------------------------------
function play_SUMA(){

	OP = "&plus;";

	if(coin() === 1){
		A = intRand(2,99);
		B = intRand(2,99);
		ANS = A + B;
		makeFakes(-4,4);
		makeFakeANS();
	}else{
		A = intRand(2,99)*10;
		B = intRand(2,99);
		ANS = A + B;
		makeFakes(-4,4);
		for(i=0; i<6; i++)fake[i] *= 10;
		makeFakeANS();
	}

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
