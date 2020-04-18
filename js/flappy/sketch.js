

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

//--------------------------- SAFE ZONE VARS
const SW=380; //scren width
const SH=240;
var sfx0=30; //safe zone x0
var sfy0=13;
var sfxw=320;
var sfyh=214;

//-----------------------------------------SETUP
function setup() {

	createCanvas(SW, SH);
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
	pspx = 0.1; //speed pipes 
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
	stroke(0);
	strokeWeight(1);
	
	//------------------------input
	


	//------------------------update & draw pipes
	
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
			fill(pR[i], pG[i], pB[i]);
		else
			fill(pR[i], pG[i], pB[i]);
		
		rect(px[i], py0[i], pw[i], py1[i]);	
		rect(px[i], py2[i], pw[i], py3[i]);	
	}
	
	console.log(px.length, time);

	//-----------------------update & draw text
	textSize(12);
	fill("green")
	text("FPS: "+floor(frame/(time/1000)), width-120, 20);	
	text("frame: "+frame, width-120, 40);
	text("time: "+floor(time/1000), width-120, 60);	
	text("("+floor(bx)+", "+floor(by)+")", width-120, 80);
	text("bspy: "+floor(bspy), width-120, 100);
	text(":D", width-120, 120);

	//------------------------ update & draw bird

	bspy = bspy + G;
	by = by + bspy;
	
	if(by+br >= sfy0+sfyh){
		by = sfy0 + sfyh - br;
		bspy = 0;
	}
	
	if(by-br <= sfy0){
		by = sfy0+br;
		bspy = 0;
	}
	
	fill("white");
	circle(bx, by, 2*br);
	
	//--------------------------- safe zone
	stroke(255, 204, 0);
	strokeWeight(1);	
	noFill();
	rect(30, 13, 320, 214);


	//--------------------------- update time
	frame++;
	time += deltaTime;

}

//-----------------------------------------INPUT

function keyPressed() {
	if (keyCode === 32) {
		bspy = -4;
	}
}



//-----------------------------------------INPUT HACK for TOUCH

var released = true;

function mouseReleased(){
	released = true;
	return false;
}

function mousePressed(){
	if(!released) return;
	released = false;
	//rest of your code here
	bspy = -4;
}



//no sirve, hace doble click en mobile device
//function touchStarted() { 
//	bspy = -6;
//}
