
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var t_old = 0;
var t_now = 0;
var dt = 0;
var frame = 0;
var fps = 0;
var mouse = {x: 1, y:1};
var touch = {left: false, right: false};
var click_counter = 0;
var key = {};
var keycounter = 0;
var state;

var hero;
var mobs;
var apple;
var score;
var opt;

function init() {
	
	get_hxw();
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

	t_old = performance.now();  
	
	frame = 0;
	state = "welcome";
	
	requestAnimationFrame(loop);	

}

var orient_now;
var N;
var screen_h, screen_w;
var X0, Y0, X1, Y1, XC, YC;

function get_hxw(){
	
	N = 20;
	
	if(window.innerWidth>window.innerHeight){
		orient_now = "landscape";
		PIXEL = Math.floor(window.innerHeight/N);
	}else{
		orient_now = "portrait";
		PIXEL = Math.floor(window.innerWidth/N);
	}
	
	while(1){
		if(PIXEL%2===0)
			break;
		else
			PIXEL--;			
	}
	
	PIXEL = PIXEL/2;
	N = 2*N;
	
	screen_w = N*PIXEL;
	screen_h = N*PIXEL;
	
	X0 = Math.floor( (window.innerWidth - screen_w)/2 );
	Y0 = Math.floor( (window.innerHeight - screen_h)/2 );
	
	X1 = X0 + screen_w;
	Y1 = Y0 + screen_h;
	
	XC = Math.floor(window.innerWidth/2);
	YC = Math.floor(window.innerHeight/2);
	
	console.log("WINDOW", window.innerWidth, "x", window.innerHeight);
	console.log("PIXEL", PIXEL);
	console.log("SCREEN", screen_w, "x", screen_h);
	console.log("X0, Y0", X0, Y0);
	console.log("X1, Y1", X1, Y1);
	
}



function loop() {

	// ctx.fillStyle = "black";
	// ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	frame++;
	t_now   = performance.now();
	dt   	= (t_now - t_old);
	t_old   = t_now;
	fps 	+= 1000/dt;
	
	// if(frame%60===0){
		// fps = fps/60;
		// console.log("fps:", Math.floor(fps));
		//console.log(frame);
		// fps = 0;
	// }
	
	states();

    requestAnimationFrame(loop);
}

init();

window.addEventListener('mousedown', mousedown, false);
function mousedown(e){
	
	click_counter++;
	mouse = {x: e.clientX, y: e.clientY};
	touch = {left: false, right: false};
	
	if(mouse.x <= XC)
		touch.left = true;
	else
		touch.right = true;
	
	// console.log("click", mouse.x, mouse.y);
	
}

// window.addEventListener('click', click, false);
// function click(e){
	
	// click_counter++;
	
	// mouse = {x: e.clientX, y: e.clientY};
	
	// console.log("click", mouse.x, mouse.y);
	
// }

window.addEventListener('keydown', keydown, false);
function keydown(e) {
	
	keycounter++;
	
	key[e.key] = true;
	
	console.log(e.key);
	
	e.preventDefault()
}

window.addEventListener('keyup', keyup, false);
function keyup(e) {
	
	keycounter = 0;
	key[e.key] = false;

}

function states(){
	
	if(state==="welcome"){
		
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

		ctx.font = 4*PIXEL+"px Verdana";
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.fillText("M1N1G4M3...", window.innerWidth/2, window.innerHeight/2);
		
		if(touch.left || touch.right){
			touch = {left: false, right: false};
			openFullscreen();
			state = "play";
		}
		
	}
	
	if(state==="play"){
		
		opt = { speed: PIXEL/2/2/2 }
		
		console.log(opt);
		
		hero = new Hero(0, screen_h-2*PIXEL, 2*PIXEL, 2*PIXEL);
		hero.lw = 0;
		hero.lc = "black";
		hero.fc = "blue";
		hero.xdir = "right";
		hero.dx = opt.speed;
		
		apple = new Apple(0, 0, PIXEL, PIXEL);
		apple.fc = "red";
		apple.lc = "black";
		apple.lw = 0;
		apple.dy = 2*opt.speed;
		apple.ydir = "down";
		
		apple_respawn();
		
		mobs = [];

		mobs_spawn();
		mobs_spawn();
		mobs_spawn();
		
		score = 0;
		
		state = "playing";
		
	}
	
	
	if(state==="playing"){
		
		// console.log(apple);
		
		if(frame%1===0){
			
			//clear canvas
			
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			ctx.fillStyle = "gray";
			ctx.fillRect(X0, Y0, screen_w, screen_h);
			
			
			//update
			
			hero_update();
			
			apple_update(apple);
			
			for(let i=0; i<mobs.length; i++)
				mob_update(mobs[i]);
        
			
			//collisions
			
			// if(coll_rect_rect(hero, apple)){
				// apple_respawn();
				// score++;
				// console.log("SCORE: ", score);
				// mobs_spawn();
			// }
			
			// for(let i=0; i<mobs.length; i++){
				// if(coll_rect_rect(hero, mobs[i])){
					// state = "play";
					// console.log("GAME OVER");
				// }
			// }
			
			

			
			//draw
			
			draw_rect(hero);
			draw_rect(apple);
			for(let i=0; i<mobs.length; i++)
				draw_rect(mobs[i]);
			
			//draw_screen();
			
			ctx.fillStyle = "black";
			ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
			ctx.fillRect(0, 0, X0, window.innerHeight);
			
		}

	}
	
}

class MyHero {
	constructor(x, y){
		this.alto = x;
		this.ancho = y;
	}
}


function Hero(ix, iy, w, h){
	
	this.x = 0; //absoluto
	this.y = 0; //absoluto
	this.ix = ix; //relativo
	this.iy = iy; //relativo
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 0;	
	this.dx = 0;
	this.dy = 0;
	this.xdir = "right";

}

function hero_update(){
	
	// limits
	
	if(hero.ix <= 0){
		hero.ix = 0;
		hero.xdir = "right";
	}

	if(hero.ix+hero.w > screen_w){
		hero.ix = screen_w - hero.w;
		hero.xdir = "left";	
	}
	
	//input, keyboard

	if(key.ArrowRight && keycounter===1){
		hero.xdir = "right";
		key.ArrowRight = false;
	}
	
	if(key.ArrowLeft && keycounter===1){
		hero.xdir = "left";
		key.ArrowRight = false;
	}

	//input, mouse, touch

	if(touch.left){
		hero.xdir = "left";
		touch.left = false;
	}

	if(touch.right){
		hero.xdir = "right";
		touch.right = false;
	}

	//move
	
	if(hero.xdir==="right")
		hero.ix += hero.dx;

	if(hero.xdir==="left")
		hero.ix -= hero.dx;

	//absolute coord

	hero.x = X0 + hero.ix;
	hero.y = Y0 + hero.iy;

}


function coll_rect_rect(A, B){

	if (A.x < B.x + B.w &&
	   A.x + A.w > B.x &&
	   A.y < B.y + B.h &&
	   A.h + A.y > B.y){
	   return true;
	}else{
		return false;
	}
}

function Apple(ix, iy, w, h){
	
	this.x = 0; //absoluto
	this.y = 0; //absoluto
	this.ix = ix; //relativo
	this.iy = iy; //relativo
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;
	this.dy = 1;	
	this.ydir ="down";
	
}

function apple_respawn(){

	apple.ix = irand(1, N-1)*PIXEL;
	apple.iy = 0;

}

function apple_update(o){

	//limits

	if( o.iy <= 0 ){
		o.iy = 0;
		o.ydir = "down";
	}

	if((o.iy + o.h) >= screen_h){
		o.iy = screen_h - o.h;
		o.ydir = "up";
	}

	//move
	
	if(o.ydir === "up")
		o.iy -= o.dy;

	if(o.ydir === "down")
		o.iy += o.dy;

	
	//abs coord
	
	o.x = X0 + o.ix;
	o.y = Y0 + o.iy;	

}


function Mob(ix, iy, w, h){
	
	this.x = 0; //absoluto
	this.y = 0; //absoluto
	this.ix = ix; //relativo
	this.iy = iy; //relativo
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;
	this.dx = 1;
	this.dy = 1;
	this.xdir = "right";
	this.ydir = "down";
	
}

function mobs_spawn(){
	
	let k;
	
	if(mobs.length===0)
		k = 0;
	else
		k = mobs.length;
	
	mobs.push( new Mob(irand(1, N-1)*PIXEL, irand(1, N-N/2)*PIXEL, PIXEL, PIXEL) );

	mobs[k].lw = 0;
	mobs[k].lc = "black";
	mobs[k].fc = "black";
	mobs[k].dx = opt.speed;
	mobs[k].dy = opt.speed;
	
	if(irand(1,2)===1)
		mobs[k].xdir = "right";
	else
		mobs[k].xdir = "left";

	if(irand(1,2)===1)
		mobs[k].ydir = "down";
	else
		mobs[k].ydir = "up";
	

	
	//console.log(mobs[0]);

}

function mob_update(o){

	//limits

	if( o.iy <= 0 ){
		o.iy = 0;
		o.ydir = "down";
	}

	if((o.iy + o.h) >= screen_h){
		o.iy = screen_h - o.h;
		o.ydir = "up";
	}

	if( o.ix <= 0 ){
		o.ix = 0;
		o.xdir = "right";
	}

	if((o.ix + o.w) >= screen_w){
		o.ix = screen_w - o.w;
		o.xdir = "left";
	}
	
	//move
	
	if(o.ydir === "up")
		o.iy -= o.dy;

	if(o.ydir === "down")
		o.iy += o.dy;

	if(o.xdir === "right")
		o.ix += o.dx;

	if(o.xdir === "left")
		o.ix -= o.dx;
	
	//abs coord
	
	o.x = X0 + o.ix;
	o.y = Y0 + o.iy;

}

function draw_screen(){
	
	ctx.fillStyle = "gray";
	ctx.fillRect(X0, Y0, screen_w, screen_h);

	// for(let i=0; i<N+1; i++){
		// ctx.beginPath();
		// ctx.moveTo(X0+i*PIXEL, Y0);
		// ctx.lineTo(X0+i*PIXEL, Y1);
		// ctx.strokeStyle = "black";
		// ctx.lineWidth = 1;
		// ctx.stroke();	
	// }

	// for(let i=0; i<N+1; i++){
		// ctx.beginPath();
		// ctx.moveTo(X0, Y0+i*PIXEL);
		// ctx.lineTo(X1, Y0+i*PIXEL);
		// ctx.strokeStyle = "black";
		// ctx.stroke();	
	// }

}


function draw_rect(r){
	
	ctx.fillStyle = r.fc;
	ctx.fillRect(r.x, r.y, r.w, r.h);
	
	if(r.lw >= 1){
		ctx.beginPath();
		ctx.lineWidth = r.lw;
		ctx.strokeStyle = r.lc;
		ctx.rect(r.x, r.y, r.w, r.h);
		ctx.stroke();	
	}
	
}

function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('resize', resize, false);
function resize(){
	
	get_hxw();
	
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";
	
	//recargar PIXEL y speeds
	
	opt = { speed: PIXEL/2/2/2 }
	
	hero.w =2*PIXEL;
	hero.h =2*PIXEL;
	hero.dx = opt.speed;
	hero.x = X0 + hero.ix;
	hero.y = Y0 + hero.iy;
	
	apple.w = PIXEL;
	apple.h = PIXEL;
	apple.dy = 2*opt.speed;
	apple.x = X0 + apple.ix;
	apple.y = Y0 + apple.iy;
	
	for(let i=0; i<mobs.length; i++){
		mobs[i].w = PIXEL;
		mobs[i].h = PIXEL;
		mobs[i].dx = opt.speed;
		mobs[i].dy = opt.speed;
		mobs[i].x = X0 + mobs[i].ix;
		mobs[i].y = Y0 + mobs[i].iy;
	}
	
}

function openFullscreen() {
	  if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
		document.documentElement.mozRequestFullScreen();
	  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		document.documentElement.webkitRequestFullscreen();
	  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
		document.documentElement.msRequestFullscreen();
	  }
}

function closeFullscreen() {
	  if (document.exitFullscreen) {
		document.exitFullscreen();
	  } else if (document.mozCancelFullScreen) { /* Firefox */
		document.mozCancelFullScreen();
	  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) { /* IE/Edge */
		document.msExitFullscreen();
	  }
}