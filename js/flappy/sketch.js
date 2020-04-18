

//--------------------------- BIRD VARS
var bx;
var by;
var bspx; //speed in x
var bspy;
var br; //radius

//--------------------------- PIPES VARS
var px=[];
var py0=[];
var py1=[];
var py2=[];
var py3=[];
var pw=[];
var pspx; //speed pipes in x
var pspy;
const Npipes = 4;
var pgapx; //gap beetwen pipes
var pgapy;
var pR=[];
var pG=[];
var pB=[];

//--------------------------- GRAL VARS
var frame;
var time;
var spawn_t_old=0;
var spawn_t_now=0;
var spawn_dt;
var FPS;
const G = 0.5; //gravity
const FR = 60;

//-----------------------------------------SETUP
function setup() {

	createCanvas(800, 400);
	background("black");
	frameRate(FR);
	frame = 0;
	time = 0;

	//------------------------------------ the bird params
	bx = width/4;
	by = height/2;
	br = height/24;
	bspx = 0;
	bspy = 0;

	//----------------------------------- pipes params
	pgapx = 8*br; //gap beetwen pipes
	pgapy = 6*br;
	pspx = 0.2; //speed pipes 
	pipe_spawn(width);  //first pipe
	pipe_spawn(width+width*(1/3));  //second pipe
	pipe_spawn(width+width*(2/3));  //

}

//------------------------- pipe_spawn()
function pipe_spawn(X){
	
	let y0 = 0;
	let y1 = random(2*br,height/2);
	let y2 = y1 + pgapy;
	let y3 = width - y2;
	
	px = append(px, X);
	py0 = append(py0, y0);
	py1 = append(py1, y1);
	py2 = append(py2, y2);
	py3 = append(py3, y3);
	pw = append(pw, 4*br);	
	
	pR = append(pR, random(256) );
	pG = append(pG, random(256) );
	pB = append(pB, random(256) );
	
	//spawn_t_old = spawn_t_now;
	//spawn_t_now = time/1000;
	//spawn_dt = spawn_t_now - spawn_t_old;
	
}

//-----------------------------------------DRAW
function draw() {
	
	background("black");

	//------------------------update & draw pipes
	
	//if(time/
	//pipe_spawn();
	
	for(let i=0; i<px.length; i++){
		
		if(px[i]+pw[i] < 0){
			
			px[i] = width;
			pR[i] = random(256);
			pG[i] = random(256);
			pB[i] = random(256);
		}
		
		px[i] -= pspx*deltaTime;
		
	}
	
	for(let i=0; i<px.length; i++){
		
		if(i===0)
			fill("white");
		else
			fill(pR[i], pG[i], pB[i]);
		
		rect(px[i], py0[i], pw[i], py1[i]);	
		rect(px[i], py2[i], pw[i], py3[i]);	
	}
	
	console.log(px.length, time);

	//-----------------------update & draw text
	textSize(20);
	fill("green")
	text("FPS: "+frame/(time/1000), width-120, 30);	
	text("frame: "+frame, width-120, 60);
	text("time: "+floor(time/1000), width-120, 90);	
	text("("+floor(bx)+", "+floor(by)+")", width-120, 120);
	text("bspy: "+floor(bspy), width-120, 150);
	text("8D", width-120, 180);

	//------------------------ update & draw bird

	bspy = bspy + G;
	by = by + bspy;
	
	if(by+br > height){
		by = height - br;
		bspy = 0;
	}
	
	if(by-br <= 0){
		by = br;
		bspy = 0;
	}
	
	fill("white");
	circle(bx, by, 2*br);


	//--------------------------- update time
	frame++;
	time += deltaTime;

}

//-----------------------------------------INPUT

function keyPressed() {
	if (keyCode === 32) {
		bspy = -6;
	}
}

//no sirve, hace doble click en mobile device
//function touchStarted() { 
//	bspy = -6;
//}

//-----------------------------------------INPUT HACK for TOUCH

var released = true;

function mouseReleased(){
	released = true;
	return false;
}

function mousePressed(){
	
	if(!released){
		return;
	}
	released = false;

	//rest of your code
	
	bspy = -6;
}


/*
function mousePressed() {
	x = append(x, mouseX);
	y = append(y, mouseY);
	cl = append(cl, "white");
	xSpeed = append(xSpeed, 0.1);
	ySpeed = append(ySpeed, 0.1);
	R = append(R, 15);
}*/

/*  for (i = 0; i < x.length; i++) {
	  
		x[i] += xSpeed[i]*deltaTime;
		y[i] += ySpeed[i]*deltaTime;

		if (x[i]-R[i] < 0) {
			xSpeed[i] *= -1;
			x[i]=R[i];
		}

		if (x[i] > width-R[i]) {
			xSpeed[i] *= -1;
			x[i]=width-R[i];
		}

		if (y[i]-R[i] < 0 ) {
			ySpeed[i] *= -1;
			y[i]=R[i];
		}

		if ( y[i] > height-R[i]) {
			ySpeed[i] *= -1;
			y[i]=height-R[i];
		}

  }*/


