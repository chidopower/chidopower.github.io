
//engine vars

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var t_old = 0;
var t_now = 0;
var dt = 0;
var frame = 0;
var fps = 0;
var state="welcome";
var state_old="welcome";

//key vars

var key = {};
var KEY = {left: false, right: false, p: false, counter: 0};

//mouse, touch vars

var mouse = {x: 1, y:1};
var touch = {left: false, right: false, x: -1, y: -1, counter: 0};

// game vars

var hero;
var mobs;
var apple;
var score = {current: 0, best: 0};
var opt;
var ready_for_playing = false;
var color;
var bigbutton = {left: false, right: false};

function init() {
	
	get_hxw();
	set_canvas();

	console.log("WINDOW", window.innerWidth, "x", window.innerHeight);
	console.log("PIXEL", PIXEL);
	console.log("SCREEN", screen_w, "x", screen_h);
	console.log("X0, Y0", X0, Y0);
	console.log("X1, Y1", X1, Y1);
	console.log("X2, Y2", X2, Y2);

	t_old = performance.now();  
	
	score = {current: 0, best: 0};
	
	frame = 0;
	myframe = 0;
	state_change("welcome");
	
	ready_for_playing = false;

	color = {
		hero: "navy",
		screen: "gray",
		apple: "red",
		mob: "black",
		button: "red",
		grid: "white",
		tail: "black",
		bigbutton: "black",
		bigbuttonpressed: "red"		
	}

	requestAnimationFrame(gameloop);	

}

function set_canvas(){
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";
}

var orient_now;
var N;
var screen_h, screen_w;
var X0, Y0, X1, Y1, XC, YC, X2, Y2;

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
	screen_h = N*PIXEL - 4*PIXEL;
	
	X0 = Math.floor( (window.innerWidth - screen_w)/2 );
	Y0 = Math.floor( (window.innerHeight - screen_h)/2 );
	
	Y0 += 2*PIXEL;
	
	X1 = X0 + screen_w;
	Y1 = Y0 + screen_h;
	
	X2 = window.innerWidth;
	Y2 = window.innerHeight;
	
	XC = Math.floor(window.innerWidth/2);
	YC = Math.floor(window.innerHeight/2);
	
	// console.log("WINDOW", window.innerWidth, "x", window.innerHeight);
	// console.log("PIXEL", PIXEL);
	// console.log("SCREEN", screen_w, "x", screen_h);
	// console.log("X0, Y0", X0, Y0);
	// console.log("X1, Y1", X1, Y1);
	
}



function gameloop() {

	frame++;
	t_now   = performance.now();
	dt   	= (t_now - t_old);
	t_old   = t_now;
	fps 	+= 1000/dt;
	
	if(frame%60===0){
		fps = fps/60;
		// console.log("fps:", Math.floor(fps));
		// console.log(frame);
		fps = 0;
		// console.log("hero", hero.xdir);
	}
	
	states();

    requestAnimationFrame(gameloop);
}

init();

window.addEventListener('mousedown', mousedown, false);
function mousedown(e){
	
	touch.left  = false; 
	touch.right = false; 
	touch.x		= e.clientX;
	touch.y		= e.clientY;
	touch.counter++;
	
	if(touch.x <= XC){
		touch.left = true;
		bigbutton.left = true;
		bigbutton.right = false;
	}
	else{
		touch.right = true;
		bigbutton.left = false;
		bigbutton.right = true;
	}
	
	// console.log(touch);
}

// window.addEventListener('click', click, false);
// function click(e){
	// click_counter++;
	// mouse = {x: e.clientX, y: e.clientY};
	// console.log("click", mouse.x, mouse.y);
// }

window.addEventListener('keydown', keydown, false);
function keydown(e) {
	
	KEY.counter++;
	
	if(e.key==="ArrowLeft"){
		KEY.left = true;
		KEY.right = false;
		KEY.p = false;
	}

	if(e.key==="ArrowRight"){
		KEY.left = false;
		KEY.right = true;
		KEY.p = false;
	}

	if(e.key==="p" || e.key==="P"){
		KEY.left = false;
		KEY.right = false;
		KEY.p = true;
	}

	// console.log(KEY);
	e.preventDefault()
}

window.addEventListener('keyup', keyup, false);
function keyup(e) {
	KEY.left = false;
	KEY.right = false;
	KEY.counter = 0;
}

function load_options(){
	opt = { 
		herospeed: 		PIXEL/2/2/2,
		applespeed: 	2*PIXEL/2/2/2,
		mobspeed: 		PIXEL/2/2/2,
		herosize: 		3*PIXEL,
		applesize: 		PIXEL,
		mobsize: 		PIXEL
	}	
}

function state_change(newstate){
	state_old = state;
	state = newstate;
}

function states(){
	
	get_hxw();
	
	if(orient_now==="portrait" && state==="welcome")
		state_change("rotateplease");
	
	if(orient_now==="portrait" && state==="playing")
		state_change("rotateplease");

	if(orient_now==="landscape" && state==="rotateplease" && state_old==="welcome"){
		get_hxw();
		set_canvas();
		state_change("welcome");
	}

	if(orient_now==="landscape" && state==="rotateplease" && state_old==="playing"){
		get_hxw();
		set_canvas();
		state_change("paused");
	}

	if(orient_now==="landscape" && state==="rotateplease" && state_old==="paused"){
		get_hxw();
		set_canvas();
		state_change("paused");
	}

	if(orient_now==="landscape" && state==="rotateplease" && state_old==="gameover"){
		get_hxw();
		set_canvas();
		state_change("gameover");
	}

	if(orient_now==="portrait" && state==="paused")
		state_change("rotateplease");

	if(orient_now==="portrait" && state==="gameover")
		state_change("rotateplease");
	
	if(state==="playing" && KEY.p){
		KEY.p = false;
		state_change("paused");
	}
	
	if(state==="paused" && KEY.p){
		KEY.p = false;
		state_change("playing");
	}	

	if(state==="rotateplease")
		state_rotateplease();

	if(state==="welcome"){
		state_welcome();
	}
	
	if(state==="play"){
		state_play();
	}
	
	if(state==="playing"){
		state_playing();
	}		

	if(state==="paused"){
		state_paused();
	}	
	
	if(state==="gameover"){
		state_gameover();
	}	

}

function state_rotateplease(){
	
	get_hxw();
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

	ctx.fillStyle = color.screen;
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	ctx.font = 4*PIXEL+"px Verdana";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("ROTATE", window.innerWidth/2, window.innerHeight/2);
	
}


function state_welcome(){
	
	ctx.fillStyle = color.screen;
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	ctx.font = 6*PIXEL+"px Verdana";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("M1N1G4M3", window.innerWidth/2, window.innerHeight/4);
	
	let button = {
		x: window.innerWidth/2 - 8*PIXEL,
		y: window.innerHeight/2 - 4*PIXEL,
		w: 16*PIXEL,
		h: 8*PIXEL,
		fc: "white",
		lc: "black",
		lw: 2
	}
	
	draw_rect(button);
	
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = 3*PIXEL+"px Verdana";	
	ctx.fillText("START", window.innerWidth/2, window.innerHeight/2);
	
	//input, mouse, touch
	
	if(coll_point_rect(touch, button) ){
		mouse = {x:-1, y:-1};
		touch = {left: false, right: false, x: -1, y: -1, counter: 0};
		state_change("play");
		openFullscreen();
		resize();
	}
	
	// if(touch.left || touch.right){
		// touch = {left: false, right: false};
		// openFullscreen();
		// state = "play";
	// }
	
}

function state_play(){

	get_hxw();
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

	load_options();
	
	score.current = 0;
	
	// console.log(opt);
	
	hero = new Hero(0, screen_h-opt.herosize, opt.herosize, opt.herosize);
	hero.lw = 0;
	hero.lc = "black";
	hero.fc = color.hero;
	hero.xdir = "right";
	hero.dx = opt.herospeed;
	
	apple = new Apple(0, 0, opt.applesize, opt.applesize);
	apple.fc = color.apple;
	apple.lc = "black";
	apple.lw = 0;
	apple.dy = opt.applespeed;
	apple.ydir = "down";
	
	apple_respawn();
	
	mobs = [];

	mobs_spawn();
	mobs_spawn();
	mobs_spawn();
	
	bigbutton = {left: false, right: false};

	ready_for_playing = true;

	state_change("playing");

}

function state_playing(){
	
	//clear canvas
	
	ctx.fillStyle = "black";
	ctx.fillRect(X0, 0, screen_w, Y0);
	ctx.fillRect(X0, Y1, screen_w, window.innerHeight-Y1);
	ctx.fillStyle = color.screen;
	ctx.fillRect(X0, Y0, screen_w, screen_h);
	
	
	draw_score();
	
	//update
	
	hero_update();
	
	apple_update(apple);
	
	for(let i=0; i<mobs.length; i++)
		mob_update(mobs[i]);

	//collisions
	
	if(coll_rect_rect(hero, apple)){
		apple_respawn();
		score.current++;
		if(score.current > score.best)
			score.best = score.current;
		console.log("SCORE: ", score);
		draw_score();
		mobs_spawn();
	}
	
	for(let i=0; i<mobs.length; i++){
		if(coll_rect_rect(hero, mobs[i])){
			ready_for_playing = false;
			state_change("gameover");
			console.log("GAME OVER");
		}
	}
	
	//draw
	
	draw_rect(hero);
	draw_rect(apple);
	for(let i=0; i<mobs.length; i++)
		draw_rect(mobs[i]);
	
	draw_screen();
	
	draw_bigbuttons();

}


function state_paused(){

	//clear canvas
	
	ctx.fillStyle = "black";
	ctx.fillRect(X0, 0, screen_w, Y0);
	ctx.fillRect(X0, Y1, screen_w, window.innerHeight-Y1);
	ctx.fillStyle = color.screen;
	ctx.fillRect(X0, Y0, screen_w, screen_h);
	
	//draw
	
	draw_rect(hero);
	draw_rect(apple);
	for(let i=0; i<mobs.length; i++)
		draw_rect(mobs[i]);

	ctx.font = 4*PIXEL+"px Verdana";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("PAUSE", X2/2, Y0 + screen_h/4);

	let button = {
		x: X2/2 - 8*PIXEL,
		y: Y0 + screen_h/2 - 4*PIXEL,
		w: 16*PIXEL,
		h: 8*PIXEL,
		fc: "white",
		lc: "black",
		lw: 2
	}
	
	draw_rect(button);
	
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = 2*PIXEL+"px Verdana";	
	ctx.fillText("CONTINUE", X2/2, Y0 + screen_h/2);
	
	//input, mouse, touch
	
	if(coll_point_rect(touch, button) ){
		touch = {left: false, right: false, x: -1, y: -1, counter: 0};
		state_change("playing");
	}
	
	draw_bigbuttons();

}

function state_gameover(){

	//clear canvas
	
	ctx.fillStyle = "black";
	ctx.fillRect(X0, 0, screen_w, Y0);
	ctx.fillRect(X0, Y1, screen_w, window.innerHeight-Y1);
	ctx.fillStyle = color.screen;
	ctx.fillRect(X0, Y0, screen_w, screen_h);
	
	//draw
	
	draw_rect(hero);
	draw_rect(apple);
	for(let i=0; i<mobs.length; i++)
		draw_rect(mobs[i]);
	
	//draw_screen();
	
	ctx.fillStyle = "black";
	ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
	ctx.fillRect(0, 0, X0, window.innerHeight);

	ctx.font = 4*PIXEL+"px Verdana";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("GAME OVER", X2/2, Y0 + screen_h/4);

//
	
	let button = {
		x: X2/2 - 8*PIXEL,
		y: Y0 + screen_h/2 - 4*PIXEL,
		w: 16*PIXEL,
		h: 8*PIXEL,
		fc: "white",
		lc: "black",
		lw: 2
	}
	
	draw_rect(button);
	
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = 2*PIXEL+"px Verdana";	
	ctx.fillText("RESTART", X2/2, Y0 + screen_h/2);
	
	//input, mouse, touch
	
	if(coll_point_rect(touch, button) ){
		touch = {left: false, right: false, x: -1, y: -1, counter: 0};		
		state_change("play");
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
	this.xwall = "down";
	this.ywall = "left";
	this.dash = false;

}

function hero_update(){

	// limits && teleport
	
	if(hero.ix+hero.w <= 0 && hero.xdir==="left" && hero.xwall==="down"){
		hero.ix = screen_w;
		hero.xwall = "up";
	}

	if(hero.ix >= screen_w && hero.xdir==="right" && hero.xwall==="up"){
		hero.ix = 0-hero.w;
		hero.xwall = "down";
	}

	if(hero.ix >= screen_w && hero.xdir==="right" && hero.xwall==="down"){
		hero.ix = 0-hero.w;
		hero.xwall = "up";
	}

	if(hero.ix+hero.w <= 0 && hero.xdir==="left" && hero.xwall==="up"){
		hero.ix = screen_w;
		hero.xwall = "down";
	}
	
	//input, keyboard

	if(KEY.right && KEY.counter===1){
		KEY.right = false;
		KEY.counter = 0;
		if(hero.xdir==="right")
			hero.xdir = "left";
		else
			hero.xdir = "right";
	}
	
	hero.dash = false;
	if(KEY.left && KEY.counter===1){	
		key.left = false;
		KEY.counter = 0;
		hero.dash = true;	
	}
	
	//input, mouse, touch

	if(touch.left){
		hero.dash = true;	
		touch.left = false;
	}

	if(touch.right){
		if(hero.xdir==="right")
			hero.xdir = "left";
		else
			hero.xdir = "right";
		touch.right = false;
	}

	//move
	
	if(hero.xdir==="right")
		hero.ix += hero.dx;

	if(hero.xdir==="left")
		hero.ix -= hero.dx;

	if(hero.dash){
		if(hero.xdir==="right")
			hero.ix += 1.5*hero.w;
		if(hero.xdir==="left")
			hero.ix -= 1.5*hero.w;
	}

	if(hero.xwall === "down")
		hero.iy = screen_h-hero.h;
	
	if(hero.xwall === "up")
		hero.iy = 0;

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

function coll_point_rect(P, R){
	if(P.x > R.x && P.x < R.x+R.w && P.y > R.y && P.y < R.y+R.h)
		return true;
	else
		return false;
}

function coll_circ_rect(C, R){
	
	// temporary variables to set edges for testing
	let testX = C.x;
	let testY = C.y;

	// which edge is closest?
	if (C.x < R.x)         		testX = R.x;      	// test left edge
	else if (C.x > R.x+R.w) 	testX = R.x+R.w;   	// right edge
	if (C.y < C.y)         		testY = R.y;      	// top edge
	else if (C.y > R.y+R.h) 	testY = R.y+R.h;   	// bottom edge

	// get distance from closest edges
	let distX = C.x - testX;
	let distY = C.y - testY;
	let distance = Math.sqrt( (distX*distX) + (distY*distY) );

	// if the distance is less than the radius, collision!
	if (distance <= C.r)
		return true;
	
	return false;
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
	
	if(hero.xwall === "down"){
		apple.iy = 0;
		apple.ydir = "down";
	}else{
		apple.iy = screen_h-apple.h;
		apple.ydir = "up";
	}
	
	apple.ix = irand(2, N-2)*PIXEL;
	
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
	let x = irand(1, N-1)*PIXEL;
	let y = irand(1, N-N/2)*PIXEL;
	
	if(hero.xwall === "down"){
		x = irand(2, N-2)*PIXEL;
		y = 0+2*opt.mobsize;
	}else{
		x = irand(2, N-2)*PIXEL;
		y = screen_h-2*opt.mobsize;
	}
	
	if(mobs.length===0)
		k = 0;
	else
		k = mobs.length;
	
	mobs.push( new Mob(x, y, opt.mobsize, opt.mobsize) );

	mobs[k].lw = 0;
	mobs[k].lc = "black";
	mobs[k].fc = color.mob;
	mobs[k].dx = opt.mobspeed;
	mobs[k].dy = opt.mobspeed;
	
	if(irand(1,2)===1)
		mobs[k].xdir = "right";
	else
		mobs[k].xdir = "left";

	if(irand(1,2)===1)
		mobs[k].ydir = "down";
	else
		mobs[k].ydir = "up";

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


function draw_score(){
	ctx.font = 12*PIXEL+"px Verdana";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(score.current+"", window.innerWidth/2, window.innerHeight/2);
	
	ctx.fillStyle = "pink";
	ctx.font = 3*PIXEL+"px Verdana";
	ctx.fillText(score.best+"", window.innerWidth/2, window.innerHeight/2 + 8*PIXEL);
}

function draw_bigbuttons(){

	// ctx.fillStyle = "black";
	// ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
	// ctx.fillRect(0, 0, X0, window.innerHeight);

	if(bigbutton.left){
		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, X0, window.innerHeight);
		bigbutton.left = false;
	}else{
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, X0, window.innerHeight);
	}

	if(bigbutton.right){
		ctx.fillStyle = "red";
		ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
		bigbutton.right = false;
	}else{
		ctx.fillStyle = "black";
		ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
	}
	
}

function draw_screen(){
	
	// ctx.fillStyle = color.screen;
	// ctx.fillRect(X0, Y0, screen_w, screen_h);

	for(let i=0; i<N+1; i++){
		ctx.beginPath();
		ctx.moveTo(X0+i*PIXEL, Y0);
		ctx.lineTo(X0+i*PIXEL, Y1);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();	
	}

	for(let i=0; i<N+1; i++){
		ctx.beginPath();
		ctx.moveTo(X0, Y0+i*PIXEL);
		ctx.lineTo(X1, Y0+i*PIXEL);
		ctx.strokeStyle = "black";
		ctx.stroke();	
	}

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
	
	if(state==="playing" || state==="paused" || state==="gameover"){
		load_options();
		
		hero.w = opt.herosize;
		hero.h = opt.herosize;
		hero.dx = opt.herospeed;
		hero.iy = screen_h-opt.herosize;
		hero.x = X0 + hero.ix;
		hero.y = Y0 + hero.iy;
		
		apple.w = opt.applesize;
		apple.h = opt.applesize;
		apple.dy = opt.applespeed;
		apple.x = X0 + apple.ix;
		apple.y = Y0 + apple.iy;
		
		for(let i=0; i<mobs.length; i++){
			mobs[i].w = opt.mobsize;
			mobs[i].h = opt.mobsize;
			mobs[i].dx = opt.mobspeed;
			mobs[i].dy = opt.mobspeed;
			mobs[i].x = X0 + mobs[i].ix;
			mobs[i].y = Y0 + mobs[i].iy;
		}
		
		touch = {left: false, right: false, x: -1, y: -1, counter: 0};
		KEY = {left: false, right: false, p: false, counter: 0};
		
		if(state==="playing" || state==="paused")
			state_change("paused");
		
		if(state==="gameover")
			state_change("gameover");
		
	}
	
	//recargar PIXEL y speeds
	
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